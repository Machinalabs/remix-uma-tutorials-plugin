import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { OracleInterface } from "./OracleInterfaceContractInterface"

export class OracleInterfaceInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<OracleInterface> {
    return super.deploy(overrides || {}) as Promise<OracleInterface>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): OracleInterface {
    return super.attach(address) as OracleInterface
  }
  connect(signer: Signer): OracleInterfaceInstanceCreator {
    return super.connect(signer) as OracleInterfaceInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OracleInterface {
    return new Contract(address, _abi, signerOrProvider) as OracleInterface
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
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "hasPrice",
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
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "requestPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode = ""
