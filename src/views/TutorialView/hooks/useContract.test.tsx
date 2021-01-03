import { renderHook, act } from "@testing-library/react-hooks"
import { BigNumber } from "ethers"
import { EthereumAddress, UMAContractName } from "../../../extras/deployment"
import { useContract, ContractProvider, Token } from "./useContract"

describe("useContract tests", () => {
  const render = () => {
    const wrapper = ({ children }: any) => <ContractProvider>{children}</ContractProvider>
    const { result } = renderHook(() => useContract(), { wrapper })
    return {
      result,
    }
  }

  test("getContractAddress", () => {
    const { result } = render()

    const contracts = new Map<UMAContractName, EthereumAddress>()
    contracts.set("Finder", "0x00001")

    act(() => {
      result.current.setContracts(contracts)
    })

    const contractAddress = result.current.getContractAddress("Finder")

    expect(contractAddress).toBeDefined()
    expect(contractAddress).toEqual("0x00001")
  })

  test("addPriceIdentifier", () => {
    const { result } = render()

    const newPriceIdentifier = "ETB/BTC"

    expect(result.current.priceIdentifiers.length).toEqual(0)

    act(() => {
      result.current.addPriceIdentifier(newPriceIdentifier)
    })

    const priceIdentifiers = result.current.priceIdentifiers

    expect(priceIdentifiers).toBeDefined()
    expect(priceIdentifiers.length).toEqual(1)
    expect(priceIdentifiers[0]).toEqual(newPriceIdentifier)
  })

  test("addCollateralToken", () => {
    const { result } = render()

    const newToken: Token = {
      name: "WETH",
      symbol: "WETH",
      decimals: 18,
      totalSupply: BigNumber.from("10000000"),
    }

    expect(result.current.collateralTokens.length).toEqual(0)

    act(() => {
      result.current.addCollateralToken(newToken)
    })

    const collateralTokens = result.current.collateralTokens

    expect(collateralTokens).toBeDefined()
    expect(collateralTokens.length).toEqual(1)
    expect(collateralTokens[0]).toEqual(newToken)
  })

  test("addSyntheticToken", () => {
    const { result } = render()

    const newToken: Token = {
      name: "SNT",
      symbol: "SNT",
      decimals: 18,
      totalSupply: BigNumber.from("10000000"),
    }

    expect(result.current.syntheticTokens.length).toEqual(0)

    act(() => {
      result.current.addSyntheticToken(newToken)
    })

    const syntheticTokens = result.current.syntheticTokens

    expect(syntheticTokens).toBeDefined()
    expect(syntheticTokens.length).toEqual(1)
    expect(syntheticTokens[0]).toEqual(newToken)
  })
})
