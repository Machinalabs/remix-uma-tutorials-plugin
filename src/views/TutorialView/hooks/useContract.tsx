import React, { PropsWithChildren, useContext, useState } from "react"
import { EthereumAddress, UMAContractName } from "../../../extras/deployment"

interface IContractProvider {
    setContracts: (contractsMap: Map<UMAContractName, EthereumAddress>) => void
    getContractAddress: (contractName: UMAContractName) => string
    contracts: Map<UMAContractName, EthereumAddress>
}

/* tslint:disable */
const ContractContext = React.createContext<IContractProvider>({
    setContracts: (contractsMap: Map<UMAContractName, EthereumAddress>) => { },
    getContractAddress: (contractName: UMAContractName) => {
        return ""
    },
    contracts: new Map<UMAContractName, EthereumAddress>()
})
/* tslint:enable */

export const ContractProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [contracts, setContracts] = useState(new Map<UMAContractName, EthereumAddress>())

    const getContractAddress = (contractName: UMAContractName) => {
        return contracts.get(contractName) as string
    }
    return (
        <ContractContext.Provider
            value={{
                setContracts,
                getContractAddress,
                contracts
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
