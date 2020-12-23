import React from "react"
import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { useStep, DEFAULT_STEP, StepDefinition } from "../hooks"

export const NavMenu: React.FC = () => {
    const { getAllSteps } = useStep()

    const allSteps = getAllSteps()

    const handleOnNavClick = (e: any) => {
        e.preventDefault();
    }

    return (
        <Nav defaultActiveKey={allSteps[DEFAULT_STEP]} className="flex-column">
            {allSteps.map((currentStepDefinition: StepDefinition, index: number) => {
                const text = `${index + 1}) ${currentStepDefinition.name}`
                return <StyledNavLink onClick={handleOnNavClick} key={index} to={`/tutorial/${currentStepDefinition.route}`} activeStyle={{
                    opacity: 1,
                    fontWeight: 500
                }}>
                    <Nav.Link as={StyledDiv} key={currentStepDefinition.key} href={currentStepDefinition.route} disabled={true}>
                        {text}
                    </Nav.Link>
                </StyledNavLink>
            })}
        </Nav>
    )
}


const StyledNavLink = styled(NavLink)`
    color: black;
    opacity: 0.3;
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