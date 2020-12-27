import { renderHook, act } from "@testing-library/react-hooks"
import { EthereumAddress, UMAContractName } from "../../../extras/deployment"
import { useContract, ContractProvider } from "./useContract"

describe("useContract tests", () => {
    const render = () => {
        const wrapper = ({ children }: any) => <ContractProvider>{children}</ContractProvider>
        const { result } = renderHook(() => useContract(), { wrapper })
        return {
            result,
        }
    }

    test("onCollateralDeployed", () => {
        const { result } = render()

        const contracts = new Map<UMAContractName, EthereumAddress>()
        contracts.set('Finder', "0x00001")

        act(() => {
            result.current.setContracts(contracts)
        })

        const contractAddress = result.current.getContractAddress('Finder')

        expect(contractAddress).toBeDefined()
        expect(contractAddress).toEqual("0x00001")
    })
})
