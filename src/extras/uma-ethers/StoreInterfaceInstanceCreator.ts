import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { StoreInterface } from "./StoreInterfaceContractInterface"

export class StoreInterfaceInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<StoreInterface> {
    return super.deploy(overrides || {}) as Promise<StoreInterface>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): StoreInterface {
    return super.attach(address) as StoreInterface
  }
  connect(signer: Signer): StoreInterfaceInstanceCreator {
    return super.connect(signer) as StoreInterfaceInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): StoreInterface {
    return new Contract(address, _abi, signerOrProvider) as StoreInterface
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "computeFinalFee",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rawValue",
            type: "uint256",
          },
        ],
        internalType: "struct FixedPoint.Unsigned",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "rawValue",
            type: "uint256",
          },
        ],
        internalType: "struct FixedPoint.Unsigned",
        name: "pfc",
        type: "tuple",
      },
    ],
    name: "computeRegularFee",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rawValue",
            type: "uint256",
          },
        ],
        internalType: "struct FixedPoint.Unsigned",
        name: "regularFee",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "rawValue",
            type: "uint256",
          },
        ],
        internalType: "struct FixedPoint.Unsigned",
        name: "latePenalty",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "payOracleFees",
    outputs: [],
    stateMutability: "payable",
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
        components: [
          {
            internalType: "uint256",
            name: "rawValue",
            type: "uint256",
          },
        ],
        internalType: "struct FixedPoint.Unsigned",
        name: "amount",
        type: "tuple",
      },
    ],
    name: "payOracleFeesErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode = ""
