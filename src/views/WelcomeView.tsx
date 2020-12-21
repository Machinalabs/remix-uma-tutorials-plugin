import React from "react"
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

import { TITLE } from "../text"

interface Props {

}

export const WelcomeView: React.FC<Props> = ({ }) => {
  const deployUMAContracts = async () => {
    // TODO
  }

  const handleOnClick = () => {
    console.log("Clicked start")
    deployUMAContracts()
  }

  return (<div style={{ lineHeight: "3" }}>
    <h2>{TITLE}</h2>
    <h3>In this tutorial you will learn:</h3>
    <ul>
      <li>How to create synthetic tokens using UMA's synthetic token template</li>
      <li>How to create and manage a token sponsor position</li>
    </ul>
    <Link to="/tutorial">
      <Button onClick={handleOnClick} style={{ paddingLeft: "1.5em", paddingRight: "1.5em" }} variant="primary">Start Tutorial</Button>
    </Link>
  </div>
  )
}

