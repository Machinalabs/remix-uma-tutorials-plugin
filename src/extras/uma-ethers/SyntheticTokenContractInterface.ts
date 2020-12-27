import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface SyntheticTokenInterface extends ethers.utils.Interface {
  functions: {
    "addBurner(address)": FunctionFragment
    "addMember(uint256,address)": FunctionFragment
    "addMinter(address)": FunctionFragment
    "allowance(address,address)": FunctionFragment
    "approve(address,uint256)": FunctionFragment
    "balanceOf(address)": FunctionFragment
    "burn(uint256)": FunctionFragment
    "decimals()": FunctionFragment
    "decreaseAllowance(address,uint256)": FunctionFragment
    "getMember(uint256)": FunctionFragment
    "holdsRole(uint256,address)": FunctionFragment
    "increaseAllowance(address,uint256)": FunctionFragment
    "isBurner(address)": FunctionFragment
    "isMinter(address)": FunctionFragment
    "mint(address,uint256)": FunctionFragment
    "name()": FunctionFragment
    "removeBurner(address)": FunctionFragment
    "removeMember(uint256,address)": FunctionFragment
    "removeMinter(address)": FunctionFragment
    "renounceMembership(uint256)": FunctionFragment
    "resetMember(uint256,address)": FunctionFragment
    "resetOwner(address)": FunctionFragment
    "symbol()": FunctionFragment
    "totalSupply()": FunctionFragment
    "transfer(address,uint256)": FunctionFragment
    "transferFrom(address,address,uint256)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "addBurner", values: [string]): string
  encodeFunctionData(functionFragment: "addMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "addMinter", values: [string]): string
  encodeFunctionData(functionFragment: "allowance", values: [string, string]): string
  encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string
  encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "getMember", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "holdsRole", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "isBurner", values: [string]): string
  encodeFunctionData(functionFragment: "isMinter", values: [string]): string
  encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string
  encodeFunctionData(functionFragment: "name", values?: undefined): string
  encodeFunctionData(functionFragment: "removeBurner", values: [string]): string
  encodeFunctionData(functionFragment: "removeMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "removeMinter", values: [string]): string
  encodeFunctionData(functionFragment: "renounceMembership", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "resetMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "resetOwner", values: [string]): string
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string
  encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string
  encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: "addBurner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "holdsRole", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "isBurner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "removeBurner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "removeMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "removeMinter", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceMembership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "resetMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "resetOwner", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result

  events: {
    "AddedSharedMember(uint256,address,address)": EventFragment
    "Approval(address,address,uint256)": EventFragment
    "RemovedSharedMember(uint256,address,address)": EventFragment
    "ResetExclusiveMember(uint256,address,address)": EventFragment
    "Transfer(address,address,uint256)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "AddedSharedMember"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RemovedSharedMember"): EventFragment
  getEvent(nameOrSignatureOrTopic: "ResetExclusiveMember"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment
}

export interface SyntheticToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: SyntheticTokenInterface

  functions: {
    addBurner(account: string, overrides?: Overrides): Promise<ContractTransaction>

    addMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    addMinter(account: string, overrides?: Overrides): Promise<ContractTransaction>

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

    decimals(
      overrides?: CallOverrides
    ): Promise<{
      0: number
    }>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    getMember(
      roleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    holdsRole(
      roleId: BigNumberish,
      memberToCheck: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    isBurner(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    isMinter(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>

    mint(
      recipient: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    name(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    removeBurner(account: string, overrides?: Overrides): Promise<ContractTransaction>

    removeMember(
      roleId: BigNumberish,
      memberToRemove: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    removeMinter(account: string, overrides?: Overrides): Promise<ContractTransaction>

    renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    resetMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    resetOwner(account: string, overrides?: Overrides): Promise<ContractTransaction>

    symbol(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

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

  addBurner(account: string, overrides?: Overrides): Promise<ContractTransaction>

  addMember(
    roleId: BigNumberish,
    newMember: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  addMinter(account: string, overrides?: Overrides): Promise<ContractTransaction>

  allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

  burn(value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  decimals(overrides?: CallOverrides): Promise<number>

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>

  holdsRole(
    roleId: BigNumberish,
    memberToCheck: string,
    overrides?: CallOverrides
  ): Promise<boolean>

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  isBurner(account: string, overrides?: CallOverrides): Promise<boolean>

  isMinter(account: string, overrides?: CallOverrides): Promise<boolean>

  mint(recipient: string, value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  name(overrides?: CallOverrides): Promise<string>

  removeBurner(account: string, overrides?: Overrides): Promise<ContractTransaction>

  removeMember(
    roleId: BigNumberish,
    memberToRemove: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  removeMinter(account: string, overrides?: Overrides): Promise<ContractTransaction>

  renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  resetMember(
    roleId: BigNumberish,
    newMember: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  resetOwner(account: string, overrides?: Overrides): Promise<ContractTransaction>

  symbol(overrides?: CallOverrides): Promise<string>

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
    addBurner(account: string, overrides?: Overrides): Promise<void>

    addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<void>

    addMinter(account: string, overrides?: Overrides): Promise<void>

    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>

    approve(spender: string, amount: BigNumberish, overrides?: Overrides): Promise<boolean>

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>

    burn(value: BigNumberish, overrides?: Overrides): Promise<void>

    decimals(overrides?: CallOverrides): Promise<number>

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>

    getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>

    holdsRole(
      roleId: BigNumberish,
      memberToCheck: string,
      overrides?: CallOverrides
    ): Promise<boolean>

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>

    isBurner(account: string, overrides?: CallOverrides): Promise<boolean>

    isMinter(account: string, overrides?: CallOverrides): Promise<boolean>

    mint(recipient: string, value: BigNumberish, overrides?: Overrides): Promise<boolean>

    name(overrides?: CallOverrides): Promise<string>

    removeBurner(account: string, overrides?: Overrides): Promise<void>

    removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides): Promise<void>

    removeMinter(account: string, overrides?: Overrides): Promise<void>

    renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<void>

    resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<void>

    resetOwner(account: string, overrides?: Overrides): Promise<void>

    symbol(overrides?: CallOverrides): Promise<string>

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
    AddedSharedMember(
      roleId: BigNumberish | null,
      newMember: string | null,
      manager: string | null
    ): EventFilter

    Approval(owner: string | null, spender: string | null, value: null): EventFilter

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

    Transfer(from: string | null, to: string | null, value: null): EventFilter
  }

  estimateGas: {
    addBurner(account: string): Promise<BigNumber>
    addMember(roleId: BigNumberish, newMember: string): Promise<BigNumber>
    addMinter(account: string): Promise<BigNumber>
    allowance(owner: string, spender: string): Promise<BigNumber>
    approve(spender: string, amount: BigNumberish): Promise<BigNumber>
    balanceOf(account: string): Promise<BigNumber>
    burn(value: BigNumberish): Promise<BigNumber>
    decimals(): Promise<BigNumber>
    decreaseAllowance(spender: string, subtractedValue: BigNumberish): Promise<BigNumber>
    getMember(roleId: BigNumberish): Promise<BigNumber>
    holdsRole(roleId: BigNumberish, memberToCheck: string): Promise<BigNumber>
    increaseAllowance(spender: string, addedValue: BigNumberish): Promise<BigNumber>
    isBurner(account: string): Promise<BigNumber>
    isMinter(account: string): Promise<BigNumber>
    mint(recipient: string, value: BigNumberish): Promise<BigNumber>
    name(): Promise<BigNumber>
    removeBurner(account: string): Promise<BigNumber>
    removeMember(roleId: BigNumberish, memberToRemove: string): Promise<BigNumber>
    removeMinter(account: string): Promise<BigNumber>
    renounceMembership(roleId: BigNumberish): Promise<BigNumber>
    resetMember(roleId: BigNumberish, newMember: string): Promise<BigNumber>
    resetOwner(account: string): Promise<BigNumber>
    symbol(): Promise<BigNumber>
    totalSupply(): Promise<BigNumber>
    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>
    transferFrom(sender: string, recipient: string, amount: BigNumberish): Promise<BigNumber>
  }

  populateTransaction: {
    addBurner(account: string): Promise<PopulatedTransaction>
    addMember(roleId: BigNumberish, newMember: string): Promise<PopulatedTransaction>
    addMinter(account: string): Promise<PopulatedTransaction>
    allowance(owner: string, spender: string): Promise<PopulatedTransaction>
    approve(spender: string, amount: BigNumberish): Promise<PopulatedTransaction>
    balanceOf(account: string): Promise<PopulatedTransaction>
    burn(value: BigNumberish): Promise<PopulatedTransaction>
    decimals(): Promise<PopulatedTransaction>
    decreaseAllowance(spender: string, subtractedValue: BigNumberish): Promise<PopulatedTransaction>
    getMember(roleId: BigNumberish): Promise<PopulatedTransaction>
    holdsRole(roleId: BigNumberish, memberToCheck: string): Promise<PopulatedTransaction>
    increaseAllowance(spender: string, addedValue: BigNumberish): Promise<PopulatedTransaction>
    isBurner(account: string): Promise<PopulatedTransaction>
    isMinter(account: string): Promise<PopulatedTransaction>
    mint(recipient: string, value: BigNumberish): Promise<PopulatedTransaction>
    name(): Promise<PopulatedTransaction>
    removeBurner(account: string): Promise<PopulatedTransaction>
    removeMember(roleId: BigNumberish, memberToRemove: string): Promise<PopulatedTransaction>
    removeMinter(account: string): Promise<PopulatedTransaction>
    renounceMembership(roleId: BigNumberish): Promise<PopulatedTransaction>
    resetMember(roleId: BigNumberish, newMember: string): Promise<PopulatedTransaction>
    resetOwner(account: string): Promise<PopulatedTransaction>
    symbol(): Promise<PopulatedTransaction>
    totalSupply(): Promise<PopulatedTransaction>
    transfer(recipient: string, amount: BigNumberish): Promise<PopulatedTransaction>
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>
  }
}
