import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import { useRemix } from "../../hooks"

import { TITLE } from "../../text"
import { NavMenu } from "./sections/NavMenu"

const STEPS = {
    "Deploy_Collateral_Token": "deploy_collateral_token",
    "Deploy_Price_Identifier": "deploy_price_identifier",
    // TODO...
}

export const TutorialView: React.FC = () => {
    return (
        <React.Fragment>
            <h2>{TITLE}</h2>
            <Container fluid={true} style={{ marginTop: "2em" }}>
                <Row>
                    <Col xs="auto" style={{ border: "1px solid red", paddingLeft: "0" }}><NavMenu /></Col>
                    <Col style={{ border: "1px solid blue" }}><h1>Main Content</h1></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}