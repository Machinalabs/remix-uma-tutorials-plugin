import React from "react"

import { Routes } from "./routes"
import { RemixProvider } from "./hooks"

import "./App.css"
import { ContractProvider } from "./views/TutorialView/hooks"

const App = () => {
  return (
    <RemixProvider>
      <ContractProvider>
        <Routes />
      </ContractProvider>
    </RemixProvider>
  )
}

export default App
