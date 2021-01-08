import React from "react"
import { Formik, Form, FormikErrors } from "formik"
import { BigNumber, ethers, utils } from "ethers"
import { hexToAscii, numberToHex, toWei, utf8ToHex } from "web3-utils"
import "react-datetime/css/react-datetime.css"

import TestnetERC20Artifact from "@uma/core/build/contracts/TestnetERC20.json"
import ExpiringMultiPartyCreatorArtifact from "@uma/core/build/contracts/ExpiringMultiPartyCreator.json"
import MockOracleArtifact from "@uma/core/build/contracts/MockOracle.json"
import FinderArtifact from "@uma/core/build/contracts/Finder.json"

import { debug, defaultTransactionValues } from "../../../utils"
import { useContract, useStep } from "../hooks"
import { Button } from "../../../components"
import { FormItem } from "../components"
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
  const { getContractAddress, collateralTokens, priceIdentifiers } = useContract()
  const { clientInstance } = useRemix()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    const sendTx = async () => {
      debug("Values", values)

      const web3Provider = {
        sendAsync(payload, callback) {
          clientInstance
            .call("web3Provider" as any, "sendAsync", payload)
            .then((result) => callback(null, result))
            .catch((e) => callback(e))
        },
      }

      const provider = new ethers.providers.Web3Provider(web3Provider)
      debug("Provider", provider)

      const signer = provider.getSigner()
      debug("Signer", signer)

      const accounts = await provider.listAccounts()
      debug("Accounts", accounts[0])

      const storeAddress = getContractAddress('Store')
      const collateralTokenAddress = collateralTokens[0].address as string
      debug("Collateral address", collateralTokenAddress)
      const collateralTokenInterface = new ethers.utils.Interface(TestnetERC20Artifact.abi)
      const tokenContract = new ethers.Contract(collateralTokenAddress, collateralTokenInterface, signer)
      let txn

      try {
        debug("tokenContract", tokenContract)

        const balance = await tokenContract.balanceOf(accounts[0], { from: await signer.getAddress() })
        debug("Balance", balance)

        const dateTimestamp = values.expirationTimestamp

        const expiringMultiPartyCreatorAddress = getContractAddress("ExpiringMultiPartyCreator")
        debug("expiringMultiPartyCreatorAddress", expiringMultiPartyCreatorAddress)
        debug("price identifier", utils.formatBytes32String(priceIdentifiers[0]))
        const identifierBytes = utils.formatBytes32String(priceIdentifiers[0])

        const expiringMultipartyCreatorInterface = new ethers.utils.Interface(ExpiringMultiPartyCreatorArtifact.abi)
        // const mockOracleFactory = new ethers.ContractFactory(MockOracleArtifact.abi, MockOracleArtifact.bytecode, signer)
        // const mockOracleContract = await mockOracleFactory.deploy(getContractAddress('Finder'), getContractAddress('Timer'))
        // await mockOracleContract.deployTransaction.wait()
        // debug("Mock Oracle deployed")

        // const mockOracleInterfaceName = utils.formatBytes32String(InterfaceName.Oracle);
        // const finderContract = new ethers.Contract(getContractAddress('Finder'), FinderArtifact.abi, signer)
        // await finderContract.changeImplementationAddress(mockOracleInterfaceName, mockOracleContract.address);
        // debug("Implementation updated")

        const expiringMultipartyCreator = new ethers.Contract(expiringMultiPartyCreatorAddress, expiringMultipartyCreatorInterface, signer)

        txn = await expiringMultipartyCreator.createExpiringMultiParty(
          {
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
              rawValue: toWei(`${values.minSponsorTokens}`)
            },
            liquidationLiveness: BigNumber.from(values.liquidationLiveness),
            withdrawalLiveness: BigNumber.from(values.withdrawalLiveness),
            excessTokenBeneficiary: storeAddress
          }
        )
        debug("transaction", txn)
        const receipt = await txn.wait()
        debug("Receipt", receipt)
      } catch (error) {
        debug("Error", error)
        const traces = await clientInstance.call("debugger" as any, "getTrace", txn.hash).catch((err) => {
          debug("error", err)
        })
        debug("traces", traces)
        const humanReadableError = traces.structLogs[traces.structLogs.length - 1]
        console.log(hexToAscii(`0x${humanReadableError.memory.join("")}`))
      }

      // debug("ExpiringMultiPartyAddress", ExpiringMultiPartyAddress)

      // // approve collateral using the emp newly created
      // const collateralInterface = new TestnetErc20InstanceCreator().interface

      // const approveEncodedData = collateralInterface.encodeFunctionData('approve', [ExpiringMultiPartyAddress, toWei(collateralTokens[0].totalSupply.toNumber())])

      // const result = await clientInstance.udapp.sendTransaction({
      //   ...defaultTransactionValues,
      //   data: approveEncodedData,
      //   from: accounts[0],
      //   to: collateralTokens[0].address,
      // })

      // debug("Result", result)
      // debug("Approved EMP allowance on collateral")
    }
    setTimeout(() => {
      sendTx().then(() => {
        setSubmitting(false)
        setCurrentStepCompleted()
      })
    }, 500)
    setSubmitting(false)
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
              }

              // if (!values.disputeBond) {
              //   errors.disputeBond = "Required"
              // }

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

            {/* <FormItem
              key="disputeBond"
              label="Dispute bond (%)"
              field="disputeBond"
              labelWidth={3}
              placeHolder="120"
              type="number"
              showhelp={true}
              helptext="A prospective disputer must deposit a dispute bond that they can lose in the case of an unsuccessful dispute."
            /> */}

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
              text="Submit"
            />
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
