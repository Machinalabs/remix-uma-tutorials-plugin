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

interface Umip3UpgraderInterface extends ethers.utils.Interface {
  functions: {
    "existingGovernor()": FunctionFragment;
    "existingVoting()": FunctionFragment;
    "financialContractsAdmin()": FunctionFragment;
    "finder()": FunctionFragment;
    "identifierWhitelist()": FunctionFragment;
    "newGovernor()": FunctionFragment;
    "registry()": FunctionFragment;
    "store()": FunctionFragment;
    "upgrade()": FunctionFragment;
    "voting()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "existingGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "existingVoting",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "financialContractsAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "identifierWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(functionFragment: "store", values?: undefined): string;
  encodeFunctionData(functionFragment: "upgrade", values?: undefined): string;
  encodeFunctionData(functionFragment: "voting", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "existingGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "existingVoting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "financialContractsAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "identifierWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voting", data: BytesLike): Result;

  events: {};
}

export interface Umip3Upgrader extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Umip3UpgraderInterface;

  functions: {
    existingGovernor(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    existingVoting(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    financialContractsAdmin(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    finder(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    identifierWhitelist(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    newGovernor(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    registry(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    store(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    upgrade(overrides?: Overrides): Promise<ContractTransaction>;

    voting(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  existingGovernor(overrides?: CallOverrides): Promise<string>;

  existingVoting(overrides?: CallOverrides): Promise<string>;

  financialContractsAdmin(overrides?: CallOverrides): Promise<string>;

  finder(overrides?: CallOverrides): Promise<string>;

  identifierWhitelist(overrides?: CallOverrides): Promise<string>;

  newGovernor(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  store(overrides?: CallOverrides): Promise<string>;

  upgrade(overrides?: Overrides): Promise<ContractTransaction>;

  voting(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    existingGovernor(overrides?: CallOverrides): Promise<string>;

    existingVoting(overrides?: CallOverrides): Promise<string>;

    financialContractsAdmin(overrides?: CallOverrides): Promise<string>;

    finder(overrides?: CallOverrides): Promise<string>;

    identifierWhitelist(overrides?: CallOverrides): Promise<string>;

    newGovernor(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    store(overrides?: CallOverrides): Promise<string>;

    upgrade(overrides?: Overrides): Promise<void>;

    voting(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    existingGovernor(): Promise<BigNumber>;
    existingVoting(): Promise<BigNumber>;
    financialContractsAdmin(): Promise<BigNumber>;
    finder(): Promise<BigNumber>;
    identifierWhitelist(): Promise<BigNumber>;
    newGovernor(): Promise<BigNumber>;
    registry(): Promise<BigNumber>;
    store(): Promise<BigNumber>;
    upgrade(): Promise<BigNumber>;
    voting(): Promise<BigNumber>;
  };

  populateTransaction: {
    existingGovernor(): Promise<PopulatedTransaction>;
    existingVoting(): Promise<PopulatedTransaction>;
    financialContractsAdmin(): Promise<PopulatedTransaction>;
    finder(): Promise<PopulatedTransaction>;
    identifierWhitelist(): Promise<PopulatedTransaction>;
    newGovernor(): Promise<PopulatedTransaction>;
    registry(): Promise<PopulatedTransaction>;
    store(): Promise<PopulatedTransaction>;
    upgrade(): Promise<PopulatedTransaction>;
    voting(): Promise<PopulatedTransaction>;
  };
}
