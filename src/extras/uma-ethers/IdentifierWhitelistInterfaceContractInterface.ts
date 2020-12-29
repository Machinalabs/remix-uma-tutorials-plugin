import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface IdentifierWhitelistInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "addSupportedIdentifier(bytes32)": FunctionFragment
    "isIdentifierSupported(bytes32)": FunctionFragment
    "removeSupportedIdentifier(bytes32)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "addSupportedIdentifier", values: [BytesLike]): string
  encodeFunctionData(functionFragment: "isIdentifierSupported", values: [BytesLike]): string
  encodeFunctionData(functionFragment: "removeSupportedIdentifier", values: [BytesLike]): string

  decodeFunctionResult(functionFragment: "addSupportedIdentifier", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "isIdentifierSupported", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "removeSupportedIdentifier", data: BytesLike): Result

  events: {}
}

export interface IdentifierWhitelistInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: IdentifierWhitelistInterfaceInterface

  functions: {
    addSupportedIdentifier(identifier: BytesLike, overrides?: Overrides): Promise<ContractTransaction>

    isIdentifierSupported(
      identifier: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    removeSupportedIdentifier(identifier: BytesLike, overrides?: Overrides): Promise<ContractTransaction>
  }

  addSupportedIdentifier(identifier: BytesLike, overrides?: Overrides): Promise<ContractTransaction>

  isIdentifierSupported(identifier: BytesLike, overrides?: CallOverrides): Promise<boolean>

  removeSupportedIdentifier(identifier: BytesLike, overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    addSupportedIdentifier(identifier: BytesLike, overrides?: Overrides): Promise<void>

    isIdentifierSupported(identifier: BytesLike, overrides?: CallOverrides): Promise<boolean>

    removeSupportedIdentifier(identifier: BytesLike, overrides?: Overrides): Promise<void>
  }

  filters: {}

  estimateGas: {
    addSupportedIdentifier(identifier: BytesLike): Promise<BigNumber>
    isIdentifierSupported(identifier: BytesLike): Promise<BigNumber>
    removeSupportedIdentifier(identifier: BytesLike): Promise<BigNumber>
  }

  populateTransaction: {
    addSupportedIdentifier(identifier: BytesLike): Promise<PopulatedTransaction>
    isIdentifierSupported(identifier: BytesLike): Promise<PopulatedTransaction>
    removeSupportedIdentifier(identifier: BytesLike): Promise<PopulatedTransaction>
  }
}
