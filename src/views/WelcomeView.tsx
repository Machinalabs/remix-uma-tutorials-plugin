import React from "react"
import { useRemix } from "../hooks"

export const WelcomeView = () => {
  const { themeType } = useRemix()

  return (
    <div><h1>Welcome View</h1></div>
  )
}
