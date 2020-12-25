import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

export const RightPanel: React.FC = () => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Collateral tokens
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{/* TODO */}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Price identifiers
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>{/* TODO */}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Expiring multiparty
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>{/* TODO */}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
          Positions
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>{/* TODO */}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4">
          Synthetic tokens
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>{/* TODO */}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="5">
          Liquidations
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>{/* TODO */}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="6">
          Disputes
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <Card.Body>{/* TODO */}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}
