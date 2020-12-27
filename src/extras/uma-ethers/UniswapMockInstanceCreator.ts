import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { UniswapMock } from "./UniswapMockContractInterface"

export class UniswapMockInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<UniswapMock> {
    return super.deploy(overrides || {}) as Promise<UniswapMock>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): UniswapMock {
    return super.attach(address) as UniswapMock
  }
  connect(signer: Signer): UniswapMockInstanceCreator {
    return super.connect(signer) as UniswapMockInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): UniswapMock {
    return new Contract(address, _abi, signerOrProvider) as UniswapMock
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode =
  "0x608060405234801561001057600080fd5b50610141806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638fa07a1114610030575b600080fd5b6100866004803603604081101561004657600080fd5b8101908080356dffffffffffffffffffffffffffff16906020019092919080356dffffffffffffffffffffffffffff169060200190929190505050610088565b005b7f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1828260405180836dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168152602001826dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff1681526020019250505060405180910390a1505056fea2646970667358221220be93b119c8c0698fb455dcec2357f0bd5388c0921781e12cbe76452f2319b4d964736f6c63430006020033"
