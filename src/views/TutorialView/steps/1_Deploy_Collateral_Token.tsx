import React from "react"
import { Formik, FormikErrors, Form } from "formik"
import Alert from "react-bootstrap/Alert"

import { AddressWhitelistInstanceCreator, TestnetErc20InstanceCreator } from "../../../extras/uma-ethers"
import { debug, defaultTransactionValues } from "../../../utils"
import { useRemix } from "../../../hooks"
import { Button } from "../../../components"

import { useContract, useStep } from "../hooks"
import { FormItem } from "../components"
import { BigNumber } from "ethers"
import { useState } from "react"

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
  const { clientInstance } = useRemix()
  const { getContractAddress, addCollateralToken } = useContract()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()
  const [newCollateralTokenAddress, setNewCollateralTokenAddress] = useState<string | undefined>(undefined)

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    debug("Deploying collateral token", values)
    const sendTx = async () => {
      const newToken = {
        name: values.name,
        symbol: values.symbol,
        decimals: parseInt(values.decimals, 10),
        totalSupply: values.totalSupply,
      }
      const { data: collateralTokenDeployData } = new TestnetErc20InstanceCreator().getDeployTransaction(
        newToken.name,
        newToken.symbol,
        newToken.decimals
      )

      debug("collateralTokenDeployData", collateralTokenDeployData)

      const accounts = await clientInstance.udapp.getAccounts()
      debug("Accounts", accounts)

      const { createdAddress: TestnetErc20Address } = await clientInstance.udapp.sendTransaction({
        ...defaultTransactionValues,
        from: accounts[0],
        data: collateralTokenDeployData as string,
      })
      debug("TestnetErc20Address", TestnetErc20Address)

      const address = getContractAddress("IdentifierWhitelist")
      const collateralCurrencyWhitelist = new AddressWhitelistInstanceCreator().interface
      const addToWhitelistEncodedData = collateralCurrencyWhitelist.encodeFunctionData("addToWhitelist", [
        TestnetErc20Address,
      ])
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
      })

      setNewCollateralTokenAddress(TestnetErc20Address as string)
    }

    setTimeout(() => {
      sendTx().then(() => {
        setSubmitting(false)
        setCurrentStepCompleted()
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

                return errors
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
              showHelp={true}
              helpText="The number of decimals used by this token"
            />

            <FormItem
              label="Initial Supply"
              field="totalSupply"
              readOnly={isCurrentStepCompleted}
              showHelp={true}
              helpText="The initial number of collateral tokens that are going to be minted and assigned to you"
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

            <Alert variant="success" style={{ width: "85%" }} show={isCurrentStepCompleted} transition={false}>
              You have successfully deployed the collateral token at {newCollateralTokenAddress}
            </Alert>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
