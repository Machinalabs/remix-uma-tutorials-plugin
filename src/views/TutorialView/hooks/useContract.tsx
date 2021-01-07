import { BigNumber } from "ethers"
import React, { PropsWithChildren, useContext, useEffect, useState } from "react"
import { EthereumAddress, UMAContractName } from "../../../extras/deployment"

export interface Token {
  name: string
  symbol: string
  decimals: number
  totalSupply: BigNumber
  address?: string
}

interface IContractProvider {
  setContracts: (contractsMap: Map<UMAContractName, EthereumAddress>) => void
  getContractAddress: (contractName: UMAContractName) => string
  contracts: Map<UMAContractName, EthereumAddress>
  priceIdentifiers: string[]
  addPriceIdentifier: (newPriceIdentifier: string) => string[]
  collateralTokens: Token[]
  addCollateralToken: (newToken: Token) => Token[]
  syntheticTokens: Token[]
  addSyntheticToken: (newToken: Token) => Token[]
  // expiringMultiParty
  // positions
  // liquidations
  // disputes
}

/* tslint:disable */
// Defaults
const ContractContext = React.createContext<IContractProvider>({
  setContracts: (contractsMap: Map<UMAContractName, EthereumAddress>) => { },
  getContractAddress: (contractName: UMAContractName) => {
    return ""
  },
  contracts: new Map<UMAContractName, EthereumAddress>(),
  priceIdentifiers: ["ETH/BTC"],
  addPriceIdentifier: (newPriceIdentifier: string) => {
    return ["ETH/BTC"]
  },
  collateralTokens: [{ name: "WETH", symbol: "WETH", decimals: 18, totalSupply: BigNumber.from("10000000") }],
  addCollateralToken: (newToken: Token) => [
    { name: "WETH", symbol: "WETH", decimals: 18, totalSupply: BigNumber.from("10000000") },
  ],
  syntheticTokens: [{ name: "SNT", symbol: "SNT", decimals: 18, totalSupply: BigNumber.from("10000000") }],
  addSyntheticToken: (newToken: Token) => [
    { name: "SNT", symbol: "SNT", decimals: 18, totalSupply: BigNumber.from("10000000") },
  ],
})
/* tslint:enable */

export const ContractProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [contracts, setContracts] = useState(new Map<UMAContractName, EthereumAddress>())
  const [priceIdentifiers, setPriceIdentifiers] = useState<string[]>([])
  const [collateralTokens, setCollateralTokens] = useState<Token[]>([])
  const [syntheticTokens, setSyntheticTokens] = useState<Token[]>([])

  const getContractAddress = (contractName: UMAContractName) => {
    return contracts.get(contractName) as string
  }

  const addPriceIdentifier = (newPriceIdentifier: string) => {
    const newItems = [...priceIdentifiers, newPriceIdentifier]
    setPriceIdentifiers(newItems)
    return newItems
  }

  const addCollateralToken = (newToken: Token) => {
    const newItems = [...collateralTokens, newToken]
    setCollateralTokens(newItems)
    return newItems
  }

  const addSyntheticToken = (newToken: Token) => {
    const newItems = [...syntheticTokens, newToken]
    setSyntheticTokens(newItems)
    return newItems
  }

  useEffect(() => {
    const addresses = new Map<UMAContractName, EthereumAddress>()
    addresses.set("Finder", "0x0CE79bD134ad8b1559e70315955FeBD0585Bd61c")
    addresses.set("Timer", "0xCbd9DA4C726C7e7Ab6A29B428B295799861cE0eD")
    addresses.set("VotingToken", "0x087183aF87b05C2AE914562826C5afBFc0E61a34")
    addresses.set("IdentifierWhitelist", "0xB02c41f1eB22fa5FfF384aB8Ff3109E79E0ff16d")
    addresses.set("Voting", "0xf0950a16020A237Ce05A3aEBD2916BAb43974a39")
    addresses.set("Registry", "0x42eCCE1cde42c25826E76A038DD3b58D9787BCdb")
    addresses.set("FinancialContractAdmin", "0xfd936B0581055e4De459a6aBB8f76336796edCEB")
    addresses.set("Store", "0x1D07EE6EE4cDEd89a8a693878808bc50BaDF5F60")
    addresses.set("Governor", "0x88a63D653C33C61C242C05d2681100478E1B278A")
    addresses.set("DesignatedVotingFactory", "0xA49203528D1C19a0163FAcEB1fc87Dd44DD3f5a0")
    addresses.set("TokenFactory", "0x514CF025Df0f69b306f14B921639881435783434")
    addresses.set("AddressWhitelist", "0xDFA95Ac05203120470a694e54cF983c4190642E7")
    addresses.set("ExpiringMultiPartyCreator", "0xA73c47D7619be70893ebf2E6d2d4401fcDE7aA26")
    // setContracts(addresses)
  }, [])

  return (
    <ContractContext.Provider
      value={{
        setContracts,
        getContractAddress,
        contracts,
        priceIdentifiers,
        collateralTokens,
        syntheticTokens,
        addPriceIdentifier,
        addCollateralToken,
        addSyntheticToken,
      }}
    >
      {children}
    </ContractContext.Provider>
  )
}

export const useContract = () => {
  const context = useContext(ContractContext)

  if (context === null) {
    throw new Error(
      "useContract() can only be used inside of <ContractProvider />, please declare it at a higher level"
    )
  }
  return context
}

// const updateContractGasCostMap = (k: string, v: GasCostPerLine[]) => {
//     setContractGasCostMap(new Map(contractGasCostMap.set(k, v)))
// }
// const [contractGasCostMap, setContractGasCostMap] = useState(
//     new Map<string, GasCostPerLine[]>()
// ) // to render latest gas costs
