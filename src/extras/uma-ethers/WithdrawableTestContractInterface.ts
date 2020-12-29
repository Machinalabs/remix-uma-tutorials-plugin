import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, PayableOverrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface WithdrawableTestInterface extends ethers.utils.Interface {
  functions: {
    "addMember(uint256,address)": FunctionFragment
    "getMember(uint256)": FunctionFragment
    "holdsRole(uint256,address)": FunctionFragment
    "pay()": FunctionFragment
    "removeMember(uint256,address)": FunctionFragment
    "renounceMembership(uint256)": FunctionFragment
    "resetMember(uint256,address)": FunctionFragment
    "setInternalWithdrawRole(uint256)": FunctionFragment
    "withdraw(uint256)": FunctionFragment
    "withdrawErc20(address,uint256)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "addMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "getMember", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "holdsRole", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "pay", values?: undefined): string
  encodeFunctionData(functionFragment: "removeMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "renounceMembership", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "resetMember", values: [BigNumberish, string]): string
  encodeFunctionData(functionFragment: "setInternalWithdrawRole", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "withdrawErc20", values: [string, BigNumberish]): string

  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "holdsRole", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "removeMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "renounceMembership", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "resetMember", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setInternalWithdrawRole", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdrawErc20", data: BytesLike): Result

  events: {
    "AddedSharedMember(uint256,address,address)": EventFragment
    "RemovedSharedMember(uint256,address,address)": EventFragment
    "ResetExclusiveMember(uint256,address,address)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "AddedSharedMember"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RemovedSharedMember"): EventFragment
  getEvent(nameOrSignatureOrTopic: "ResetExclusiveMember"): EventFragment
}

export interface WithdrawableTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: WithdrawableTestInterface

  functions: {
    addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<ContractTransaction>

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

    pay(overrides?: PayableOverrides): Promise<ContractTransaction>

    removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides): Promise<ContractTransaction>

    renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<ContractTransaction>

    setInternalWithdrawRole(setRoleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    withdraw(amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    withdrawErc20(erc20Address: string, amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>
  }

  addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<ContractTransaction>

  getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>

  holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<boolean>

  pay(overrides?: PayableOverrides): Promise<ContractTransaction>

  removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides): Promise<ContractTransaction>

  renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<ContractTransaction>

  setInternalWithdrawRole(setRoleId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  withdraw(amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  withdrawErc20(erc20Address: string, amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    addMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<void>

    getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>

    holdsRole(roleId: BigNumberish, memberToCheck: string, overrides?: CallOverrides): Promise<boolean>

    pay(overrides?: PayableOverrides): Promise<void>

    removeMember(roleId: BigNumberish, memberToRemove: string, overrides?: Overrides): Promise<void>

    renounceMembership(roleId: BigNumberish, overrides?: Overrides): Promise<void>

    resetMember(roleId: BigNumberish, newMember: string, overrides?: Overrides): Promise<void>

    setInternalWithdrawRole(setRoleId: BigNumberish, overrides?: Overrides): Promise<void>

    withdraw(amount: BigNumberish, overrides?: Overrides): Promise<void>

    withdrawErc20(erc20Address: string, amount: BigNumberish, overrides?: Overrides): Promise<void>
  }

  filters: {
    AddedSharedMember(roleId: BigNumberish | null, newMember: string | null, manager: string | null): EventFilter

    RemovedSharedMember(roleId: BigNumberish | null, oldMember: string | null, manager: string | null): EventFilter

    ResetExclusiveMember(roleId: BigNumberish | null, newMember: string | null, manager: string | null): EventFilter
  }

  estimateGas: {
    addMember(roleId: BigNumberish, newMember: string): Promise<BigNumber>
    getMember(roleId: BigNumberish): Promise<BigNumber>
    holdsRole(roleId: BigNumberish, memberToCheck: string): Promise<BigNumber>
    pay(): Promise<BigNumber>
    removeMember(roleId: BigNumberish, memberToRemove: string): Promise<BigNumber>
    renounceMembership(roleId: BigNumberish): Promise<BigNumber>
    resetMember(roleId: BigNumberish, newMember: string): Promise<BigNumber>
    setInternalWithdrawRole(setRoleId: BigNumberish): Promise<BigNumber>
    withdraw(amount: BigNumberish): Promise<BigNumber>
    withdrawErc20(erc20Address: string, amount: BigNumberish): Promise<BigNumber>
  }

  populateTransaction: {
    addMember(roleId: BigNumberish, newMember: string): Promise<PopulatedTransaction>
    getMember(roleId: BigNumberish): Promise<PopulatedTransaction>
    holdsRole(roleId: BigNumberish, memberToCheck: string): Promise<PopulatedTransaction>
    pay(): Promise<PopulatedTransaction>
    removeMember(roleId: BigNumberish, memberToRemove: string): Promise<PopulatedTransaction>
    renounceMembership(roleId: BigNumberish): Promise<PopulatedTransaction>
    resetMember(roleId: BigNumberish, newMember: string): Promise<PopulatedTransaction>
    setInternalWithdrawRole(setRoleId: BigNumberish): Promise<PopulatedTransaction>
    withdraw(amount: BigNumberish): Promise<PopulatedTransaction>
    withdrawErc20(erc20Address: string, amount: BigNumberish): Promise<PopulatedTransaction>
  }
}
