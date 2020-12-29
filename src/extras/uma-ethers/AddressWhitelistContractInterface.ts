import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface AddressWhitelistInterface extends ethers.utils.Interface {
  functions: {
    "addToWhitelist(address)": FunctionFragment
    "getWhitelist()": FunctionFragment
    "isOnWhitelist(address)": FunctionFragment
    "owner()": FunctionFragment
    "removeFromWhitelist(address)": FunctionFragment
    "renounceOwnership()": FunctionFragment
    "transferOwnership(address)": FunctionFragment
    "whitelist(address)": FunctionFragment
    "whitelistIndices(uint256)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "addToWhitelist", values: [string]): string
  encodeFunctionData(functionFragment: "getWhitelist", values?: undefined): string
  encodeFunctionData(functionFragment: "isOnWhitelist", values: [string]): string
  encodeFunctionData(functionFragment: "owner", values?: undefined): string
  encodeFunctionData(functionFragment: "removeFromWhitelist", values: [string]): string
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string
  encodeFunctionData(functionFragment: "whitelist", values: [string]): string
  encodeFunctionData(functionFragment: "whitelistIndices", values: [BigNumberish]): string

  decodeFunctionResult(functionFragment: "addToWhitelist", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getWhitelist", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "isOnWhitelist", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "removeFromWhitelist", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "whitelistIndices", data: BytesLike): Result

  events: {
    "AddedToWhitelist(address)": EventFragment
    "OwnershipTransferred(address,address)": EventFragment
    "RemovedFromWhitelist(address)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "AddedToWhitelist"): EventFragment
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RemovedFromWhitelist"): EventFragment
}

export interface AddressWhitelist extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: AddressWhitelistInterface

  functions: {
    addToWhitelist(newElement: string, overrides?: Overrides): Promise<ContractTransaction>

    getWhitelist(
      overrides?: CallOverrides
    ): Promise<{
      activeWhitelist: string[]
      0: string[]
    }>

    isOnWhitelist(
      elementToCheck: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    removeFromWhitelist(elementToRemove: string, overrides?: Overrides): Promise<ContractTransaction>

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

    whitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: number
    }>

    whitelistIndices(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>
  }

  addToWhitelist(newElement: string, overrides?: Overrides): Promise<ContractTransaction>

  getWhitelist(overrides?: CallOverrides): Promise<string[]>

  isOnWhitelist(elementToCheck: string, overrides?: CallOverrides): Promise<boolean>

  owner(overrides?: CallOverrides): Promise<string>

  removeFromWhitelist(elementToRemove: string, overrides?: Overrides): Promise<ContractTransaction>

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

  transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

  whitelist(arg0: string, overrides?: CallOverrides): Promise<number>

  whitelistIndices(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  callStatic: {
    addToWhitelist(newElement: string, overrides?: Overrides): Promise<void>

    getWhitelist(overrides?: CallOverrides): Promise<string[]>

    isOnWhitelist(elementToCheck: string, overrides?: CallOverrides): Promise<boolean>

    owner(overrides?: CallOverrides): Promise<string>

    removeFromWhitelist(elementToRemove: string, overrides?: Overrides): Promise<void>

    renounceOwnership(overrides?: Overrides): Promise<void>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<void>

    whitelist(arg0: string, overrides?: CallOverrides): Promise<number>

    whitelistIndices(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>
  }

  filters: {
    AddedToWhitelist(addedAddress: string | null): EventFilter

    OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter

    RemovedFromWhitelist(removedAddress: string | null): EventFilter
  }

  estimateGas: {
    addToWhitelist(newElement: string): Promise<BigNumber>
    getWhitelist(): Promise<BigNumber>
    isOnWhitelist(elementToCheck: string): Promise<BigNumber>
    owner(): Promise<BigNumber>
    removeFromWhitelist(elementToRemove: string): Promise<BigNumber>
    renounceOwnership(): Promise<BigNumber>
    transferOwnership(newOwner: string): Promise<BigNumber>
    whitelist(arg0: string): Promise<BigNumber>
    whitelistIndices(arg0: BigNumberish): Promise<BigNumber>
  }

  populateTransaction: {
    addToWhitelist(newElement: string): Promise<PopulatedTransaction>
    getWhitelist(): Promise<PopulatedTransaction>
    isOnWhitelist(elementToCheck: string): Promise<PopulatedTransaction>
    owner(): Promise<PopulatedTransaction>
    removeFromWhitelist(elementToRemove: string): Promise<PopulatedTransaction>
    renounceOwnership(): Promise<PopulatedTransaction>
    transferOwnership(newOwner: string): Promise<PopulatedTransaction>
    whitelist(arg0: string): Promise<PopulatedTransaction>
    whitelistIndices(arg0: BigNumberish): Promise<PopulatedTransaction>
  }
}
