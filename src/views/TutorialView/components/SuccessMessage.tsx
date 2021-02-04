import React, { PropsWithChildren } from "react"
import Alert from "react-bootstrap/Alert"

interface Props {
  show?: boolean
}

export const SuccessMessage: React.FC<PropsWithChildren<Props>> = ({ children, show }) => {
  return (
    <Alert variant="success" style={{ width: "100%", fontSize: "0.80em" }} show={show} transition={false}>
      {children}
    </Alert>
  )
}
