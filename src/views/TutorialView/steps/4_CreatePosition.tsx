import React from "react"
import { Formik, Form, FormikErrors } from "formik"
import Alert from "react-bootstrap/Alert"

import { Button } from "../../../components"
import { useRemix } from "../../../hooks"
import { debug, defaultTransactionValues, getValidatorFunction } from "../../../utils"
import { useContract, useStep } from "../hooks"
import { FormItem } from "../components"

interface FormProps {
  syntheticTokens: number
  collateralAmount: number
}

const initialValues: FormProps = {
  syntheticTokens: 0,
  collateralAmount: 0,
}

export const CreatePosition: React.FC = () => {
  const { getContractAddress, collateralTokens, priceIdentifiers } = useContract()
  const { clientInstance } = useRemix()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    const sendTx = async () => {
      debug("Creating position", values)

      // await clientInstance.udapp.sendTransaction({
      //   ...defaultTransactionValues,
      //   data: addSupportedIdentifierEncodedData,
      //   from: accounts[0],
      //   to: address,
      // })
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
      <h4>CreatePosition</h4>

      <p>
        We can now create a synthetic token position. We will deposit X units of collateral to create Y units of
        synthetic tokens.
      </p>

      {/* await emp.create({ rawValue: web3.utils.toWei("150") }, 
      
      { rawValue: web3.utils.toWei("100") }) */}

      <Formik
        initialValues={initialValues}
        validate={
          isCurrentStepCompleted
            ? undefined
            : (values) => {
                const errors: FormikErrors<FormProps> = {}
                if (!values.collateralAmount) {
                  errors.collateralAmount = "Required"
                }

                if (!values.syntheticTokens) {
                  errors.syntheticTokens = "Required"
                }

                return errors
              }
        }
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormItem
              key="syntheticTokens"
              label="Synthetic tokens"
              field="syntheticTokens"
              labelWidth={3}
              placeHolder="Amount of synthetic tokens (i.e 100)"
            />

            <FormItem
              key="collateralAmount"
              label="Collateral amount"
              field="collateralAmount"
              labelWidth={3}
              placeHolder="Amount of collateral (i.e. 150)"
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
              You have successfully created a position.
            </Alert>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
