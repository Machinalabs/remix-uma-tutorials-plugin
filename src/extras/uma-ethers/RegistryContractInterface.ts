import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface RegistryInterface extends ethers.utils.Interface {
  functions: {
    "addMember(uint256,address)": FunctionFragment
    "addPartyToContract(address)": FunctionFragment
    "contractMap(address)": FunctionFragment
    "getAllRegisteredContracts()": FunctionFragment
    "getMember(uint256)": FunctionFragment
    "getRegisteredContracts(address)": FunctionFragment
    "holdsRole(uint256,address)": FunctionFragment
    "isContractRegistered(address)": FunctionFragment
    "isPartyMemberOfContract(address,address)": FunctionFragment
    "registerContract(address[],address)": FunctionFragment
    "registeredContracts(uint256)": FunctionFragment
    "removeMember(uint256,address)": FunctionFragment
    "removePartyFromContract(address)": FunctionFragment
    "renounceMembership(uint256)": FunctionFragment
    "resetMember(uint256,address)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "addMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "addPartyToContract", values: [string]): string
  encodeFunctionData(functionFragment: "contractMap", values: [string]): string
  encodeFunctionData(functionFragment: "getAllRegisteredContracts", values?: undefined): string
  encodeFunctionData(functionFragment: "getMember", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "getRegisteredContracts", values: [string]): string
  encodeFunctionData(functionFragment: "holdsRole", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "isContractRegistered", values: [string]): string
  encodeFunctionData(functionFragment: "isPartyMemberOfContract", values: [string, string]): string
  encodeFunctionData(functionFragment: "registerContract", values: [string[], string]): string
  encodeFunctionData(functionFragment: "registeredContracts", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "removeMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "removePartyFromContract", values: [string]): string
  encodeFunctionData(functionFragment: "renounceMembership", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "resetMember", values: [BigNumberish, string]): string

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "addPartyToContract", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "contractMap", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getAllRegisteredContracts", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getRegisteredContracts", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "holdsRole", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "isContractRegistered", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "isPartyMemberOfContract", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "registerContract", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "registeredContracts", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "removeMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "removePartyFromContract", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceMembership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "resetMember", data: BytesLike): Result

  events: {
    "AddedSharedMember(uint256,address,address)": EventFragment
    "NewContractRegistered(address,address,address[])": EventFragment
    "PartyAdded(address,address)": EventFragment
    "PartyRemoved(address,address)": EventFragment
    "RemovedSharedMember(uint256,address,address)": EventFragment
    "ResetExclusiveMember(uint256,address,address)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "AddedSharedMember"): EventFragment
  getEvent(nameOrSignatureOrTopic: "NewContractRegistered"): EventFragment
  getEvent(nameOrSignatureOrTopic: "PartyAdded"): EventFragment
  getEvent(nameOrSignatureOrTopic: "PartyRemoved"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RemovedSharedMember"): EventFragment
  getEvent(nameOrSignatureOrTopic: "ResetExclusiveMember"): EventFragment
}

export interface Registry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: RegistryInterface

  functions: {
    addMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    addPartyToContract(party: string, overrides?: Overrides): Promise<ContractTransaction>

    contractMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      valid: number
      index: BigNumber
      0: number
      1: BigNumber
    }>

    getAllRegisteredContracts(
      overrides?: CallOverrides
    ): Promise<{
      0: string[]
    }>

    getMember(
      roleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    getRegisteredContracts(
      party: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string[]
    }>

    holdsRole(
      roleId: BigNumberish,
      memberToCheck: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    isContractRegistered(
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    isPartyMemberOfContract(
      party: string,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    registerContract(
      parties: string[],
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    registeredContracts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    removeMember(
      roleId: BigNumberish,
      memberToRemove: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    removePartyFromContract(
      partyAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    resetMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  addMember(
    roleId: BigNumberish,
    newMember: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  addPartyToContract(party: string, overrides?: Overrides): Promise<ContractTransaction>

  contractMap(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    valid: number
    index: BigNumber
    0: number
    1: BigNumber
  }>

  getAllRegisteredContracts(overrides?: CallOverrides): Promise<string[]>

  getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>

  getRegisteredContracts(party: string, overrides?: CallOverrides): Promise<string[]>

  holdsRole(
    roleId: BigNumberish,
    memberToCheck: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  isContractRegistered(contractAddress: string, overrides?: CallOverrides): Promise<boolean>

  isPartyMemberOfContract(
    party: string,
    contractAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  registerContract(
    parties: string[],
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  registeredContracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

  removeMember(
    roleId: BigNumberish,
    memberToRemove: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  removePartyFromContract(partyAddress: string, overrides?: Overrides): Promise<ContractTransaction>

  renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  resetMember(
    roleId: BigNumberish,
    newMember: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<void>

    addPartyToContract(party: string, overrides?: Overrides): Promise<void>

    contractMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      valid: number
      index: BigNumber
      0: number
      1: BigNumber
    }>

    getAllRegisteredContracts(overrides?: CallOverrides): Promise<string[]>

    getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>

    getRegisteredContracts(party: string, overrides?: CallOverrides): Promise<string[]>

    holdsRole(
      roleId: BigNumberish,
      memberToCheck: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    isContractRegistered(contractAddress: string, overrides?: CallOverrides): Promise<boolean>

    isPartyMemberOfContract(
      party: string,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    registerContract(
      parties: string[],
      contractAddress: string,
      overrides?: Overrides
    ): Promise<void>

    registeredContracts(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>

    removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides): Promise<void>

    removePartyFromContract(partyAddress: string, overrides?: Overrides): Promise<void>

    renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<void>

    resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<void>
  }

  filters: {
    AddedSharedMember(
      roleId: BigNumberish | null,
      newMember: string | null,
      manager: string | null
    ): EventFilter

    NewContractRegistered(
      contractAddress: string | null,
      creator: string | null,
      parties: null
    ): EventFilter

    PartyAdded(contractAddress: string | null, party: string | null): EventFilter

    PartyRemoved(contractAddress: string | null, party: string | null): EventFilter

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
    addPartyToContract(party: string): Promise<BigNumber>
    contractMap(arg0: string): Promise<BigNumber>
    getAllRegisteredContracts(): Promise<BigNumber>
    getMember(roleId: BigNumberish): Promise<BigNumber>
    getRegisteredContracts(party: string): Promise<BigNumber>
    holdsRole(roleId: BigNumberish, memberToCheck: string): Promise<BigNumber>
    isContractRegistered(contractAddress: string): Promise<BigNumber>
    isPartyMemberOfContract(party: string, contractAddress: string): Promise<BigNumber>
    registerContract(parties: string[], contractAddress: string): Promise<BigNumber>
    registeredContracts(arg0: BigNumberish): Promise<BigNumber>
    removeMember(roleId: BigNumberish, memberToRemove: string): Promise<BigNumber>
    removePartyFromContract(partyAddress: string): Promise<BigNumber>
    renounceMembership(roleId: BigNumberish): Promise<BigNumber>
    resetMember(roleId: BigNumberish, newMember: string): Promise<BigNumber>
  }

  populateTransaction: {
    addMember(roleId: BigNumberish, newMember: string): Promise<PopulatedTransaction>
    addPartyToContract(party: string): Promise<PopulatedTransaction>
    contractMap(arg0: string): Promise<PopulatedTransaction>
    getAllRegisteredContracts(): Promise<PopulatedTransaction>
    getMember(roleId: BigNumberish): Promise<PopulatedTransaction>
    getRegisteredContracts(party: string): Promise<PopulatedTransaction>
    holdsRole(roleId: BigNumberish, memberToCheck: string): Promise<PopulatedTransaction>
    isContractRegistered(contractAddress: string): Promise<PopulatedTransaction>
    isPartyMemberOfContract(party: string, contractAddress: string): Promise<PopulatedTransaction>
    registerContract(parties: string[], contractAddress: string): Promise<PopulatedTransaction>
    registeredContracts(arg0: BigNumberish): Promise<PopulatedTransaction>
    removeMember(roleId: BigNumberish, memberToRemove: string): Promise<PopulatedTransaction>
    removePartyFromContract(partyAddress: string): Promise<PopulatedTransaction>
    renounceMembership(roleId: BigNumberish): Promise<PopulatedTransaction>
    resetMember(roleId: BigNumberish, newMember: string): Promise<PopulatedTransaction>
  }
}
