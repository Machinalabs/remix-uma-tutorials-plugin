import React, { PropsWithChildren } from "react"
import Alert from "react-bootstrap/Alert"

interface Props {
  show: boolean
}

export const ErrorMessage: React.FC<PropsWithChildren<Props>> = ({ children, show }) => {
  return (
    <Alert variant="danger" style={{ width: "100%", marginTop: "1em" }} show={show} transition={false}>
      {children}
    </Alert>
  )
}
