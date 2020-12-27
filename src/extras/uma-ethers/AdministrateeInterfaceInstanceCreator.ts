import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { AdministrateeInterface } from "./AdministrateeInterfaceContractInterface"

export class AdministrateeInterfaceInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<AdministrateeInterface> {
    return super.deploy(overrides || {}) as Promise<AdministrateeInterface>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): AdministrateeInterface {
    return super.attach(address) as AdministrateeInterface
  }
  connect(signer: Signer): AdministrateeInterfaceInstanceCreator {
    return super.connect(signer) as AdministrateeInterfaceInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AdministrateeInterface {
    return new Contract(address, _abi, signerOrProvider) as AdministrateeInterface
  }
}

const _abi = [
  {
    inputs: [],
    name: "emergencyShutdown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode = ""
