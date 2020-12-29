import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface VotingTestInterface extends ethers.utils.Interface {
  functions: {
    "batchCommit(tuple[])": FunctionFragment
    "batchReveal(tuple[])": FunctionFragment
    "commitAndEmitEncryptedVote(bytes32,uint256,bytes32,bytes)": FunctionFragment
    "commitVote(bytes32,uint256,bytes32)": FunctionFragment
    "gatPercentage()": FunctionFragment
    "getCurrentRoundId()": FunctionFragment
    "getCurrentTime()": FunctionFragment
    "getPendingPriceRequestsArray()": FunctionFragment
    "getPendingRequests()": FunctionFragment
    "getPrice(bytes32,uint256)": FunctionFragment
    "getPriceRequestStatuses(tuple[])": FunctionFragment
    "getVotePhase()": FunctionFragment
    "hasPrice(bytes32,uint256)": FunctionFragment
    "inflationRate()": FunctionFragment
    "migratedAddress()": FunctionFragment
    "owner()": FunctionFragment
    "renounceOwnership()": FunctionFragment
    "requestPrice(bytes32,uint256)": FunctionFragment
    "retrieveRewards(address,uint256,tuple[])": FunctionFragment
    "revealVote(bytes32,uint256,int256,int256)": FunctionFragment
    "rewardsExpirationTimeout()": FunctionFragment
    "rounds(uint256)": FunctionFragment
    "setCurrentTime(uint256)": FunctionFragment
    "setGatPercentage(tuple)": FunctionFragment
    "setInflationRate(tuple)": FunctionFragment
    "setMigrated(address)": FunctionFragment
    "setRewardsExpirationTimeout(uint256)": FunctionFragment
    "snapshotCurrentRound()": FunctionFragment
    "timerAddress()": FunctionFragment
    "transferOwnership(address)": FunctionFragment
    "voteTiming()": FunctionFragment
    "votingToken()": FunctionFragment
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
  encodeFunctionData(
    functionFragment: "commitAndEmitEncryptedVote",
    values: [BytesLike, BigNumberish, BytesLike, BytesLike]
  ): string
  encodeFunctionData(functionFragment: "commitVote", values: [BytesLike, BigNumberish, BytesLike]): string
  encodeFunctionData(functionFragment: "gatPercentage", values?: undefined): string
  encodeFunctionData(functionFragment: "getCurrentRoundId", values?: undefined): string
  encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string
  encodeFunctionData(functionFragment: "getPendingPriceRequestsArray", values?: undefined): string
  encodeFunctionData(functionFragment: "getPendingRequests", values?: undefined): string
  encodeFunctionData(functionFragment: "getPrice", values: [BytesLike, BigNumberish]): string
  encodeFunctionData(
    functionFragment: "getPriceRequestStatuses",
    values: [{ identifier: BytesLike; time: BigNumberish }[]]
  ): string
  encodeFunctionData(functionFragment: "getVotePhase", values?: undefined): string
  encodeFunctionData(functionFragment: "hasPrice", values: [BytesLike, BigNumberish]): string
  encodeFunctionData(functionFragment: "inflationRate", values?: undefined): string
  encodeFunctionData(functionFragment: "migratedAddress", values?: undefined): string
  encodeFunctionData(functionFragment: "owner", values?: undefined): string
  encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string
  encodeFunctionData(functionFragment: "requestPrice", values: [BytesLike, BigNumberish]): string
  encodeFunctionData(
    functionFragment: "retrieveRewards",
    values: [string, BigNumberish, { identifier: BytesLike; time: BigNumberish }[]]
  ): string
  encodeFunctionData(
    functionFragment: "revealVote",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: "rewardsExpirationTimeout", values?: undefined): string
  encodeFunctionData(functionFragment: "rounds", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "setCurrentTime", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "setGatPercentage", values: [{ rawValue: BigNumberish }]): string
  encodeFunctionData(functionFragment: "setInflationRate", values: [{ rawValue: BigNumberish }]): string
  encodeFunctionData(functionFragment: "setMigrated", values: [string]): string
  encodeFunctionData(functionFragment: "setRewardsExpirationTimeout", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "snapshotCurrentRound", values?: undefined): string
  encodeFunctionData(functionFragment: "timerAddress", values?: undefined): string
  encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string
  encodeFunctionData(functionFragment: "voteTiming", values?: undefined): string
  encodeFunctionData(functionFragment: "votingToken", values?: undefined): string

  decodeFunctionResult(functionFragment: "batchCommit", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "batchReveal", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "commitAndEmitEncryptedVote", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "commitVote", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "gatPercentage", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCurrentRoundId", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getPendingPriceRequestsArray", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getPendingRequests", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getPriceRequestStatuses", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getVotePhase", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "hasPrice", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "inflationRate", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "migratedAddress", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "requestPrice", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "retrieveRewards", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "revealVote", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "rewardsExpirationTimeout", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "rounds", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setGatPercentage", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setInflationRate", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setMigrated", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setRewardsExpirationTimeout", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "snapshotCurrentRound", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "timerAddress", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "voteTiming", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "votingToken", data: BytesLike): Result

  events: {
    "EncryptedVote(address,uint256,bytes32,uint256,bytes)": EventFragment
    "OwnershipTransferred(address,address)": EventFragment
    "PriceRequestAdded(uint256,bytes32,uint256)": EventFragment
    "PriceResolved(uint256,bytes32,uint256,int256)": EventFragment
    "RewardsRetrieved(address,uint256,bytes32,uint256,uint256)": EventFragment
    "VoteCommitted(address,uint256,bytes32,uint256)": EventFragment
    "VoteRevealed(address,uint256,bytes32,uint256,int256,uint256)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "EncryptedVote"): EventFragment
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment
  getEvent(nameOrSignatureOrTopic: "PriceRequestAdded"): EventFragment
  getEvent(nameOrSignatureOrTopic: "PriceResolved"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RewardsRetrieved"): EventFragment
  getEvent(nameOrSignatureOrTopic: "VoteCommitted"): EventFragment
  getEvent(nameOrSignatureOrTopic: "VoteRevealed"): EventFragment
}

export interface VotingTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: VotingTestInterface

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

    commitAndEmitEncryptedVote(
      identifier: BytesLike,
      time: BigNumberish,
      hash: BytesLike,
      encryptedVote: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    commitVote(
      identifier: BytesLike,
      time: BigNumberish,
      hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    gatPercentage(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber
      0: BigNumber
    }>

    getCurrentRoundId(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    getCurrentTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    getPendingPriceRequestsArray(
      overrides?: CallOverrides
    ): Promise<{
      0: string[]
    }>

    getPendingRequests(
      overrides?: CallOverrides
    ): Promise<{
      0: { identifier: string; time: BigNumber; 0: string; 1: BigNumber }[]
    }>

    getPrice(
      identifier: BytesLike,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    getPriceRequestStatuses(
      requests: { identifier: BytesLike; time: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<{
      0: {
        status: number
        lastVotingRound: BigNumber
        0: number
        1: BigNumber
      }[]
    }>

    getVotePhase(
      overrides?: CallOverrides
    ): Promise<{
      0: number
    }>

    hasPrice(
      identifier: BytesLike,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    inflationRate(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber
      0: BigNumber
    }>

    migratedAddress(
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

    requestPrice(identifier: BytesLike, time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

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

    rewardsExpirationTimeout(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    rounds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      snapshotId: BigNumber
      inflationRate: { rawValue: BigNumber; 0: BigNumber }
      gatPercentage: { rawValue: BigNumber; 0: BigNumber }
      rewardsExpirationTime: BigNumber
      0: BigNumber
      1: { rawValue: BigNumber; 0: BigNumber }
      2: { rawValue: BigNumber; 0: BigNumber }
      3: BigNumber
    }>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    setGatPercentage(newGatPercentage: { rawValue: BigNumberish }, overrides?: Overrides): Promise<ContractTransaction>

    setInflationRate(newInflationRate: { rawValue: BigNumberish }, overrides?: Overrides): Promise<ContractTransaction>

    setMigrated(newVotingAddress: string, overrides?: Overrides): Promise<ContractTransaction>

    setRewardsExpirationTimeout(
      NewRewardsExpirationTimeout: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    snapshotCurrentRound(overrides?: Overrides): Promise<ContractTransaction>

    timerAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

    voteTiming(
      overrides?: CallOverrides
    ): Promise<{
      phaseLength: BigNumber
      0: BigNumber
    }>

    votingToken(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>
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

  commitAndEmitEncryptedVote(
    identifier: BytesLike,
    time: BigNumberish,
    hash: BytesLike,
    encryptedVote: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  commitVote(
    identifier: BytesLike,
    time: BigNumberish,
    hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  gatPercentage(overrides?: CallOverrides): Promise<BigNumber>

  getCurrentRoundId(overrides?: CallOverrides): Promise<BigNumber>

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

  getPendingPriceRequestsArray(overrides?: CallOverrides): Promise<string[]>

  getPendingRequests(
    overrides?: CallOverrides
  ): Promise<{ identifier: string; time: BigNumber; 0: string; 1: BigNumber }[]>

  getPrice(identifier: BytesLike, time: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  getPriceRequestStatuses(
    requests: { identifier: BytesLike; time: BigNumberish }[],
    overrides?: CallOverrides
  ): Promise<{ status: number; lastVotingRound: BigNumber; 0: number; 1: BigNumber }[]>

  getVotePhase(overrides?: CallOverrides): Promise<number>

  hasPrice(identifier: BytesLike, time: BigNumberish, overrides?: CallOverrides): Promise<boolean>

  inflationRate(overrides?: CallOverrides): Promise<BigNumber>

  migratedAddress(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>

  requestPrice(identifier: BytesLike, time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

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

  rewardsExpirationTimeout(overrides?: CallOverrides): Promise<BigNumber>

  rounds(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    snapshotId: BigNumber
    inflationRate: { rawValue: BigNumber; 0: BigNumber }
    gatPercentage: { rawValue: BigNumber; 0: BigNumber }
    rewardsExpirationTime: BigNumber
    0: BigNumber
    1: { rawValue: BigNumber; 0: BigNumber }
    2: { rawValue: BigNumber; 0: BigNumber }
    3: BigNumber
  }>

  setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  setGatPercentage(newGatPercentage: { rawValue: BigNumberish }, overrides?: Overrides): Promise<ContractTransaction>

  setInflationRate(newInflationRate: { rawValue: BigNumberish }, overrides?: Overrides): Promise<ContractTransaction>

  setMigrated(newVotingAddress: string, overrides?: Overrides): Promise<ContractTransaction>

  setRewardsExpirationTimeout(
    NewRewardsExpirationTimeout: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  snapshotCurrentRound(overrides?: Overrides): Promise<ContractTransaction>

  timerAddress(overrides?: CallOverrides): Promise<string>

  transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>

  voteTiming(overrides?: CallOverrides): Promise<BigNumber>

  votingToken(overrides?: CallOverrides): Promise<string>

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

    commitAndEmitEncryptedVote(
      identifier: BytesLike,
      time: BigNumberish,
      hash: BytesLike,
      encryptedVote: BytesLike,
      overrides?: Overrides
    ): Promise<void>

    commitVote(identifier: BytesLike, time: BigNumberish, hash: BytesLike, overrides?: Overrides): Promise<void>

    gatPercentage(overrides?: CallOverrides): Promise<BigNumber>

    getCurrentRoundId(overrides?: CallOverrides): Promise<BigNumber>

    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

    getPendingPriceRequestsArray(overrides?: CallOverrides): Promise<string[]>

    getPendingRequests(
      overrides?: CallOverrides
    ): Promise<{ identifier: string; time: BigNumber; 0: string; 1: BigNumber }[]>

    getPrice(identifier: BytesLike, time: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getPriceRequestStatuses(
      requests: { identifier: BytesLike; time: BigNumberish }[],
      overrides?: CallOverrides
    ): Promise<{ status: number; lastVotingRound: BigNumber; 0: number; 1: BigNumber }[]>

    getVotePhase(overrides?: CallOverrides): Promise<number>

    hasPrice(identifier: BytesLike, time: BigNumberish, overrides?: CallOverrides): Promise<boolean>

    inflationRate(overrides?: CallOverrides): Promise<BigNumber>

    migratedAddress(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: Overrides): Promise<void>

    requestPrice(identifier: BytesLike, time: BigNumberish, overrides?: Overrides): Promise<void>

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

    rewardsExpirationTimeout(overrides?: CallOverrides): Promise<BigNumber>

    rounds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      snapshotId: BigNumber
      inflationRate: { rawValue: BigNumber; 0: BigNumber }
      gatPercentage: { rawValue: BigNumber; 0: BigNumber }
      rewardsExpirationTime: BigNumber
      0: BigNumber
      1: { rawValue: BigNumber; 0: BigNumber }
      2: { rawValue: BigNumber; 0: BigNumber }
      3: BigNumber
    }>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<void>

    setGatPercentage(newGatPercentage: { rawValue: BigNumberish }, overrides?: Overrides): Promise<void>

    setInflationRate(newInflationRate: { rawValue: BigNumberish }, overrides?: Overrides): Promise<void>

    setMigrated(newVotingAddress: string, overrides?: Overrides): Promise<void>

    setRewardsExpirationTimeout(NewRewardsExpirationTimeout: BigNumberish, overrides?: Overrides): Promise<void>

    snapshotCurrentRound(overrides?: Overrides): Promise<void>

    timerAddress(overrides?: CallOverrides): Promise<string>

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<void>

    voteTiming(overrides?: CallOverrides): Promise<BigNumber>

    votingToken(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    EncryptedVote(
      voter: string | null,
      roundId: BigNumberish | null,
      identifier: BytesLike | null,
      time: null,
      encryptedVote: null
    ): EventFilter

    OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter

    PriceRequestAdded(roundId: BigNumberish | null, identifier: BytesLike | null, time: null): EventFilter

    PriceResolved(roundId: BigNumberish | null, identifier: BytesLike | null, time: null, price: null): EventFilter

    RewardsRetrieved(
      voter: string | null,
      roundId: BigNumberish | null,
      identifier: BytesLike | null,
      time: null,
      numTokens: null
    ): EventFilter

    VoteCommitted(
      voter: string | null,
      roundId: BigNumberish | null,
      identifier: BytesLike | null,
      time: null
    ): EventFilter

    VoteRevealed(
      voter: string | null,
      roundId: BigNumberish | null,
      identifier: BytesLike | null,
      time: null,
      price: null,
      numTokens: null
    ): EventFilter
  }

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
    commitAndEmitEncryptedVote(
      identifier: BytesLike,
      time: BigNumberish,
      hash: BytesLike,
      encryptedVote: BytesLike
    ): Promise<BigNumber>
    commitVote(identifier: BytesLike, time: BigNumberish, hash: BytesLike): Promise<BigNumber>
    gatPercentage(): Promise<BigNumber>
    getCurrentRoundId(): Promise<BigNumber>
    getCurrentTime(): Promise<BigNumber>
    getPendingPriceRequestsArray(): Promise<BigNumber>
    getPendingRequests(): Promise<BigNumber>
    getPrice(identifier: BytesLike, time: BigNumberish): Promise<BigNumber>
    getPriceRequestStatuses(requests: { identifier: BytesLike; time: BigNumberish }[]): Promise<BigNumber>
    getVotePhase(): Promise<BigNumber>
    hasPrice(identifier: BytesLike, time: BigNumberish): Promise<BigNumber>
    inflationRate(): Promise<BigNumber>
    migratedAddress(): Promise<BigNumber>
    owner(): Promise<BigNumber>
    renounceOwnership(): Promise<BigNumber>
    requestPrice(identifier: BytesLike, time: BigNumberish): Promise<BigNumber>
    retrieveRewards(
      voterAddress: string,
      roundId: BigNumberish,
      toRetrieve: { identifier: BytesLike; time: BigNumberish }[]
    ): Promise<BigNumber>
    revealVote(identifier: BytesLike, time: BigNumberish, price: BigNumberish, salt: BigNumberish): Promise<BigNumber>
    rewardsExpirationTimeout(): Promise<BigNumber>
    rounds(arg0: BigNumberish): Promise<BigNumber>
    setCurrentTime(time: BigNumberish): Promise<BigNumber>
    setGatPercentage(newGatPercentage: { rawValue: BigNumberish }): Promise<BigNumber>
    setInflationRate(newInflationRate: { rawValue: BigNumberish }): Promise<BigNumber>
    setMigrated(newVotingAddress: string): Promise<BigNumber>
    setRewardsExpirationTimeout(NewRewardsExpirationTimeout: BigNumberish): Promise<BigNumber>
    snapshotCurrentRound(): Promise<BigNumber>
    timerAddress(): Promise<BigNumber>
    transferOwnership(newOwner: string): Promise<BigNumber>
    voteTiming(): Promise<BigNumber>
    votingToken(): Promise<BigNumber>
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
    commitAndEmitEncryptedVote(
      identifier: BytesLike,
      time: BigNumberish,
      hash: BytesLike,
      encryptedVote: BytesLike
    ): Promise<PopulatedTransaction>
    commitVote(identifier: BytesLike, time: BigNumberish, hash: BytesLike): Promise<PopulatedTransaction>
    gatPercentage(): Promise<PopulatedTransaction>
    getCurrentRoundId(): Promise<PopulatedTransaction>
    getCurrentTime(): Promise<PopulatedTransaction>
    getPendingPriceRequestsArray(): Promise<PopulatedTransaction>
    getPendingRequests(): Promise<PopulatedTransaction>
    getPrice(identifier: BytesLike, time: BigNumberish): Promise<PopulatedTransaction>
    getPriceRequestStatuses(requests: { identifier: BytesLike; time: BigNumberish }[]): Promise<PopulatedTransaction>
    getVotePhase(): Promise<PopulatedTransaction>
    hasPrice(identifier: BytesLike, time: BigNumberish): Promise<PopulatedTransaction>
    inflationRate(): Promise<PopulatedTransaction>
    migratedAddress(): Promise<PopulatedTransaction>
    owner(): Promise<PopulatedTransaction>
    renounceOwnership(): Promise<PopulatedTransaction>
    requestPrice(identifier: BytesLike, time: BigNumberish): Promise<PopulatedTransaction>
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
    rewardsExpirationTimeout(): Promise<PopulatedTransaction>
    rounds(arg0: BigNumberish): Promise<PopulatedTransaction>
    setCurrentTime(time: BigNumberish): Promise<PopulatedTransaction>
    setGatPercentage(newGatPercentage: { rawValue: BigNumberish }): Promise<PopulatedTransaction>
    setInflationRate(newInflationRate: { rawValue: BigNumberish }): Promise<PopulatedTransaction>
    setMigrated(newVotingAddress: string): Promise<PopulatedTransaction>
    setRewardsExpirationTimeout(NewRewardsExpirationTimeout: BigNumberish): Promise<PopulatedTransaction>
    snapshotCurrentRound(): Promise<PopulatedTransaction>
    timerAddress(): Promise<PopulatedTransaction>
    transferOwnership(newOwner: string): Promise<PopulatedTransaction>
    voteTiming(): Promise<PopulatedTransaction>
    votingToken(): Promise<PopulatedTransaction>
  }
}
