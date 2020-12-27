import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface TestableInterface extends ethers.utils.Interface {
  functions: {
    "getCurrentTime()": FunctionFragment
    "setCurrentTime(uint256)": FunctionFragment
    "timerAddress()": FunctionFragment
  }

  encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string
  encodeFunctionData(functionFragment: "setCurrentTime", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "timerAddress", values?: undefined): string

  decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "timerAddress", data: BytesLike): Result

  events: {}
}

export interface Testable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: TestableInterface

  functions: {
    getCurrentTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    timerAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>
  }

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

  setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  timerAddress(overrides?: CallOverrides): Promise<string>

  callStatic: {
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<void>

    timerAddress(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    getCurrentTime(): Promise<BigNumber>
    setCurrentTime(time: BigNumberish): Promise<BigNumber>
    timerAddress(): Promise<BigNumber>
  }

  populateTransaction: {
    getCurrentTime(): Promise<PopulatedTransaction>
    setCurrentTime(time: BigNumberish): Promise<PopulatedTransaction>
    timerAddress(): Promise<PopulatedTransaction>
  }
}
