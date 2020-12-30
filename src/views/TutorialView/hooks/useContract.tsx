import { BigNumber } from "ethers"
import React, { PropsWithChildren, useContext, useState } from "react"
import { EthereumAddress, UMAContractName } from "../../../extras/deployment"

export interface Token {
    name: string
    symbol: string
    decimals: number
    totalSupply: BigNumber
}

interface IContractProvider {
    setContracts: (contractsMap: Map<UMAContractName, EthereumAddress>) => void
    getContractAddress: (contractName: UMAContractName) => string
    contracts: Map<UMAContractName, EthereumAddress>
    priceIdentifiers: string[]
    addPriceIdentifier: (newPriceIdentifier: string) => string[]
    collateralTokens: Token[]
    addCollateralToken: (newToken: Token) => Token[],
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
    addPriceIdentifier: (newPriceIdentifier: string) => { return ["ETH/BTC"] },
    collateralTokens: [{ name: "WETH", symbol: "WETH", decimals: 18, totalSupply: BigNumber.from("10000000") }],
    addCollateralToken: (newToken: Token) => [{ name: "WETH", symbol: "WETH", decimals: 18, totalSupply: BigNumber.from("10000000") }],
    syntheticTokens: [{ name: "SNT", symbol: "SNT", decimals: 18, totalSupply: BigNumber.from("10000000") }],
    addSyntheticToken: (newToken: Token) => [{ name: "SNT", symbol: "SNT", decimals: 18, totalSupply: BigNumber.from("10000000") }]
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
                addSyntheticToken
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
