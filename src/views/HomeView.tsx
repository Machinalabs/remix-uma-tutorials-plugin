import React, { useEffect, useState } from "react"
import {
  CompilationResult,
  RemixTxEvent,
  HighlightPosition,
} from "@remixproject/plugin-api"

import { useRemix } from "../hooks"
import { WelcomeView } from "./WelcomeView"

export const HomeView: React.FC = () => {
  const { clientInstance } = useRemix()
  const [hasTutorialStarted, setHasTutorialStarted] = useState(true)

  useEffect(() => {
    if (clientInstance) {
      console.log("Client instance")
    }
  }, [clientInstance])

  return (
    <div>Home View</div>
  )
}
