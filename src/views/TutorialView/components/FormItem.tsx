import React from 'react'
import { ErrorMessage, Field, Formik, FormikErrors, Form } from "formik"
import BootstrapForm from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

interface Props {
    label: string
    field: string
}

export const FormItem: React.FC<Props> = ({ label, field }) => {
    return (
        <BootstrapForm.Group as={Row}>
            <BootstrapForm.Label column sm={3}>
                {label}
            </BootstrapForm.Label>
            <Col sm={4}>
                <Field name={field} as={CustomInputComponent} placeholder={label.toLowerCase()} />
                <ErrorMessage className="red" name={field} component="div" />
            </Col>
        </BootstrapForm.Group>

    )
}

const CustomInputComponent = (props) => (
    <BootstrapForm.Control type="text" key="name" size="sm" placeholder={props.field} {...props} />
)
