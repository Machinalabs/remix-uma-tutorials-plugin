import React from "react"
import { Formik, Form } from "formik"
import Datetime from 'react-datetime';

import { getValidatorFunction } from "../../../utils/form"

import { FormItem } from "../components"
import { Button } from "../../../components"
import "react-datetime/css/react-datetime.css";
import { useStep } from "../hooks";

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

export const CreateExpiringMultiParty: React.FC = () => {
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    // TODO
  }

  return (
    <React.Fragment>
      <h4>Create a expiring multiparty synthethic contract</h4>
      <p>Now, we can create a new expiring multiparty synthetic token.</p>
      <Formik initialValues={initialValues}
        validate={isCurrentStepCompleted ? undefined : getValidatorFunction(initialValues)} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <FormItem key="expirationTimestamp" label="expirationTimestamp" field="expirationTimestamp" labelWidth={3} placeHolder="Timestamp (seconds)" />

            <FormItem key="syntheticName" label="syntheticName" field="syntheticName" labelWidth={3} placeHolder="Synthetic Token" />

            <FormItem key="syntheticSymbol" label="syntheticSymbol" field="syntheticSymbol" labelWidth={3} placeHolder="SNT" />

            <FormItem key="collateralRequirement" label="collateralRequirement" field="collateralRequirement" labelWidth={3} placeHolder="Percentage required (i.e. 125)" type="number" />

            <FormItem key="disputeBond" label="disputeBond" field="disputeBond" labelWidth={3} placeHolder="7200" type="number" />

            <FormItem key="minSponsorTokens" label="minSponsorTokens" field="minSponsorTokens" labelWidth={3} placeHolder="100" type="number" />

            <FormItem key="withdrawalLiveness" label="withdrawalLiveness" field="withdrawalLiveness" labelWidth={3} placeHolder="7200" type="number" />

            <FormItem key="liquidationLiveness" label="liquidationLiveness" field="liquidationLiveness" labelWidth={3} placeHolder="7200" type="number" showHelp={true} helpText="" />

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
/* <Datetime onChange={(value: any) => console.log("Selected date", value)} /> */
