import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { TestableTest } from "./TestableTestContractInterface"

export class TestableTestInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(_timerAddress: string, overrides?: Overrides): Promise<TestableTest> {
    return super.deploy(_timerAddress, overrides || {}) as Promise<TestableTest>
  }
  getDeployTransaction(_timerAddress: string, overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(_timerAddress, overrides || {})
  }
  attach(address: string): TestableTest {
    return super.attach(address) as TestableTest
  }
  connect(signer: Signer): TestableTestInstanceCreator {
    return super.connect(signer) as TestableTestInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TestableTest {
    return new Contract(address, _abi, signerOrProvider) as TestableTest
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_timerAddress",
        type: "address",
      },
    ],
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
    inputs: [],
    name: "getTestableTimeAndBlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "testableTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockTime",
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
  {
    inputs: [],
    name: "timerAddress",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104013803806104018339818101604052602081101561003357600080fd5b810190808051906020019092919050505080806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061036b806100966000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631c39c38d1461005157806322f8e5661461009b57806329cb924d146100c9578063dc6ff7bd146100e7575b600080fd5b61005961010c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100c7600480360360208110156100b157600080fd5b8101908080359060200190929190505050610131565b005b6100d161021b565b6040518082815260200191505060405180910390f35b6100ef610321565b604051808381526020018281526020019250505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561018c57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322f8e566826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561020057600080fd5b505af1158015610214573d6000803e3d6000fd5b5050505050565b60008073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461031a576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102d857600080fd5b505afa1580156102ec573d6000803e3d6000fd5b505050506040513d602081101561030257600080fd5b8101908080519060200190929190505050905061031e565b4290505b90565b60008061032c61021b565b4291509150909156fea2646970667358221220630ec6f350df5e73501c78da90d91a7558c3025d7d3bdead5bee191d04ad99c364736f6c63430006020033"
