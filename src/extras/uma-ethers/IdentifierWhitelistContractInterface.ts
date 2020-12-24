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

interface IdentifierWhitelistInterface extends ethers.utils.Interface {
  functions: {
    "addSupportedIdentifier(bytes32)": FunctionFragment;
    "isIdentifierSupported(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeSupportedIdentifier(bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addSupportedIdentifier",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isIdentifierSupported",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeSupportedIdentifier",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addSupportedIdentifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isIdentifierSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeSupportedIdentifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "SupportedIdentifierAdded(bytes32)": EventFragment;
    "SupportedIdentifierRemoved(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SupportedIdentifierAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SupportedIdentifierRemoved"): EventFragment;
}

export interface IdentifierWhitelist extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IdentifierWhitelistInterface;

  functions: {
    addSupportedIdentifier(
      identifier: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isIdentifierSupported(
      identifier: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    removeSupportedIdentifier(
      identifier: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addSupportedIdentifier(
    identifier: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isIdentifierSupported(
    identifier: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeSupportedIdentifier(
    identifier: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addSupportedIdentifier(
      identifier: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    isIdentifierSupported(
      identifier: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeSupportedIdentifier(
      identifier: BytesLike,
      overrides?: Overrides
    ): Promise<void>;

    renounceOwnership(overrides?: Overrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: Overrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    SupportedIdentifierAdded(identifier: BytesLike | null): EventFilter;

    SupportedIdentifierRemoved(identifier: BytesLike | null): EventFilter;
  };

  estimateGas: {
    addSupportedIdentifier(identifier: BytesLike): Promise<BigNumber>;
    isIdentifierSupported(identifier: BytesLike): Promise<BigNumber>;
    owner(): Promise<BigNumber>;
    removeSupportedIdentifier(identifier: BytesLike): Promise<BigNumber>;
    renounceOwnership(): Promise<BigNumber>;
    transferOwnership(newOwner: string): Promise<BigNumber>;
  };

  populateTransaction: {
    addSupportedIdentifier(
      identifier: BytesLike
    ): Promise<PopulatedTransaction>;
    isIdentifierSupported(identifier: BytesLike): Promise<PopulatedTransaction>;
    owner(): Promise<PopulatedTransaction>;
    removeSupportedIdentifier(
      identifier: BytesLike
    ): Promise<PopulatedTransaction>;
    renounceOwnership(): Promise<PopulatedTransaction>;
    transferOwnership(newOwner: string): Promise<PopulatedTransaction>;
  };
}
