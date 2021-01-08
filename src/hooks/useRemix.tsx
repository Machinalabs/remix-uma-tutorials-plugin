import React, { PropsWithChildren, useContext, useEffect, useState } from "react"

import { PluginClient } from "@remixproject/plugin"
import { IRemixApi } from "@remixproject/plugin-api"
import { Api, PluginApi } from "@remixproject/plugin-utils"

import { ThemeType } from "../types"
import { getProvider, log } from "../utils"

import { RemixClient } from "./RemixClient"

export type RemixClientInstanceType = PluginApi<Readonly<IRemixApi>> & PluginClient<Api, Readonly<IRemixApi>>

interface IRemixProvider {
  clientInstance: RemixClientInstanceType
  themeType: ThemeType
  web3Provider: any
}

/* tslint:disable */
const RemixContext = React.createContext<IRemixProvider>({
  clientInstance: {} as RemixClientInstanceType,
  themeType: "dark" as ThemeType,
  web3Provider: undefined
})
/* tslint:enable */

const PLUGIN_NAME = "Remix Gas Profiler"

export const RemixProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [clientInstance, setClientInstance] = useState(undefined as any)
  const [themeType, setThemeType] = useState<ThemeType>("dark")
  const [web3Provider, setWeb3Provider] = useState(undefined as any)

  useEffect(() => {
    log(`${PLUGIN_NAME} loading...`)
    const loadClient = async () => {
      const client = new RemixClient()
      console.log("Client", client)
      await client.onload()
      log(`${PLUGIN_NAME} Plugin has been loaded`)

      setClientInstance(client)
      setWeb3Provider(getProvider(client))
      const currentTheme = await client.call("theme", "currentTheme")
      log("Current theme", currentTheme)

      setThemeType(currentTheme.brightness || currentTheme.quality)

      client.on("theme", "themeChanged", (theme: any) => {
        log("themeChanged")
        setThemeType(theme.quality)
      })
    }

    loadClient()
  }, [])

  return (
    <RemixContext.Provider
      value={{
        clientInstance,
        themeType,
        web3Provider
      }}
    >
      {children}
    </RemixContext.Provider>
  )
}

export const useRemix = () => {
  const context = useContext(RemixContext)

  if (context === null) {
    throw new Error("useRemix() can only be used inside of <RemixProvider />, please declare it at a higher level")
  }
  return context
}
