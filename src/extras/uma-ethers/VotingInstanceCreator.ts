import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Voting } from "./VotingContractInterface";

export class VotingInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _phaseLength: BigNumberish,
    _gatPercentage: { rawValue: BigNumberish },
    _inflationRate: { rawValue: BigNumberish },
    _rewardsExpirationTimeout: BigNumberish,
    _votingToken: string,
    _finder: string,
    _timerAddress: string,
    overrides?: Overrides
  ): Promise<Voting> {
    return super.deploy(
      _phaseLength,
      _gatPercentage,
      _inflationRate,
      _rewardsExpirationTimeout,
      _votingToken,
      _finder,
      _timerAddress,
      overrides || {}
    ) as Promise<Voting>;
  }
  getDeployTransaction(
    _phaseLength: BigNumberish,
    _gatPercentage: { rawValue: BigNumberish },
    _inflationRate: { rawValue: BigNumberish },
    _rewardsExpirationTimeout: BigNumberish,
    _votingToken: string,
    _finder: string,
    _timerAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _phaseLength,
      _gatPercentage,
      _inflationRate,
      _rewardsExpirationTimeout,
      _votingToken,
      _finder,
      _timerAddress,
      overrides || {}
    );
  }
  attach(address: string): Voting {
    return super.attach(address) as Voting;
  }
  connect(signer: Signer): VotingInstanceCreator {
    return super.connect(signer) as VotingInstanceCreator;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Voting {
    return new Contract(address, _abi, signerOrProvider) as Voting;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_phaseLength",
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
        name: "_gatPercentage",
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
        name: "_inflationRate",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_rewardsExpirationTimeout",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_votingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_finder",
        type: "address",
      },
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encryptedVote",
        type: "bytes",
      },
    ],
    name: "EncryptedVote",
    type: "event",
  },
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
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "PriceRequestAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "price",
        type: "int256",
      },
    ],
    name: "PriceResolved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "RewardsRetrieved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "VoteCommitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "price",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numTokens",
        type: "uint256",
      },
    ],
    name: "VoteRevealed",
    type: "event",
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
      {
        internalType: "bytes",
        name: "encryptedVote",
        type: "bytes",
      },
    ],
    name: "commitAndEmitEncryptedVote",
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
    name: "gatPercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "rawValue",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "requests",
        type: "tuple[]",
      },
    ],
    name: "getPriceRequestStatuses",
    outputs: [
      {
        components: [
          {
            internalType: "enum Voting.RequestStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "lastVotingRound",
            type: "uint256",
          },
        ],
        internalType: "struct Voting.RequestState[]",
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
    inputs: [],
    name: "inflationRate",
    outputs: [
      {
        internalType: "uint256",
        name: "rawValue",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "migratedAddress",
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
    inputs: [],
    name: "renounceOwnership",
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
    ],
    name: "requestPrice",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "totalRewardToIssue",
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
    name: "rewardsExpirationTimeout",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "rounds",
    outputs: [
      {
        internalType: "uint256",
        name: "snapshotId",
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
        name: "inflationRate",
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
        name: "gatPercentage",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "rewardsExpirationTime",
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
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rawValue",
            type: "uint256",
          },
        ],
        internalType: "struct FixedPoint.Unsigned",
        name: "newGatPercentage",
        type: "tuple",
      },
    ],
    name: "setGatPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rawValue",
            type: "uint256",
          },
        ],
        internalType: "struct FixedPoint.Unsigned",
        name: "newInflationRate",
        type: "tuple",
      },
    ],
    name: "setInflationRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newVotingAddress",
        type: "address",
      },
    ],
    name: "setMigrated",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "NewRewardsExpirationTimeout",
        type: "uint256",
      },
    ],
    name: "setRewardsExpirationTimeout",
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
    inputs: [],
    name: "votingToken",
    outputs: [
      {
        internalType: "contract VotingToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162005eca38038062005eca8339818101604052620000379190810190620003d6565b80806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060006200008b6200025860201b60201c565b905080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350620001458760056200026060201b6200582a1790919060201c565b620001606001876200027b60201b620058441790919060201c565b620001a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000199906200052d565b60405180910390fd5b856006600082015181600001559050508460076000820151816000015590505082600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550836008819055505050505050505062000622565b600033905090565b600081116200026e57600080fd5b8082600001819055505050565b60006200028e82620002a160201b60201c565b6000015183600001511115905092915050565b620002ab62000358565b6040518060200160405280620002d8670de0b6b3a764000085620002e260201b62003a781790919060201c565b8152509050919050565b600080831415620002f7576000905062000352565b60008284029050828482816200030957fe5b04146200034d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000344906200054f565b60405180910390fd5b809150505b92915050565b6040518060200160405280600081525090565b6000815190506200037c81620005ee565b92915050565b6000602082840312156200039557600080fd5b620003a1602062000571565b90506000620003b384828501620003bf565b60008301525092915050565b600081519050620003d08162000608565b92915050565b600080600080600080600060e0888a031215620003f257600080fd5b6000620004028a828b01620003bf565b9750506020620004158a828b0162000382565b9650506040620004288a828b0162000382565b95505060606200043b8a828b01620003bf565b94505060806200044e8a828b016200036b565b93505060a0620004618a828b016200036b565b92505060c0620004748a828b016200036b565b91505092959891949750929550565b600062000492601e836200059f565b91507f4741542070657263656e74616765206d757374206265203c3d203130302500006000830152602082019050919050565b6000620004d46021836200059f565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006020820190508181036000830152620005488162000483565b9050919050565b600060208201905081810360008301526200056a81620004c5565b9050919050565b6000604051905081810181811067ffffffffffffffff821117156200059557600080fd5b8060405250919050565b600082825260208201905092915050565b6000620005bd82620005c4565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b620005f981620005b0565b81146200060557600080fd5b50565b6200061381620005e4565b81146200061f57600080fd5b50565b61589880620006326000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c8063715018a61161010f5780638da5cb5b116100a2578063b90fd48011610071578063b90fd48014610523578063c9280f0614610541578063d8651ad014610571578063f2fde38b1461058d576101e5565b80638da5cb5b146104ad578063a03e881a146104cb578063a1f4c666146104fb578063b034012314610505576101e5565b806383c6aaca116100de57806383c6aaca146104125780638558d4f31461042e5780638876e8a01461045e5780638c65c81f1461047a576101e5565b8063715018a6146103ae57806371b7db53146103b857806374dd278c146103d657806380a1f712146103f4576101e5565b806331f9e35b116101875780635727e25d116101565780635727e25d1461033c5780636852eea01461035a57806368ad8ae31461037657806370a0cf2c14610392576101e5565b806331f9e35b146102c85780634000851f146102e65780634666cb0c146103045780634c7a260314610320576101e5565b806322f8e566116101c357806322f8e5661461025457806326af73bf146102705780632960b5af1461028e57806329cb924d146102aa576101e5565b80630d434e7e146101ea57806313e56d6a1461021a5780631c39c38d14610236575b600080fd5b61020460048036036101ff9190810190614272565b6105a9565b604051610211919061534f565b60405180910390f35b610234600480360361022f9190810190614536565b610db9565b005b61023e610eb6565b60405161024b9190614ef1565b60405180910390f35b61026e6004803603610269919081019061455f565b610edb565b005b610278610fc5565b604051610285919061536a565b60405180910390f35b6102a860048036036102a39190810190614220565b610fcb565b005b6102b26110a6565b6040516102bf919061536a565b60405180910390f35b6102d06111a9565b6040516102dd919061536a565b60405180910390f35b6102ee6111b5565b6040516102fb9190614ef1565b60405180910390f35b61031e60048036036103199190810190614458565b6111db565b005b61033a600480360361033591908101906144d3565b61125e565b005b610344611648565b604051610351919061536a565b60405180910390f35b610374600480360361036f919081019061435f565b61166a565b005b610390600480360361038b91908101906143cd565b6116ed565b005b6103ac60048036036103a791908101906142d9565b611be2565b005b6103b6611ea2565b005b6103c0611ffa565b6040516103cd919061536a565b60405180910390f35b6103de612006565b6040516103eb9190615037565b60405180910390f35b6103fc612028565b6040516104099190614f79565b60405180910390f35b61042c60048036036104279190810190614536565b6121dd565b005b6104486004803603610443919081019061431e565b612287565b6040516104559190614f9b565b60405180910390f35b6104786004803603610473919081019061455f565b6123f2565b005b610494600480360361048f919081019061455f565b612493565b6040516104a4949392919061543e565b60405180910390f35b6104b56124eb565b6040516104c29190614ef1565b60405180910390f35b6104e560048036036104e091908101906143cd565b612515565b6040516104f29190614fbd565b60405180910390f35b6105036127b4565b005b61050d6128e2565b60405161051a919061501c565b60405180910390f35b61052b612908565b604051610538919061536a565b60405180910390f35b61055b600480360361055691908101906143cd565b612914565b6040516105689190615052565b60405180910390f35b61058b60048036036105869190810190614409565b612bfe565b005b6105a760048036036105a29190810190614220565b612e99565b005b6105b1613f49565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461069857600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610697576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068e9061510f565b60405180910390fd5b5b60006106a26110a6565b90506106b881600561306090919063ffffffff16565b84106106f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f09061512f565b60405180910390fd5b60006002600086815260200190815260200160002090506000816003015483119050610723613f49565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ee2cd7e8b87600001546040518363ffffffff1660e01b815260040161078f929190614f50565b60206040518083038186803b1580156107a757600080fd5b505afa1580156107bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506107df9190810190614588565b81525090506107ec613f49565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663981b24d087600001546040518263ffffffff1660e01b8152600401610856919061536a565b60206040518083038186803b15801561086e57600080fd5b505afa158015610882573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506108a69190810190614588565b81525090506108b3613f49565b6108de82866001016040518060200160405290816000820154815250506130a390919063ffffffff16565b905060405180602001604052806000815250965060008090505b8851811015610c9f57600061093b8a838151811061091257fe5b6020026020010151600001518b848151811061092a57fe5b6020026020010151602001516130ed565b905060008160020160008360030154815260200190815260200160002090508b8260030154146109a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610997906152ef565b60405180910390fd5b6109aa8282613113565b6000801b8160000160008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541415610a00575050610c92565b8615610a8c578a8381518110610a1257fe5b6020026020010151600001518c8e73ffffffffffffffffffffffffffffffffffffffff167ff8da7bdb1837995e872689b605d1a2b076db111cb4b15351f835ebd275be423f8e8781518110610a6357fe5b6020026020010151602001516000604051610a7f929190615415565b60405180910390a4610c47565b610ae68160000160008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548260010161328a90919063ffffffff16565b15610bc457610af3613f49565b610b23610b02836001016132c1565b610b15878a6130a390919063ffffffff16565b6132fe90919063ffffffff16565b9050610b38818c61335190919063ffffffff16565b9a508b8481518110610b4657fe5b6020026020010151600001518d8f73ffffffffffffffffffffffffffffffffffffffff167ff8da7bdb1837995e872689b605d1a2b076db111cb4b15351f835ebd275be423f8f8881518110610b9757fe5b6020026020010151602001518560000151604051610bb6929190615483565b60405180910390a450610c46565b8a8381518110610bd057fe5b6020026020010151600001518c8e73ffffffffffffffffffffffffffffffffffffffff167ff8da7bdb1837995e872689b605d1a2b076db111cb4b15351f835ebd275be423f8e8781518110610c2157fe5b6020026020010151602001516000604051610c3d929190615415565b60405180910390a45b5b8060000160008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b80806001019150506108f8565b50610cb460008861338a90919063ffffffff16565b15610dac57600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f198b89600001516040518363ffffffff1660e01b8152600401610d1a929190614f50565b602060405180830381600087803b158015610d3457600080fd5b505af1158015610d48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610d6c91908101906143a4565b610dab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da2906151cf565b60405180910390fd5b5b5050505050509392505050565b610dc16133a7565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e479061518f565b60405180910390fd5b610e646001826133af90919063ffffffff16565b610ea3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9a9061524f565b60405180910390fd5b8060066000820151816000015590505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f3657600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322f8e566826040518263ffffffff1660e01b8152600401610f90919061536a565b600060405180830381600087803b158015610faa57600080fd5b505af1158015610fbe573d6000803e3d6000fd5b5050505050565b60085481565b610fd36133a7565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611062576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110599061518f565b60405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146111a2576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561116357600080fd5b505afa158015611177573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061119b9190810190614588565b90506111a6565b4290505b90565b60078060000154905081565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6111e6848484612bfe565b60006112036111f36110a6565b600561306090919063ffffffff16565b905084813373ffffffffffffffffffffffffffffffffffffffff167f6992efdd7b69c1a8d79212d5ef5fe92118ed053fb7195808a858fa6889a117e9878660405161124f929190615385565b60405180910390a45050505050565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146112ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e6906152cf565b60405180910390fd5b60006112f96110a6565b90506001600281111561130857fe5b61131c8260056133cc90919063ffffffff16565b600281111561132757fe5b14611367576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135e906150ef565b60405180910390fd5b600061137d82600561306090919063ffffffff16565b9050600061138b87876130ed565b90506000816002016000848152602001908152602001600020905060008160000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000801b81600001541415611435576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142c9061520f565b60405180910390fd5b80600001548787338b888e60405160200161145596959493929190614e81565b60405160208183030381529060405280519060200120146114ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114a29061508f565b60405180910390fd5b80600001600090556114bc84613415565b6000600260008681526020019081526020016000206000015490506114df613f49565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ee2cd7e33866040518363ffffffff1660e01b8152600401611547929190614f27565b60206040518083038186803b15801561155f57600080fd5b505afa158015611573573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506115979190810190614588565b8152509050886040516020016115ad9190615052565b6040516020818303038152906040528051906020012083600101819055506115e38982866001016135749092919063ffffffff16565b8a863373ffffffffffffffffffffffffffffffffffffffff167fd04931ad32b4f942a0f169443ebd7f85a7d42c8b4310b4792243a065348836078d8d8660000151604051611633939291906153de565b60405180910390a45050505050505050505050565b60006116656116556110a6565b600561306090919063ffffffff16565b905090565b60008090505b828290508110156116e8576116db83838381811061168a57fe5b905060800201600001358484848181106116a057fe5b905060800201602001358585858181106116b657fe5b905060800201604001358686868181106116cc57fe5b9050608002016060013561125e565b8080600101915050611670565b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146117d857600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ca9061532f565b60405180910390fd5b611971565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f52656769737472790000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016118559190614fd8565b60206040518083038186803b15801561186d57600080fd5b505afa158015611881573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506118a59190810190614249565b90508073ffffffffffffffffffffffffffffffffffffffff1663f9f6b49b336040518263ffffffff1660e01b81526004016118e09190614f0c565b60206040518083038186803b1580156118f857600080fd5b505afa15801561190c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061193091908101906143a4565b61196f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119669061528f565b60405180910390fd5b505b600061197b6110a6565b9050808211156119c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119b79061522f565b60405180910390fd5b6119c861369b565b73ffffffffffffffffffffffffffffffffffffffff166390978d1b846040518263ffffffff1660e01b8152600401611a009190614fd8565b60206040518083038186803b158015611a1857600080fd5b505afa158015611a2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611a5091908101906143a4565b611a8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a869061514f565b60405180910390fd5b6000611a9b848461376d565b905060006003600083815260200190815260200160002090506000611aca84600561306090919063ffffffff16565b90506000611ad883836137a0565b905060006003811115611ae757fe5b816003811115611af357fe5b1415611bd9576000611b0f60018461383f90919063ffffffff16565b905060405180608001604052808981526020018881526020018281526020016004805490508152506003600087815260200190815260200160002060008201518160000155602082015181600101556040820151816003015560608201518160040155905050600485908060018154018082558091505060019003906000526020600020016000909190919091505587817f5d80f93c41e95cacea0b9ce9bb825092d709fa503a70bb26ea3f536bf16946bd89604051611bcf919061536a565b60405180910390a3505b50505050505050565b60008090505b82829050811015611e9d576000838383818110611c0157fe5b9050602002810180356001608003833603038112611c1e57600080fd5b808301925050508060600180356001602003833603038112611c3f57600080fd5b8083019250508135905060208201915067ffffffffffffffff811115611c6457600080fd5b600181023603821315611c7657600080fd5b90501415611d2757611d22838383818110611c8d57fe5b9050602002810180356001608003833603038112611caa57600080fd5b8083019250505060000135848484818110611cc157fe5b9050602002810180356001608003833603038112611cde57600080fd5b8083019250505060200135858585818110611cf557fe5b9050602002810180356001608003833603038112611d1257600080fd5b8083019250505060400135612bfe565b611e90565b611e8f838383818110611d3657fe5b9050602002810180356001608003833603038112611d5357600080fd5b8083019250505060000135848484818110611d6a57fe5b9050602002810180356001608003833603038112611d8757600080fd5b8083019250505060200135858585818110611d9e57fe5b9050602002810180356001608003833603038112611dbb57600080fd5b8083019250505060400135868686818110611dd257fe5b9050602002810180356001608003833603038112611def57600080fd5b808301925050508060600180356001602003833603038112611e1057600080fd5b8083019250508135905060208201915067ffffffffffffffff811115611e3557600080fd5b600181023603821315611e4757600080fd5b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506111db565b5b8080600101915050611be8565b505050565b611eaa6133a7565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f309061518f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60058060000154905081565b60006120236120136110a6565b60056133cc90919063ffffffff16565b905090565b606060006120346110a6565b9050600061204c82600561306090919063ffffffff16565b9050606060048054905060405190808252806020026020018201604052801561208f57816020015b61207c613f5c565b8152602001906001900390816120745790505b509050600080905060008090505b60048054905081101561214b57600060036000600484815481106120bd57fe5b906000526020600020015481526020019081526020016000209050600160038111156120e557fe5b6120ef82876137a0565b60038111156120fa57fe5b141561213d57604051806040016040528082600001548152602001826001015481525084848151811061212957fe5b602002602001018190525082806001019350505b50808060010191505061209d565b5060608160405190808252806020026020018201604052801561218857816020015b612175613f5c565b81526020019060019003908161216d5790505b50905060008090505b828110156121d1578381815181106121a557fe5b60200260200101518282815181106121b957fe5b60200260200101819052508080600101915050612191565b50809550505050505090565b6121e56133a7565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612274576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161226b9061518f565b60405180910390fd5b8060076000820151816000015590505050565b60608082516040519080825280602002602001820160405280156122c557816020015b6122b2613f79565b8152602001906001900390816122aa5790505b50905060006122e56122d56110a6565b600561306090919063ffffffff16565b905060008090505b84518110156123e757600061233086838151811061230757fe5b60200260200101516000015187848151811061231f57fe5b6020026020010151602001516130ed565b9050600061233e82856137a0565b90506001600381111561234d57fe5b81600381111561235957fe5b1415612381578385848151811061236c57fe5b602002602001015160200181815250506123a3565b816003015485848151811061239257fe5b602002602001015160200181815250505b808584815181106123b057fe5b60200260200101516000019060038111156123c757fe5b908160038111156123d457fe5b81525050505080806001019150506122ed565b508192505050919050565b6123fa6133a7565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612489576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124809061518f565b60405180910390fd5b8060088190555050565b6002602052806000526040600020600091509050806000015490806001016040518060200160405290816000820154815250509080600201604051806020016040529081600082015481525050908060030154905084565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461260157600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146125fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125f39061532f565b60405180910390fd5b61279a565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f52656769737472790000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040161267e9190614fd8565b60206040518083038186803b15801561269657600080fd5b505afa1580156126aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506126ce9190810190614249565b90508073ffffffffffffffffffffffffffffffffffffffff1663f9f6b49b336040518263ffffffff1660e01b81526004016127099190614f0c565b60206040518083038186803b15801561272157600080fd5b505afa158015612735573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061275991908101906143a4565b612798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161278f9061528f565b60405180910390fd5b505b60006127a68484613894565b505090508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612845576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161283c906152cf565b60405180910390fd5b600061284f6110a6565b90506001600281111561285e57fe5b6128728260056133cc90919063ffffffff16565b600281111561287d57fe5b146128bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128b49061530f565b60405180910390fd5b60006128d382600561306090919063ffffffff16565b90506128de81613415565b5050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60068060000154905081565b60008073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612a0057600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146129fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129f29061532f565b60405180910390fd5b612b99565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f52656769737472790000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401612a7d9190614fd8565b60206040518083038186803b158015612a9557600080fd5b505afa158015612aa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250612acd9190810190614249565b90508073ffffffffffffffffffffffffffffffffffffffff1663f9f6b49b336040518263ffffffff1660e01b8152600401612b089190614f0c565b60206040518083038186803b158015612b2057600080fd5b505afa158015612b34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250612b5891908101906143a4565b612b97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b8e9061528f565b60405180910390fd5b505b6000806060612ba88686613894565b925092509250828190612bf1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612be8919061506d565b60405180910390fd5b5081935050505092915050565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612c8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c86906152cf565b60405180910390fd5b6000801b811415612cd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ccc906151ef565b60405180910390fd5b6000612cdf6110a6565b905060006002811115612cee57fe5b612d028260056133cc90919063ffffffff16565b6002811115612d0d57fe5b14612d4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d44906152af565b60405180910390fd5b6000612d6382600561306090919063ffffffff16565b90506000612d7186866130ed565b905060016003811115612d8057fe5b612d8a82846137a0565b6003811115612d9557fe5b14612dd5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dcc906151af565b60405180910390fd5b81816003018190555060008160020160008481526020019081526020016000209050848160000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555086833373ffffffffffffffffffffffffffffffffffffffff167f879c67d036f174a10ea491cf7281d05af9b906660b4f26727d866aec0cf9147c89604051612e88919061536a565b60405180910390a450505050505050565b612ea16133a7565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612f30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f279061518f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612fa0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f97906150af565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008061308560028081111561307257fe5b8560000154613a7890919063ffffffff16565b905061309a8184613ae890919063ffffffff16565b91505092915050565b6130ab613f49565b6040518060200160405280670de0b6b3a76400006130da85600001518760000151613a7890919063ffffffff16565b816130e157fe5b04815250905092915050565b6000600360006130fd858561376d565b8152602001908152602001600020905092915050565b6000198260040154141561312657613286565b60008061314b6131398560030154613b32565b84600101613c8190919063ffffffff16565b915091508161318f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131869061526f565b60405180910390fd5b60006001600480549050039050600060036000600484815481106131af57fe5b90600052602060002001548152602001908152602001600020905085600401548160040181905550600482815481106131e457fe5b9060005260206000200154600487600401548154811061320057fe5b9060005260206000200181905550600480548061321957fe5b600190038181906000526020600020016000905590556000198660040181905550856000015486600301547f67565e6a3e804c4e180134cb2885e32142229de3ca125701318af11658ee49888860010154866040516132799291906153b5565b60405180910390a3505050505b5050565b600082600201546040516020016132a19190615052565b604051602081830303815290604052805190602001208214905092915050565b6132c9613f49565b816000016000836002015481526020019081526020016000206040518060200160405290816000820154815250509050919050565b613306613f49565b60405180602001604052806133468460000151613338670de0b6b3a76400008860000151613a7890919063ffffffff16565b613ae890919063ffffffff16565b815250905092915050565b613359613f49565b604051806020016040528061337f8460000151866000015161383f90919063ffffffff16565b815250905092915050565b600061339582613d6a565b60000151836000015111905092915050565b600033905090565b60006133ba82613d6a565b60000151836000015110905092915050565b60006134026002808111156133dd57fe5b6133f4856000015485613ae890919063ffffffff16565b613da290919063ffffffff16565b600281111561340d57fe5b905092915050565b600060026000838152602001908152602001600020905060008160000154141561357057600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639711715a6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156134a357600080fd5b505af11580156134b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506134db9190810190614588565b81600001819055506007600260008481526020019081526020016000206001016000820154816000015590505060066002600084815260200190815260200160002060020160008201548160000155905050613555600854613547846005613dec90919063ffffffff16565b61383f90919063ffffffff16565b60026000848152602001908152602001600020600301819055505b5050565b61359f818460010160405180602001604052908160008201548152505061335190919063ffffffff16565b83600101600082015181600001559050506135ec8184600001600085815260200190815260200160002060405180602001604052908160008201548152505061335190919063ffffffff16565b8360000160008481526020019081526020016000206000820151816000015590505082600201548214158015613687575061368683600001600085600201548152602001908152602001600020604051806020016040529081600082015481525050846000016000858152602001908152602001600020604051806020016040529081600082015481525050613e4290919063ffffffff16565b5b15613696578183600201819055505b505050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f4964656e74696669657257686974656c697374000000000000000000000000006040518263ffffffff1660e01b81526004016137189190614fd8565b60206040518083038186803b15801561373057600080fd5b505afa158015613744573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506137689190810190614249565b905090565b60008282604051602001613782929190614ff3565b60405160208183030381529060405280519060200120905092915050565b600080836003015414156137b75760009050613839565b818360030154101561381f57600083600201600085600301548152602001908152602001600020905060006138046137f28660030154613b32565b83600101613c8190919063ffffffff16565b50905080613813576001613816565b60025b92505050613839565b81836003015414156138345760019050613839565b600390505b92915050565b60008082840190508381101561388a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613881906150cf565b60405180910390fd5b8091505092915050565b600080606060006138a586866130ed565b905060006138c46138b46110a6565b600561306090919063ffffffff16565b905060006138d283836137a0565b9050600160038111156138e157fe5b8160038111156138ed57fe5b141561393d576000808090506040518060400160405280601e81526020017f43757272656e7420766f74696e6720726f756e64206e6f7420656e6465640000815250955095509550505050613a71565b6002600381111561394a57fe5b81600381111561395657fe5b14156139c3576000836002016000856003015481526020019081526020016000209050600061399d61398b8660030154613b32565b83600101613c8190919063ffffffff16565b915050600181604051806020016040528060008152509750975097505050505050613a71565b6003808111156139cf57fe5b8160038111156139db57fe5b1415613a2b576000808090506040518060400160405280601d81526020017f5072696365206973207374696c6c20746f20626520766f746564206f6e000000815250955095509550505050613a71565b6000808090506040518060400160405280601981526020017f507269636520776173206e6576657220726571756573746564000000000000008152509550955095505050505b9250925092565b600080831415613a8b5760009050613ae2565b6000828402905082848281613a9c57fe5b0414613add576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613ad49061516f565b60405180910390fd5b809150505b92915050565b6000613b2a83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613e57565b905092915050565b613b3a613f49565b6000600260008481526020019081526020016000206000015490506000811415613b77576040518060200160405280600019815250915050613c7c565b613b7f613f49565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663981b24d0856040518263ffffffff1660e01b8152600401613be5919061536a565b60206040518083038186803b158015613bfd57600080fd5b505afa158015613c11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250613c359190810190614588565b8152509050613c7760026000868152602001908152602001600020600201604051806020016040529081600082015481525050826130a390919063ffffffff16565b925050505b919050565b600080613c8c613f49565b613ca96064613c9b6032613d6a565b613eb890919063ffffffff16565b9050613cd68486600101604051806020016040529081600082015481525050613e4290919063ffffffff16565b8015613d485750613d4781613d39876001016040518060200160405290816000820154815250508860000160008a6002015481526020019081526020016000206040518060200160405290816000820154815250506132fe90919063ffffffff16565b613e4290919063ffffffff16565b5b15613d5d576001925084600201549150613d62565b600092505b509250929050565b613d72613f49565b6040518060200160405280613d98670de0b6b3a764000085613a7890919063ffffffff16565b8152509050919050565b6000613de483836040518060400160405280601881526020017f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000815250613eed565b905092915050565b600080613e11600280811115613dfe57fe5b8560000154613a7890919063ffffffff16565b9050613e39613e2a60018561383f90919063ffffffff16565b82613a7890919063ffffffff16565b91505092915050565b60008160000151836000015111905092915050565b60008083118290613e9e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613e95919061506d565b60405180910390fd5b506000838581613eaa57fe5b049050809150509392505050565b613ec0613f49565b6040518060200160405280613ee2848660000151613ae890919063ffffffff16565b815250905092915050565b6000808314158290613f35576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613f2c919061506d565b60405180910390fd5b50828481613f3f57fe5b0690509392505050565b6040518060200160405280600081525090565b604051806040016040528060008019168152602001600081525090565b604051806040016040528060006003811115613f9157fe5b8152602001600081525090565b600081359050613fad816157b7565b92915050565b600081519050613fc2816157b7565b92915050565b60008083601f840112613fda57600080fd5b8235905067ffffffffffffffff811115613ff357600080fd5b60208301915083602082028301111561400b57600080fd5b9250929050565b600082601f83011261402357600080fd5b8135614036614031826154d9565b6154ac565b9150818183526020840193506020810190508385604084028201111561405b57600080fd5b60005b8381101561408b57816140718882614172565b84526020840193506040830192505060018101905061405e565b5050505092915050565b60008083601f8401126140a757600080fd5b8235905067ffffffffffffffff8111156140c057600080fd5b6020830191508360808202830111156140d857600080fd5b9250929050565b6000815190506140ee816157ce565b92915050565b600081359050614103816157e5565b92915050565b600082601f83011261411a57600080fd5b813561412d61412882615501565b6154ac565b9150808252602083016020830185838301111561414957600080fd5b6141548382846156fb565b50505092915050565b60008135905061416c816157fc565b92915050565b60006040828403121561418457600080fd5b61418e60406154ac565b9050600061419e848285016140f4565b60008301525060206141b2848285016141f6565b60208301525092915050565b6000602082840312156141d057600080fd5b6141da60206154ac565b905060006141ea848285016141f6565b60008301525092915050565b60008135905061420581615813565b92915050565b60008151905061421a81615813565b92915050565b60006020828403121561423257600080fd5b600061424084828501613f9e565b91505092915050565b60006020828403121561425b57600080fd5b600061426984828501613fb3565b91505092915050565b60008060006060848603121561428757600080fd5b600061429586828701613f9e565b93505060206142a6868287016141f6565b925050604084013567ffffffffffffffff8111156142c357600080fd5b6142cf86828701614012565b9150509250925092565b600080602083850312156142ec57600080fd5b600083013567ffffffffffffffff81111561430657600080fd5b61431285828601613fc8565b92509250509250929050565b60006020828403121561433057600080fd5b600082013567ffffffffffffffff81111561434a57600080fd5b61435684828501614012565b91505092915050565b6000806020838503121561437257600080fd5b600083013567ffffffffffffffff81111561438c57600080fd5b61439885828601614095565b92509250509250929050565b6000602082840312156143b657600080fd5b60006143c4848285016140df565b91505092915050565b600080604083850312156143e057600080fd5b60006143ee858286016140f4565b92505060206143ff858286016141f6565b9150509250929050565b60008060006060848603121561441e57600080fd5b600061442c868287016140f4565b935050602061443d868287016141f6565b925050604061444e868287016140f4565b9150509250925092565b6000806000806080858703121561446e57600080fd5b600061447c878288016140f4565b945050602061448d878288016141f6565b935050604061449e878288016140f4565b925050606085013567ffffffffffffffff8111156144bb57600080fd5b6144c787828801614109565b91505092959194509250565b600080600080608085870312156144e957600080fd5b60006144f7878288016140f4565b9450506020614508878288016141f6565b93505060406145198782880161415d565b925050606061452a8782880161415d565b91505092959194509250565b60006020828403121561454857600080fd5b6000614556848285016141be565b91505092915050565b60006020828403121561457157600080fd5b600061457f848285016141f6565b91505092915050565b60006020828403121561459a57600080fd5b60006145a88482850161420b565b91505092915050565b60006145bd8383614db6565b60408301905092915050565b60006145d58383614de5565b60408301905092915050565b6145ea8161566b565b82525050565b6146016145fc826155e9565b61573d565b82525050565b614610816155d7565b82525050565b60006146218261554d565b61462b8185615593565b93506146368361552d565b8060005b8381101561466757815161464e88826145b1565b975061465983615579565b92505060018101905061463a565b5085935050505092915050565b600061467f82615558565b61468981856155a4565b93506146948361553d565b8060005b838110156146c55781516146ac88826145c9565b97506146b783615586565b925050600181019050614698565b5085935050505092915050565b6146db816155fb565b82525050565b6146ea81615607565b82525050565b6146f981615607565b82525050565b61471061470b82615607565b61574f565b82525050565b600061472182615563565b61472b81856155b5565b935061473b81856020860161570a565b6147448161577f565b840191505092915050565b6147588161567d565b82525050565b614767816156a1565b82525050565b614776816156b3565b82525050565b61478581615637565b82525050565b61479c61479782615637565b615759565b82525050565b6147ab816156c5565b82525050565b60006147bc8261556e565b6147c681856155c6565b93506147d681856020860161570a565b6147df8161577f565b840191505092915050565b60006147f7601c836155c6565b91507f52657665616c6564206461746120213d20636f6d6d69742068617368000000006000830152602082019050919050565b60006148376026836155c6565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061489d601b836155c6565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b60006148dd601d836155c6565b91507f43616e6e6f742072657665616c20696e20636f6d6d69742070686173650000006000830152602082019050919050565b600061491d601b836155c6565b91507f43616e206f6e6c792063616c6c2066726f6d206d6967726174656400000000006000830152602082019050919050565b600061495d600f836155c6565b91507f496e76616c696420726f756e64496400000000000000000000000000000000006000830152602082019050919050565b600061499d601e836155c6565b91507f556e737570706f72746564206964656e746966696572207265717565737400006000830152602082019050919050565b60006149dd6021836155c6565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000614a436020836155c6565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000614a83601e836155c6565b91507f43616e6e6f7420636f6d6d697420696e616374697665207265717565737400006000830152602082019050919050565b6000614ac3601c836155c6565b91507f566f74696e6720746f6b656e2069737375616e6365206661696c6564000000006000830152602082019050919050565b6000614b036015836155c6565b91507f496e76616c69642070726f7669646564206861736800000000000000000000006000830152602082019050919050565b6000614b436013836155c6565b91507f496e76616c696420686173682072657665616c000000000000000000000000006000830152602082019050919050565b6000614b836018836155c6565b91507f43616e206f6e6c79207265717565737420696e207061737400000000000000006000830152602082019050919050565b6000614bc3601d836155c6565b91507f4741542070657263656e74616765206d757374206265203c20313030250000006000830152602082019050919050565b6000614c036020836155c6565b91507f43616e2774207265736f6c766520756e7265736f6c76656420726571756573746000830152602082019050919050565b6000614c436019836155c6565b91507f43616c6c6564206d7573742062652072656769737465726564000000000000006000830152602082019050919050565b6000614c83601d836155c6565b91507f43616e6e6f7420636f6d6d697420696e2072657665616c2070686173650000006000830152602082019050919050565b6000614cc3601e836155c6565b91507f4f6e6c792063616c6c2074686973206966206e6f74206d6967726174656400006000830152602082019050919050565b6000614d03601d836155c6565b91507f526574726965766520666f7220766f7465732073616d6520726f756e640000006000830152602082019050919050565b6000614d43601d836155c6565b91507f4f6e6c7920736e617073686f7420696e2072657665616c2070686173650000006000830152602082019050919050565b6000614d83601f836155c6565b91507f43616c6c6572206d757374206265206d696772617465642061646472657373006000830152602082019050919050565b604082016000820151614dcc60008501826146e1565b506020820151614ddf6020850182614e4c565b50505050565b604082016000820151614dfb600085018261476d565b506020820151614e0e6020850182614e4c565b50505050565b602082016000820151614e2a6000850182614e4c565b50505050565b602082016000820151614e466000850182614e4c565b50505050565b614e5581615661565b82525050565b614e6481615661565b82525050565b614e7b614e7682615661565b615775565b82525050565b6000614e8d828961478b565b602082019150614e9d828861478b565b602082019150614ead82876145f0565b601482019150614ebd8286614e6a565b602082019150614ecd8285614e6a565b602082019150614edd82846146ff565b602082019150819050979650505050505050565b6000602082019050614f066000830184614607565b92915050565b6000602082019050614f2160008301846145e1565b92915050565b6000604082019050614f3c60008301856145e1565b614f496020830184614e5b565b9392505050565b6000604082019050614f656000830185614607565b614f726020830184614e5b565b9392505050565b60006020820190508181036000830152614f938184614616565b905092915050565b60006020820190508181036000830152614fb58184614674565b905092915050565b6000602082019050614fd260008301846146d2565b92915050565b6000602082019050614fed60008301846146f0565b92915050565b600060408201905061500860008301856146f0565b6150156020830184614e5b565b9392505050565b6000602082019050615031600083018461474f565b92915050565b600060208201905061504c600083018461475e565b92915050565b6000602082019050615067600083018461477c565b92915050565b6000602082019050818103600083015261508781846147b1565b905092915050565b600060208201905081810360008301526150a8816147ea565b9050919050565b600060208201905081810360008301526150c88161482a565b9050919050565b600060208201905081810360008301526150e881614890565b9050919050565b60006020820190508181036000830152615108816148d0565b9050919050565b6000602082019050818103600083015261512881614910565b9050919050565b6000602082019050818103600083015261514881614950565b9050919050565b6000602082019050818103600083015261516881614990565b9050919050565b60006020820190508181036000830152615188816149d0565b9050919050565b600060208201905081810360008301526151a881614a36565b9050919050565b600060208201905081810360008301526151c881614a76565b9050919050565b600060208201905081810360008301526151e881614ab6565b9050919050565b6000602082019050818103600083015261520881614af6565b9050919050565b6000602082019050818103600083015261522881614b36565b9050919050565b6000602082019050818103600083015261524881614b76565b9050919050565b6000602082019050818103600083015261526881614bb6565b9050919050565b6000602082019050818103600083015261528881614bf6565b9050919050565b600060208201905081810360008301526152a881614c36565b9050919050565b600060208201905081810360008301526152c881614c76565b9050919050565b600060208201905081810360008301526152e881614cb6565b9050919050565b6000602082019050818103600083015261530881614cf6565b9050919050565b6000602082019050818103600083015261532881614d36565b9050919050565b6000602082019050818103600083015261534881614d76565b9050919050565b60006020820190506153646000830184614e14565b92915050565b600060208201905061537f6000830184614e5b565b92915050565b600060408201905061539a6000830185614e5b565b81810360208301526153ac8184614716565b90509392505050565b60006040820190506153ca6000830185614e5b565b6153d7602083018461477c565b9392505050565b60006060820190506153f36000830186614e5b565b615400602083018561477c565b61540d6040830184614e5b565b949350505050565b600060408201905061542a6000830185614e5b565b61543760208301846147a2565b9392505050565b60006080820190506154536000830187614e5b565b6154606020830186614e30565b61546d6040830185614e30565b61547a6060830184614e5b565b95945050505050565b60006040820190506154986000830185614e5b565b6154a56020830184614e5b565b9392505050565b6000604051905081810181811067ffffffffffffffff821117156154cf57600080fd5b8060405250919050565b600067ffffffffffffffff8211156154f057600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561551857600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006155e282615641565b9050919050565b60006155f482615641565b9050919050565b60008115159050919050565b6000819050919050565b600081905061561f8261579d565b919050565b6000819050615632826157aa565b919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000615676826156d7565b9050919050565b60006156888261568f565b9050919050565b600061569a82615641565b9050919050565b60006156ac82615611565b9050919050565b60006156be82615624565b9050919050565b60006156d082615661565b9050919050565b60006156e2826156e9565b9050919050565b60006156f482615641565b9050919050565b82818337600083830152505050565b60005b8381101561572857808201518184015260208101905061570d565b83811115615737576000848401525b50505050565b600061574882615763565b9050919050565b6000819050919050565b6000819050919050565b600061576e82615790565b9050919050565b6000819050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b600381106157a757fe5b50565b600481106157b457fe5b50565b6157c0816155d7565b81146157cb57600080fd5b50565b6157d7816155fb565b81146157e257600080fd5b50565b6157ee81615607565b81146157f957600080fd5b50565b61580581615637565b811461581057600080fd5b50565b61581c81615661565b811461582757600080fd5b50565b6000811161583757600080fd5b8082600001819055505050565b600061584f82613d6a565b600001518360000151111590509291505056fea264697066735822122061c6e55796483c083ce2a37ab316d434aad737c137b4b6e85261a9b3e5518db964736f6c63430006020033";
