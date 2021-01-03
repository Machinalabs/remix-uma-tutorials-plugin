import React, { useEffect, useState } from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { useRemix } from "../../../hooks"
import { debug } from "../../../utils"

export const RightPanel: React.FC = () => {
  const { clientInstance } = useRemix()

  const [account, setAccount] = useState("")
  const [collateralBalance, setCollateralBalance] = useState("")
  const [syntheticBalance, setSyntheticBalance] = useState("")

  useEffect(() => {
    const getData = async () => {
      const accounts = await clientInstance.udapp.getAccounts()
      debug("Accounts", accounts)
      setAccount(accounts[0])

      // TODO
      // Get balances
    }

    getData()

  }, [])

  return (
    <React.Fragment>
      <p style={{ fontSize: "0.9em" }}><b>From</b></p>
      <p style={{ fontSize: "0.9em" }}>{account}</p>
      <p style={{ fontSize: "0.9em" }}><b>Collateral Balance</b></p>
      <p style={{ fontSize: "0.9em" }}>{collateralBalance}</p>
      <p style={{ fontSize: "0.9em" }}><b>Synthetic Balance</b></p>
      <p style={{ fontSize: "0.9em" }}>{syntheticBalance}</p>
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

    </React.Fragment>
  )
}
