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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface OracleInterfacesInterface extends ethers.utils.Interface {
  functions: {
    "FinancialContractsAdmin()": FunctionFragment;
    "IdentifierWhitelist()": FunctionFragment;
    "Oracle()": FunctionFragment;
    "Registry()": FunctionFragment;
    "Store()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "FinancialContractsAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IdentifierWhitelist",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "Registry", values?: undefined): string;
  encodeFunctionData(functionFragment: "Store", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "FinancialContractsAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IdentifierWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Store", data: BytesLike): Result;

  events: {};
}

export interface OracleInterfaces extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: OracleInterfacesInterface;

  functions: {
    FinancialContractsAdmin(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    IdentifierWhitelist(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    Oracle(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    Registry(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    Store(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  FinancialContractsAdmin(overrides?: CallOverrides): Promise<string>;

  IdentifierWhitelist(overrides?: CallOverrides): Promise<string>;

  Oracle(overrides?: CallOverrides): Promise<string>;

  Registry(overrides?: CallOverrides): Promise<string>;

  Store(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    FinancialContractsAdmin(overrides?: CallOverrides): Promise<string>;

    IdentifierWhitelist(overrides?: CallOverrides): Promise<string>;

    Oracle(overrides?: CallOverrides): Promise<string>;

    Registry(overrides?: CallOverrides): Promise<string>;

    Store(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    FinancialContractsAdmin(): Promise<BigNumber>;
    IdentifierWhitelist(): Promise<BigNumber>;
    Oracle(): Promise<BigNumber>;
    Registry(): Promise<BigNumber>;
    Store(): Promise<BigNumber>;
  };

  populateTransaction: {
    FinancialContractsAdmin(): Promise<PopulatedTransaction>;
    IdentifierWhitelist(): Promise<PopulatedTransaction>;
    Oracle(): Promise<PopulatedTransaction>;
    Registry(): Promise<PopulatedTransaction>;
    Store(): Promise<PopulatedTransaction>;
  };
}
