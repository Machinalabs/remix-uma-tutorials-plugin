import React from "react"
import { Nav } from "react-bootstrap"

interface MenuOption {
    [key: string]: string
}

const MENU_OPTIONS: MenuOption = {
    "collateral_token": "Deploy collateral token",
    "price_identifier": "Deploy price identifier"
}

export const NavMenu: React.FC = () => {
    return (
        <Nav defaultActiveKey={MENU_OPTIONS["collateral_token"]} className="flex-column">
            {Object.keys(MENU_OPTIONS).map((item: string, index: number) => {
                return (<Nav.Link style={{ textDecoration: "none" }} key={item} href={item}>{`${index + 1}) ${MENU_OPTIONS[item]}`}</Nav.Link>)
            })}
        </Nav>
    )
}