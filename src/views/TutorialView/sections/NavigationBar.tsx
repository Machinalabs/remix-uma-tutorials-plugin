import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

import { Button as CustomButton, StyledButton } from "../../../components"

import { useContract, useStep } from "../hooks"

const TUTORIAL_ROUTE = "/tutorial"

export const NavigationBar: React.FC = () => {
  const { isLastStep, getNextStep, goNextStep, getDefaultStep, isCurrentStepCompleted, restart } = useStep()
  const { cleanData } = useContract()
  const [isRestarting, setIsRestarting] = useState(false)
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

  const handleOnRestartClick = () => {
    setIsRestarting(true)
    restart()
    const defaultStep = getDefaultStep()
    setTimeout(() => {
      cleanData()
      setIsRestarting(false)
      history.push(`${TUTORIAL_ROUTE}/${defaultStep.route}`)
    }, 2000);
  }

  return (
    <Wrapper isCurrentStepCompleted={isCurrentStepCompleted}>
      {!isLastStep() && isCurrentStepCompleted && (
        <StyledButton isLoading={false} disabled={!isCurrentStepCompleted} variant="success" onClick={handleOnNextClick}>
          Next
        </StyledButton>
      )}
      <div>
        <CustomButton variant="warning" style={{ marginRight: "4px" }}
          onClick={handleOnRestartClick} isLoading={isRestarting} loadingText="Restarting..." text="Restart" />
        <StyledButton variant="danger" onClick={handleOnEndClick}>
          End
      </StyledButton>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ isCurrentStepCompleted: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isCurrentStepCompleted ? "space-between" : "flex-end")};
  width: 100%;
  margin-top: auto;
`
