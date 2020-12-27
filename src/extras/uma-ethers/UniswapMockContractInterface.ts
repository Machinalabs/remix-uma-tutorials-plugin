import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface UniswapMockInterface extends ethers.utils.Interface {
  functions: {
    "setPrice(uint112,uint112)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "setPrice", values: [BigNumberish, BigNumberish]): string

  decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result

  events: {
    "Sync(uint112,uint112)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment
}

export interface UniswapMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: UniswapMockInterface

  functions: {
    setPrice(
      reserve0: BigNumberish,
      reserve1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  setPrice(
    reserve0: BigNumberish,
    reserve1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    setPrice(reserve0: BigNumberish, reserve1: BigNumberish, overrides?: Overrides): Promise<void>
  }

  filters: {
    Sync(reserve0: null, reserve1: null): EventFilter
  }

  estimateGas: {
    setPrice(reserve0: BigNumberish, reserve1: BigNumberish): Promise<BigNumber>
  }

  populateTransaction: {
    setPrice(reserve0: BigNumberish, reserve1: BigNumberish): Promise<PopulatedTransaction>
  }
}
