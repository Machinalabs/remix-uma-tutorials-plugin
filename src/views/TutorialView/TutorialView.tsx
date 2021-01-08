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
        <Container fluid={true} style={{ padding: "2em 0" }}>
          <Row>
            <Col md="auto" style={{ paddingLeft: "0", paddingRight: "0" }}>
              <NavMenu />
            </Col>
            <Col xs={6} lg={4} style={{ display: "flex", flexDirection: "column" }}>
              <Stepmanager />
              <NavigationBar />
            </Col>
            <Col xs={3} md={3} lg={3} style={{ paddingLeft: "0", paddingRight: "0" }}>
              <RightPanel />
            </Col>
          </Row>
        </Container>
      </StepProvider>
    </React.Fragment>
  )
}
