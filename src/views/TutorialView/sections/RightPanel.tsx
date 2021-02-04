import { utils } from "ethers"
import { formatUnits } from "ethers/lib/utils"
import React, { useEffect, useState } from "react"
import Card from "react-bootstrap/Card"
import styled from "styled-components"

import { useRemix } from "../../../hooks"
import { debug } from "../../../utils"

import { useContract, Token, ExpiringMultiParty, Position } from "../hooks"

export const RightPanel: React.FC = () => {
  const { clientInstance } = useRemix()
  const [account, setAccount] = useState("")
  const {
    collateralTokens,
    priceIdentifiers,
    collateralBalance,
    syntheticBalance,
    syntheticTokens,
    expiringMultiParties,
    positions,
  } = useContract()

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await clientInstance.udapp.getAccounts()
      debug("Accounts", accounts)
      setAccount(accounts[0])
    }

    getAccount()
  }, [clientInstance])

  const convertToDate = (unixTimestamp: number) => {
    const milliseconds = unixTimestamp * 1000

    const dateObject = new Date(milliseconds)

    return dateObject.toLocaleString()
  }

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
      {collateralTokens && collateralTokens.length > 0 &&
        <Card>
          <Card.Header>Collateral token</Card.Header>
          <React.Fragment>
            {collateralTokens.map((item: Token, index: number) => (
              <AccordionContentBody key={index} className="borderBottomExceptLast">
                <p style={{ fontWeight: "bold" }}>
                  Name: <span style={{ fontWeight: "lighter" }}>{item.name}</span>
                </p>
                <p>
                  Symbol: <span>{item.symbol}</span>
                </p>
                <p>
                  Total supply: <span>{item.totalSupply.toString()}</span>
                </p>
                <p>
                  Address: <span style={{ fontSize: "0.8em" }}>{item.address}</span>
                </p>
              </AccordionContentBody>
            ))}
          </React.Fragment>
        </Card>}
      {priceIdentifiers && priceIdentifiers.length > 0 &&
        <Card>
          <Card.Header> Price identifier</Card.Header>
          <React.Fragment>
            {priceIdentifiers.map((item: string, index: number) => (
              <AccordionContentBody key={index} direction="horizontal">
                <Image>{item.charAt(0)}</Image>
                <Description style={{ justifyContent: "center" }}>
                  <span>{item}</span>
                </Description>
              </AccordionContentBody>
            ))}
          </React.Fragment>
        </Card>}
      {expiringMultiParties && expiringMultiParties.length > 0 &&
        <Card>
          <Card.Header>Expiring multiparty</Card.Header>
          <React.Fragment>
            {expiringMultiParties.map((item: ExpiringMultiParty, index: number) => (
              <AccordionContentBody key={index} className="borderBottomExceptLast">
                <p>
                  Address: <span style={{ fontSize: "0.8em" }}>{item.address}</span>
                </p>
                <p>
                  Expiration: <span style={{ fontSize: "0.8em" }}>{convertToDate(item.expirationTimestamp)}</span>
                </p>
                <p>
                  Synthetic name: <span style={{ fontSize: "0.8em" }}>{item.syntheticName}</span>
                </p>
                <p>
                  Synthetic symbol: <span style={{ fontSize: "0.8em" }}>{item.syntheticSymbol}</span>
                </p>
                <p>
                  Collateral requirement: <span style={{ fontSize: "0.8em" }}>{item.collateralRequirement}</span>
                </p>
                <p>
                  Minimum sponsor tokens: <span style={{ fontSize: "0.8em" }}>{item.minSponsorTokens}</span>
                </p>
              </AccordionContentBody>
            ))}
          </React.Fragment>
        </Card>}
      {positions && positions.length > 0 &&
        <Card>
          <Card.Header>Position</Card.Header>
          <React.Fragment>
            {positions.map((item: Position, index: number) => (
              <AccordionContentBody key={index} className="borderBottomExceptLast">
                <p>
                  Collateral amount:{" "}
                  <span style={{ fontSize: "0.8em" }}>{`${formatUnits(
                    item.collateralAmount.toString(),
                    "ether"
                  )}`}</span>
                </p>
                <p>
                  Synthetic tokens:{" "}
                  <span style={{ fontSize: "0.8em" }}>{`${formatUnits(
                    item.syntheticTokens.toString(),
                    "ether"
                  )}`}</span>
                </p>
              </AccordionContentBody>
            ))}
          </React.Fragment>
        </Card>}
      {syntheticTokens && syntheticTokens.length > 0 &&
        <Card>
          <Card.Header>Synthetic tokens</Card.Header>
          <React.Fragment>
            {syntheticTokens.map((item: Token, index: number) => (
              <AccordionContentBody key={index} className="borderBottomExceptLast">
                <p style={{ fontWeight: "bold" }}>
                  Name: <span style={{ fontWeight: "lighter" }}>{item.name}</span>
                </p>
                <p>
                  Symbol: <span>{item.symbol}</span>
                </p>
                <p>
                  Total supply: <span>{utils.formatUnits(item.totalSupply, "ether").toString()}</span>
                </p>
                <p>
                  Address: <span style={{ fontSize: "0.8em" }}>{item.address}</span>
                </p>
              </AccordionContentBody>
            ))}
          </React.Fragment>
        </Card>}
    </React.Fragment >
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
                          font - size: 0.85em;
    font-weight: 300;
  }
`
