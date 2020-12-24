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
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ReentrancyAttackInterface extends ethers.utils.Interface {
  functions: {
    "callSender(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "callSender",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "callSender", data: BytesLike): Result;

  events: {};
}

export interface ReentrancyAttack extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ReentrancyAttackInterface;

  functions: {
    callSender(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  callSender(
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    callSender(data: BytesLike, overrides?: Overrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    callSender(data: BytesLike): Promise<BigNumber>;
  };

  populateTransaction: {
    callSender(data: BytesLike): Promise<PopulatedTransaction>;
  };
}
