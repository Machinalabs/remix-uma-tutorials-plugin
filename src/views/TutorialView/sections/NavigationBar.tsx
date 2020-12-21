import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { StyledButton } from "../../../components"

import { useStep } from "../hooks"

export const NavigationBar: React.FC = () => {
    return (
        <Wrapper>
            <Link to="/">
                <StyledButton variant="danger" >End</StyledButton>
            </Link>
            <StyledButton variant="primary">Next</StyledButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`