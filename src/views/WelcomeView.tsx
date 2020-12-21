import React from "react"
import { Col, Row, Container, Button } from "react-bootstrap"

import { useRemix } from "../hooks"
import { TITLE } from "../text"

interface Props {
  onStartCallback: () => void
}

export const WelcomeView: React.FC<Props> = ({ onStartCallback }) => {
  const { themeType } = useRemix()

  const deployUMAContracts = async () => {
    // TODO
  }

  const handleOnClick = () => {
    console.log("Clicked start")
    deployUMAContracts()
    onStartCallback()
  }

  return (<React.Fragment>
    <h2>{TITLE}</h2>
    <h3>In this tutorial you will learn:</h3>
    <ul>
      <li>How to create synthetic tokens using UMA's synthetic token template</li>
      <li>How to create and manage a token sponsor position</li>
    </ul>
    {/* <button onClick={handleOnClick}>Start</button> */}
    <Button onClick={handleOnClick} style={{ paddingLeft: "1.5em", paddingRight: "1.5em" }} variant="primary">Start Tutorial</Button>
  </React.Fragment>
  )
}
