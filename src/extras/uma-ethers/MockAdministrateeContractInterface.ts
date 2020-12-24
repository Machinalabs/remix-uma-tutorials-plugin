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

interface MockAdministrateeInterface extends ethers.utils.Interface {
  functions: {
    "emergencyShutdown()": FunctionFragment;
    "remargin()": FunctionFragment;
    "timesEmergencyShutdown()": FunctionFragment;
    "timesRemargined()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "emergencyShutdown",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "remargin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "timesEmergencyShutdown",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timesRemargined",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "emergencyShutdown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remargin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "timesEmergencyShutdown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timesRemargined",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockAdministratee extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockAdministrateeInterface;

  functions: {
    emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>;

    remargin(overrides?: Overrides): Promise<ContractTransaction>;

    timesEmergencyShutdown(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    timesRemargined(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>;

  remargin(overrides?: Overrides): Promise<ContractTransaction>;

  timesEmergencyShutdown(overrides?: CallOverrides): Promise<BigNumber>;

  timesRemargined(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    emergencyShutdown(overrides?: Overrides): Promise<void>;

    remargin(overrides?: Overrides): Promise<void>;

    timesEmergencyShutdown(overrides?: CallOverrides): Promise<BigNumber>;

    timesRemargined(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    emergencyShutdown(): Promise<BigNumber>;
    remargin(): Promise<BigNumber>;
    timesEmergencyShutdown(): Promise<BigNumber>;
    timesRemargined(): Promise<BigNumber>;
  };

  populateTransaction: {
    emergencyShutdown(): Promise<PopulatedTransaction>;
    remargin(): Promise<PopulatedTransaction>;
    timesEmergencyShutdown(): Promise<PopulatedTransaction>;
    timesRemargined(): Promise<PopulatedTransaction>;
  };
}
