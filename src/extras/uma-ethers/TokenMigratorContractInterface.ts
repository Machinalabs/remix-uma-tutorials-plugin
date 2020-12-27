import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface TokenMigratorInterface extends ethers.utils.Interface {
  functions: {
    "hasMigrated(address)": FunctionFragment
    "migrateTokens(address)": FunctionFragment
    "newToken()": FunctionFragment
    "oldToken()": FunctionFragment
    "rate()": FunctionFragment
    "snapshotId()": FunctionFragment
  }

  encodeFunctionData(functionFragment: "hasMigrated", values: [string]): string
  encodeFunctionData(functionFragment: "migrateTokens", values: [string]): string
  encodeFunctionData(functionFragment: "newToken", values?: undefined): string
  encodeFunctionData(functionFragment: "oldToken", values?: undefined): string
  encodeFunctionData(functionFragment: "rate", values?: undefined): string
  encodeFunctionData(functionFragment: "snapshotId", values?: undefined): string

  decodeFunctionResult(functionFragment: "hasMigrated", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "migrateTokens", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "newToken", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "oldToken", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "snapshotId", data: BytesLike): Result

  events: {}
}

export interface TokenMigrator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: TokenMigratorInterface

  functions: {
    hasMigrated(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    migrateTokens(tokenHolder: string, overrides?: Overrides): Promise<ContractTransaction>

    newToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    oldToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    rate(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber
      0: BigNumber
    }>

    snapshotId(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>
  }

  hasMigrated(arg0: string, overrides?: CallOverrides): Promise<boolean>

  migrateTokens(tokenHolder: string, overrides?: Overrides): Promise<ContractTransaction>

  newToken(overrides?: CallOverrides): Promise<string>

  oldToken(overrides?: CallOverrides): Promise<string>

  rate(overrides?: CallOverrides): Promise<BigNumber>

  snapshotId(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    hasMigrated(arg0: string, overrides?: CallOverrides): Promise<boolean>

    migrateTokens(tokenHolder: string, overrides?: Overrides): Promise<void>

    newToken(overrides?: CallOverrides): Promise<string>

    oldToken(overrides?: CallOverrides): Promise<string>

    rate(overrides?: CallOverrides): Promise<BigNumber>

    snapshotId(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    hasMigrated(arg0: string): Promise<BigNumber>
    migrateTokens(tokenHolder: string): Promise<BigNumber>
    newToken(): Promise<BigNumber>
    oldToken(): Promise<BigNumber>
    rate(): Promise<BigNumber>
    snapshotId(): Promise<BigNumber>
  }

  populateTransaction: {
    hasMigrated(arg0: string): Promise<PopulatedTransaction>
    migrateTokens(tokenHolder: string): Promise<PopulatedTransaction>
    newToken(): Promise<PopulatedTransaction>
    oldToken(): Promise<PopulatedTransaction>
    rate(): Promise<PopulatedTransaction>
    snapshotId(): Promise<PopulatedTransaction>
  }
}
