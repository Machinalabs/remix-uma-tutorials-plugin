import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface TokenFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createToken(string,string,uint8)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "createToken", values: [string, string, BigNumberish]): string

  decodeFunctionResult(functionFragment: "createToken", data: BytesLike): Result

  events: {}
}

export interface TokenFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: TokenFactoryInterface

  functions: {
    createToken(
      tokenName: string,
      tokenSymbol: string,
      tokenDecimals: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  createToken(
    tokenName: string,
    tokenSymbol: string,
    tokenDecimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    createToken(
      tokenName: string,
      tokenSymbol: string,
      tokenDecimals: BigNumberish,
      overrides?: Overrides
    ): Promise<string>
  }

  filters: {}

  estimateGas: {
    createToken(tokenName: string, tokenSymbol: string, tokenDecimals: BigNumberish): Promise<BigNumber>
  }

  populateTransaction: {
    createToken(tokenName: string, tokenSymbol: string, tokenDecimals: BigNumberish): Promise<PopulatedTransaction>
  }
}
