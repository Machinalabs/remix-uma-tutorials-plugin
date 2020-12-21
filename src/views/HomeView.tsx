import React, { useEffect, useState } from "react"

import { useRemix } from "../hooks"
import { TutorialView } from "./TutorialView"
import { WelcomeView } from "./WelcomeView"

export const HomeView: React.FC = () => {
  const { clientInstance } = useRemix()
  const [hasTutorialStarted, setHasTutorialStarted] = useState(false)

  useEffect(() => {
    if (clientInstance) {
      console.log("Client instance")
    }
  }, [clientInstance])

  if (!hasTutorialStarted) {
    return (<WelcomeView onStartCallback={() => setHasTutorialStarted(true)} />)
  }

  return <TutorialView />
}
