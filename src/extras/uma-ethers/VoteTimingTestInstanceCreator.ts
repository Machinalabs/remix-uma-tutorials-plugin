import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { VoteTimingTest } from "./VoteTimingTestContractInterface";

export class VoteTimingTestInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    phaseLength: BigNumberish,
    overrides?: Overrides
  ): Promise<VoteTimingTest> {
    return super.deploy(phaseLength, overrides || {}) as Promise<
      VoteTimingTest
    >;
  }
  getDeployTransaction(
    phaseLength: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(phaseLength, overrides || {});
  }
  attach(address: string): VoteTimingTest {
    return super.attach(address) as VoteTimingTest;
  }
  connect(signer: Signer): VoteTimingTestInstanceCreator {
    return super.connect(signer) as VoteTimingTestInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VoteTimingTest {
    return new Contract(address, _abi, signerOrProvider) as VoteTimingTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "phaseLength",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "voteTiming",
    outputs: [
      {
        internalType: "uint256",
        name: "phaseLength",
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
        name: "currentTime",
        type: "uint256",
      },
    ],
    name: "wrapComputeCurrentPhase",
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
        internalType: "uint256",
        name: "currentTime",
        type: "uint256",
      },
    ],
    name: "wrapComputeCurrentRoundId",
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
        name: "phaseLength",
        type: "uint256",
      },
    ],
    name: "wrapInit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105c73803806105c78339818101604052602081101561003357600080fd5b81019080805190602001909291905050506100538161005960201b60201c565b5061008e565b61007181600061007460201b6101cf1790919060201c565b50565b6000811161008157600080fd5b8082600001819055505050565b61052a8061009d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806329e4b0131461005157806344d8ce9a1461009357806371b7db53146100c1578063d9336ea4146100df575b600080fd5b61007d6004803603602081101561006757600080fd5b810190808035906020019092919050505061012f565b6040518082815260200191505060405180910390f35b6100bf600480360360208110156100a957600080fd5b810190808035906020019092919050505061014c565b005b6100c9610163565b6040518082815260200191505060405180910390f35b61010b600480360360208110156100f557600080fd5b810190808035906020019092919050505061016f565b6040518082600281111561011b57fe5b60ff16815260200191505060405180910390f35b600061014582600061018c90919063ffffffff16565b9050919050565b6101608160006101cf90919063ffffffff16565b50565b60008060000154905081565b60006101858260006101e990919063ffffffff16565b9050919050565b6000806101b160028081111561019e57fe5b856000015461023290919063ffffffff16565b90506101c681846102b890919063ffffffff16565b91505092915050565b600081116101dc57600080fd5b8082600001819055505050565b600061021f6002808111156101fa57fe5b6102118560000154856102b890919063ffffffff16565b61030290919063ffffffff16565b600281111561022a57fe5b905092915050565b60008083141561024557600090506102b2565b600082840290508284828161025657fe5b04146102ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806104d46021913960400191505060405180910390fd5b809150505b92915050565b60006102fa83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061034c565b905092915050565b600061034483836040518060400160405280601881526020017f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000815250610412565b905092915050565b600080831182906103f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156103bd5780820151818401526020810190506103a2565b50505050905090810190601f1680156103ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161040457fe5b049050809150509392505050565b60008083141582906104bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610484578082015181840152602081019050610469565b50505050905090810190601f1680156104b15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508284816104c957fe5b069050939250505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220c42dc24daa2619516cb95be80014d3626839dcdccc6a09e500c763f632a313c864736f6c63430006020033";