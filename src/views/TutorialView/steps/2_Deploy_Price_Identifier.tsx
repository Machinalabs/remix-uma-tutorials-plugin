import React from "react"
import { ErrorMessage, Field, Formik, FormikErrors, Form } from "formik"
import BootstrapForm from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { useRemix } from "../../../hooks"
import { Button } from "../../../components"
import { debug, defaultTransactionValues } from "../../../utils"
import { utils } from "ethers"
import { useContract } from "../hooks/useContract"
import { IdentifierWhitelistInterfaceInstanceCreator } from "../../../extras/uma-ethers"
import { FormItem } from "../components"
import { getValidatorFunction } from "../../../utils/form"

interface FormProps {
  priceIdentifier: string
}

const initialValues: FormProps = {
  priceIdentifier: "",
}

export const DeployPriceIdentifier: React.FC = () => {
  const { getContractAddress } = useContract()
  const { clientInstance } = useRemix()

  const handleSubmit = async (values: FormProps, { setSubmitting }) => {
    debug("Deploying price identifier", values)

    const sendTx = async () => {
      const accounts = await clientInstance.udapp.getAccounts()
      debug("Accounts", accounts)

      const address = getContractAddress("IdentifierWhitelist")
      debug("address", address)

      const identifierBytes = utils.formatBytes32String(values.priceIdentifier)

      const identifierWhiteListInterface = new IdentifierWhitelistInterfaceInstanceCreator().interface
      const addSupportedIdentifierEncodedData = identifierWhiteListInterface.encodeFunctionData(
        "addSupportedIdentifier",
        [identifierBytes]
      )

      await clientInstance.udapp.sendTransaction({
        ...defaultTransactionValues,
        data: addSupportedIdentifierEncodedData,
        from: accounts[0],
        to: address,
      })
      console.log("Sent")
    }

    sendTx().then(() => {
      setSubmitting(false)
    })
  }

  return (
    <React.Fragment>
      <h4>Deploy price identifier</h4>
      <p>This is important to ensure that the UMA DVM can resolve any disputes for these synthethic tokens.</p>
      <Formik
        initialValues={initialValues}
        validate={getValidatorFunction<FormProps>(initialValues)}
        //   const errors: FormikErrors<FormProps> = {}
        //   if (!values.priceIdentifier) {
        //     errors.priceIdentifier = "Required"
        //   }

        //   return errors
        // }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormItem label="Price Identifier" field="priceIdentifier" />

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