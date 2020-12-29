import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface Weth9Interface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment
    "approve(address,uint256)": FunctionFragment
    "balanceOf(address)": FunctionFragment
    "decimals()": FunctionFragment
    "deposit()": FunctionFragment
    "name()": FunctionFragment
    "symbol()": FunctionFragment
    "totalSupply()": FunctionFragment
    "transfer(address,uint256)": FunctionFragment
    "transferFrom(address,address,uint256)": FunctionFragment
    "withdraw(uint256)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "allowance", values: [string, string]): string
  encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string
  encodeFunctionData(functionFragment: "name", values?: undefined): string
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string
  encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string
  encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string
  encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result

  events: {
    "Approval(address,address,uint256)": EventFragment
    "Deposit(address,uint256)": EventFragment
    "Transfer(address,address,uint256)": EventFragment
    "Withdrawal(address,uint256)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment
}

export interface Weth9 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: Weth9Interface

  functions: {
    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    approve(guy: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    decimals(
      overrides?: CallOverrides
    ): Promise<{
      0: number
    }>

    deposit(overrides?: PayableOverrides): Promise<ContractTransaction>

    name(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    symbol(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    transfer(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    withdraw(wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>
  }

  allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

  approve(guy: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

  decimals(overrides?: CallOverrides): Promise<number>

  deposit(overrides?: PayableOverrides): Promise<ContractTransaction>

  name(overrides?: CallOverrides): Promise<string>

  symbol(overrides?: CallOverrides): Promise<string>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  transfer(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  withdraw(wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(guy: string, wad: BigNumberish, overrides?: Overrides): Promise<boolean>

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    decimals(overrides?: CallOverrides): Promise<number>

    deposit(overrides?: PayableOverrides): Promise<void>

    name(overrides?: CallOverrides): Promise<string>

    symbol(overrides?: CallOverrides): Promise<string>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<boolean>

    transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<boolean>

    withdraw(wad: BigNumberish, overrides?: Overrides): Promise<void>
  }

  filters: {
    Approval(src: string | null, guy: string | null, wad: null): EventFilter

    Deposit(dst: string | null, wad: null): EventFilter

    Transfer(src: string | null, dst: string | null, wad: null): EventFilter

    Withdrawal(src: string | null, wad: null): EventFilter
  }

  estimateGas: {
    allowance(arg0: string, arg1: string): Promise<BigNumber>
    approve(guy: string, wad: BigNumberish): Promise<BigNumber>
    balanceOf(arg0: string): Promise<BigNumber>
    decimals(): Promise<BigNumber>
    deposit(): Promise<BigNumber>
    name(): Promise<BigNumber>
    symbol(): Promise<BigNumber>
    totalSupply(): Promise<BigNumber>
    transfer(dst: string, wad: BigNumberish): Promise<BigNumber>
    transferFrom(src: string, dst: string, wad: BigNumberish): Promise<BigNumber>
    withdraw(wad: BigNumberish): Promise<BigNumber>
  }

  populateTransaction: {
    allowance(arg0: string, arg1: string): Promise<PopulatedTransaction>
    approve(guy: string, wad: BigNumberish): Promise<PopulatedTransaction>
    balanceOf(arg0: string): Promise<PopulatedTransaction>
    decimals(): Promise<PopulatedTransaction>
    deposit(): Promise<PopulatedTransaction>
    name(): Promise<PopulatedTransaction>
    symbol(): Promise<PopulatedTransaction>
    totalSupply(): Promise<PopulatedTransaction>
    transfer(dst: string, wad: BigNumberish): Promise<PopulatedTransaction>
    transferFrom(src: string, dst: string, wad: BigNumberish): Promise<PopulatedTransaction>
    withdraw(wad: BigNumberish): Promise<PopulatedTransaction>
  }
}
