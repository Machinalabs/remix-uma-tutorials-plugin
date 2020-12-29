import React, { useState } from "react"
import { ErrorMessage, Field, Formik, FormikErrors, Form } from "formik"
import BootstrapForm from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { AddressWhitelistInstanceCreator, IdentifierWhitelistInstanceCreator, TestnetErc20InstanceCreator } from "../../../extras/uma-ethers"
import { debug, defaultTransactionValues } from "../../../utils"
import { useRemix } from "../../../hooks"
import { Button } from "../../../components"
import { useContract } from "../hooks"

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

      {/* Form to deploy a collateral token */}
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
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <BootstrapForm.Group as={Row}>
              <BootstrapForm.Label column sm={2}>
                Name
              </BootstrapForm.Label>
              <Col sm={4}>
                <Field name="name" as={CustomInputComponent} />
                <ErrorMessage className="red" name="name" component="div" />
              </Col>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row}>
              <BootstrapForm.Label column sm={2}>
                Symbol
              </BootstrapForm.Label>
              <Col sm={4}>
                <Field name="symbol" as={CustomInputComponent} />
                <ErrorMessage className="red" name="symbol" component="div" />
              </Col>
            </BootstrapForm.Group>

            <BootstrapForm.Group as={Row}>
              <BootstrapForm.Label column sm={2}>
                Decimals
              </BootstrapForm.Label>
              <Col sm={4}>
                <Field name="decimals" as={CustomInputComponent} />
                <ErrorMessage className="red" name="decimals" component="div" />
              </Col>
            </BootstrapForm.Group>

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

const CustomInputComponent = (props) => (
  <BootstrapForm.Control type="text" key="name" size="sm" placeholder="name" {...props} />
)
