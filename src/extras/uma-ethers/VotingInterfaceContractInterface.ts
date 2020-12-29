import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface VotingInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "batchCommit(tuple[])": FunctionFragment
    "batchReveal(tuple[])": FunctionFragment
    "commitVote(bytes32,uint256,bytes32)": FunctionFragment
    "getCurrentRoundId()": FunctionFragment
    "getPendingRequests()": FunctionFragment
    "getVotePhase()": FunctionFragment
    "retrieveRewards(address,uint256,tuple[])": FunctionFragment
    "revealVote(bytes32,uint256,int256,int256)": FunctionFragment
    "snapshotCurrentRound()": FunctionFragment
  }

  encodeFunctionData(
    functionFragment: "batchCommit",
    values: [
      {
        identifier: BytesLike
        time: BigNumberish
        hash: BytesLike
        encryptedVote: BytesLike
      }[]
    ]
  ): string
  encodeFunctionData(
    functionFragment: "batchReveal",
    values: [
      {
        identifier: BytesLike
        time: BigNumberish
        price: BigNumberish
        salt: BigNumberish
      }[]
    ]
  ): string
  encodeFunctionData(functionFragment: "commitVote", values: [BytesLike, BigNumberish, BytesLike]): string
  encodeFunctionData(functionFragment: "getCurrentRoundId", values?: undefined): string
  encodeFunctionData(functionFragment: "getPendingRequests", values?: undefined): string
  encodeFunctionData(functionFragment: "getVotePhase", values?: undefined): string
  encodeFunctionData(
    functionFragment: "retrieveRewards",
    values: [string, BigNumberish, { identifier: BytesLike; time: BigNumberish }[]]
  ): string
  encodeFunctionData(
    functionFragment: "revealVote",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: "snapshotCurrentRound", values?: undefined): string

  decodeFunctionResult(functionFragment: "batchCommit", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "batchReveal", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "commitVote", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCurrentRoundId", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getPendingRequests", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getVotePhase", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "retrieveRewards", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "revealVote", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "snapshotCurrentRound", data: BytesLike): Result

  events: {}
}

