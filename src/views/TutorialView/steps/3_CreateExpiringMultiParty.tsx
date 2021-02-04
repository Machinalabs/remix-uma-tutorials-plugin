import React, { useState } from "react"
import { Formik, Form, FormikErrors } from "formik"
import { BigNumber, ethers, utils } from "ethers"
import { hexToAscii, toWei } from "web3-utils"
import Alert from "react-bootstrap/Alert"
import "react-datetime/css/react-datetime.css"

import TestnetERC20Artifact from "@uma/core/build/contracts/TestnetERC20.json"
import ExpiringMultiPartyCreatorArtifact from "@uma/core/build/contracts/ExpiringMultiPartyCreator.json"
import MockOracleArtifact from "@uma/core/build/contracts/MockOracle.json"
import FinderArtifact from "@uma/core/build/contracts/Finder.json"
import ExpiringMultiPartyArtifact from "@uma/core/build/contracts/ExpiringMultiParty.json"
import ExpandedIERC20Artifact from "@uma/core/build/contracts/ExpandedERC20.json"

import { debug } from "../../../utils"
import { useContract, useStep } from "../hooks"
import { Button } from "../../../components"
import { ErrorMessage, FormItem, SuccessMessage } from "../components"
import { useRemix } from "../../../hooks"
import { InterfaceName } from "../../../extras/deployment"

interface FormProps {
  expirationTimestamp: string
  syntheticName: string
  syntheticSymbol: string
  collateralRequirement: string
  disputeBond: string
  minSponsorTokens: string
  withdrawalLiveness: string
  liquidationLiveness: string
}

const initialValues: FormProps = {
  expirationTimestamp: "",
  syntheticName: "",
  syntheticSymbol: "",
  collateralRequirement: "",
  disputeBond: "",
  minSponsorTokens: "",
  withdrawalLiveness: "",
  liquidationLiveness: "",
}

