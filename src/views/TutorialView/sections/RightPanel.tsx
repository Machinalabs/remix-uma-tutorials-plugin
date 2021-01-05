import React, { useEffect, useState } from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { useRemix } from "../../../hooks"
import { debug } from "../../../utils"
import styled from "styled-components"
import { useContract, Token } from "../hooks"

export const RightPanel: React.FC = () => {
  const { clientInstance } = useRemix()
  const [account, setAccount] = useState("")
  const [collateralBalance, setCollateralBalance] = useState(0) // eslint-disable-line
  const [syntheticBalance, setSyntheticBalance] = useState(0) // eslint-disable-line
  const { collateralTokens, priceIdentifiers } = useContract()

  useEffect(() => {
    const getData = async () => {
      const accounts = await clientInstance.udapp.getAccounts()
      debug("Accounts", accounts)
      setAccount(accounts[0])

      // TODO
      // Get balances
    }

    getData()
  }, [clientInstance])

  console.log("collateralTokens", collateralTokens)
  return (
    <React.Fragment>
      <p style={{ fontSize: "0.9em" }}>
        <b>From</b>
      </p>
      <p style={{ fontSize: "0.9em" }}>{account}</p>
      <p style={{ fontSize: "0.9em" }}>
        <b>Collateral Balance</b>
      </p>
      <p style={{ fontSize: "0.9em" }}>{collateralBalance}</p>
      <p style={{ fontSize: "0.9em" }}>
        <b>Synthetic Balance</b>
      </p>
      <p style={{ fontSize: "0.9em" }}>{syntheticBalance}</p>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Collateral tokens
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <React.Fragment>
              {collateralTokens &&
                collateralTokens.map((item: Token, index: number) => (
                  <AccordionContentBody key={index} className="borderBottomExceptLast">
                    <p style={{ fontWeight: "bold" }}>Name: <span style={{ fontWeight: "lighter" }}>{item.name}</span></p>
                    <p>Symbol: <span>{item.symbol}</span></p>
                    <p>Total supply: <span>{item.totalSupply.toNumber()}</span></p>
                    <p>Address: <span style={{ fontSize: "0.8em" }}>0x5B38Da6a701c568545dCfcB03FcB875f56beddC4</span></p>
                  </AccordionContentBody>
                ))}
            </React.Fragment>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Price identifiers
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <React.Fragment>
              {priceIdentifiers &&
                priceIdentifiers.map((item: string, index: number) => (
                  <AccordionContentBody key={index} direction="horizontal">
                    <Image>{item.charAt(0)}</Image>
                    <Description style={{ justifyContent: "center" }}>
                      <span>{item}</span>
                    </Description>
                  </AccordionContentBody>
                ))}
            </React.Fragment>
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

const AccordionContentBody = styled.div<{ direction?: string }>`
  display: flex;
  padding: 0.5em 1em;
  flex-direction: ${(props) => props.direction || "column"};
`

const Image = styled.div`
  display: flex;
  background-color: #007bff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 1em;
`

const Description = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  font-weight: 400;
  span.subtitle {
    font-size: 0.85em;
    font-weight: 300;
  }
`
