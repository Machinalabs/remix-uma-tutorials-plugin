import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Withdrawable } from "./WithdrawableContractInterface";

export class WithdrawableInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Withdrawable> {
    return super.deploy(overrides || {}) as Promise<Withdrawable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Withdrawable {
    return super.attach(address) as Withdrawable;
  }
  connect(signer: Signer): WithdrawableInstanceCreator {
    return super.connect(signer) as WithdrawableInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Withdrawable {
    return new Contract(address, _abi, signerOrProvider) as Withdrawable;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roleId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newMember",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "AddedSharedMember",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roleId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldMember",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "RemovedSharedMember",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roleId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newMember",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "ResetExclusiveMember",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newMember",
        type: "address",
      },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roleId",
        type: "uint256",
      },
    ],
    name: "getMember",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "memberToCheck",
        type: "address",
      },
    ],
    name: "holdsRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "memberToRemove",
        type: "address",
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roleId",
        type: "uint256",
      },
    ],
    name: "renounceMembership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newMember",
        type: "address",
      },
    ],
    name: "resetMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20Address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode = "";
