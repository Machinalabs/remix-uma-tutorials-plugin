import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { Timer } from "./TimerContractInterface"

export class TimerInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<Timer> {
    return super.deploy(overrides || {}) as Promise<Timer>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): Timer {
    return super.attach(address) as Timer
  }
  connect(signer: Signer): TimerInstanceCreator {
    return super.connect(signer) as TimerInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Timer {
    return new Contract(address, _abi, signerOrProvider) as Timer
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getCurrentTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "setCurrentTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode =
  "0x608060405234801561001057600080fd5b504260008190555060c7806100266000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806322f8e56614603757806329cb924d146062575b600080fd5b606060048036036020811015604b57600080fd5b8101908080359060200190929190505050607e565b005b60686088565b6040518082815260200191505060405180910390f35b8060008190555050565b6000805490509056fea26469706673582212207a08dab169e1e6c650fa7508a288fe5d20ef6ddcc3c43053ef3f410c8df2ff9564736f6c63430006020033"
