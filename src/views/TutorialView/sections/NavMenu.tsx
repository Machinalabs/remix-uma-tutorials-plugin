import React from "react"
import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { useStep } from "../hooks"

export const NavMenu: React.FC = () => {
    const { getAllSteps } = useStep()

    const allSteps = getAllSteps()

    const handleOnNavClick = (e: any) => {
        e.preventDefault();
    }

    return (
        <Nav defaultActiveKey={allSteps["collateral_token"]} className="flex-column">
            {Object.keys(allSteps).map((item: string, index: number) => {
                const text = `${index + 1}) ${allSteps[item]}`
                return <StyledNavLink onClick={handleOnNavClick} key={index} to={`/tutorial/${item}`} activeStyle={{
                    opacity: 1,
                    fontWeight: 500
                }}>
                    <Nav.Link as={StyledDiv} key={item} href={item} disabled={true}>
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