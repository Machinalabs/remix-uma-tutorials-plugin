import { BigNumber, ethers } from "ethers"
import React, { PropsWithChildren, useContext, useEffect, useState } from "react"
import { EthereumAddress, UMAContractName } from "../../../extras/deployment"

import TestnetERC20Artifact from "@uma/core/build/contracts/TestnetERC20.json"
import ExpandedERC20Artifact from "@uma/core/build/contracts/ExpandedERC20.json"
import ExpiringMultiPartyArtifact from "@uma/core/build/contracts/ExpiringMultiParty.json"
import { formatUnits } from "ethers/lib/utils"

export interface Token {
  name: string
  symbol: string
  decimals: number
  totalSupply: BigNumber
  address?: string
}

export interface ExpiringMultiParty {
  address: string
  expirationTimestamp: number
  syntheticName: string
  syntheticSymbol: string
  collateralRequirement: number
  minSponsorTokens: number
  withdrawalLiveness: number
  liquidationLiveness: number
}

export interface Position {
  syntheticTokens: BigNumber
  collateralAmount: BigNumber
}

interface IContractProvider {
  setContracts: (contractsMap: Map<UMAContractName, EthereumAddress>) => void
  getContractAddress: (contractName: UMAContractName) => string
  addContractAddress: (contractName: UMAContractName, address: EthereumAddress) => void
  contracts: Map<UMAContractName, EthereumAddress>
  priceIdentifiers: string[]
  addPriceIdentifier: (newPriceIdentifier: string) => string[]
  collateralTokens: Token[]
  addCollateralToken: (newToken: Token) => Token[]
  syntheticTokens: Token[]
  addSyntheticToken: (newToken: Token) => Token[]
  cleanData: () => void
  collateralBalance: string
  syntheticBalance: string
  updateBalances: (signer: any, account: string) => Promise<void>
  expiringMultiParties: ExpiringMultiParty[]
  addExpiringMultiParty: (newEMP: ExpiringMultiParty) => void
  positions: Position[]
  addPosition: (newPosition: Position) => void
  updateSyntheticTotalSupply: (signer: any) => Promise<void>
  updatePositions: (signer: any, account: string) => Promise<void>
}

/* tslint:disable */
// Defaults
const ContractContext = React.createContext<IContractProvider>({
  setContracts: (contractsMap: Map<UMAContractName, EthereumAddress>) => {},
  getContractAddress: (contractName: UMAContractName) => {
    return ""
  },
  addContractAddress: (contractName: UMAContractName, address: EthereumAddress) => {},
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
  cleanData: () => {},
  collateralBalance: "0",
  syntheticBalance: "0",
  updateBalances: (signer: any, account: string) => {
    return Promise.resolve()
  },
  expiringMultiParties: [],
  addExpiringMultiParty: (newEMP: ExpiringMultiParty) => {},
  positions: [],
  addPosition: (newPosition: Position) => {},
  updateSyntheticTotalSupply: (signer: any) => {
    return Promise.resolve()
  },
  updatePositions: (signer: any, account: string) => {
    return Promise.resolve()
  },
})
/* tslint:enable */

