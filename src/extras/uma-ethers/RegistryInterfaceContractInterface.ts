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

interface RegistryInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "addPartyToContract(address)": FunctionFragment;
    "getAllRegisteredContracts()": FunctionFragment;
    "getRegisteredContracts(address)": FunctionFragment;
    "isContractRegistered(address)": FunctionFragment;
    "isPartyMemberOfContract(address,address)": FunctionFragment;
    "registerContract(address[],address)": FunctionFragment;
    "removePartyFromContract(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPartyToContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllRegisteredContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRegisteredContracts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isContractRegistered",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPartyMemberOfContract",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerContract",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "removePartyFromContract",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addPartyToContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllRegisteredContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRegisteredContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isContractRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPartyMemberOfContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePartyFromContract",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RegistryInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RegistryInterfaceInterface;

  functions: {
    addPartyToContract(
      party: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getAllRegisteredContracts(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    getRegisteredContracts(
      party: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    isContractRegistered(
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    isPartyMemberOfContract(
      party: string,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    registerContract(
      parties: string[],
      contractAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removePartyFromContract(
      party: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addPartyToContract(
    party: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getAllRegisteredContracts(overrides?: CallOverrides): Promise<string[]>;

  getRegisteredContracts(
    party: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  isContractRegistered(
    contractAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPartyMemberOfContract(
    party: string,
    contractAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  registerContract(
    parties: string[],
    contractAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removePartyFromContract(
    party: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addPartyToContract(party: string, overrides?: Overrides): Promise<void>;

    getAllRegisteredContracts(overrides?: CallOverrides): Promise<string[]>;

    getRegisteredContracts(
      party: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    isContractRegistered(
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPartyMemberOfContract(
      party: string,
      contractAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerContract(
      parties: string[],
      contractAddress: string,
      overrides?: Overrides
    ): Promise<void>;

    removePartyFromContract(
      party: string,
      overrides?: Overrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addPartyToContract(party: string): Promise<BigNumber>;
    getAllRegisteredContracts(): Promise<BigNumber>;
    getRegisteredContracts(party: string): Promise<BigNumber>;
    isContractRegistered(contractAddress: string): Promise<BigNumber>;
    isPartyMemberOfContract(
      party: string,
      contractAddress: string
    ): Promise<BigNumber>;
    registerContract(
      parties: string[],
      contractAddress: string
    ): Promise<BigNumber>;
    removePartyFromContract(party: string): Promise<BigNumber>;
  };

  populateTransaction: {
    addPartyToContract(party: string): Promise<PopulatedTransaction>;
    getAllRegisteredContracts(): Promise<PopulatedTransaction>;
    getRegisteredContracts(party: string): Promise<PopulatedTransaction>;
    isContractRegistered(
      contractAddress: string
    ): Promise<PopulatedTransaction>;
    isPartyMemberOfContract(
      party: string,
      contractAddress: string
    ): Promise<PopulatedTransaction>;
    registerContract(
      parties: string[],
      contractAddress: string
    ): Promise<PopulatedTransaction>;
    removePartyFromContract(party: string): Promise<PopulatedTransaction>;
  };
}
