import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Testable } from "./TestableContractInterface";

export class TestableInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_timerAddress: string, overrides?: Overrides): Promise<Testable> {
    return super.deploy(_timerAddress, overrides || {}) as Promise<Testable>;
  }
  getDeployTransaction(
    _timerAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_timerAddress, overrides || {});
  }
  attach(address: string): Testable {
    return super.attach(address) as Testable;
  }
  connect(signer: Signer): TestableInstanceCreator {
    return super.connect(signer) as TestableInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Testable {
    return new Contract(address, _abi, signerOrProvider) as Testable;
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
];

const _bytecode = "";
