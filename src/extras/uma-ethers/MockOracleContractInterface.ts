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

interface MockOracleInterface extends ethers.utils.Interface {
  functions: {
    "getCurrentTime()": FunctionFragment;
    "getPendingQueries()": FunctionFragment;
    "getPrice(bytes32,uint256)": FunctionFragment;
    "hasPrice(bytes32,uint256)": FunctionFragment;
    "pushPrice(bytes32,uint256,int256)": FunctionFragment;
    "requestPrice(bytes32,uint256)": FunctionFragment;
    "setCurrentTime(uint256)": FunctionFragment;
    "timerAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCurrentTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingQueries",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasPrice",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pushPrice",
    values: [BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestPrice",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrentTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timerAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingQueries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestPrice",
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

  events: {};
}

export interface MockOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockOracleInterface;

  functions: {
    getCurrentTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getPendingQueries(
      overrides?: CallOverrides
    ): Promise<{
      0: { identifier: string; time: BigNumber; 0: string; 1: BigNumber }[];
    }>;

    getPrice(
      identifier: BytesLike,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    hasPrice(
      identifier: BytesLike,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    pushPrice(
      identifier: BytesLike,
      time: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
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
  };

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

  getPendingQueries(
    overrides?: CallOverrides
  ): Promise<
    { identifier: string; time: BigNumber; 0: string; 1: BigNumber }[]
  >;

  getPrice(
    identifier: BytesLike,
    time: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hasPrice(
    identifier: BytesLike,
    time: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  pushPrice(
    identifier: BytesLike,
    time: BigNumberish,
    price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  requestPrice(
    identifier: BytesLike,
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setCurrentTime(
    time: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  timerAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    getPendingQueries(
      overrides?: CallOverrides
    ): Promise<
      { identifier: string; time: BigNumber; 0: string; 1: BigNumber }[]
    >;

    getPrice(
      identifier: BytesLike,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasPrice(
      identifier: BytesLike,
      time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    pushPrice(
      identifier: BytesLike,
      time: BigNumberish,
      price: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    requestPrice(
      identifier: BytesLike,
      time: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<void>;

    timerAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getCurrentTime(): Promise<BigNumber>;
    getPendingQueries(): Promise<BigNumber>;
    getPrice(identifier: BytesLike, time: BigNumberish): Promise<BigNumber>;
    hasPrice(identifier: BytesLike, time: BigNumberish): Promise<BigNumber>;
    pushPrice(
      identifier: BytesLike,
      time: BigNumberish,
      price: BigNumberish
    ): Promise<BigNumber>;
    requestPrice(identifier: BytesLike, time: BigNumberish): Promise<BigNumber>;
    setCurrentTime(time: BigNumberish): Promise<BigNumber>;
    timerAddress(): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentTime(): Promise<PopulatedTransaction>;
    getPendingQueries(): Promise<PopulatedTransaction>;
    getPrice(
      identifier: BytesLike,
      time: BigNumberish
    ): Promise<PopulatedTransaction>;
    hasPrice(
      identifier: BytesLike,
      time: BigNumberish
    ): Promise<PopulatedTransaction>;
    pushPrice(
      identifier: BytesLike,
      time: BigNumberish,
      price: BigNumberish
    ): Promise<PopulatedTransaction>;
    requestPrice(
      identifier: BytesLike,
      time: BigNumberish
    ): Promise<PopulatedTransaction>;
    setCurrentTime(time: BigNumberish): Promise<PopulatedTransaction>;
    timerAddress(): Promise<PopulatedTransaction>;
  };
}
