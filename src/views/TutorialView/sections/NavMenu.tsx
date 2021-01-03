import React from "react"
import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { useStep, DEFAULT_STEP, StepDefinition } from "../hooks"

export const NavMenu: React.FC = () => {
  const { getAllSteps, currentStep } = useStep()

  const allSteps = getAllSteps()

  const handleOnNavClick = (e: any) => {
    e.preventDefault()
  }

  return (
    <Nav defaultActiveKey={allSteps[DEFAULT_STEP]} className="flex-column">
      {allSteps.map((currentStepDefinition: StepDefinition, index: number) => {
        const text = `${currentStepDefinition.name}`
        return (
          <StyledNavLink
            onClick={handleOnNavClick}
            key={index}
            to={`/tutorial/${currentStepDefinition.route}`}
            activeStyle={{
              opacity: 1,
              fontWeight: 500,
              fontSize: "0.9em"
            }}
          >
            <Nav.Link as={StyledDiv} key={currentStepDefinition.key} href={currentStepDefinition.route} disabled={true}>
              <NumberContainer>
                {currentStep.order > currentStepDefinition.order ? <CompletedIcon /> : <span>{currentStepDefinition.order}</span>}
              </NumberContainer>
              {text}
            </Nav.Link>
          </StyledNavLink>
        )
      })}
    </Nav>
  )
}

const CompletedIcon: React.FC = () => {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-check2" viewBox="0 0 16 16">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
  </svg>)
}

const NumberContainer = styled.div`
  display: inline-flex;
  background-color: #007bff;
  width: 24px;
  height: 24px;
  text-align: center;
  border-radius: 50%;
  margin-right: 8px;
  color: white;
  font-size: 0.8em;
  align-items: center;
  justify-content: center
`

const StyledNavLink = styled(NavLink)`
  color: black;
  opacity: 0.5;
  &:hover {
    text-decoration: none;
    cursor: text;
  }
`

const StyledDiv = styled.div`
  color: black;

  &:hover {
    cursor: text;
  }
`
