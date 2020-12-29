import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface StoreInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "computeFinalFee(address)": FunctionFragment
    "computeRegularFee(uint256,uint256,tuple)": FunctionFragment
    "payOracleFees()": FunctionFragment
    "payOracleFeesErc20(address,tuple)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "computeFinalFee", values: [string]): string
  encodeFunctionData(
    functionFragment: "computeRegularFee",
    values: [BigNumberish, BigNumberish, { rawValue: BigNumberish }]
  ): string
  encodeFunctionData(functionFragment: "payOracleFees", values?: undefined): string
  encodeFunctionData(functionFragment: "payOracleFeesErc20", values: [string, { rawValue: BigNumberish }]): string

  decodeFunctionResult(functionFragment: "computeFinalFee", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "computeRegularFee", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "payOracleFees", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "payOracleFeesErc20", data: BytesLike): Result

  events: {}
}

export interface StoreInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: StoreInterfaceInterface

  functions: {
    computeFinalFee(
      currency: string,
      overrides?: CallOverrides
    ): Promise<{
      0: { rawValue: BigNumber; 0: BigNumber }
    }>

    computeRegularFee(
      startTime: BigNumberish,
      endTime: BigNumberish,
      pfc: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      regularFee: { rawValue: BigNumber; 0: BigNumber }
      latePenalty: { rawValue: BigNumber; 0: BigNumber }
      0: { rawValue: BigNumber; 0: BigNumber }
      1: { rawValue: BigNumber; 0: BigNumber }
    }>

    payOracleFees(overrides?: PayableOverrides): Promise<ContractTransaction>

    payOracleFeesErc20(
      erc20Address: string,
      amount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  computeFinalFee(currency: string, overrides?: CallOverrides): Promise<{ rawValue: BigNumber; 0: BigNumber }>

  computeRegularFee(
    startTime: BigNumberish,
    endTime: BigNumberish,
    pfc: { rawValue: BigNumberish },
    overrides?: CallOverrides
  ): Promise<{
    regularFee: { rawValue: BigNumber; 0: BigNumber }
    latePenalty: { rawValue: BigNumber; 0: BigNumber }
    0: { rawValue: BigNumber; 0: BigNumber }
    1: { rawValue: BigNumber; 0: BigNumber }
  }>

  payOracleFees(overrides?: PayableOverrides): Promise<ContractTransaction>

  payOracleFeesErc20(
    erc20Address: string,
    amount: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    computeFinalFee(currency: string, overrides?: CallOverrides): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    computeRegularFee(
      startTime: BigNumberish,
      endTime: BigNumberish,
      pfc: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      regularFee: { rawValue: BigNumber; 0: BigNumber }
      latePenalty: { rawValue: BigNumber; 0: BigNumber }
      0: { rawValue: BigNumber; 0: BigNumber }
      1: { rawValue: BigNumber; 0: BigNumber }
    }>

    payOracleFees(overrides?: PayableOverrides): Promise<void>

    payOracleFeesErc20(erc20Address: string, amount: { rawValue: BigNumberish }, overrides?: Overrides): Promise<void>
  }

  filters: {}

  estimateGas: {
    computeFinalFee(currency: string): Promise<BigNumber>
    computeRegularFee(
      startTime: BigNumberish,
      endTime: BigNumberish,
      pfc: { rawValue: BigNumberish }
    ): Promise<BigNumber>
    payOracleFees(): Promise<BigNumber>
    payOracleFeesErc20(erc20Address: string, amount: { rawValue: BigNumberish }): Promise<BigNumber>
  }

  populateTransaction: {
    computeFinalFee(currency: string): Promise<PopulatedTransaction>
    computeRegularFee(
      startTime: BigNumberish,
      endTime: BigNumberish,
      pfc: { rawValue: BigNumberish }
    ): Promise<PopulatedTransaction>
    payOracleFees(): Promise<PopulatedTransaction>
    payOracleFeesErc20(erc20Address: string, amount: { rawValue: BigNumberish }): Promise<PopulatedTransaction>
  }
}