export interface VotingInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: VotingInterfaceInterface

  functions: {
    batchCommit(
      commits: {
        identifier: BytesLike
        time: BigNumberish
        hash: BytesLike
        encryptedVote: BytesLike
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>

    batchReveal(
      reveals: {
        identifier: BytesLike
        time: BigNumberish
        price: BigNumberish
        salt: BigNumberish
      }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>

    commitVote(
      identifier: BytesLike,
      time: BigNumberish,
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    getCurrentRoundId(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    getPendingRequests(
      overrides?: CallOverrides
    ): Promise<{
      0: { identifier: string; time: BigNumber; 0: string; 1: BigNumber }[]
    }>

    getVotePhase(
      overrides?: CallOverrides
    ): Promise<{
      0: number
    }>

    retrieveRewards(
      voterAddress: string,
      roundId: BigNumberish,
      toRetrieve: { identifier: BytesLike; time: BigNumberish }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>

    revealVote(
      identifier: BytesLike,
      time: BigNumberish,
      price: BigNumberish,
      salt: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    snapshotCurrentRound(overrides?: Overrides): Promise<ContractTransaction>
  }

  batchCommit(
    commits: {
      identifier: BytesLike
      time: BigNumberish
      hash: BytesLike
      encryptedVote: BytesLike
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>

  batchReveal(
    reveals: {
      identifier: BytesLike
      time: BigNumberish
      price: BigNumberish
      salt: BigNumberish
    }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>

  commitVote(
    identifier: BytesLike,
    time: BigNumberish,
    hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  getCurrentRoundId(overrides?: CallOverrides): Promise<BigNumber>

  getPendingRequests(
    overrides?: CallOverrides
  ): Promise<{ identifier: string; time: BigNumber; 0: string; 1: BigNumber }[]>

  getVotePhase(overrides?: CallOverrides): Promise<number>

  retrieveRewards(
    voterAddress: string,
    roundId: BigNumberish,
    toRetrieve: { identifier: BytesLike; time: BigNumberish }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>

  revealVote(
    identifier: BytesLike,
    time: BigNumberish,
    price: BigNumberish,
    salt: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  snapshotCurrentRound(overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    batchCommit(
      commits: {
        identifier: BytesLike
        time: BigNumberish
        hash: BytesLike
        encryptedVote: BytesLike
      }[],
      overrides?: Overrides
    ): Promise<void>

    batchReveal(
      reveals: {
        identifier: BytesLike
        time: BigNumberish
        price: BigNumberish
        salt: BigNumberish
      }[],
      overrides?: Overrides
    ): Promise<void>

    commitVote(identifier: BytesLike, time: BigNumberish, hash: BytesLike, overrides?: Overrides): Promise<void>

    getCurrentRoundId(overrides?: CallOverrides): Promise<BigNumber>

    getPendingRequests(
      overrides?: CallOverrides
    ): Promise<{ identifier: string; time: BigNumber; 0: string; 1: BigNumber }[]>

    getVotePhase(overrides?: CallOverrides): Promise<number>

    retrieveRewards(
      voterAddress: string,
      roundId: BigNumberish,
      toRetrieve: { identifier: BytesLike; time: BigNumberish }[],
      overrides?: Overrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    revealVote(
      identifier: BytesLike,
      time: BigNumberish,
      price: BigNumberish,
      salt: BigNumberish,
      overrides?: Overrides
    ): Promise<void>

    snapshotCurrentRound(overrides?: Overrides): Promise<void>
  }

  filters: {}

  estimateGas: {
    batchCommit(
      commits: {
        identifier: BytesLike
        time: BigNumberish
        hash: BytesLike
        encryptedVote: BytesLike
      }[]
    ): Promise<BigNumber>
    batchReveal(
      reveals: {
        identifier: BytesLike
        time: BigNumberish
        price: BigNumberish
        salt: BigNumberish
      }[]
    ): Promise<BigNumber>
    commitVote(identifier: BytesLike, time: BigNumberish, hash: BytesLike): Promise<BigNumber>
    getCurrentRoundId(): Promise<BigNumber>
    getPendingRequests(): Promise<BigNumber>
    getVotePhase(): Promise<BigNumber>
    retrieveRewards(
      voterAddress: string,
      roundId: BigNumberish,
      toRetrieve: { identifier: BytesLike; time: BigNumberish }[]
    ): Promise<BigNumber>
    revealVote(identifier: BytesLike, time: BigNumberish, price: BigNumberish, salt: BigNumberish): Promise<BigNumber>
    snapshotCurrentRound(): Promise<BigNumber>
  }

  populateTransaction: {
    batchCommit(
      commits: {
        identifier: BytesLike
        time: BigNumberish
        hash: BytesLike
        encryptedVote: BytesLike
      }[]
    ): Promise<PopulatedTransaction>
    batchReveal(
      reveals: {
        identifier: BytesLike
        time: BigNumberish
        price: BigNumberish
        salt: BigNumberish
      }[]
    ): Promise<PopulatedTransaction>
    commitVote(identifier: BytesLike, time: BigNumberish, hash: BytesLike): Promise<PopulatedTransaction>
    getCurrentRoundId(): Promise<PopulatedTransaction>
    getPendingRequests(): Promise<PopulatedTransaction>
    getVotePhase(): Promise<PopulatedTransaction>
    retrieveRewards(
      voterAddress: string,
      roundId: BigNumberish,
      toRetrieve: { identifier: BytesLike; time: BigNumberish }[]
    ): Promise<PopulatedTransaction>
    revealVote(
      identifier: BytesLike,
      time: BigNumberish,
      price: BigNumberish,
      salt: BigNumberish
    ): Promise<PopulatedTransaction>
    snapshotCurrentRound(): Promise<PopulatedTransaction>
  }
}
