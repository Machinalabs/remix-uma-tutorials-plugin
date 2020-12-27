import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface GovernorInterface extends ethers.utils.Interface {
  functions: {
    "addMember(uint256,address)": FunctionFragment
    "executeProposal(uint256,uint256)": FunctionFragment
    "getCurrentTime()": FunctionFragment
    "getMember(uint256)": FunctionFragment
    "getProposal(uint256)": FunctionFragment
    "holdsRole(uint256,address)": FunctionFragment
    "numProposals()": FunctionFragment
    "proposals(uint256)": FunctionFragment
    "propose(tuple[])": FunctionFragment
    "removeMember(uint256,address)": FunctionFragment
    "renounceMembership(uint256)": FunctionFragment
    "resetMember(uint256,address)": FunctionFragment
    "setCurrentTime(uint256)": FunctionFragment
    "timerAddress()": FunctionFragment
  }

  encodeFunctionData(functionFragment: "addMember", values: [BigNumberish, string]): string
  encodeFunctionData(
    functionFragment: "executeProposal",
    values: [BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string
  encodeFunctionData(functionFragment: "getMember", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "getProposal", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "holdsRole", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "numProposals", values?: undefined): string
  encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: "propose",
    values: [{ to: string; value: BigNumberish; data: BytesLike }[]]
  ): string
  encodeFunctionData(functionFragment: "removeMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "renounceMembership", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "resetMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "setCurrentTime", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "timerAddress", values?: undefined): string

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getProposal", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "holdsRole", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "numProposals", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "removeMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceMembership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "resetMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "timerAddress", data: BytesLike): Result

  events: {
    "AddedSharedMember(uint256,address,address)": EventFragment
    "NewProposal(uint256,tuple[])": EventFragment
    "ProposalExecuted(uint256,uint256)": EventFragment
    "RemovedSharedMember(uint256,address,address)": EventFragment
    "ResetExclusiveMember(uint256,address,address)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "AddedSharedMember"): EventFragment
  getEvent(nameOrSignatureOrTopic: "NewProposal"): EventFragment
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RemovedSharedMember"): EventFragment
  getEvent(nameOrSignatureOrTopic: "ResetExclusiveMember"): EventFragment
}

export interface Governor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: GovernorInterface

  functions: {
    addMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    executeProposal(
      id: BigNumberish,
      transactionIndex: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    getCurrentTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    getMember(
      roleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    getProposal(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        transactions: {
          to: string
          value: BigNumber
          data: string
          0: string
          1: BigNumber
          2: string
        }[]
        requestTime: BigNumber
        0: {
          to: string
          value: BigNumber
          data: string
          0: string
          1: BigNumber
          2: string
        }[]
        1: BigNumber
      }
    }>

    holdsRole(
      roleId: BigNumberish,
      memberToCheck: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    numProposals(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      requestTime: BigNumber
      0: BigNumber
    }>

    propose(
      transactions: { to: string; value: BigNumberish; data: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>

    removeMember(
      roleId: BigNumberish,
      memberToRemove: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    resetMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    timerAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>
  }

  addMember(
    roleId: BigNumberish,
    newMember: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  executeProposal(
    id: BigNumberish,
    transactionIndex: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

  getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>

  getProposal(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    transactions: {
      to: string
      value: BigNumber
      data: string
      0: string
      1: BigNumber
      2: string
    }[]
    requestTime: BigNumber
    0: {
      to: string
      value: BigNumber
      data: string
      0: string
      1: BigNumber
      2: string
    }[]
    1: BigNumber
  }>

  holdsRole(
    roleId: BigNumberish,
    memberToCheck: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  numProposals(overrides?: CallOverrides): Promise<BigNumber>

  proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  propose(
    transactions: { to: string; value: BigNumberish; data: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>

  removeMember(
    roleId: BigNumberish,
    memberToRemove: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  resetMember(
    roleId: BigNumberish,
    newMember: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  timerAddress(overrides?: CallOverrides): Promise<string>

  callStatic: {
    addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<void>

    executeProposal(
      id: BigNumberish,
      transactionIndex: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<void>

    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

    getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>

    getProposal(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      transactions: {
        to: string
        value: BigNumber
        data: string
        0: string
        1: BigNumber
        2: string
      }[]
      requestTime: BigNumber
      0: {
        to: string
        value: BigNumber
        data: string
        0: string
        1: BigNumber
        2: string
      }[]
      1: BigNumber
    }>

    holdsRole(
      roleId: BigNumberish,
      memberToCheck: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    numProposals(overrides?: CallOverrides): Promise<BigNumber>

    proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    propose(
      transactions: { to: string; value: BigNumberish; data: BytesLike }[],
      overrides?: Overrides
    ): Promise<void>

    removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides): Promise<void>

    renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<void>

    resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<void>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<void>

    timerAddress(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    AddedSharedMember(
      roleId: BigNumberish | null,
      newMember: string | null,
      manager: string | null
    ): EventFilter

    NewProposal(id: BigNumberish | null, transactions: null): EventFilter

    ProposalExecuted(id: BigNumberish | null, transactionIndex: null): EventFilter

    RemovedSharedMember(
      roleId: BigNumberish | null,
      oldMember: string | null,
      manager: string | null
    ): EventFilter

    ResetExclusiveMember(
      roleId: BigNumberish | null,
      newMember: string | null,
      manager: string | null
    ): EventFilter
  }

  estimateGas: {
    addMember(roleId: BigNumberish, newMember: string): Promise<BigNumber>
    executeProposal(id: BigNumberish, transactionIndex: BigNumberish): Promise<BigNumber>
    getCurrentTime(): Promise<BigNumber>
    getMember(roleId: BigNumberish): Promise<BigNumber>
    getProposal(id: BigNumberish): Promise<BigNumber>
    holdsRole(roleId: BigNumberish, memberToCheck: string): Promise<BigNumber>
    numProposals(): Promise<BigNumber>
    proposals(arg0: BigNumberish): Promise<BigNumber>
    propose(
      transactions: { to: string; value: BigNumberish; data: BytesLike }[]
    ): Promise<BigNumber>
    removeMember(roleId: BigNumberish, memberToRemove: string): Promise<BigNumber>
    renounceMembership(roleId: BigNumberish): Promise<BigNumber>
    resetMember(roleId: BigNumberish, newMember: string): Promise<BigNumber>
    setCurrentTime(time: BigNumberish): Promise<BigNumber>
    timerAddress(): Promise<BigNumber>
  }

  populateTransaction: {
    addMember(roleId: BigNumberish, newMember: string): Promise<PopulatedTransaction>
    executeProposal(id: BigNumberish, transactionIndex: BigNumberish): Promise<PopulatedTransaction>
    getCurrentTime(): Promise<PopulatedTransaction>
    getMember(roleId: BigNumberish): Promise<PopulatedTransaction>
    getProposal(id: BigNumberish): Promise<PopulatedTransaction>
    holdsRole(roleId: BigNumberish, memberToCheck: string): Promise<PopulatedTransaction>
    numProposals(): Promise<PopulatedTransaction>
    proposals(arg0: BigNumberish): Promise<PopulatedTransaction>
    propose(
      transactions: { to: string; value: BigNumberish; data: BytesLike }[]
    ): Promise<PopulatedTransaction>
    removeMember(roleId: BigNumberish, memberToRemove: string): Promise<PopulatedTransaction>
    renounceMembership(roleId: BigNumberish): Promise<PopulatedTransaction>
    resetMember(roleId: BigNumberish, newMember: string): Promise<PopulatedTransaction>
    setCurrentTime(time: BigNumberish): Promise<PopulatedTransaction>
    timerAddress(): Promise<PopulatedTransaction>
  }
}
