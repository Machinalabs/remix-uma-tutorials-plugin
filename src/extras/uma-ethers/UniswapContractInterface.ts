import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import { Contract, ContractTransaction } from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UniswapInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "Sync(uint112,uint112)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment;
}

export interface Uniswap extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UniswapInterface;

  functions: {};

  callStatic: {};

  filters: {
    Sync(reserve0: null, reserve1: null): EventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
