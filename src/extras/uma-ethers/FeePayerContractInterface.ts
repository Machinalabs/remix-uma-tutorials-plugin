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

interface FeePayerInterface extends ethers.utils.Interface {
  functions: {
    "collateralCurrency()": FunctionFragment;
    "cumulativeFeeMultiplier()": FunctionFragment;
    "finder()": FunctionFragment;
    "getCurrentTime()": FunctionFragment;
    "payRegularFees()": FunctionFragment;
    "pfc()": FunctionFragment;
    "setCurrentTime(uint256)": FunctionFragment;
    "timerAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "collateralCurrency",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cumulativeFeeMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCurrentTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payRegularFees",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pfc", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setCurrentTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timerAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "collateralCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cumulativeFeeMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payRegularFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pfc", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timerAddress",
    data: BytesLike
  ): Result;

  events: {
    "FinalFeesPaid(uint256)": EventFragment;
    "RegularFeesPaid(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FinalFeesPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegularFeesPaid"): EventFragment;
}

export interface FeePayer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FeePayerInterface;

  functions: {
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

    finder(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getCurrentTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    payRegularFees(overrides?: Overrides): Promise<ContractTransaction>;

    pfc(
      overrides?: CallOverrides
    ): Promise<{
      0: { rawValue: BigNumber; 0: BigNumber };
    }>;

    setCurrentTime(
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    timerAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  collateralCurrency(overrides?: CallOverrides): Promise<string>;

  cumulativeFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  finder(overrides?: CallOverrides): Promise<string>;

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

  payRegularFees(overrides?: Overrides): Promise<ContractTransaction>;

  pfc(
    overrides?: CallOverrides
  ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

  setCurrentTime(
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  timerAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    collateralCurrency(overrides?: CallOverrides): Promise<string>;

    cumulativeFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    finder(overrides?: CallOverrides): Promise<string>;

    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    payRegularFees(
      overrides?: Overrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

    pfc(
      overrides?: CallOverrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>;

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<void>;

    timerAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    FinalFeesPaid(amount: BigNumberish | null): EventFilter;

    RegularFeesPaid(
      regularFee: BigNumberish | null,
      lateFee: BigNumberish | null
    ): EventFilter;
  };

  estimateGas: {
    collateralCurrency(): Promise<BigNumber>;
    cumulativeFeeMultiplier(): Promise<BigNumber>;
    finder(): Promise<BigNumber>;
    getCurrentTime(): Promise<BigNumber>;
    payRegularFees(): Promise<BigNumber>;
    pfc(): Promise<BigNumber>;
    setCurrentTime(time: BigNumberish): Promise<BigNumber>;
    timerAddress(): Promise<BigNumber>;
  };

  populateTransaction: {
    collateralCurrency(): Promise<PopulatedTransaction>;
    cumulativeFeeMultiplier(): Promise<PopulatedTransaction>;
    finder(): Promise<PopulatedTransaction>;
    getCurrentTime(): Promise<PopulatedTransaction>;
    payRegularFees(): Promise<PopulatedTransaction>;
    pfc(): Promise<PopulatedTransaction>;
    setCurrentTime(time: BigNumberish): Promise<PopulatedTransaction>;
    timerAddress(): Promise<PopulatedTransaction>;
  };
}
