import React, { PropsWithChildren } from "react"
import { Col, Row, Container } from "react-bootstrap"

interface Props {
    // from: string
    rightPanel: React.ReactNode
}

export const TwoPanelLayout: React.FC<PropsWithChildren<Props>> = ({
    children,
    rightPanel
}) => {
    return (
        <Container fluid={true}>
            <Row>
                <Col style={{ padding: "3em" }} xs={9}>
                    {children}
                </Col>
                <Col style={{ paddingTop: "3em", paddingRight: "3em", border: "1px solid black" }}>
                    {rightPanel}
                </Col>
            </Row>
        </Container>)
}
