import React from "react"

import { Routes } from "./routes"
import { RemixProvider } from "./hooks"

// TODO Remove
import "bootstrap/dist/css/bootstrap.min.css"

import "./App.css"

const App = () => {
  return (
    <RemixProvider>
      <Routes />
    </RemixProvider>
  )
}

export default App