export const ContractProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [contracts, setContracts] = useState(new Map<UMAContractName, EthereumAddress>())
  const [priceIdentifiers, setPriceIdentifiers] = useState<string[]>([])
  const [collateralTokens, setCollateralTokens] = useState<Token[]>([])
  const [syntheticTokens, setSyntheticTokens] = useState<Token[]>([])
  const [collateralBalance, setCollateralBalance] = useState("0")
  const [syntheticBalance, setSyntheticBalance] = useState("0")

  const [expiringMultiParties, setExpiringMultiParties] = useState<ExpiringMultiParty[]>([])
  const [positions, setPositions] = useState<Position[]>([])

  const getContractAddress = (contractName: UMAContractName) => {
    return contracts.get(contractName) as string
  }

  const addPriceIdentifier = (newPriceIdentifier: string) => {
    const newItems = [...priceIdentifiers, newPriceIdentifier]
    setPriceIdentifiers(newItems)
    return newItems
  }

  const addCollateralToken = (newToken: Token) => {
    console.log("newToken", newToken)
    const newItems = [...collateralTokens, newToken]
    console.log("newItems", newItems)
    setCollateralTokens(newItems)
    return newItems
  }

  const addSyntheticToken = (newToken: Token) => {
    const newItems = [...syntheticTokens, newToken]
    setSyntheticTokens(newItems)
    return newItems
  }

  const cleanData = () => {
    const resetedCollateralToken = []
    setCollateralTokens(resetedCollateralToken)

    const resetedPriceIdentifiers = []
    setPriceIdentifiers(resetedPriceIdentifiers)

    setCollateralBalance("0")
    setSyntheticBalance("0")
    addContractAddress("TestnetErc20Address", "")
    addContractAddress("SynthethicToken", "")

    const resetedPositions = []
    setPositions(resetedPositions)

    const resetedEMPs = []
    setExpiringMultiParties(resetedEMPs)

    const resetSynths = []
    setSyntheticTokens(resetSynths)
  }

  const updateBalances = async (signer: any, account: string) => {
    const testnetERC20Contract = new ethers.Contract(
      getContractAddress("TestnetErc20Address"),
      TestnetERC20Artifact.abi,
      signer
    )
    const balance: BigNumber = await testnetERC20Contract.balanceOf(account)

    setCollateralBalance(`${formatUnits(balance, "ether").toString()}`)
    console.log("Balance", balance)

    if (getContractAddress("SynthethicToken")) {
      const syntheticContract = new ethers.Contract(
        getContractAddress("SynthethicToken"),
        ExpandedERC20Artifact.abi,
        signer
      )
      const syntbalance: BigNumber = await syntheticContract.balanceOf(account)
      setSyntheticBalance(`${formatUnits(syntbalance, "ether").toString()}`)
      console.log("syntbalance", syntbalance)
    }
  }

  const addContractAddress = (contractName: UMAContractName, address: EthereumAddress) => {
    setContracts(new Map(contracts.set(contractName, address)))
  }

  const updateSyntheticTotalSupply = async (signer: any) => {
    const newSynthsWithBalancesUpdated = syntheticTokens.map(async (item) => {
      const currentItem = item
      if (currentItem.address) {
        const contractInstance = new ethers.Contract(currentItem.address, ExpandedERC20Artifact.abi, signer)
        const totalSupply = await contractInstance.totalSupply()
        return {
          ...item,
          totalSupply,
        }
      }
      return item
    })
    console.log("await Promise.all(newSynthsWithBalancesUpdated)", await Promise.all(newSynthsWithBalancesUpdated))
    setSyntheticTokens(await Promise.all(newSynthsWithBalancesUpdated))
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
    setContracts(addresses)
  }, [])

  const addExpiringMultiParty = (newItem: ExpiringMultiParty) => {
    const newItems = [...expiringMultiParties, newItem]
    setExpiringMultiParties(newItems)
    return newItems
  }

  const addPosition = (newItem: Position) => {
    const newItems = [...positions, newItem]
    setPositions(newItems)
    return newItems
  }

  const updatePositions = async (signer: any, account: string) => {
    const contractInstance = new ethers.Contract(
      getContractAddress("ExpiringMultiParty"),
      ExpiringMultiPartyArtifact.abi,
      signer
    )

    const position = await contractInstance.positions(account)

    const newPositionsUpdated: Position = {
      syntheticTokens: position.tokensOutstanding, // `${formatUnits(position.tokensOutstanding.toString(), "ether")}`,
      collateralAmount: position.rawCollateral, //`${formatUnits(position.rawCollateral.toString(), "ether")}`
    }
    setPositions([newPositionsUpdated])
  }

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
        cleanData,
        collateralBalance,
        syntheticBalance,
        updateBalances,
        addContractAddress,
        addExpiringMultiParty,
        addPosition,
        positions,
        expiringMultiParties,
        updateSyntheticTotalSupply,
        updatePositions,
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
