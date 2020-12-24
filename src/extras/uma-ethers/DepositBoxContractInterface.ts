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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DepositBoxInterface extends ethers.utils.Interface {
  functions: {
    "cancelWithdrawal()": FunctionFragment;
    "collateralCurrency()": FunctionFragment;
    "cumulativeFeeMultiplier()": FunctionFragment;
    "deposit(tuple)": FunctionFragment;
    "emergencyShutdown()": FunctionFragment;
    "executeWithdrawal()": FunctionFragment;
    "finder()": FunctionFragment;
    "getCollateral(address)": FunctionFragment;
    "getCurrentTime()": FunctionFragment;
    "initialize()": FunctionFragment;
    "payRegularFees()": FunctionFragment;
    "pfc()": FunctionFragment;
    "remargin()": FunctionFragment;
    "requestWithdrawal(tuple)": FunctionFragment;
    "setCurrentTime(uint256)": FunctionFragment;
    "timerAddress()": FunctionFragment;
    "totalDepositBoxCollateral()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cancelWithdrawal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collateralCurrency",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeFeeMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [{ rawValue: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyShutdown",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeWithdrawal",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCollateral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payRegularFees",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pfc", values?: undefined): string;
  encodeFunctionData(functionFragment: "remargin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requestWithdrawal",
    values: [{ rawValue: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalDepositBoxCollateral",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeFeeMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyShutdown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payRegularFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pfc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remargin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDepositBoxCollateral",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "EndedDepositBox(address)": EventFragment;
    "FinalFeesPaid(uint256)": EventFragment;
    "NewDepositBox(address)": EventFragment;
    "RegularFeesPaid(uint256,uint256)": EventFragment;
    "RequestWithdrawal(address,uint256,uint256)": EventFragment;
    "RequestWithdrawalCanceled(address,uint256,uint256)": EventFragment;
    "RequestWithdrawalExecuted(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EndedDepositBox"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FinalFeesPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDepositBox"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegularFeesPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawalCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawalExecuted"): EventFragment;
}

export interface DepositBox extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DepositBoxInterface;

  functions: {
    cancelWithdrawal(overrides?: Overrides): Promise<ContractTransaction>;

    collateralCurrency(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    cumulativeFeeMultiplier(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber;
      0: BigNumber;
    }>;

    deposit(
      collateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>;

    executeWithdrawal(overrides?: Overrides): Promise<ContractTransaction>;

    finder(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getCollateral(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: { rawValue: BigNumber; 0: BigNumber };
    }>;

    getCurrentTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    initialize(overrides?: Overrides): Promise<ContractTransaction>;

    payRegularFees(overrides?: Overrides): Promise<ContractTransaction>;

    pfc(
      overrides?: CallOverrides
    ): Promise<{
      0: { rawValue: BigNumber; 0: BigNumber };
    }>;

    remargin(overrides?: Overrides): Promise<ContractTransaction>;

    requestWithdrawal(
      denominatedCollateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setCurrentTime(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    timerAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    totalDepositBoxCollateral(
      overrides?: CallOverrides
    ): Promise<{
      0: { rawValue: BigNumber; 0: BigNumber };
    }>;
  };

  cancelWithdrawal(overrides?: Overrides): Promise<ContractTransaction>;

  collateralCurrency(overrides?: CallOverrides): Promise<string>;

  cumulativeFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    collateralAmount: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>;

  executeWithdrawal(overrides?: Overrides): Promise<ContractTransaction>;

  finder(overrides?: CallOverrides): Promise<string>;

  getCollateral(
    user: string,
    overrides?: CallOverrides
  ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(overrides?: Overrides): Promise<ContractTransaction>;

  payRegularFees(overrides?: Overrides): Promise<ContractTransaction>;

  pfc(
    overrides?: CallOverrides
  ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

  remargin(overrides?: Overrides): Promise<ContractTransaction>;

  requestWithdrawal(
    denominatedCollateralAmount: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCurrentTime(
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  timerAddress(overrides?: CallOverrides): Promise<string>;

  totalDepositBoxCollateral(
    overrides?: CallOverrides
  ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

  callStatic: {
    cancelWithdrawal(overrides?: Overrides): Promise<void>;

    collateralCurrency(overrides?: CallOverrides): Promise<string>;

    cumulativeFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      collateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<void>;

    emergencyShutdown(overrides?: Overrides): Promise<void>;

    executeWithdrawal(
      overrides?: Overrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

    finder(overrides?: CallOverrides): Promise<string>;

    getCollateral(
      user: string,
      overrides?: CallOverrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(overrides?: Overrides): Promise<void>;

    payRegularFees(
      overrides?: Overrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

    pfc(
      overrides?: CallOverrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

    remargin(overrides?: Overrides): Promise<void>;

    requestWithdrawal(
      denominatedCollateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<void>;

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<void>;

    timerAddress(overrides?: CallOverrides): Promise<string>;

    totalDepositBoxCollateral(
      overrides?: CallOverrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;
  };

  filters: {
    Deposit(
      user: string | null,
      collateralAmount: BigNumberish | null
    ): EventFilter;

    EndedDepositBox(user: string | null): EventFilter;

    FinalFeesPaid(amount: BigNumberish | null): EventFilter;

    NewDepositBox(user: string | null): EventFilter;

    RegularFeesPaid(
      regularFee: BigNumberish | null,
      lateFee: BigNumberish | null
    ): EventFilter;

    RequestWithdrawal(
      user: string | null,
      collateralAmount: BigNumberish | null,
      requestPassTimestamp: null
    ): EventFilter;

    RequestWithdrawalCanceled(
      user: string | null,
      collateralAmount: BigNumberish | null,
      requestPassTimestamp: null
    ): EventFilter;

    RequestWithdrawalExecuted(
      user: string | null,
      collateralAmount: BigNumberish | null,
      exchangeRate: null,
      requestPassTimestamp: null
    ): EventFilter;
  };

  estimateGas: {
    cancelWithdrawal(): Promise<BigNumber>;
    collateralCurrency(): Promise<BigNumber>;
    cumulativeFeeMultiplier(): Promise<BigNumber>;
    deposit(collateralAmount: { rawValue: BigNumberish }): Promise<BigNumber>;
    emergencyShutdown(): Promise<BigNumber>;
    executeWithdrawal(): Promise<BigNumber>;
    finder(): Promise<BigNumber>;
    getCollateral(user: string): Promise<BigNumber>;
    getCurrentTime(): Promise<BigNumber>;
    initialize(): Promise<BigNumber>;
    payRegularFees(): Promise<BigNumber>;
    pfc(): Promise<BigNumber>;
    remargin(): Promise<BigNumber>;
    requestWithdrawal(denominatedCollateralAmount: {
      rawValue: BigNumberish;
    }): Promise<BigNumber>;
    setCurrentTime(time: BigNumberish): Promise<BigNumber>;
    timerAddress(): Promise<BigNumber>;
    totalDepositBoxCollateral(): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelWithdrawal(): Promise<PopulatedTransaction>;
    collateralCurrency(): Promise<PopulatedTransaction>;
    cumulativeFeeMultiplier(): Promise<PopulatedTransaction>;
    deposit(collateralAmount: {
      rawValue: BigNumberish;
    }): Promise<PopulatedTransaction>;
    emergencyShutdown(): Promise<PopulatedTransaction>;
    executeWithdrawal(): Promise<PopulatedTransaction>;
    finder(): Promise<PopulatedTransaction>;
    getCollateral(user: string): Promise<PopulatedTransaction>;
    getCurrentTime(): Promise<PopulatedTransaction>;
    initialize(): Promise<PopulatedTransaction>;
    payRegularFees(): Promise<PopulatedTransaction>;
    pfc(): Promise<PopulatedTransaction>;
    remargin(): Promise<PopulatedTransaction>;
    requestWithdrawal(denominatedCollateralAmount: {
      rawValue: BigNumberish;
    }): Promise<PopulatedTransaction>;
    setCurrentTime(time: BigNumberish): Promise<PopulatedTransaction>;
    timerAddress(): Promise<PopulatedTransaction>;
    totalDepositBoxCollateral(): Promise<PopulatedTransaction>;
  };
}
