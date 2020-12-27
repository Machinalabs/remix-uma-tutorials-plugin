import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface ReentrancyMockInterface extends ethers.utils.Interface {
  functions: {
    "callback()": FunctionFragment
    "countAndCall(address)": FunctionFragment
    "countAndSend(address)": FunctionFragment
    "countLocalCall()": FunctionFragment
    "countLocalRecursive(uint256)": FunctionFragment
    "countThisCall()": FunctionFragment
    "countThisRecursive(uint256)": FunctionFragment
    "counter()": FunctionFragment
    "getCount()": FunctionFragment
  }

  encodeFunctionData(functionFragment: "callback", values?: undefined): string
  encodeFunctionData(functionFragment: "countAndCall", values: [string]): string
  encodeFunctionData(functionFragment: "countAndSend", values: [string]): string
  encodeFunctionData(functionFragment: "countLocalCall", values?: undefined): string
  encodeFunctionData(functionFragment: "countLocalRecursive", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "countThisCall", values?: undefined): string
  encodeFunctionData(functionFragment: "countThisRecursive", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "counter", values?: undefined): string
  encodeFunctionData(functionFragment: "getCount", values?: undefined): string

  decodeFunctionResult(functionFragment: "callback", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "countAndCall", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "countAndSend", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "countLocalCall", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "countLocalRecursive", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "countThisCall", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "countThisRecursive", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCount", data: BytesLike): Result

  events: {}
}

export interface ReentrancyMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ReentrancyMockInterface

  functions: {
    callback(overrides?: Overrides): Promise<ContractTransaction>

    countAndCall(attacker: string, overrides?: Overrides): Promise<ContractTransaction>

    countAndSend(attacker: string, overrides?: Overrides): Promise<ContractTransaction>

    countLocalCall(overrides?: Overrides): Promise<ContractTransaction>

    countLocalRecursive(n: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    countThisCall(overrides?: Overrides): Promise<ContractTransaction>

    countThisRecursive(n: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    counter(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    getCount(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>
  }

  callback(overrides?: Overrides): Promise<ContractTransaction>

  countAndCall(attacker: string, overrides?: Overrides): Promise<ContractTransaction>

  countAndSend(attacker: string, overrides?: Overrides): Promise<ContractTransaction>

  countLocalCall(overrides?: Overrides): Promise<ContractTransaction>

  countLocalRecursive(n: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  countThisCall(overrides?: Overrides): Promise<ContractTransaction>

  countThisRecursive(n: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  counter(overrides?: CallOverrides): Promise<BigNumber>

  getCount(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    callback(overrides?: Overrides): Promise<void>

    countAndCall(attacker: string, overrides?: Overrides): Promise<void>

    countAndSend(attacker: string, overrides?: Overrides): Promise<void>

    countLocalCall(overrides?: Overrides): Promise<void>

    countLocalRecursive(n: BigNumberish, overrides?: Overrides): Promise<void>

    countThisCall(overrides?: Overrides): Promise<void>

    countThisRecursive(n: BigNumberish, overrides?: Overrides): Promise<void>

    counter(overrides?: CallOverrides): Promise<BigNumber>

    getCount(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    callback(): Promise<BigNumber>
    countAndCall(attacker: string): Promise<BigNumber>
    countAndSend(attacker: string): Promise<BigNumber>
    countLocalCall(): Promise<BigNumber>
    countLocalRecursive(n: BigNumberish): Promise<BigNumber>
    countThisCall(): Promise<BigNumber>
    countThisRecursive(n: BigNumberish): Promise<BigNumber>
    counter(): Promise<BigNumber>
    getCount(): Promise<BigNumber>
  }

  populateTransaction: {
    callback(): Promise<PopulatedTransaction>
    countAndCall(attacker: string): Promise<PopulatedTransaction>
    countAndSend(attacker: string): Promise<PopulatedTransaction>
    countLocalCall(): Promise<PopulatedTransaction>
    countLocalRecursive(n: BigNumberish): Promise<PopulatedTransaction>
    countThisCall(): Promise<PopulatedTransaction>
    countThisRecursive(n: BigNumberish): Promise<PopulatedTransaction>
    counter(): Promise<PopulatedTransaction>
    getCount(): Promise<PopulatedTransaction>
  }
}