export const CreateExpiringMultiParty: React.FC = () => {
  const {
    getContractAddress,
    collateralTokens,
    priceIdentifiers,
    addContractAddress,
    addSyntheticToken,
    addExpiringMultiParty,
  } = useContract()
  const { clientInstance, web3Provider } = useRemix()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()
  const [newEMPAddress, setNewEMPAddress] = useState<string | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    setError(undefined)

    const sendTx = async () => {
      debug("Values", values)

      const provider = new ethers.providers.Web3Provider(web3Provider)
      debug("Provider", provider)

      const signer = provider.getSigner()
      debug("Signer", signer)

      const accounts = await provider.listAccounts()
      debug("Accounts", accounts[0])

      const storeAddress = getContractAddress("Store")
      const collateralTokenAddress = collateralTokens[0].address as string
      debug("Collateral address", collateralTokenAddress)

      const collateralTokenInterface = new ethers.utils.Interface(TestnetERC20Artifact.abi)
      const tokenContract = new ethers.Contract(collateralTokenAddress, collateralTokenInterface, signer)
      debug("tokenContract", tokenContract)
      const balance = await tokenContract.balanceOf(accounts[0], { from: await signer.getAddress() })
      debug("Balance", balance)

      let txn

      try {
        const dateTimestamp = values.expirationTimestamp
        const expiringMultiPartyCreatorAddress = getContractAddress("ExpiringMultiPartyCreator")
        debug("expiringMultiPartyCreatorAddress", expiringMultiPartyCreatorAddress)

        const identifierBytes = utils.formatBytes32String(priceIdentifiers[0])
        debug("price identifier", identifierBytes)

        const expiringMultipartyCreatorInterface = new ethers.utils.Interface(ExpiringMultiPartyCreatorArtifact.abi)
        const mockOracleFactory = new ethers.ContractFactory(
          MockOracleArtifact.abi,
          MockOracleArtifact.bytecode,
          signer
        )
        const mockOracleContract = await mockOracleFactory.deploy(
          getContractAddress("Finder"),
          getContractAddress("Timer")
        )
        await mockOracleContract.deployTransaction.wait()
        debug("Mock Oracle deployed")

        const mockOracleInterfaceName = utils.formatBytes32String(InterfaceName.Oracle)
        const finderContract = new ethers.Contract(getContractAddress("Finder"), FinderArtifact.abi, signer)
        await finderContract.changeImplementationAddress(mockOracleInterfaceName, mockOracleContract.address)
        debug("Implementation updated")

        const params = {
          expirationTimestamp: BigNumber.from(dateTimestamp),
          collateralAddress: collateralTokenAddress,
          priceFeedIdentifier: identifierBytes,
          syntheticName: values.syntheticName,
          syntheticSymbol: values.syntheticSymbol,
          collateralRequirement: {
            rawValue: toWei(`${parseInt(values.collateralRequirement, 10) / 100}`),
          },
          disputeBondPct: {
            rawValue: toWei("0.1"),
          },
          sponsorDisputeRewardPct: {
            rawValue: toWei("0.1"),
          },
          disputerDisputeRewardPct: {
            rawValue: toWei("0.1"),
          },
          minSponsorTokens: {
            rawValue: toWei(`${values.minSponsorTokens}`),
          },
          liquidationLiveness: BigNumber.from(values.liquidationLiveness),
          withdrawalLiveness: BigNumber.from(values.withdrawalLiveness),
          excessTokenBeneficiary: storeAddress,
        }

        const expiringMultipartyCreator = new ethers.Contract(
          expiringMultiPartyCreatorAddress,
          expiringMultipartyCreatorInterface,
          signer
        )
        const expiringMultiPartyAddress = await expiringMultipartyCreator.callStatic.createExpiringMultiParty(params)
        debug("ExpiringMultiPartyAddress", expiringMultiPartyAddress)
        setNewEMPAddress(expiringMultiPartyAddress)
        addContractAddress("ExpiringMultiParty", expiringMultiPartyAddress)
        txn = await expiringMultipartyCreator.createExpiringMultiParty(params)
        debug("transaction", txn)

        const receipt = await txn.wait()
        debug("Receipt", receipt)

        const collateralToken = new ethers.Contract(
          getContractAddress("TestnetErc20Address"),
          TestnetERC20Artifact.abi,
          signer
        )
        console.log("Total supply", await collateralToken.totalSupply())
        await collateralToken.approve(expiringMultiPartyAddress, await collateralToken.totalSupply())
        debug("Approved EMP allowance on collateral")

        const empContract = new ethers.Contract(expiringMultiPartyAddress, ExpiringMultiPartyArtifact.abi, signer)
        const syntheticTokenAddress = await empContract.tokenCurrency()
        debug("syntheticTokenAddress", syntheticTokenAddress)

        const syntheticContract = new ethers.Contract(syntheticTokenAddress, ExpandedIERC20Artifact.abi, signer)
        debug("syntheticContract", syntheticContract)

        // add synthetic token
        const syntheticToken = {
          address: syntheticTokenAddress,
          name: await syntheticContract.name(),
          symbol: await syntheticContract.symbol(),
          decimals: await syntheticContract.decimals(),
          totalSupply: (await syntheticContract.totalSupply()).toString(),
        }
        debug("syntheticToken", syntheticToken)
        addSyntheticToken(syntheticToken)
        addContractAddress("SynthethicToken", syntheticTokenAddress)

        // add emp
        addExpiringMultiParty({
          address: expiringMultiPartyAddress,
          expirationTimestamp: parseInt(dateTimestamp, 10),
          syntheticName: values.syntheticName,
          syntheticSymbol: values.syntheticSymbol,
          collateralRequirement: parseInt(values.collateralRequirement, 10),
          minSponsorTokens: parseInt(values.minSponsorTokens, 10),
          withdrawalLiveness: parseInt(values.withdrawalLiveness, 10),
          liquidationLiveness: parseInt(values.liquidationLiveness, 10),
        })
      } catch (error) {
        debug("Error", error)
        const traces = await clientInstance.call("debugger" as any, "getTrace", txn.hash).catch((err) => {
          debug("error", err)
        })
        debug("traces", traces)
        const humanReadableError = traces.structLogs[traces.structLogs.length - 1]
        console.log(hexToAscii(`0x${humanReadableError.memory.join("")}`))
      }
    }
    setTimeout(() => {
      sendTx()
        .then(() => {
          setSubmitting(false)
          setCurrentStepCompleted()
        })
        .catch((e) => {
          debug(e)
          setSubmitting(false)
          setError(e.message.replace("VM Exception while processing transaction: revert", "").trim())
        })
    }, 500)
  }

  return (
    <React.Fragment>
      <h4>Create a expiring multiparty synthethic contract</h4>
      <p>Now, we can create a new expiring multiparty synthetic token.</p>
      <Formik
        initialValues={initialValues}
        validate={
          isCurrentStepCompleted
            ? undefined
            : (values) => {
              const errors: FormikErrors<FormProps> = {}
              if (!values.expirationTimestamp) {
                errors.expirationTimestamp = "Required"
              }

              if (!values.syntheticName) {
                errors.syntheticName = "Required"
              }

              if (!values.syntheticSymbol) {
                errors.syntheticSymbol = "Required"
              }

              if (!values.collateralRequirement) {
                errors.collateralRequirement = "Required"
              } else if (parseInt(values.collateralRequirement, 10) < 100) {
                errors.collateralRequirement = "Value should be higher than 100"
              }

              if (!values.minSponsorTokens) {
                errors.minSponsorTokens = "Required"
              }

              if (!values.withdrawalLiveness) {
                errors.withdrawalLiveness = "Required"
              }

              if (!values.liquidationLiveness) {
                errors.liquidationLiveness = "Required"
              }

              return errors
            }
        }
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormItem
              key="expirationTimestamp"
              label="Expiration timestamp"
              field="expirationTimestamp"
              labelWidth={3}
              placeHolder="Timestamp (seconds)"
              showhelp={true}
              isDate={true}
              helptext="Unix timestamp of when the contract will expire."
            />

            <FormItem
              key="syntheticName"
              label="Synthetic name"
              field="syntheticName"
              labelWidth={3}
              placeHolder="Synthetic Token"
            />

            <FormItem
              key="syntheticSymbol"
              label="Synthetic symbol"
              field="syntheticSymbol"
              labelWidth={3}
              placeHolder="SNT"
            />

            <FormItem
              key="collateralRequirement"
              label="Collateral requirement (%)"
              field="collateralRequirement"
              labelWidth={3}
              placeHolder="Percentage required (i.e. 125)"
              type="number"
            />

            <FormItem
              key="minSponsorTokens"
              label="Minimum sponsor tokens"
              field="minSponsorTokens"
              labelWidth={3}
              placeHolder="100"
              type="number"
              showhelp={true}
              helptext="Minimum number of tokens in a sponsor's position."
            />

            <FormItem
              key="withdrawalLiveness"
              label="Withdrawal liveness (in seconds)"
              field="withdrawalLiveness"
              labelWidth={3}
              placeHolder="7200"
              type="number"
              showhelp={true}
              helptext="Liveness delay, in seconds, for pending withdrawals."
            />

            <FormItem
              key="liquidationLiveness"
              label="Liquidation liveness (in seconds)"
              field="liquidationLiveness"
              labelWidth={3}
              placeHolder="7200"
              type="number"
              showhelp={true}
              helptext="Amount of time in seconds for pending liquidation before expiry."
            />

            <Button
              variant="primary"
              type="submit"
              size="sm"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              loadingText="Submitting..."
              text="Deploy"
              show={!isCurrentStepCompleted}
            />

            <SuccessMessage show={isCurrentStepCompleted}>
              You have successfully deployed the expiring multiparty contract {newEMPAddress}
            </SuccessMessage>
            <ErrorMessage show={error !== undefined}>
              {error}
            </ErrorMessage>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
