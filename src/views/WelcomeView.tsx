import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"
import { ethers } from "ethers"

import { StyledButton } from "../components"
import { useRemix } from "../hooks"
import { TITLE } from "../text"
import { useStep } from "./TutorialView/hooks"
import { useContract } from "./TutorialView/hooks"
import { debug } from "../utils"

const TUTORIAL_ROUTE = "/tutorial"

export const WelcomeView: React.FC = () => {
  const { clientInstance, web3Provider } = useRemix()
  const { currentStep } = useStep()
  const [isStarting, setIsStarting] = useState(false)
  const history = useHistory()
  const [error, setError] = useState<string | undefined>(undefined)
  const { getContractAddress } = useContract()
  useEffect(() => {
    if (isStarting && clientInstance) {
      const validateAndRedirectIfOk = async () => {
        const provider = await clientInstance.call("network", "getNetworkProvider")
        if (provider === "vm") {
          setError(
            "Invalid provider selected. Please be sure you are running the UMA snapshot docker image and the provider is correct."
          )
          setIsStarting(false)
          return
        }

        try {
          const network = await clientInstance.call("network", "detectNetwork")
          console.log("Network", network)
        } catch (error) {
          setError(
            "Invalid provider selected. Please be sure you are running the UMA snapshot docker image and the provider is correct."
          )
          setIsStarting(false)
          return
        }

        try {
          const ethersProvider = new ethers.providers.Web3Provider(web3Provider)
          const signer = ethersProvider.getSigner()
          debug("Signer", signer)
          // TODO: Verify all contracts...
          const finderCode = await ethersProvider.getCode(getContractAddress("Finder"))
          debug("finderCode", finderCode)
        } catch (error) {
          setError(
            "UMA snapshot not found. Please be sure you are running the UMA snapshot docker image and the provider is correct."
          )
          setIsStarting(false)
          return
        }

        history.push(`${TUTORIAL_ROUTE}/${currentStep.route}`)
      }

      setTimeout(() => {
        validateAndRedirectIfOk()
      }, 1000)
    }
  }, [isStarting, clientInstance, history]) // eslint-disable-line

  const handleOnClick = () => {
    setError(undefined)
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
      <p>
        This interactive tutorial is designed to allow users to interact with the UMA protocol in the Remix environment.{" "}
        <br />
        Be aware that you will need to deploy each element of the UMA protocol. It means you will need to deploy a test
        collateral token and a price identifier.
      </p>
      <h5>Pre Requisites</h5>
      <p>
        In order to complete this tutorial you need to have docker installed and run the following command: <br />
        <code> $ docker run -it -p 8545:8545 defiacademy/uma-snapshot</code>
        <br />
        Now, you need to setup Remix to use the Web3 provider. <br />
        Once you have completed that, we can start !
        <br />
        Are you ready? You can also watch{" "}
        <a href="https://www.youtube.com/watch?v=RCVAkCrJDdw" target="_blank" rel="noreferrer">
          this step by step guide video.
        </a>
      </p>

      <StyledButton onClick={handleOnClick} variant="primary" style={{ marginBottom: "2em" }}>
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

      <Alert variant="danger" style={{ width: "85%" }} show={error !== undefined} transition={false}>
        {error}
      </Alert>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  line-height: 3;
`

const StyledUL = styled.ul`
  margin-bottom: 0.5em;
`
