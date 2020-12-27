import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { FinderInterface } from "./FinderInterfaceContractInterface"

export class FinderInterfaceInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<FinderInterface> {
    return super.deploy(overrides || {}) as Promise<FinderInterface>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): FinderInterface {
    return super.attach(address) as FinderInterface
  }
  connect(signer: Signer): FinderInterfaceInstanceCreator {
    return super.connect(signer) as FinderInterfaceInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FinderInterface {
    return new Contract(address, _abi, signerOrProvider) as FinderInterface
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "implementationAddress",
        type: "address",
      },
    ],
    name: "changeImplementationAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceName",
        type: "bytes32",
      },
    ],
    name: "getImplementationAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]

const _bytecode = ""
