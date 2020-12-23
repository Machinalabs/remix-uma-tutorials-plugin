import React, { PropsWithChildren } from "react"
import { Row, Container } from "react-bootstrap"
import { StyledCol } from "../components"

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
            <Row className="full-height">
                <StyledCol xs={9}>
                    {children}
                </StyledCol>
                <StyledCol style={{ border: "1px solid black" }}>
                    {rightPanel}
                </StyledCol>
            </Row>
        </Container>)
}
