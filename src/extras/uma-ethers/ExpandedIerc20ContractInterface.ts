import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface ExpandedIerc20Interface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment
    "approve(address,uint256)": FunctionFragment
    "balanceOf(address)": FunctionFragment
    "burn(uint256)": FunctionFragment
    "mint(address,uint256)": FunctionFragment
    "totalSupply()": FunctionFragment
    "transfer(address,uint256)": FunctionFragment
    "transferFrom(address,address,uint256)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "allowance", values: [string, string]): string
  encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string
  encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result

  events: {
    "Approval(address,address,uint256)": EventFragment
    "Transfer(address,address,uint256)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment
}

export interface ExpandedIerc20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ExpandedIerc20Interface

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    burn(value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    mint(to: string, value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

  burn(value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  mint(to: string, value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(spender: string, amount: BigNumberish, overrides?: Overrides): Promise<boolean>

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    burn(value: BigNumberish, overrides?: Overrides): Promise<void>

    mint(to: string, value: BigNumberish, overrides?: Overrides): Promise<boolean>

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>

    transfer(recipient: string, amount: BigNumberish, overrides?: Overrides): Promise<boolean>

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>
  }

  filters: {
    Approval(owner: string | null, spender: string | null, value: null): EventFilter

    Transfer(from: string | null, to: string | null, value: null): EventFilter
  }

  estimateGas: {
    allowance(owner: string, spender: string): Promise<BigNumber>
    approve(spender: string, amount: BigNumberish): Promise<BigNumber>
    balanceOf(account: string): Promise<BigNumber>
    burn(value: BigNumberish): Promise<BigNumber>
    mint(to: string, value: BigNumberish): Promise<BigNumber>
    totalSupply(): Promise<BigNumber>
    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>
    transferFrom(sender: string, recipient: string, amount: BigNumberish): Promise<BigNumber>
  }

  populateTransaction: {
    allowance(owner: string, spender: string): Promise<PopulatedTransaction>
    approve(spender: string, amount: BigNumberish): Promise<PopulatedTransaction>
    balanceOf(account: string): Promise<PopulatedTransaction>
    burn(value: BigNumberish): Promise<PopulatedTransaction>
    mint(to: string, value: BigNumberish): Promise<PopulatedTransaction>
    totalSupply(): Promise<PopulatedTransaction>
    transfer(recipient: string, amount: BigNumberish): Promise<PopulatedTransaction>
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>
  }
}
