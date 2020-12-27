import React, { PropsWithChildren } from "react"
import { Row, Container } from "react-bootstrap"
import { StyledCol } from "../components"

interface Props {
  from: string
}

export const DefaultLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Container fluid={true}>
      <Row className="full-height">
        <StyledCol>{children}</StyledCol>
      </Row>
    </Container>
  )
}
