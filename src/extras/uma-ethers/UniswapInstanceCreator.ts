import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { Uniswap } from "./UniswapContractInterface"

export class UniswapInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<Uniswap> {
    return super.deploy(overrides || {}) as Promise<Uniswap>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Uniswap {
    return super.attach(address) as Uniswap
  }
  connect(signer: Signer): UniswapInstanceCreator {
    return super.connect(signer) as UniswapInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Uniswap {
    return new Contract(address, _abi, signerOrProvider) as Uniswap
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
]

const _bytecode = ""
