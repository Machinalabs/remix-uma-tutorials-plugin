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

interface VoteTimingTestInterface extends ethers.utils.Interface {
  functions: {
    "voteTiming()": FunctionFragment;
    "wrapComputeCurrentPhase(uint256)": FunctionFragment;
    "wrapComputeCurrentRoundId(uint256)": FunctionFragment;
    "wrapInit(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "voteTiming",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wrapComputeCurrentPhase",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapComputeCurrentRoundId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapInit",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "voteTiming", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrapComputeCurrentPhase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapComputeCurrentRoundId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wrapInit", data: BytesLike): Result;

  events: {};
}

export interface VoteTimingTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VoteTimingTestInterface;

  functions: {
    voteTiming(
      overrides?: CallOverrides
    ): Promise<{
      phaseLength: BigNumber;
      0: BigNumber;
    }>;

    wrapComputeCurrentPhase(
      currentTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    wrapComputeCurrentRoundId(
      currentTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapInit(
      phaseLength: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  voteTiming(overrides?: CallOverrides): Promise<BigNumber>;

  wrapComputeCurrentPhase(
    currentTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  wrapComputeCurrentRoundId(
    currentTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapInit(
    phaseLength: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    voteTiming(overrides?: CallOverrides): Promise<BigNumber>;

    wrapComputeCurrentPhase(
      currentTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    wrapComputeCurrentRoundId(
      currentTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapInit(phaseLength: BigNumberish, overrides?: Overrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    voteTiming(): Promise<BigNumber>;
    wrapComputeCurrentPhase(currentTime: BigNumberish): Promise<BigNumber>;
    wrapComputeCurrentRoundId(currentTime: BigNumberish): Promise<BigNumber>;
    wrapInit(phaseLength: BigNumberish): Promise<BigNumber>;
  };

  populateTransaction: {
    voteTiming(): Promise<PopulatedTransaction>;
    wrapComputeCurrentPhase(
      currentTime: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapComputeCurrentRoundId(
      currentTime: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapInit(phaseLength: BigNumberish): Promise<PopulatedTransaction>;
  };
}
