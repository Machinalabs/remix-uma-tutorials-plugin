import React, { useState } from "react"
import { Formik, FormikErrors, Form } from "formik"

import { AddressWhitelistInstanceCreator, IdentifierWhitelistInstanceCreator, TestnetErc20InstanceCreator } from "../../../extras/uma-ethers"
import { debug, defaultTransactionValues } from "../../../utils"
import { useRemix } from "../../../hooks"
import { Button } from "../../../components"

import { useContract } from "../hooks"
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
  const [isSendingTransaction, setIsSendingTransaction] = useState(false)

  const handleSubmit = async (values: FormProps, { setSubmitting }) => {
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
      const addToWhitelistEncodedData = collateralCurrencyWhitelist.encodeFunctionData(
        "addToWhitelist",
        [TestnetErc20Address]
      )
      await clientInstance.udapp.sendTransaction({
        ...defaultTransactionValues,
        data: addToWhitelistEncodedData,
        from: accounts[0],
        to: address,
      })
      debug("Collateral added to whitelist")
    }

    sendTx().then(() => {
      setSubmitting(false)
    })
  }

  return (
    <React.Fragment>
      <h4>Deploy collateral token</h4>
      <p>This is the token that will serve as collateral for the synthethic token.</p>
      <p>
        We will deploy it and give permission to the expiring multiparty creator to spend the collateral tokens on our
        behalf.
      </p>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
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
        }}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <FormItem label="Name" field="name" />

            <FormItem label="Symbol" field="symbol" />

            <FormItem label="Decimals" field="decimals" />

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
