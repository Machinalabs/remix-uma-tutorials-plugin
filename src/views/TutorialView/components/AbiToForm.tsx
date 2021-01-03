import React, { useEffect, useState } from "react"
import { ErrorMessage, Field, Formik, FormikErrors, Form } from "formik"
import BootstrapForm from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { AbiItem } from "web3-utils"

import { Button } from "../../../components"

interface Props {
  abi: AbiItem
  handleSubmit: (values: {}) => void
}

export const AbiForm: React.FC<Props> = ({ abi, handleSubmit }) => {
  const [validationFunction, setValidationFunction] = useState(undefined)

  const getInitialValues = (abiItem: AbiItem) => {
    return {}
  }

  useEffect(() => {
    // TODO generate a function and setValidationFunction
    // (values) => {
    //     const errors: FormikErrors<FormProps> = {}
    //     if (!values.priceIdentifier) {
    //         errors.priceIdentifier = "Required"
    //     }
    //     return errors
    // }
  }, [])

  return (
    <Formik initialValues={getInitialValues(abi)} validate={validationFunction} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <BootstrapForm.Group as={Row}>
            <BootstrapForm.Label column={true} sm={2}>
              Name
            </BootstrapForm.Label>
            <Col sm={4}>
              <Field name="priceIdentifier" as={CustomInputComponent} />
              <ErrorMessage className="red" name="priceIdentifier" component="div" />
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
  )
}

const CustomInputComponent = (props) => <BootstrapForm.Control type="text" key="name" size="sm" {...props} />
