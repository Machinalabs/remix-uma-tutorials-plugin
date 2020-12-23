import React from "react"
import { Link } from 'react-router-dom'
import styled from "styled-components"

import { StyledButton } from "../components"
import { TITLE } from "../text"

interface Props {

}

export const WelcomeView: React.FC<Props> = ({ }) => {
  const deployUMAContracts = async () => {
    // TODO
  }

  const handleOnClick = () => {
    console.log("Clicked start")
    deployUMAContracts()
  }

  return (<Wrapper>
    <h2>{TITLE}</h2>
    <h4 style={{ marginTop: "1em" }}>In this tutorial you will learn:</h4>
    <StyledUL>
      <li>How to create synthetic tokens using UMA's synthetic token template</li>
      <li>How to create and manage a token sponsor position</li>
    </StyledUL>
    <Link to="/tutorial/deploy_collateral_token">
      <StyledButton onClick={handleOnClick} variant="primary">Start Tutorial</StyledButton>
    </Link>
  </Wrapper>
  )
}

const Wrapper = styled.div`
    line-height: 3;
`

const StyledUL = styled.ul`
  margin-bottom: 0.5em;
`