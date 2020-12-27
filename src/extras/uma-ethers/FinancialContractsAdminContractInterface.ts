import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface FinancialContractsAdminInterface extends ethers.utils.Interface {
  functions: {
    "callEmergencyShutdown(address)": FunctionFragment
    "callRemargin(address)": FunctionFragment
    "owner()": FunctionFragment
    "renounceOwnership()": FunctionFragment
    "transferOwnership(address)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "callEmergencyShutdown", values: [string]): string
  encodeFunctionData(functionFragment: "callRemargin", values: [string]): string
  encodeFunctionData(functionFragment: "owner", values?: undefined): string
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string

  decodeFunctionResult(functionFragment: "callEmergencyShutdown", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "callRemargin", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result

  events: {
    "OwnershipTransferred(address,address)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment
}

export interface FinancialContractsAdmin extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: FinancialContractsAdminInterface

  functions: {
    callEmergencyShutdown(
      financialContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    callRemargin(financialContract: string, overrides?: Overrides): Promise<ContractTransaction>

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>
  }

  callEmergencyShutdown(
    financialContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callRemargin(financialContract: string, overrides?: Overrides): Promise<ContractTransaction>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

  transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    callEmergencyShutdown(financialContract: string, overrides?: Overrides): Promise<void>

    callRemargin(financialContract: string, overrides?: Overrides): Promise<void>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: Overrides): Promise<void>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<void>
  }

  filters: {
    OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter
  }

  estimateGas: {
    callEmergencyShutdown(financialContract: string): Promise<BigNumber>
    callRemargin(financialContract: string): Promise<BigNumber>
    owner(): Promise<BigNumber>
    renounceOwnership(): Promise<BigNumber>
    transferOwnership(newOwner: string): Promise<BigNumber>
  }

  populateTransaction: {
    callEmergencyShutdown(financialContract: string): Promise<PopulatedTransaction>
    callRemargin(financialContract: string): Promise<PopulatedTransaction>
    owner(): Promise<PopulatedTransaction>
    renounceOwnership(): Promise<PopulatedTransaction>
    transferOwnership(newOwner: string): Promise<PopulatedTransaction>
  }
}
