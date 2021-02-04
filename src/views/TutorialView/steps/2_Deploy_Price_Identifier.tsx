import React, { useState } from "react"
import { Formik, Form, FormikErrors } from "formik"
import Alert from "react-bootstrap/Alert"

import { useRemix } from "../../../hooks"
import { Button } from "../../../components"
import { debug, defaultTransactionValues } from "../../../utils"
import { ethers, utils } from "ethers"
import { useContract } from "../hooks/useContract"
import IdentifierWhitelistArtifact from "@uma/core/build/contracts/IdentifierWhitelist.json"
import { FormItem } from "../components"
import { useStep } from "../hooks"
import { SuccessMessage, ErrorMessage } from '../components'

interface FormProps {
  priceIdentifier: string
}

const initialValues: FormProps = {
  priceIdentifier: "",
}

export const DeployPriceIdentifier: React.FC = () => {
  const { getContractAddress, addPriceIdentifier } = useContract()
  const { clientInstance } = useRemix()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()
  const [error, setError] = useState<string | undefined>(undefined)

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    debug("Deploying price identifier", values)
    setError(undefined)

    const sendTx = async () => {
      const accounts = await clientInstance.udapp.getAccounts()
      debug("Accounts", accounts)

      const address = getContractAddress("IdentifierWhitelist")
      debug("address", address)

      const identifierBytes = utils.formatBytes32String(values.priceIdentifier)

      const identifierWhitelistInterface = new ethers.utils.Interface(IdentifierWhitelistArtifact.abi)
      const addSupportedIdentifierEncodedData = identifierWhitelistInterface.encodeFunctionData(
        "addSupportedIdentifier",
        [identifierBytes]
      )

      await clientInstance.udapp.sendTransaction({
        ...defaultTransactionValues,
        data: addSupportedIdentifierEncodedData,
        from: accounts[0],
        to: address,
      })

      debug("Added supported identifier", identifierBytes)

      addPriceIdentifier(values.priceIdentifier)
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
    }, 2000)
  }

  return (
    <React.Fragment>
      <h4>Deploy price identifier</h4>
      <p>This is important to ensure that the UMA DVM can resolve any disputes for these synthethic tokens.</p>
      <Formik
        initialValues={initialValues}
        validate={
          isCurrentStepCompleted
            ? undefined
            : (values) => {
              const errors: FormikErrors<FormProps> = {}
              if (!values.priceIdentifier) {
                errors.priceIdentifier = "Required"
              }
              return errors
            }
        }
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormItem
              label="Price Identifier"
              field="priceIdentifier"
              placeHolder="ETH/USD"
              readOnly={isCurrentStepCompleted}
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
              You have successfully deployed the price identifier.
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
