import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { IdentifierWhitelistInterface } from "./IdentifierWhitelistInterfaceContractInterface"

export class IdentifierWhitelistInterfaceInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<IdentifierWhitelistInterface> {
    return super.deploy(overrides || {}) as Promise<IdentifierWhitelistInterface>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): IdentifierWhitelistInterface {
    return super.attach(address) as IdentifierWhitelistInterface
  }
  connect(signer: Signer): IdentifierWhitelistInterfaceInstanceCreator {
    return super.connect(signer) as IdentifierWhitelistInterfaceInstanceCreator
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdentifierWhitelistInterface {
    return new Contract(address, _abi, signerOrProvider) as IdentifierWhitelistInterface
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
    ],
    name: "addSupportedIdentifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
    ],
    name: "isIdentifierSupported",
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
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
    ],
    name: "removeSupportedIdentifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode = ""
