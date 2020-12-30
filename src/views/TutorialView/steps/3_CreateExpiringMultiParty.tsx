import React from "react"
import { Formik, FormikErrors, Form } from "formik"
import { getValidatorFunction } from "../../../utils/form"

import { FormItem } from "../components"
import { Button } from "../../../components"

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

const capitalizeFirstLetter = (item: string) => {
  return item.charAt(0).toUpperCase() + item.slice(1);
}

export const CreateExpiringMultiParty: React.FC = () => {
  const handleSubmit = async (values: FormProps, { setSubmitting }) => {

  }

  return (
    <React.Fragment>
      <h4>Create a expiring multiparty synthethic contract</h4>

      <Formik
        initialValues={initialValues}
        validate={getValidatorFunction<FormProps>(initialValues)}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>

            {Object.keys(initialValues).map((key) => {
              const splitItems = capitalizeFirstLetter(key).match(/[A-Z][a-z]+/g);
              if (splitItems) {
                const label = splitItems.join(" ")
                return <FormItem key={key} label={label} field={key} />
              }
            })}

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
