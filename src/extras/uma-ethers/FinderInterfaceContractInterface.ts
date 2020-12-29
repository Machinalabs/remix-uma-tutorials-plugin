import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface FinderInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "changeImplementationAddress(bytes32,address)": FunctionFragment
    "getImplementationAddress(bytes32)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "changeImplementationAddress", values: [BytesLike, string]): string
  encodeFunctionData(functionFragment: "getImplementationAddress", values: [BytesLike]): string

  decodeFunctionResult(functionFragment: "changeImplementationAddress", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getImplementationAddress", data: BytesLike): Result

  events: {}
}

export interface FinderInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: FinderInterfaceInterface

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
  }

  changeImplementationAddress(
    interfaceName: BytesLike,
    implementationAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  getImplementationAddress(interfaceName: BytesLike, overrides?: CallOverrides): Promise<string>

  callStatic: {
    changeImplementationAddress(
      interfaceName: BytesLike,
      implementationAddress: string,
      overrides?: Overrides
    ): Promise<void>

    getImplementationAddress(interfaceName: BytesLike, overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    changeImplementationAddress(interfaceName: BytesLike, implementationAddress: string): Promise<BigNumber>
    getImplementationAddress(interfaceName: BytesLike): Promise<BigNumber>
  }

  populateTransaction: {
    changeImplementationAddress(interfaceName: BytesLike, implementationAddress: string): Promise<PopulatedTransaction>
    getImplementationAddress(interfaceName: BytesLike): Promise<PopulatedTransaction>
  }
}
