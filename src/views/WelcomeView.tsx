import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Spinner from "react-bootstrap/Spinner"

import { StyledButton } from "../components"
import { UMADeployer } from "../extras/deployment"
import { useRemix } from "../hooks"
import { TITLE } from "../text"
import { debug } from "../utils"
import { useContract } from "./TutorialView/hooks/useContract"

const TUTORIAL_ROUTE = "/tutorial/deploy_collateral_token"

export const WelcomeView: React.FC = () => {
  const { clientInstance } = useRemix()
  const [isStarting, setIsStarting] = useState(false)
  const { setContracts } = useContract()
  const history = useHistory()

  useEffect(() => {
    if (isStarting && clientInstance) {
      const deployUMAContracts = async () => {
        const accounts = await clientInstance.udapp.getAccounts()
        debug("Accounts", accounts)

        const umaDeployer = new UMADeployer()
        const addresses = await umaDeployer.deploy({
          clientInstance,
          from: accounts[0],
        })

        setContracts(addresses)

        debug("Addresses", addresses)

        history.push(TUTORIAL_ROUTE)
      }

      deployUMAContracts()
    }
  }, [isStarting, clientInstance, history]) // eslint-disable-line

  const handleOnClick = () => {
    setIsStarting(true)
  }

  return (
    <Wrapper>
      <h2>{TITLE}</h2>
      <h4 style={{ marginTop: "1em" }}>In this tutorial you will learn:</h4>
      <StyledUL>
        <li>How to create synthetic tokens using UMA's synthetic token template</li>
        <li>How to create and manage a token sponsor position</li>
      </StyledUL>
      <h5>Getting Started</h5>
      <p>This interactive tutorial is designed to allow users to deploy the whole UMA protocol in the Remix environment. <br />
      Be aware that you will need to deploy each element of the UMA protocol. It means you will need to deploy a test collateral token and a price identifier. <br />
      Are you ready?</p>
      <StyledButton onClick={handleOnClick} variant="primary">
        {isStarting && (
          <React.Fragment>
            <Spinner
              style={{ marginRight: "5px" }}
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span>Starting...</span>
          </React.Fragment>
        )}
        {!isStarting && <span>Start Tutorial</span>}
      </StyledButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  line-height: 3;
`

const StyledUL = styled.ul`
  margin-bottom: 0.5em;
`
