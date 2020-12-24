import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { IdentifierWhitelist } from "./IdentifierWhitelistContractInterface";

export class IdentifierWhitelistInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<IdentifierWhitelist> {
    return super.deploy(overrides || {}) as Promise<IdentifierWhitelist>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IdentifierWhitelist {
    return super.attach(address) as IdentifierWhitelist;
  }
  connect(signer: Signer): IdentifierWhitelistInstanceCreator {
    return super.connect(signer) as IdentifierWhitelistInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdentifierWhitelist {
    return new Contract(address, _abi, signerOrProvider) as IdentifierWhitelist;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
    ],
    name: "SupportedIdentifierAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
    ],
    name: "SupportedIdentifierRemoved",
    type: "event",
  },
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
    inputs: [],
    name: "owner",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006100146100b760201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100bf565b600033905090565b610883806100ce6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806310a7e20114610067578063715018a6146100955780638da5cb5b1461009f5780638e0d3ca7146100e957806390978d1b14610117578063f2fde38b1461015d575b600080fd5b6100936004803603602081101561007d57600080fd5b81019080803590602001909291905050506101a1565b005b61009d6102eb565b005b6100a7610473565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610115600480360360208110156100ff57600080fd5b810190808035906020019092919050505061049c565b005b6101436004803603602081101561012d57600080fd5b81019080803590602001909291905050506105e8565b604051808215151515815260200191505060405180910390f35b61019f6004803603602081101561017357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610612565b005b6101a961081f565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461026a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600082815260200190815260200160002060009054906101000a900460ff166102e857600180600083815260200190815260200160002060006101000a81548160ff021916908315150217905550807fa0ca1076d765c13772089a90b5121cf6ddf63c9f7891c4e5031adbc85936b27660405160405180910390a25b50565b6102f361081f565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146103b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104a461081f565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610565576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6001600082815260200190815260200160002060009054906101000a900460ff16156105e55760006001600083815260200190815260200160002060006101000a81548160ff021916908315150217905550807fefdf15ca0f9402bd4e933b0edb0db65b23cc50d27cb010d8abcadaae4fa944e560405160405180910390a25b50565b60006001600083815260200190815260200160002060009054906101000a900460ff169050919050565b61061a61081f565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610761576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806108286026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60003390509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a264697066735822122032f213e80077cea92ec6d9c67ae62ad3c4cbbe377786292f5c8fc5987e7a71a264736f6c63430006020033";
