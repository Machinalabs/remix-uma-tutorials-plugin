import React from "react"
import { ErrorMessage, Field } from "formik"
import BootstrapForm from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import { useRemix } from "../../../hooks"

interface Props {
  label: string
  field: string
  labelWidth?: number
  placeHolder?: string
  readOnly?: boolean
  type?: string
  showHelp?: boolean
  helpText?: string
}

export const FormItem: React.FC<Props> = ({
  label,
  field,
  labelWidth = 2,
  placeHolder,
  readOnly = false,
  type = "text",
  showHelp = false,
  helpText = "",
}) => {
  const { themeType } = useRemix()
  return (
    <BootstrapForm.Row>
      <BootstrapForm.Group as={Col}>
        <BootstrapForm.Label
          style={{ color: themeType === "dark" ? undefined : "black", paddingLeft: "0" }}
          column={true}
        >
          {label}
        </BootstrapForm.Label>
        <Col sm={12} xl={6} style={{ paddingLeft: "0" }}>
          <Field
            name={field}
            as={CustomInputComponent}
            placeholder={placeHolder || label.toLowerCase()}
            readOnly={readOnly}
            type={type}
            showHelp={showHelp}
            helpText={helpText}
          />
          <ErrorMessage className="red" name={field} component="div" />
        </Col>
      </BootstrapForm.Group>
    </BootstrapForm.Row>
  )
}

const CustomInputComponent = (props: Props) => {
  const popover = <Tooltip id={props.label}>{props.helpText}</Tooltip>

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <BootstrapForm.Control
        type="text"
        key="name"
        size="sm"
        placeholder={props.field}
        {...props}
        style={{ marginRight: "10px" }}
      />
      {props.showHelp && (
        <OverlayTrigger placement="right" overlay={popover}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-question-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
          </svg>
        </OverlayTrigger>
      )}
    </div>
  )
}
