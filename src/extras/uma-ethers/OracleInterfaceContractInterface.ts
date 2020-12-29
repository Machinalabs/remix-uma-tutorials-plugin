import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface OracleInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "getPrice(bytes32,uint256)": FunctionFragment
    "hasPrice(bytes32,uint256)": FunctionFragment
    "requestPrice(bytes32,uint256)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "getPrice", values: [BytesLike, BigNumberish]): string
  encodeFunctionData(functionFragment: "hasPrice", values: [BytesLike, BigNumberish]): string
  encodeFunctionData(functionFragment: "requestPrice", values: [BytesLike, BigNumberish]): string

  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "hasPrice", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "requestPrice", data: BytesLike): Result

  events: {}
}

export interface OracleInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: OracleInterfaceInterface

  functions: {
    getPrice(
      identifier: BytesLike,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    hasPrice(
      identifier: BytesLike,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    requestPrice(identifier: BytesLike, time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>
  }

  getPrice(identifier: BytesLike, time: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  hasPrice(identifier: BytesLike, time: BigNumberish, overrides?: CallOverrides): Promise<boolean>

  requestPrice(identifier: BytesLike, time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    getPrice(identifier: BytesLike, time: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    hasPrice(identifier: BytesLike, time: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    requestPrice(identifier: BytesLike, time: BigNumberish, overrides?: Overrides): Promise<void>
  }

  filters: {}

  estimateGas: {
    getPrice(identifier: BytesLike, time: BigNumberish): Promise<BigNumber>
    hasPrice(identifier: BytesLike, time: BigNumberish): Promise<BigNumber>
    requestPrice(identifier: BytesLike, time: BigNumberish): Promise<BigNumber>
  }

  populateTransaction: {
    getPrice(identifier: BytesLike, time: BigNumberish): Promise<PopulatedTransaction>
    hasPrice(identifier: BytesLike, time: BigNumberish): Promise<PopulatedTransaction>
    requestPrice(identifier: BytesLike, time: BigNumberish): Promise<PopulatedTransaction>
  }
}
