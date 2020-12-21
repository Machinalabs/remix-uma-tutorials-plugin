import React, { PropsWithChildren } from "react"
import { Col, Row, Container } from "react-bootstrap"

interface Props {
  from: string
}

export const DefaultLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <Container fluid={true}>
      <Row>
        <Col style={{ padding: "3em", lineHeight: "3" }}>
          {children}
        </Col>
      </Row>
    </Container>)
}
