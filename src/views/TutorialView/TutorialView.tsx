import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import { TITLE } from "../../text"

import { StepProvider } from "./hooks"
import { Stepmanager } from "./steps"
import { NavigationBar, NavMenu } from "./sections"

export const TutorialView: React.FC = () => {
    return (
        <React.Fragment>
            <StepProvider>
                <h2>{TITLE}</h2>
                <Container fluid={true} style={{ marginTop: "2em", height: "100%" }}>
                    <Row style={{ height: "90%" }}>
                        <Col xs="auto" style={{ border: "1px solid red", paddingLeft: "0" }}>
                            <NavMenu />
                        </Col>
                        <Col style={{ border: "1px solid blue" }}>
                            <Stepmanager />
                        </Col>
                    </Row>
                    <Row>
                        <NavigationBar />
                    </Row>
                </Container>
            </StepProvider>
        </React.Fragment>
    )
}