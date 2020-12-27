import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface FinderInterface extends ethers.utils.Interface {
  functions: {
    "changeImplementationAddress(bytes32,address)": FunctionFragment
    "getImplementationAddress(bytes32)": FunctionFragment
    "interfacesImplemented(bytes32)": FunctionFragment
    "owner()": FunctionFragment
    "renounceOwnership()": FunctionFragment
    "transferOwnership(address)": FunctionFragment
  }

  encodeFunctionData(
    functionFragment: "changeImplementationAddress",
    values: [BytesLike, string]
  ): string
  encodeFunctionData(functionFragment: "getImplementationAddress", values: [BytesLike]): string
  encodeFunctionData(functionFragment: "interfacesImplemented", values: [BytesLike]): string
  encodeFunctionData(functionFragment: "owner", values?: undefined): string
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string

  decodeFunctionResult(functionFragment: "changeImplementationAddress", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getImplementationAddress", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "interfacesImplemented", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result

  events: {
    "InterfaceImplementationChanged(bytes32,address)": EventFragment
    "OwnershipTransferred(address,address)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "InterfaceImplementationChanged"): EventFragment
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment
}

export interface Finder extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: FinderInterface

  functions: {
    changeImplementationAddress(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    getImplementationAddress(
      interfaceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    interfacesImplemented(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>
  }

  changeImplementationAddress(
    interfaceName: BytesLike,
    implementationAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  getImplementationAddress(interfaceName: BytesLike, overrides?: CallOverrides): Promise<string>

  interfacesImplemented(arg0: BytesLike, overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

  transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    changeImplementationAddress(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: Overrides
    ): Promise<void>

    getImplementationAddress(interfaceName: BytesLike, overrides?: CallOverrides): Promise<string>

    interfacesImplemented(arg0: BytesLike, overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: Overrides): Promise<void>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<void>
  }

  filters: {
    InterfaceImplementationChanged(
      interfaceName: BytesLike | null,
      newImplementationAddress: string | null
    ): EventFilter

    OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter
  }

  estimateGas: {
    changeImplementationAddress(
      interfaceName: BytesLike,
      implementationAddress: string
    ): Promise<BigNumber>
    getImplementationAddress(interfaceName: BytesLike): Promise<BigNumber>
    interfacesImplemented(arg0: BytesLike): Promise<BigNumber>
    owner(): Promise<BigNumber>
    renounceOwnership(): Promise<BigNumber>
    transferOwnership(newOwner: string): Promise<BigNumber>
  }

  populateTransaction: {
    changeImplementationAddress(
      interfaceName: BytesLike,
      implementationAddress: string
    ): Promise<PopulatedTransaction>
    getImplementationAddress(interfaceName: BytesLike): Promise<PopulatedTransaction>
    interfacesImplemented(arg0: BytesLike): Promise<PopulatedTransaction>
    owner(): Promise<PopulatedTransaction>
    renounceOwnership(): Promise<PopulatedTransaction>
    transferOwnership(newOwner: string): Promise<PopulatedTransaction>
  }
}
