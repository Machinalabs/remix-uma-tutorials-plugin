import React from "react"
import BootstrapButton, { ButtonProps } from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import styled from "styled-components"

export const StyledButton = styled(BootstrapButton)`
  padding-left: 1.5em;
  padding-right: 1.5em;
`

interface Props extends ButtonProps {
  isLoading: boolean
  loadingText: string
  text: string
}

export const Button: React.FC<Props> = ({ isLoading, loadingText, text, ...props }) => {
  return (
    <StyledButton {...props}>
      {isLoading && (
        <React.Fragment>
          <Spinner
            style={{ marginRight: "5px" }}
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <span>{loadingText}</span>
        </React.Fragment>
      )}
      {!isLoading && <span>{text}</span>}
    </StyledButton>
  )
}
