import React from "react"
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"

import { StyledButton } from "../../../components"

import { useContract, useStep } from "../hooks"

export const NavigationBar: React.FC = () => {
  const { isLastStep, getNextStep, goNextStep, isCurrentStepCompleted } = useStep()
  const { cleanData } = useContract()
  const history = useHistory()

  const handleOnNextClick = () => {
    const nextStep = getNextStep()
    if (nextStep) {
      goNextStep()
      history.push(nextStep.route)
    }
  }

  const handleOnEndClick = () => {
    cleanData()
    history.push("/")
  }

  return (
    <Wrapper isCurrentStepCompleted={isCurrentStepCompleted}>
      {!isLastStep() && isCurrentStepCompleted && (
        <StyledButton disabled={!isCurrentStepCompleted} variant="success" onClick={handleOnNextClick}>
          Next
        </StyledButton>
      )}
      <StyledButton variant="danger" style={{ marginRight: "10px" }} onClick={handleOnEndClick}>
        End
        </StyledButton>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ isCurrentStepCompleted: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isCurrentStepCompleted ? "space-between" : "flex-end")};
  width: 100%;
  margin-top: auto;
`
