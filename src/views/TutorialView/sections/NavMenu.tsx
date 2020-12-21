import React from "react"
import { Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useStep } from "../hooks"

export const NavMenu: React.FC = () => {
    const { getAllSteps } = useStep()

    const allSteps = getAllSteps()

    return (
        <Nav defaultActiveKey={allSteps["collateral_token"]} className="flex-column">
            {Object.keys(allSteps).map((item: string, index: number) => {
                const text = `${index + 1}) ${allSteps[item]}`
                return <NavLink key={index} to={`/tutorial/${item}`}><Nav.Link as="div" style={{ textDecoration: "none" }} key={item} href={item}>
                    {text}
                </Nav.Link></NavLink>
            })}
        </Nav>
    )
}