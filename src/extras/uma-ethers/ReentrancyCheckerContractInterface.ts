import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface ReentrancyCheckerInterface extends ethers.utils.Interface {
  functions: {
    "setTransactionData(bytes)": FunctionFragment
    "txnData()": FunctionFragment
  }

  encodeFunctionData(functionFragment: "setTransactionData", values: [BytesLike]): string
  encodeFunctionData(functionFragment: "txnData", values?: undefined): string

  decodeFunctionResult(functionFragment: "setTransactionData", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "txnData", data: BytesLike): Result

  events: {}
}

export interface ReentrancyChecker extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ReentrancyCheckerInterface

  functions: {
    setTransactionData(_txnData: BytesLike, overrides?: Overrides): Promise<ContractTransaction>

    txnData(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>
  }

  setTransactionData(_txnData: BytesLike, overrides?: Overrides): Promise<ContractTransaction>

  txnData(overrides?: CallOverrides): Promise<string>

  callStatic: {
    setTransactionData(_txnData: BytesLike, overrides?: Overrides): Promise<void>

    txnData(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    setTransactionData(_txnData: BytesLike): Promise<BigNumber>
    txnData(): Promise<BigNumber>
  }

  populateTransaction: {
    setTransactionData(_txnData: BytesLike): Promise<PopulatedTransaction>
    txnData(): Promise<PopulatedTransaction>
  }
}
