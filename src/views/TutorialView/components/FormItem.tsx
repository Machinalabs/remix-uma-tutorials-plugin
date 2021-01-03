import React from "react"
import { ErrorMessage, Field } from "formik"
import BootstrapForm from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface Props {
  label: string
  field: string
  labelWidth?: number
  placeHolder?: string
  readOnly?: boolean
}

export const FormItem: React.FC<Props> = ({ label, field, labelWidth = 2, placeHolder, readOnly = false }) => {
  return (
    <BootstrapForm.Group as={Row}>
      <BootstrapForm.Label column={true} sm={labelWidth}>
        {label}
      </BootstrapForm.Label>
      <Col sm={4}>
        <Field
          name={field}
          as={CustomInputComponent}
          placeholder={placeHolder || label.toLowerCase()}
          readOnly={readOnly}
        />
        <ErrorMessage className="red" name={field} component="div" />
      </Col>
    </BootstrapForm.Group>
  )
}

const CustomInputComponent = (props) => {
  return <BootstrapForm.Control type="text" key="name" size="sm" placeholder={props.field} {...props} />
}
