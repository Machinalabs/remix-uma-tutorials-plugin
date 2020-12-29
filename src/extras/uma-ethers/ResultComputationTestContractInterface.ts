import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface ResultComputationTestInterface extends ethers.utils.Interface {
  functions: {
    "data()": FunctionFragment
    "wrapAddVote(int256,uint256)": FunctionFragment
    "wrapGetResolvedPrice(uint256)": FunctionFragment
    "wrapGetTotalCorrectlyVotedTokens()": FunctionFragment
    "wrapWasVoteCorrect(bytes32)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "data", values?: undefined): string
  encodeFunctionData(functionFragment: "wrapAddVote", values: [BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: "wrapGetResolvedPrice", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "wrapGetTotalCorrectlyVotedTokens", values?: undefined): string
  encodeFunctionData(functionFragment: "wrapWasVoteCorrect", values: [BytesLike]): string

  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "wrapAddVote", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "wrapGetResolvedPrice", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "wrapGetTotalCorrectlyVotedTokens", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "wrapWasVoteCorrect", data: BytesLike): Result

  events: {}
}

export interface ResultComputationTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ResultComputationTestInterface

  functions: {
    data(
      overrides?: CallOverrides
    ): Promise<{
      totalVotes: { rawValue: BigNumber; 0: BigNumber }
      currentMode: BigNumber
      0: { rawValue: BigNumber; 0: BigNumber }
      1: BigNumber
    }>

    wrapAddVote(
      votePrice: BigNumberish,
      numberTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    wrapGetResolvedPrice(
      minVoteThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      isResolved: boolean
      price: BigNumber
      0: boolean
      1: BigNumber
    }>

    wrapGetTotalCorrectlyVotedTokens(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    wrapWasVoteCorrect(
      revealHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>
  }

  data(
    overrides?: CallOverrides
  ): Promise<{
    totalVotes: { rawValue: BigNumber; 0: BigNumber }
    currentMode: BigNumber
    0: { rawValue: BigNumber; 0: BigNumber }
    1: BigNumber
  }>

  wrapAddVote(votePrice: BigNumberish, numberTokens: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  wrapGetResolvedPrice(
    minVoteThreshold: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    isResolved: boolean
    price: BigNumber
    0: boolean
    1: BigNumber
  }>

  wrapGetTotalCorrectlyVotedTokens(overrides?: CallOverrides): Promise<BigNumber>

  wrapWasVoteCorrect(revealHash: BytesLike, overrides?: CallOverrides): Promise<boolean>

  callStatic: {
    data(
      overrides?: CallOverrides
    ): Promise<{
      totalVotes: { rawValue: BigNumber; 0: BigNumber }
      currentMode: BigNumber
      0: { rawValue: BigNumber; 0: BigNumber }
      1: BigNumber
    }>

    wrapAddVote(votePrice: BigNumberish, numberTokens: BigNumberish, overrides?: Overrides): Promise<void>

    wrapGetResolvedPrice(
      minVoteThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      isResolved: boolean
      price: BigNumber
      0: boolean
      1: BigNumber
    }>

    wrapGetTotalCorrectlyVotedTokens(overrides?: CallOverrides): Promise<BigNumber>

    wrapWasVoteCorrect(revealHash: BytesLike, overrides?: CallOverrides): Promise<boolean>
  }

  filters: {}

  estimateGas: {
    data(): Promise<BigNumber>
    wrapAddVote(votePrice: BigNumberish, numberTokens: BigNumberish): Promise<BigNumber>
    wrapGetResolvedPrice(minVoteThreshold: BigNumberish): Promise<BigNumber>
    wrapGetTotalCorrectlyVotedTokens(): Promise<BigNumber>
    wrapWasVoteCorrect(revealHash: BytesLike): Promise<BigNumber>
  }

  populateTransaction: {
    data(): Promise<PopulatedTransaction>
    wrapAddVote(votePrice: BigNumberish, numberTokens: BigNumberish): Promise<PopulatedTransaction>
    wrapGetResolvedPrice(minVoteThreshold: BigNumberish): Promise<PopulatedTransaction>
    wrapGetTotalCorrectlyVotedTokens(): Promise<PopulatedTransaction>
    wrapWasVoteCorrect(revealHash: BytesLike): Promise<PopulatedTransaction>
  }
}
