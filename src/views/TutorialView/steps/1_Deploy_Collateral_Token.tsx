import React, { useState } from "react"
import { Formik, FormikErrors, Form } from "formik"

import { BigNumber, ethers } from "ethers"
import { toWei } from "web3-utils"

import TestnetERC20Artifact from "@uma/core/build/contracts/TestnetERC20.json"
import AddressWhitelistArtifact from "@uma/core/build/contracts/AddressWhitelist.json"

import { debug, defaultTransactionValues } from "../../../utils"
import { useRemix } from "../../../hooks"
import { Button } from "../../../components"

import { useContract, useStep } from "../hooks"
import { FormItem } from "../components"
import { SuccessMessage, ErrorMessage } from "../components"

interface FormProps {
  name: string
  symbol: string
  decimals: string
  totalSupply: string
}

const initialValues: FormProps = {
  name: "",
  symbol: "",
  decimals: "",
  totalSupply: "",
}

export const DeployCollateralToken: React.FC = () => {
  const { clientInstance, web3Provider } = useRemix()
  const { getContractAddress, addCollateralToken, addContractAddress, updateBalances } = useContract()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()
  const [newCollateralTokenAddress, setNewCollateralTokenAddress] = useState<string | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    debug("Deploying collateral token", values)
    setError(undefined)

    const sendTx = async () => {
      const newToken = {
        name: values.name,
        symbol: values.symbol,
        decimals: parseInt(values.decimals, 10),
        totalSupply: values.totalSupply,
      }

      const provider = new ethers.providers.Web3Provider(web3Provider)
      debug("Provider", provider)

      const signer = provider.getSigner()
      debug("Signer", signer)

      const accounts = await provider.listAccounts()
      debug("accounts", accounts)

      const testnetERC20Factory = new ethers.ContractFactory(
        TestnetERC20Artifact.abi,
        TestnetERC20Artifact.bytecode,
        signer
      )
      const collateralTokenContract = await testnetERC20Factory.deploy(
        newToken.name,
        newToken.symbol,
        newToken.decimals
      )

      await collateralTokenContract.deployTransaction.wait()
      const TestnetErc20Address = collateralTokenContract.address

      debug("collateral token deployed", TestnetErc20Address)

      addContractAddress("TestnetErc20Address", TestnetErc20Address)

      const address = getContractAddress("AddressWhitelist")
      debug("AddressWhitelist address", address)

      const whitelistInterface = new ethers.utils.Interface(AddressWhitelistArtifact.abi)
      const addToWhitelistEncodedData = whitelistInterface.encodeFunctionData("addToWhitelist", [TestnetErc20Address])
      await clientInstance.udapp.sendTransaction({
        ...defaultTransactionValues,
        data: addToWhitelistEncodedData,
        from: accounts[0],
        to: address,
      })
      debug("Collateral added to whitelist")

      addCollateralToken({
        ...newToken,
        totalSupply: BigNumber.from(newToken.totalSupply),
        address: TestnetErc20Address,
      })

      setNewCollateralTokenAddress(TestnetErc20Address as string)

      await collateralTokenContract.allocateTo(accounts[0], toWei(`${values.totalSupply}`))

      await updateBalances(signer, accounts[0])
    }

    setTimeout(() => {
      sendTx()
        .then(() => {
          setSubmitting(false)
          setCurrentStepCompleted()
        })
        .catch((e) => {
          console.log("Error", e)
          setSubmitting(false)
          setError(e.message.replace("VM Exception while processing transaction: revert", "").trim())
        })
    }, 2000)
  }

  return (
    <React.Fragment>
      <h4>Deploy collateral token</h4>
      <p>
        The first step is to deploy the collateral token. This is the token that will serve as collateral for the
        synthethic token.
      </p>
      <p style={{ marginBottom: "0" }}>
        We will deploy it and give permission to the expiring multiparty creator to spend the collateral tokens on our
        behalf.
      </p>
      <Formik
        initialValues={initialValues}
        validate={
          isCurrentStepCompleted
            ? undefined
            : (values) => {
                return new Promise(async (resolve, reject) => {
                  const errors: FormikErrors<FormProps> = {}
                  if (!values.name) {
                    errors.name = "Required"
                  }
                  if (!values.symbol) {
                    errors.symbol = "Required"
                  }
                  if (!values.decimals) {
                    errors.decimals = "Required"
                  } else if (parseInt(values.decimals, 10) > 255) {
                    errors.decimals = "Max value is 255"
                  }

                  if (!values.totalSupply) {
                    errors.totalSupply = "Required"
                  }
                  resolve(errors)
                })
              }
        }
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormItem label="Name" field="name" readOnly={isCurrentStepCompleted} placeHolder="WETH" />

            <FormItem label="Symbol" field="symbol" readOnly={isCurrentStepCompleted} placeHolder="WETH" />

            <FormItem
              label="Decimals"
              field="decimals"
              placeHolder="18"
              readOnly={isCurrentStepCompleted}
              type="number"
              showhelp={true}
              helptext="The number of decimals used by this token"
            />

            <FormItem
              label="Initial Supply"
              field="totalSupply"
              readOnly={isCurrentStepCompleted}
              showhelp={true}
              type="number"
              helptext="The initial number of collateral tokens that are going to be minted and assigned to you"
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
              You have successfully deployed the collateral token at {newCollateralTokenAddress}
            </SuccessMessage>
            <ErrorMessage show={error !== undefined}>{error}</ErrorMessage>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
