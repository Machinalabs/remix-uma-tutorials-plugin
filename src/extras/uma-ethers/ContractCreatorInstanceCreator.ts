import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { ContractCreator } from "./ContractCreatorContractInterface"

export class ContractCreatorInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(_finderAddress: string, overrides?: Overrides): Promise<ContractCreator> {
    return super.deploy(_finderAddress, overrides || {}) as Promise<ContractCreator>
  }
  getDeployTransaction(_finderAddress: string, overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(_finderAddress, overrides || {})
  }
  attach(address: string): ContractCreator {
    return super.attach(address) as ContractCreator
  }
  connect(signer: Signer): ContractCreatorInstanceCreator {
    return super.connect(signer) as ContractCreatorInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ContractCreator {
    return new Contract(address, _abi, signerOrProvider) as ContractCreator
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_finderAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
]

const _bytecode = ""
