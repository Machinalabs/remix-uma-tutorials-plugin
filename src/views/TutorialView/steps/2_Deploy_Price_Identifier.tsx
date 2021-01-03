import React from "react"
import { Formik, Form } from "formik"
import Alert from "react-bootstrap/Alert"

import { useRemix } from "../../../hooks"
import { Button } from "../../../components"
import { debug, defaultTransactionValues } from "../../../utils"
import { utils } from "ethers"
import { useContract } from "../hooks/useContract"
import { IdentifierWhitelistInterfaceInstanceCreator } from "../../../extras/uma-ethers"
import { FormItem } from "../components"
import { getValidatorFunction } from "../../../utils/form"
import { useStep } from "../hooks"

interface FormProps {
  priceIdentifier: string
}

const initialValues: FormProps = {
  priceIdentifier: "",
}

export const DeployPriceIdentifier: React.FC = () => {
  const { getContractAddress } = useContract()
  const { clientInstance } = useRemix()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
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
      <h4>Deploy price identifier</h4>
      <p>This is important to ensure that the UMA DVM can resolve any disputes for these synthethic tokens.</p>
      <Formik initialValues={initialValues} validate={getValidatorFunction} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <FormItem
              label="Price Identifier"
              field="priceIdentifier"
              placeHolder="i.e ETH/BTC"
              readOnly={isCurrentStepCompleted}
            />

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
              You have successfully deployed the price identifier.
            </Alert>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
