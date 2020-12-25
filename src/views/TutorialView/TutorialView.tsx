import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import { TITLE } from "../../text"

import { StepProvider } from "./hooks"
import { Stepmanager } from "./steps"
import { NavigationBar, NavMenu, RightPanel } from "./sections"

export const TutorialView: React.FC = () => {
  return (
    <React.Fragment>
      <StepProvider>
        <h2>{TITLE}</h2>
        <Container fluid={true} style={{ paddingTop: "2em" }}>
          <Row style={{ height: "90%" }}>
            <Col xs={2}>
              <NavMenu />
            </Col>
            <Col xs={6}>
              <Stepmanager />
            </Col>
            <Col xs={2}>
              <RightPanel />
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <NavigationBar />
            </Col>
          </Row>
        </Container>
      </StepProvider>
    </React.Fragment>
  )
}
