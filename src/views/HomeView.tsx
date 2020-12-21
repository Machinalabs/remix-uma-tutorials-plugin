import React, { useEffect } from "react"

import { useRemix } from "../hooks"
import { WelcomeView } from "./WelcomeView"

export const HomeView: React.FC = () => {
  const { clientInstance } = useRemix()
  useEffect(() => {
    if (clientInstance) {
      console.log("Client instance")
    }
  }, [clientInstance])

  return (<WelcomeView />)
}
