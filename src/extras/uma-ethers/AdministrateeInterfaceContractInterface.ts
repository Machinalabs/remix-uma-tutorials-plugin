import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface AdministrateeInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "emergencyShutdown()": FunctionFragment
    "remargin()": FunctionFragment
  }

  encodeFunctionData(functionFragment: "emergencyShutdown", values?: undefined): string
  encodeFunctionData(functionFragment: "remargin", values?: undefined): string

  decodeFunctionResult(functionFragment: "emergencyShutdown", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "remargin", data: BytesLike): Result

  events: {}
}

export interface AdministrateeInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: AdministrateeInterfaceInterface

  functions: {
    emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>

    remargin(overrides?: Overrides): Promise<ContractTransaction>
  }

  emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>

  remargin(overrides?: Overrides): Promise<ContractTransaction>

  callStatic: {
    emergencyShutdown(overrides?: Overrides): Promise<void>

    remargin(overrides?: Overrides): Promise<void>
  }

  filters: {}

  estimateGas: {
    emergencyShutdown(): Promise<BigNumber>
    remargin(): Promise<BigNumber>
  }

  populateTransaction: {
    emergencyShutdown(): Promise<PopulatedTransaction>
    remargin(): Promise<PopulatedTransaction>
  }
}
