import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface StoreInterface extends ethers.utils.Interface {
  functions: {
    "SECONDS_PER_WEEK()": FunctionFragment;
    "addMember(uint256,address)": FunctionFragment;
    "computeFinalFee(address)": FunctionFragment;
    "computeRegularFee(uint256,uint256,tuple)": FunctionFragment;
    "finalFees(address)": FunctionFragment;
    "fixedOracleFeePerSecondPerPfc()": FunctionFragment;
    "getCurrentTime()": FunctionFragment;
    "getMember(uint256)": FunctionFragment;
    "holdsRole(uint256,address)": FunctionFragment;
    "payOracleFees()": FunctionFragment;
    "payOracleFeesErc20(address,tuple)": FunctionFragment;
    "removeMember(uint256,address)": FunctionFragment;
    "renounceMembership(uint256)": FunctionFragment;
    "resetMember(uint256,address)": FunctionFragment;
    "setCurrentTime(uint256)": FunctionFragment;
    "setFinalFee(address,tuple)": FunctionFragment;
    "setFixedOracleFeePerSecondPerPfc(tuple)": FunctionFragment;
    "setWeeklyDelayFeePerSecondPerPfc(tuple)": FunctionFragment;
    "timerAddress()": FunctionFragment;
    "weeklyDelayFeePerSecondPerPfc()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
    "withdrawErc20(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "SECONDS_PER_WEEK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addMember",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "computeFinalFee",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "computeRegularFee",
    values: [BigNumberish, BigNumberish, { rawValue: BigNumberish }]
  ): string;
  encodeFunctionData(functionFragment: "finalFees", values: [string]): string;
  encodeFunctionData(
    functionFragment: "fixedOracleFeePerSecondPerPfc",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMember",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "holdsRole",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "payOracleFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payOracleFeesErc20",
    values: [string, { rawValue: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMember",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceMembership",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "resetMember",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFinalFee",
    values: [string, { rawValue: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "setFixedOracleFeePerSecondPerPfc",
    values: [{ rawValue: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "setWeeklyDelayFeePerSecondPerPfc",
    values: [{ rawValue: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "timerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "weeklyDelayFeePerSecondPerPfc",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawErc20",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "SECONDS_PER_WEEK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMember", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeFinalFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeRegularFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finalFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fixedOracleFeePerSecondPerPfc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMember", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "holdsRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payOracleFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payOracleFeesErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceMembership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "resetMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFinalFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFixedOracleFeePerSecondPerPfc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWeeklyDelayFeePerSecondPerPfc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "weeklyDelayFeePerSecondPerPfc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawErc20",
    data: BytesLike
  ): Result;

  events: {
    "AddedSharedMember(uint256,address,address)": EventFragment;
    "NewFinalFee(tuple)": EventFragment;
    "NewFixedOracleFeePerSecondPerPfc(tuple)": EventFragment;
    "NewWeeklyDelayFeePerSecondPerPfc(tuple)": EventFragment;
    "RemovedSharedMember(uint256,address,address)": EventFragment;
    "ResetExclusiveMember(uint256,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedSharedMember"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewFinalFee"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewFixedOracleFeePerSecondPerPfc"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "NewWeeklyDelayFeePerSecondPerPfc"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedSharedMember"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ResetExclusiveMember"): EventFragment;
}

export interface Store extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StoreInterface;

  functions: {
    SECONDS_PER_WEEK(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    addMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    computeFinalFee(
      currency: string,
      overrides?: CallOverrides
    ): Promise<{
      0: { rawValue: BigNumber; 0: BigNumber };
    }>;

    computeRegularFee(
      startTime: BigNumberish,
      endTime: BigNumberish,
      pfc: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      regularFee: { rawValue: BigNumber; 0: BigNumber };
      latePenalty: { rawValue: BigNumber; 0: BigNumber };
      0: { rawValue: BigNumber; 0: BigNumber };
      1: { rawValue: BigNumber; 0: BigNumber };
    }>;

    finalFees(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber;
      0: BigNumber;
    }>;

    fixedOracleFeePerSecondPerPfc(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber;
      0: BigNumber;
    }>;

    getCurrentTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getMember(
      roleId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    holdsRole(
      roleId: BigNumberish,
      memberToCheck: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    payOracleFees(overrides?: PayableOverrides): Promise<ContractTransaction>;

    payOracleFeesErc20(
      erc20Address: string,
      amount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeMember(
      roleId: BigNumberish,
      memberToRemove: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceMembership(
      roleId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    resetMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCurrentTime(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFinalFee(
      currency: string,
      newFinalFee: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFixedOracleFeePerSecondPerPfc(
      newFixedOracleFeePerSecondPerPfc: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setWeeklyDelayFeePerSecondPerPfc(
      newWeeklyDelayFeePerSecondPerPfc: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    timerAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    weeklyDelayFeePerSecondPerPfc(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber;
      0: BigNumber;
    }>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdrawErc20(
      erc20Address: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  SECONDS_PER_WEEK(overrides?: CallOverrides): Promise<BigNumber>;

  addMember(
    roleId: BigNumberish,
    newMember: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  computeFinalFee(
    currency: string,
    overrides?: CallOverrides
  ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

  computeRegularFee(
    startTime: BigNumberish,
    endTime: BigNumberish,
    pfc: { rawValue: BigNumberish },
    overrides?: CallOverrides
  ): Promise<{
    regularFee: { rawValue: BigNumber; 0: BigNumber };
    latePenalty: { rawValue: BigNumber; 0: BigNumber };
    0: { rawValue: BigNumber; 0: BigNumber };
    1: { rawValue: BigNumber; 0: BigNumber };
  }>;

  finalFees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  fixedOracleFeePerSecondPerPfc(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

  getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  holdsRole(
    roleId: BigNumberish,
    memberToCheck: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  payOracleFees(overrides?: PayableOverrides): Promise<ContractTransaction>;

  payOracleFeesErc20(
    erc20Address: string,
    amount: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeMember(
    roleId: BigNumberish,
    memberToRemove: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceMembership(
    roleId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  resetMember(
    roleId: BigNumberish,
    newMember: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCurrentTime(
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFinalFee(
    currency: string,
    newFinalFee: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFixedOracleFeePerSecondPerPfc(
    newFixedOracleFeePerSecondPerPfc: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setWeeklyDelayFeePerSecondPerPfc(
    newWeeklyDelayFeePerSecondPerPfc: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  timerAddress(overrides?: CallOverrides): Promise<string>;

  weeklyDelayFeePerSecondPerPfc(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdrawErc20(
    erc20Address: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    SECONDS_PER_WEEK(overrides?: CallOverrides): Promise<BigNumber>;

    addMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<void>;

    computeFinalFee(
      currency: string,
      overrides?: CallOverrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

    computeRegularFee(
      startTime: BigNumberish,
      endTime: BigNumberish,
      pfc: { rawValue: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      regularFee: { rawValue: BigNumber; 0: BigNumber };
      latePenalty: { rawValue: BigNumber; 0: BigNumber };
      0: { rawValue: BigNumber; 0: BigNumber };
      1: { rawValue: BigNumber; 0: BigNumber };
    }>;

    finalFees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    fixedOracleFeePerSecondPerPfc(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    getMember(roleId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    holdsRole(
      roleId: BigNumberish,
      memberToCheck: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    payOracleFees(overrides?: PayableOverrides): Promise<void>;

    payOracleFeesErc20(
      erc20Address: string,
      amount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<void>;

    removeMember(
      roleId: BigNumberish,
      memberToRemove: string,
      overrides?: Overrides
    ): Promise<void>;

    renounceMembership(
      roleId: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    resetMember(
      roleId: BigNumberish,
      newMember: string,
      overrides?: Overrides
    ): Promise<void>;

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<void>;

    setFinalFee(
      currency: string,
      newFinalFee: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<void>;

    setFixedOracleFeePerSecondPerPfc(
      newFixedOracleFeePerSecondPerPfc: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<void>;

    setWeeklyDelayFeePerSecondPerPfc(
      newWeeklyDelayFeePerSecondPerPfc: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<void>;

    timerAddress(overrides?: CallOverrides): Promise<string>;

    weeklyDelayFeePerSecondPerPfc(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(amount: BigNumberish, overrides?: Overrides): Promise<void>;

    withdrawErc20(
      erc20Address: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {
    AddedSharedMember(
      roleId: BigNumberish | null,
      newMember: string | null,
      manager: string | null
    ): EventFilter;

    NewFinalFee(newFinalFee: null): EventFilter;

    NewFixedOracleFeePerSecondPerPfc(newOracleFee: null): EventFilter;

    NewWeeklyDelayFeePerSecondPerPfc(
      newWeeklyDelayFeePerSecondPerPfc: null
    ): EventFilter;

    RemovedSharedMember(
      roleId: BigNumberish | null,
      oldMember: string | null,
      manager: string | null
    ): EventFilter;

    ResetExclusiveMember(
      roleId: BigNumberish | null,
      newMember: string | null,
      manager: string | null
    ): EventFilter;
  };

  estimateGas: {
    SECONDS_PER_WEEK(): Promise<BigNumber>;
    addMember(roleId: BigNumberish, newMember: string): Promise<BigNumber>;
    computeFinalFee(currency: string): Promise<BigNumber>;
    computeRegularFee(
      startTime: BigNumberish,
      endTime: BigNumberish,
      pfc: { rawValue: BigNumberish }
    ): Promise<BigNumber>;
    finalFees(arg0: string): Promise<BigNumber>;
    fixedOracleFeePerSecondPerPfc(): Promise<BigNumber>;
    getCurrentTime(): Promise<BigNumber>;
    getMember(roleId: BigNumberish): Promise<BigNumber>;
    holdsRole(roleId: BigNumberish, memberToCheck: string): Promise<BigNumber>;
    payOracleFees(): Promise<BigNumber>;
    payOracleFeesErc20(
      erc20Address: string,
      amount: { rawValue: BigNumberish }
    ): Promise<BigNumber>;
    removeMember(
      roleId: BigNumberish,
      memberToRemove: string
    ): Promise<BigNumber>;
    renounceMembership(roleId: BigNumberish): Promise<BigNumber>;
    resetMember(roleId: BigNumberish, newMember: string): Promise<BigNumber>;
    setCurrentTime(time: BigNumberish): Promise<BigNumber>;
    setFinalFee(
      currency: string,
      newFinalFee: { rawValue: BigNumberish }
    ): Promise<BigNumber>;
    setFixedOracleFeePerSecondPerPfc(newFixedOracleFeePerSecondPerPfc: {
      rawValue: BigNumberish;
    }): Promise<BigNumber>;
    setWeeklyDelayFeePerSecondPerPfc(newWeeklyDelayFeePerSecondPerPfc: {
      rawValue: BigNumberish;
    }): Promise<BigNumber>;
    timerAddress(): Promise<BigNumber>;
    weeklyDelayFeePerSecondPerPfc(): Promise<BigNumber>;
    withdraw(amount: BigNumberish): Promise<BigNumber>;
    withdrawErc20(
      erc20Address: string,
      amount: BigNumberish
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    SECONDS_PER_WEEK(): Promise<PopulatedTransaction>;
    addMember(
      roleId: BigNumberish,
      newMember: string
    ): Promise<PopulatedTransaction>;
    computeFinalFee(currency: string): Promise<PopulatedTransaction>;
    computeRegularFee(
      startTime: BigNumberish,
      endTime: BigNumberish,
      pfc: { rawValue: BigNumberish }
    ): Promise<PopulatedTransaction>;
    finalFees(arg0: string): Promise<PopulatedTransaction>;
    fixedOracleFeePerSecondPerPfc(): Promise<PopulatedTransaction>;
    getCurrentTime(): Promise<PopulatedTransaction>;
    getMember(roleId: BigNumberish): Promise<PopulatedTransaction>;
    holdsRole(
      roleId: BigNumberish,
      memberToCheck: string
    ): Promise<PopulatedTransaction>;
    payOracleFees(): Promise<PopulatedTransaction>;
    payOracleFeesErc20(
      erc20Address: string,
      amount: { rawValue: BigNumberish }
    ): Promise<PopulatedTransaction>;
    removeMember(
      roleId: BigNumberish,
      memberToRemove: string
    ): Promise<PopulatedTransaction>;
    renounceMembership(roleId: BigNumberish): Promise<PopulatedTransaction>;
    resetMember(
      roleId: BigNumberish,
      newMember: string
    ): Promise<PopulatedTransaction>;
    setCurrentTime(time: BigNumberish): Promise<PopulatedTransaction>;
    setFinalFee(
      currency: string,
      newFinalFee: { rawValue: BigNumberish }
    ): Promise<PopulatedTransaction>;
    setFixedOracleFeePerSecondPerPfc(newFixedOracleFeePerSecondPerPfc: {
      rawValue: BigNumberish;
    }): Promise<PopulatedTransaction>;
    setWeeklyDelayFeePerSecondPerPfc(newWeeklyDelayFeePerSecondPerPfc: {
      rawValue: BigNumberish;
    }): Promise<PopulatedTransaction>;
    timerAddress(): Promise<PopulatedTransaction>;
    weeklyDelayFeePerSecondPerPfc(): Promise<PopulatedTransaction>;
    withdraw(amount: BigNumberish): Promise<PopulatedTransaction>;
    withdrawErc20(
      erc20Address: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
  };
}
