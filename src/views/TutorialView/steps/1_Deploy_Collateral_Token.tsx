import React from "react"
import { Formik, FormikErrors, Form } from "formik"
import Alert from "react-bootstrap/Alert"

import { AddressWhitelistInstanceCreator, TestnetErc20InstanceCreator } from "../../../extras/uma-ethers"
import { debug, defaultTransactionValues } from "../../../utils"
import { useRemix } from "../../../hooks"
import { Button } from "../../../components"

import { useContract, useStep } from "../hooks"
import { FormItem } from "../components"

interface FormProps {
  name: string
  symbol: string
  decimals: number
}

const initialValues: FormProps = {
  name: "",
  symbol: "",
  decimals: 0,
}

export const DeployCollateralToken: React.FC = () => {
  const { clientInstance } = useRemix()
  const { getContractAddress } = useContract()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    debug("Deploying collateral token", values)
    const sendTx = async () => {
      const { data: collateralTokenDeployData } = new TestnetErc20InstanceCreator().getDeployTransaction(
        values.name,
        values.symbol,
        parseInt(values.decimals as any, 10)
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
      <p>
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
                } else if (values.decimals > 255) {
                  errors.decimals = "Max value is 255"
                }

                return errors
              }
        }
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormItem label="Name" field="name" readOnly={isCurrentStepCompleted} />

            <FormItem label="Symbol" field="symbol" readOnly={isCurrentStepCompleted} />

            <FormItem label="Decimals" field="decimals" placeHolder="i.e 18" readOnly={isCurrentStepCompleted} />
            <Button
              variant="primary"
              type="submit"
              size="sm"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              loadingText="Submitting..."
              text="Submit"
              show={!isCurrentStepCompleted}
            />

            <Alert variant="success" style={{ width: "85%" }} show={isCurrentStepCompleted}>
              You have successfully deployed the collateral token.
            </Alert>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
