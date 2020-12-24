import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { VotingInterface } from "./VotingInterfaceContractInterface";

export class VotingInterfaceInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<VotingInterface> {
    return super.deploy(overrides || {}) as Promise<VotingInterface>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VotingInterface {
    return super.attach(address) as VotingInterface;
  }
  connect(signer: Signer): VotingInterfaceInstanceCreator {
    return super.connect(signer) as VotingInterfaceInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingInterface {
    return new Contract(address, _abi, signerOrProvider) as VotingInterface;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
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
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "encryptedVote",
            type: "bytes",
          },
        ],
        internalType: "struct VotingInterface.Commitment[]",
        name: "commits",
        type: "tuple[]",
      },
    ],
    name: "batchCommit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
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
          {
            internalType: "int256",
            name: "price",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "salt",
            type: "int256",
          },
        ],
        internalType: "struct VotingInterface.Reveal[]",
        name: "reveals",
        type: "tuple[]",
      },
    ],
    name: "batchReveal",
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
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "commitVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentRoundId",
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
    name: "getPendingRequests",
    outputs: [
      {
        components: [
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
        internalType: "struct VotingInterface.PendingRequest[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVotePhase",
    outputs: [
      {
        internalType: "enum VotingInterface.Phase",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voterAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        components: [
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
        internalType: "struct VotingInterface.PendingRequest[]",
        name: "toRetrieve",
        type: "tuple[]",
      },
    ],
    name: "retrieveRewards",
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
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "price",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "salt",
        type: "int256",
      },
    ],
    name: "revealVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "snapshotCurrentRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode = "";
