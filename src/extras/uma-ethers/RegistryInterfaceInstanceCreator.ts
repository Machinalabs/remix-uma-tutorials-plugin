import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { RegistryInterface } from "./RegistryInterfaceContractInterface";

export class RegistryInterfaceInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<RegistryInterface> {
    return super.deploy(overrides || {}) as Promise<RegistryInterface>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RegistryInterface {
    return super.attach(address) as RegistryInterface;
  }
  connect(signer: Signer): RegistryInterfaceInstanceCreator {
    return super.connect(signer) as RegistryInterfaceInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RegistryInterface {
    return new Contract(address, _abi, signerOrProvider) as RegistryInterface;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "party",
        type: "address",
      },
    ],
    name: "addPartyToContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllRegisteredContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "party",
        type: "address",
      },
    ],
    name: "getRegisteredContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "isContractRegistered",
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
        internalType: "address",
        name: "party",
        type: "address",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "isPartyMemberOfContract",
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
        internalType: "address[]",
        name: "parties",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "registerContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "party",
        type: "address",
      },
    ],
    name: "removePartyFromContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode = "";
