import React from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"

import { StyledButton } from "../../../components"

import { useStep } from "../hooks"

export const NavigationBar: React.FC = () => {
  const { isLastStep, getNextStep, goNextStep, isCurrentStepCompleted } = useStep()
  const history = useHistory()

  const handleOnNextClick = () => {
    const nextStep = getNextStep()
    if (nextStep) {
      goNextStep()
      history.push(nextStep.route)
    }
  }

  return (
    <Wrapper>
      <Link to="/">
        <StyledButton variant="danger">End</StyledButton>
      </Link>
      {!isLastStep() && (
        <StyledButton disabled={!isCurrentStepCompleted} variant="primary" onClick={handleOnNextClick}>
          Next
        </StyledButton>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
