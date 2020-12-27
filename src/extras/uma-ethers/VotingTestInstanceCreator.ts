import { Signer, BigNumberish } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { VotingTest } from "./VotingTestContractInterface"

export class VotingTestInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
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
  ): Promise<VotingTest> {
    return super.deploy(
      _phaseLength,
      _gatPercentage,
      _inflationRate,
      _rewardsExpirationTimeout,
      _votingToken,
      _finder,
      _timerAddress,
      overrides || {}
    ) as Promise<VotingTest>
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
    )
  }
  attach(address: string): VotingTest {
    return super.attach(address) as VotingTest
  }
  connect(signer: Signer): VotingTestInstanceCreator {
    return super.connect(signer) as VotingTestInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): VotingTest {
    return new Contract(address, _abi, signerOrProvider) as VotingTest
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
    name: "getPendingPriceRequestsArray",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
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
]

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200602a3803806200602a8339818101604052620000379190810190620003e4565b8686868686868680806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506000620000926200026660201b60201c565b905080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506200014c8760056200026e60201b6200597c1790919060201c565b620001676001876200028960201b620059961790919060201c565b620001a9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001a0906200053b565b60405180910390fd5b856006600082015181600001559050508460076000820151816000015590505082600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600881905550505050505050505050505050505062000630565b600033905090565b600081116200027c57600080fd5b8082600001819055505050565b60006200029c82620002af60201b60201c565b6000015183600001511115905092915050565b620002b962000366565b6040518060200160405280620002e6670de0b6b3a764000085620002f060201b62003af91790919060201c565b8152509050919050565b60008083141562000305576000905062000360565b60008284029050828482816200031757fe5b04146200035b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000352906200055d565b60405180910390fd5b809150505b92915050565b6040518060200160405280600081525090565b6000815190506200038a81620005fc565b92915050565b600060208284031215620003a357600080fd5b620003af60206200057f565b90506000620003c184828501620003cd565b60008301525092915050565b600081519050620003de8162000616565b92915050565b600080600080600080600060e0888a0312156200040057600080fd5b6000620004108a828b01620003cd565b9750506020620004238a828b0162000390565b9650506040620004368a828b0162000390565b9550506060620004498a828b01620003cd565b94505060806200045c8a828b0162000379565b93505060a06200046f8a828b0162000379565b92505060c0620004828a828b0162000379565b91505092959891949750929550565b6000620004a0601e83620005ad565b91507f4741542070657263656e74616765206d757374206265203c3d203130302500006000830152602082019050919050565b6000620004e2602183620005ad565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006020820190508181036000830152620005568162000491565b9050919050565b600060208201905081810360008301526200057881620004d3565b9050919050565b6000604051905081810181811067ffffffffffffffff82111715620005a357600080fd5b8060405250919050565b600082825260208201905092915050565b6000620005cb82620005d2565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200060781620005be565b81146200061357600080fd5b50565b6200062181620005f2565b81146200062d57600080fd5b50565b6159ea80620006406000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806371b7db531161010f578063a03e881a116100a2578063c9280f0611610071578063c9280f061461054c578063d8651ad01461057c578063f116961f14610598578063f2fde38b146105b6576101f0565b8063a03e881a146104d6578063a1f4c66614610506578063b034012314610510578063b90fd4801461052e576101f0565b80638558d4f3116100de5780638558d4f3146104395780638876e8a0146104695780638c65c81f146104855780638da5cb5b146104b8576101f0565b806371b7db53146103c357806374dd278c146103e157806380a1f712146103ff57806383c6aaca1461041d576101f0565b80634000851f116101875780636852eea0116101565780636852eea01461036557806368ad8ae31461038157806370a0cf2c1461039d578063715018a6146103b9576101f0565b80634000851f146102f15780634666cb0c1461030f5780634c7a26031461032b5780635727e25d14610347576101f0565b806326af73bf116101c357806326af73bf1461027b5780632960b5af1461029957806329cb924d146102b557806331f9e35b146102d3576101f0565b80630d434e7e146101f557806313e56d6a146102255780631c39c38d1461024157806322f8e5661461025f575b600080fd5b61020f600480360361020a91908101906142f3565b6105d2565b60405161021c9190615468565b60405180910390f35b61023f600480360361023a91908101906145b7565b610de2565b005b610249610edf565b6040516102569190614fe8565b60405180910390f35b610279600480360361027491908101906145e0565b610f04565b005b610283610fee565b6040516102909190615483565b60405180910390f35b6102b360048036036102ae91908101906142a1565b610ff4565b005b6102bd6110cf565b6040516102ca9190615483565b60405180910390f35b6102db6111d2565b6040516102e89190615483565b60405180910390f35b6102f96111de565b6040516103069190614fe8565b60405180910390f35b610329600480360361032491908101906144d9565b611204565b005b61034560048036036103409190810190614554565b611287565b005b61034f611671565b60405161035c9190615483565b60405180910390f35b61037f600480360361037a91908101906143e0565b611693565b005b61039b6004803603610396919081019061444e565b611716565b005b6103b760048036036103b2919081019061435a565b611c0b565b005b6103c1611ecb565b005b6103cb612023565b6040516103d89190615483565b60405180910390f35b6103e961202f565b6040516103f69190615150565b60405180910390f35b610407612051565b6040516104149190615092565b60405180910390f35b610437600480360361043291908101906145b7565b612206565b005b610453600480360361044e919081019061439f565b6122b0565b60405161046091906150b4565b60405180910390f35b610483600480360361047e91908101906145e0565b61241b565b005b61049f600480360361049a91908101906145e0565b6124bc565b6040516104af9493929190615557565b60405180910390f35b6104c0612514565b6040516104cd9190614fe8565b60405180910390f35b6104f060048036036104eb919081019061444e565b61253e565b6040516104fd91906150d6565b60405180910390f35b61050e6127dd565b005b61051861290b565b6040516105259190615135565b60405180910390f35b610536612931565b6040516105439190615483565b60405180910390f35b6105666004803603610561919081019061444e565b61293d565b604051610573919061516b565b60405180910390f35b6105966004803603610591919081019061448a565b612c27565b005b6105a0612ec2565b6040516105ad9190615070565b60405180910390f35b6105d060048036036105cb91908101906142a1565b612f1a565b005b6105da613fca565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106c157600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b790615228565b60405180910390fd5b5b60006106cb6110cf565b90506106e18160056130e190919063ffffffff16565b8410610722576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071990615248565b60405180910390fd5b6000600260008681526020019081526020016000209050600081600301548311905061074c613fca565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ee2cd7e8b87600001546040518363ffffffff1660e01b81526004016107b8929190615047565b60206040518083038186803b1580156107d057600080fd5b505afa1580156107e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506108089190810190614609565b8152509050610815613fca565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663981b24d087600001546040518263ffffffff1660e01b815260040161087f9190615483565b60206040518083038186803b15801561089757600080fd5b505afa1580156108ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506108cf9190810190614609565b81525090506108dc613fca565b610907828660010160405180602001604052908160008201548152505061312490919063ffffffff16565b905060405180602001604052806000815250965060008090505b8851811015610cc85760006109648a838151811061093b57fe5b6020026020010151600001518b848151811061095357fe5b60200260200101516020015161316e565b905060008160020160008360030154815260200190815260200160002090508b8260030154146109c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c090615408565b60405180910390fd5b6109d38282613194565b6000801b8160000160008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541415610a29575050610cbb565b8615610ab5578a8381518110610a3b57fe5b6020026020010151600001518c8e73ffffffffffffffffffffffffffffffffffffffff167ff8da7bdb1837995e872689b605d1a2b076db111cb4b15351f835ebd275be423f8e8781518110610a8c57fe5b6020026020010151602001516000604051610aa892919061552e565b60405180910390a4610c70565b610b0f8160000160008f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101548260010161330b90919063ffffffff16565b15610bed57610b1c613fca565b610b4c610b2b83600101613342565b610b3e878a61312490919063ffffffff16565b61337f90919063ffffffff16565b9050610b61818c6133d290919063ffffffff16565b9a508b8481518110610b6f57fe5b6020026020010151600001518d8f73ffffffffffffffffffffffffffffffffffffffff167ff8da7bdb1837995e872689b605d1a2b076db111cb4b15351f835ebd275be423f8f8881518110610bc057fe5b6020026020010151602001518560000151604051610bdf92919061559c565b60405180910390a450610c6f565b8a8381518110610bf957fe5b6020026020010151600001518c8e73ffffffffffffffffffffffffffffffffffffffff167ff8da7bdb1837995e872689b605d1a2b076db111cb4b15351f835ebd275be423f8e8781518110610c4a57fe5b6020026020010151602001516000604051610c6692919061552e565b60405180910390a45b5b8060000160008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000905550505b8080600101915050610921565b50610cdd60008861340b90919063ffffffff16565b15610dd557600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f198b89600001516040518363ffffffff1660e01b8152600401610d43929190615047565b602060405180830381600087803b158015610d5d57600080fd5b505af1158015610d71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610d959190810190614425565b610dd4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcb906152e8565b60405180910390fd5b5b5050505050509392505050565b610dea613428565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e70906152a8565b60405180910390fd5b610e8d60018261343090919063ffffffff16565b610ecc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec390615368565b60405180910390fd5b8060066000820151816000015590505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610f5f57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322f8e566826040518263ffffffff1660e01b8152600401610fb99190615483565b600060405180830381600087803b158015610fd357600080fd5b505af1158015610fe7573d6000803e3d6000fd5b5050505050565b60085481565b610ffc613428565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461108b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611082906152a8565b60405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146111cb576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561118c57600080fd5b505afa1580156111a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506111c49190810190614609565b90506111cf565b4290505b90565b60078060000154905081565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61120f848484612c27565b600061122c61121c6110cf565b60056130e190919063ffffffff16565b905084813373ffffffffffffffffffffffffffffffffffffffff167f6992efdd7b69c1a8d79212d5ef5fe92118ed053fb7195808a858fa6889a117e9878660405161127892919061549e565b60405180910390a45050505050565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611318576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130f906153e8565b60405180910390fd5b60006113226110cf565b90506001600281111561133157fe5b61134582600561344d90919063ffffffff16565b600281111561135057fe5b14611390576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138790615208565b60405180910390fd5b60006113a68260056130e190919063ffffffff16565b905060006113b4878761316e565b90506000816002016000848152602001908152602001600020905060008160000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000801b8160000154141561145e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145590615328565b60405180910390fd5b80600001548787338b888e60405160200161147e96959493929190614f78565b60405160208183030381529060405280519060200120146114d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114cb906151a8565b60405180910390fd5b80600001600090556114e584613496565b600060026000868152602001908152602001600020600001549050611508613fca565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ee2cd7e33866040518363ffffffff1660e01b815260040161157092919061501e565b60206040518083038186803b15801561158857600080fd5b505afa15801561159c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506115c09190810190614609565b8152509050886040516020016115d6919061516b565b60405160208183030381529060405280519060200120836001018190555061160c8982866001016135f59092919063ffffffff16565b8a863373ffffffffffffffffffffffffffffffffffffffff167fd04931ad32b4f942a0f169443ebd7f85a7d42c8b4310b4792243a065348836078d8d866000015160405161165c939291906154f7565b60405180910390a45050505050505050505050565b600061168e61167e6110cf565b60056130e190919063ffffffff16565b905090565b60008090505b82829050811015611711576117048383838181106116b357fe5b905060800201600001358484848181106116c957fe5b905060800201602001358585858181106116df57fe5b905060800201604001358686868181106116f557fe5b90506080020160600135611287565b8080600101915050611699565b505050565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461180157600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f390615448565b60405180910390fd5b61199a565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f52656769737472790000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040161187e91906150f1565b60206040518083038186803b15801561189657600080fd5b505afa1580156118aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506118ce91908101906142ca565b90508073ffffffffffffffffffffffffffffffffffffffff1663f9f6b49b336040518263ffffffff1660e01b81526004016119099190615003565b60206040518083038186803b15801561192157600080fd5b505afa158015611935573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506119599190810190614425565b611998576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161198f906153a8565b60405180910390fd5b505b60006119a46110cf565b9050808211156119e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e090615348565b60405180910390fd5b6119f161371c565b73ffffffffffffffffffffffffffffffffffffffff166390978d1b846040518263ffffffff1660e01b8152600401611a2991906150f1565b60206040518083038186803b158015611a4157600080fd5b505afa158015611a55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611a799190810190614425565b611ab8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aaf90615268565b60405180910390fd5b6000611ac484846137ee565b905060006003600083815260200190815260200160002090506000611af38460056130e190919063ffffffff16565b90506000611b018383613821565b905060006003811115611b1057fe5b816003811115611b1c57fe5b1415611c02576000611b386001846138c090919063ffffffff16565b905060405180608001604052808981526020018881526020018281526020016004805490508152506003600087815260200190815260200160002060008201518160000155602082015181600101556040820151816003015560608201518160040155905050600485908060018154018082558091505060019003906000526020600020016000909190919091505587817f5d80f93c41e95cacea0b9ce9bb825092d709fa503a70bb26ea3f536bf16946bd89604051611bf89190615483565b60405180910390a3505b50505050505050565b60008090505b82829050811015611ec6576000838383818110611c2a57fe5b9050602002810180356001608003833603038112611c4757600080fd5b808301925050508060600180356001602003833603038112611c6857600080fd5b8083019250508135905060208201915067ffffffffffffffff811115611c8d57600080fd5b600181023603821315611c9f57600080fd5b90501415611d5057611d4b838383818110611cb657fe5b9050602002810180356001608003833603038112611cd357600080fd5b8083019250505060000135848484818110611cea57fe5b9050602002810180356001608003833603038112611d0757600080fd5b8083019250505060200135858585818110611d1e57fe5b9050602002810180356001608003833603038112611d3b57600080fd5b8083019250505060400135612c27565b611eb9565b611eb8838383818110611d5f57fe5b9050602002810180356001608003833603038112611d7c57600080fd5b8083019250505060000135848484818110611d9357fe5b9050602002810180356001608003833603038112611db057600080fd5b8083019250505060200135858585818110611dc757fe5b9050602002810180356001608003833603038112611de457600080fd5b8083019250505060400135868686818110611dfb57fe5b9050602002810180356001608003833603038112611e1857600080fd5b808301925050508060600180356001602003833603038112611e3957600080fd5b8083019250508135905060208201915067ffffffffffffffff811115611e5e57600080fd5b600181023603821315611e7057600080fd5b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050611204565b5b8080600101915050611c11565b505050565b611ed3613428565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611f62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f59906152a8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60058060000154905081565b600061204c61203c6110cf565b600561344d90919063ffffffff16565b905090565b6060600061205d6110cf565b905060006120758260056130e190919063ffffffff16565b905060606004805490506040519080825280602002602001820160405280156120b857816020015b6120a5613fdd565b81526020019060019003908161209d5790505b509050600080905060008090505b60048054905081101561217457600060036000600484815481106120e657fe5b9060005260206000200154815260200190815260200160002090506001600381111561210e57fe5b6121188287613821565b600381111561212357fe5b141561216657604051806040016040528082600001548152602001826001015481525084848151811061215257fe5b602002602001018190525082806001019350505b5080806001019150506120c6565b506060816040519080825280602002602001820160405280156121b157816020015b61219e613fdd565b8152602001906001900390816121965790505b50905060008090505b828110156121fa578381815181106121ce57fe5b60200260200101518282815181106121e257fe5b602002602001018190525080806001019150506121ba565b50809550505050505090565b61220e613428565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461229d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612294906152a8565b60405180910390fd5b8060076000820151816000015590505050565b60608082516040519080825280602002602001820160405280156122ee57816020015b6122db613ffa565b8152602001906001900390816122d35790505b509050600061230e6122fe6110cf565b60056130e190919063ffffffff16565b905060008090505b845181101561241057600061235986838151811061233057fe5b60200260200101516000015187848151811061234857fe5b60200260200101516020015161316e565b905060006123678285613821565b90506001600381111561237657fe5b81600381111561238257fe5b14156123aa578385848151811061239557fe5b602002602001015160200181815250506123cc565b81600301548584815181106123bb57fe5b602002602001015160200181815250505b808584815181106123d957fe5b60200260200101516000019060038111156123f057fe5b908160038111156123fd57fe5b8152505050508080600101915050612316565b508192505050919050565b612423613428565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146124b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124a9906152a8565b60405180910390fd5b8060088190555050565b6002602052806000526040600020600091509050806000015490806001016040518060200160405290816000820154815250509080600201604051806020016040529081600082015481525050908060030154905084565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461262a57600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612625576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161261c90615448565b60405180910390fd5b6127c3565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f52656769737472790000000000000000000000000000000000000000000000006040518263ffffffff1660e01b81526004016126a791906150f1565b60206040518083038186803b1580156126bf57600080fd5b505afa1580156126d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506126f791908101906142ca565b90508073ffffffffffffffffffffffffffffffffffffffff1663f9f6b49b336040518263ffffffff1660e01b81526004016127329190615003565b60206040518083038186803b15801561274a57600080fd5b505afa15801561275e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506127829190810190614425565b6127c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016127b8906153a8565b60405180910390fd5b505b60006127cf8484613915565b505090508091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461286e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612865906153e8565b60405180910390fd5b60006128786110cf565b90506001600281111561288757fe5b61289b82600561344d90919063ffffffff16565b60028111156128a657fe5b146128e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128dd90615428565b60405180910390fd5b60006128fc8260056130e190919063ffffffff16565b905061290781613496565b5050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60068060000154905081565b60008073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612a2957600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612a24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a1b90615448565b60405180910390fd5b612bc2565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f52656769737472790000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401612aa691906150f1565b60206040518083038186803b158015612abe57600080fd5b505afa158015612ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250612af691908101906142ca565b90508073ffffffffffffffffffffffffffffffffffffffff1663f9f6b49b336040518263ffffffff1660e01b8152600401612b319190615003565b60206040518083038186803b158015612b4957600080fd5b505afa158015612b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250612b819190810190614425565b612bc0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bb7906153a8565b60405180910390fd5b505b6000806060612bd18686613915565b925092509250828190612c1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c119190615186565b60405180910390fd5b5081935050505092915050565b600073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612cb8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612caf906153e8565b60405180910390fd5b6000801b811415612cfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612cf590615308565b60405180910390fd5b6000612d086110cf565b905060006002811115612d1757fe5b612d2b82600561344d90919063ffffffff16565b6002811115612d3657fe5b14612d76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d6d906153c8565b60405180910390fd5b6000612d8c8260056130e190919063ffffffff16565b90506000612d9a868661316e565b905060016003811115612da957fe5b612db38284613821565b6003811115612dbe57fe5b14612dfe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612df5906152c8565b60405180910390fd5b81816003018190555060008160020160008481526020019081526020016000209050848160000160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555086833373ffffffffffffffffffffffffffffffffffffffff167f879c67d036f174a10ea491cf7281d05af9b906660b4f26727d866aec0cf9147c89604051612eb19190615483565b60405180910390a450505050505050565b60606004805480602002602001604051908101604052809291908181526020018280548015612f1057602002820191906000526020600020905b815481526020019060010190808311612efc575b5050505050905090565b612f22613428565b73ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612fb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612fa8906152a8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415613021576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613018906151c8565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806131066002808111156130f357fe5b8560000154613af990919063ffffffff16565b905061311b8184613b6990919063ffffffff16565b91505092915050565b61312c613fca565b6040518060200160405280670de0b6b3a764000061315b85600001518760000151613af990919063ffffffff16565b8161316257fe5b04815250905092915050565b60006003600061317e85856137ee565b8152602001908152602001600020905092915050565b600019826004015414156131a757613307565b6000806131cc6131ba8560030154613bb3565b84600101613d0290919063ffffffff16565b9150915081613210576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161320790615388565b60405180910390fd5b600060016004805490500390506000600360006004848154811061323057fe5b906000526020600020015481526020019081526020016000209050856004015481600401819055506004828154811061326557fe5b9060005260206000200154600487600401548154811061328157fe5b9060005260206000200181905550600480548061329a57fe5b600190038181906000526020600020016000905590556000198660040181905550856000015486600301547f67565e6a3e804c4e180134cb2885e32142229de3ca125701318af11658ee49888860010154866040516132fa9291906154ce565b60405180910390a3505050505b5050565b60008260020154604051602001613322919061516b565b604051602081830303815290604052805190602001208214905092915050565b61334a613fca565b816000016000836002015481526020019081526020016000206040518060200160405290816000820154815250509050919050565b613387613fca565b60405180602001604052806133c784600001516133b9670de0b6b3a76400008860000151613af990919063ffffffff16565b613b6990919063ffffffff16565b815250905092915050565b6133da613fca565b6040518060200160405280613400846000015186600001516138c090919063ffffffff16565b815250905092915050565b600061341682613deb565b60000151836000015111905092915050565b600033905090565b600061343b82613deb565b60000151836000015110905092915050565b600061348360028081111561345e57fe5b613475856000015485613b6990919063ffffffff16565b613e2390919063ffffffff16565b600281111561348e57fe5b905092915050565b60006002600083815260200190815260200160002090506000816000015414156135f157600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639711715a6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561352457600080fd5b505af1158015613538573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061355c9190810190614609565b816000018190555060076002600084815260200190815260200160002060010160008201548160000155905050600660026000848152602001908152602001600020600201600082015481600001559050506135d66008546135c8846005613e6d90919063ffffffff16565b6138c090919063ffffffff16565b60026000848152602001908152602001600020600301819055505b5050565b61362081846001016040518060200160405290816000820154815250506133d290919063ffffffff16565b836001016000820151816000015590505061366d818460000160008581526020019081526020016000206040518060200160405290816000820154815250506133d290919063ffffffff16565b8360000160008481526020019081526020016000206000820151816000015590505082600201548214158015613708575061370783600001600085600201548152602001908152602001600020604051806020016040529081600082015481525050846000016000858152602001908152602001600020604051806020016040529081600082015481525050613ec390919063ffffffff16565b5b15613717578183600201819055505b505050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f4964656e74696669657257686974656c697374000000000000000000000000006040518263ffffffff1660e01b815260040161379991906150f1565b60206040518083038186803b1580156137b157600080fd5b505afa1580156137c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506137e991908101906142ca565b905090565b6000828260405160200161380392919061510c565b60405160208183030381529060405280519060200120905092915050565b6000808360030154141561383857600090506138ba565b81836003015410156138a057600083600201600085600301548152602001908152602001600020905060006138856138738660030154613bb3565b83600101613d0290919063ffffffff16565b50905080613894576001613897565b60025b925050506138ba565b81836003015414156138b557600190506138ba565b600390505b92915050565b60008082840190508381101561390b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613902906151e8565b60405180910390fd5b8091505092915050565b60008060606000613926868661316e565b905060006139456139356110cf565b60056130e190919063ffffffff16565b905060006139538383613821565b90506001600381111561396257fe5b81600381111561396e57fe5b14156139be576000808090506040518060400160405280601e81526020017f43757272656e7420766f74696e6720726f756e64206e6f7420656e6465640000815250955095509550505050613af2565b600260038111156139cb57fe5b8160038111156139d757fe5b1415613a445760008360020160008560030154815260200190815260200160002090506000613a1e613a0c8660030154613bb3565b83600101613d0290919063ffffffff16565b915050600181604051806020016040528060008152509750975097505050505050613af2565b600380811115613a5057fe5b816003811115613a5c57fe5b1415613aac576000808090506040518060400160405280601d81526020017f5072696365206973207374696c6c20746f20626520766f746564206f6e000000815250955095509550505050613af2565b6000808090506040518060400160405280601981526020017f507269636520776173206e6576657220726571756573746564000000000000008152509550955095505050505b9250925092565b600080831415613b0c5760009050613b63565b6000828402905082848281613b1d57fe5b0414613b5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613b5590615288565b60405180910390fd5b809150505b92915050565b6000613bab83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250613ed8565b905092915050565b613bbb613fca565b6000600260008481526020019081526020016000206000015490506000811415613bf8576040518060200160405280600019815250915050613cfd565b613c00613fca565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663981b24d0856040518263ffffffff1660e01b8152600401613c669190615483565b60206040518083038186803b158015613c7e57600080fd5b505afa158015613c92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250613cb69190810190614609565b8152509050613cf8600260008681526020019081526020016000206002016040518060200160405290816000820154815250508261312490919063ffffffff16565b925050505b919050565b600080613d0d613fca565b613d2a6064613d1c6032613deb565b613f3990919063ffffffff16565b9050613d578486600101604051806020016040529081600082015481525050613ec390919063ffffffff16565b8015613dc95750613dc881613dba876001016040518060200160405290816000820154815250508860000160008a60020154815260200190815260200160002060405180602001604052908160008201548152505061337f90919063ffffffff16565b613ec390919063ffffffff16565b5b15613dde576001925084600201549150613de3565b600092505b509250929050565b613df3613fca565b6040518060200160405280613e19670de0b6b3a764000085613af990919063ffffffff16565b8152509050919050565b6000613e6583836040518060400160405280601881526020017f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000815250613f6e565b905092915050565b600080613e92600280811115613e7f57fe5b8560000154613af990919063ffffffff16565b9050613eba613eab6001856138c090919063ffffffff16565b82613af990919063ffffffff16565b91505092915050565b60008160000151836000015111905092915050565b60008083118290613f1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613f169190615186565b60405180910390fd5b506000838581613f2b57fe5b049050809150509392505050565b613f41613fca565b6040518060200160405280613f63848660000151613b6990919063ffffffff16565b815250905092915050565b6000808314158290613fb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613fad9190615186565b60405180910390fd5b50828481613fc057fe5b0690509392505050565b6040518060200160405280600081525090565b604051806040016040528060008019168152602001600081525090565b60405180604001604052806000600381111561401257fe5b8152602001600081525090565b60008135905061402e81615909565b92915050565b60008151905061404381615909565b92915050565b60008083601f84011261405b57600080fd5b8235905067ffffffffffffffff81111561407457600080fd5b60208301915083602082028301111561408c57600080fd5b9250929050565b600082601f8301126140a457600080fd5b81356140b76140b2826155f2565b6155c5565b915081818352602084019350602081019050838560408402820111156140dc57600080fd5b60005b8381101561410c57816140f288826141f3565b8452602084019350604083019250506001810190506140df565b5050505092915050565b60008083601f84011261412857600080fd5b8235905067ffffffffffffffff81111561414157600080fd5b60208301915083608082028301111561415957600080fd5b9250929050565b60008151905061416f81615920565b92915050565b60008135905061418481615937565b92915050565b600082601f83011261419b57600080fd5b81356141ae6141a98261561a565b6155c5565b915080825260208301602083018583830111156141ca57600080fd5b6141d583828461584d565b50505092915050565b6000813590506141ed8161594e565b92915050565b60006040828403121561420557600080fd5b61420f60406155c5565b9050600061421f84828501614175565b600083015250602061423384828501614277565b60208301525092915050565b60006020828403121561425157600080fd5b61425b60206155c5565b9050600061426b84828501614277565b60008301525092915050565b60008135905061428681615965565b92915050565b60008151905061429b81615965565b92915050565b6000602082840312156142b357600080fd5b60006142c18482850161401f565b91505092915050565b6000602082840312156142dc57600080fd5b60006142ea84828501614034565b91505092915050565b60008060006060848603121561430857600080fd5b60006143168682870161401f565b935050602061432786828701614277565b925050604084013567ffffffffffffffff81111561434457600080fd5b61435086828701614093565b9150509250925092565b6000806020838503121561436d57600080fd5b600083013567ffffffffffffffff81111561438757600080fd5b61439385828601614049565b92509250509250929050565b6000602082840312156143b157600080fd5b600082013567ffffffffffffffff8111156143cb57600080fd5b6143d784828501614093565b91505092915050565b600080602083850312156143f357600080fd5b600083013567ffffffffffffffff81111561440d57600080fd5b61441985828601614116565b92509250509250929050565b60006020828403121561443757600080fd5b600061444584828501614160565b91505092915050565b6000806040838503121561446157600080fd5b600061446f85828601614175565b925050602061448085828601614277565b9150509250929050565b60008060006060848603121561449f57600080fd5b60006144ad86828701614175565b93505060206144be86828701614277565b92505060406144cf86828701614175565b9150509250925092565b600080600080608085870312156144ef57600080fd5b60006144fd87828801614175565b945050602061450e87828801614277565b935050604061451f87828801614175565b925050606085013567ffffffffffffffff81111561453c57600080fd5b6145488782880161418a565b91505092959194509250565b6000806000806080858703121561456a57600080fd5b600061457887828801614175565b945050602061458987828801614277565b935050604061459a878288016141de565b92505060606145ab878288016141de565b91505092959194509250565b6000602082840312156145c957600080fd5b60006145d78482850161423f565b91505092915050565b6000602082840312156145f257600080fd5b600061460084828501614277565b91505092915050565b60006020828403121561461b57600080fd5b60006146298482850161428c565b91505092915050565b600061463e83836147d8565b60208301905092915050565b60006146568383614ead565b60408301905092915050565b600061466e8383614edc565b60408301905092915050565b614683816157bd565b82525050565b61469a6146958261573b565b61588f565b82525050565b6146a981615729565b82525050565b60006146ba82615676565b6146c481856156d4565b93506146cf83615646565b8060005b838110156147005781516146e78882614632565b97506146f2836156ad565b9250506001810190506146d3565b5085935050505092915050565b600061471882615681565b61472281856156e5565b935061472d83615656565b8060005b8381101561475e578151614745888261464a565b9750614750836156ba565b925050600181019050614731565b5085935050505092915050565b60006147768261568c565b61478081856156f6565b935061478b83615666565b8060005b838110156147bc5781516147a38882614662565b97506147ae836156c7565b92505060018101905061478f565b5085935050505092915050565b6147d28161574d565b82525050565b6147e181615759565b82525050565b6147f081615759565b82525050565b61480761480282615759565b6158a1565b82525050565b600061481882615697565b6148228185615707565b935061483281856020860161585c565b61483b816158d1565b840191505092915050565b61484f816157cf565b82525050565b61485e816157f3565b82525050565b61486d81615805565b82525050565b61487c81615789565b82525050565b61489361488e82615789565b6158ab565b82525050565b6148a281615817565b82525050565b60006148b3826156a2565b6148bd8185615718565b93506148cd81856020860161585c565b6148d6816158d1565b840191505092915050565b60006148ee601c83615718565b91507f52657665616c6564206461746120213d20636f6d6d69742068617368000000006000830152602082019050919050565b600061492e602683615718565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000614994601b83615718565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b60006149d4601d83615718565b91507f43616e6e6f742072657665616c20696e20636f6d6d69742070686173650000006000830152602082019050919050565b6000614a14601b83615718565b91507f43616e206f6e6c792063616c6c2066726f6d206d6967726174656400000000006000830152602082019050919050565b6000614a54600f83615718565b91507f496e76616c696420726f756e64496400000000000000000000000000000000006000830152602082019050919050565b6000614a94601e83615718565b91507f556e737570706f72746564206964656e746966696572207265717565737400006000830152602082019050919050565b6000614ad4602183615718565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000614b3a602083615718565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b6000614b7a601e83615718565b91507f43616e6e6f7420636f6d6d697420696e616374697665207265717565737400006000830152602082019050919050565b6000614bba601c83615718565b91507f566f74696e6720746f6b656e2069737375616e6365206661696c6564000000006000830152602082019050919050565b6000614bfa601583615718565b91507f496e76616c69642070726f7669646564206861736800000000000000000000006000830152602082019050919050565b6000614c3a601383615718565b91507f496e76616c696420686173682072657665616c000000000000000000000000006000830152602082019050919050565b6000614c7a601883615718565b91507f43616e206f6e6c79207265717565737420696e207061737400000000000000006000830152602082019050919050565b6000614cba601d83615718565b91507f4741542070657263656e74616765206d757374206265203c20313030250000006000830152602082019050919050565b6000614cfa602083615718565b91507f43616e2774207265736f6c766520756e7265736f6c76656420726571756573746000830152602082019050919050565b6000614d3a601983615718565b91507f43616c6c6564206d7573742062652072656769737465726564000000000000006000830152602082019050919050565b6000614d7a601d83615718565b91507f43616e6e6f7420636f6d6d697420696e2072657665616c2070686173650000006000830152602082019050919050565b6000614dba601e83615718565b91507f4f6e6c792063616c6c2074686973206966206e6f74206d6967726174656400006000830152602082019050919050565b6000614dfa601d83615718565b91507f526574726965766520666f7220766f7465732073616d6520726f756e640000006000830152602082019050919050565b6000614e3a601d83615718565b91507f4f6e6c7920736e617073686f7420696e2072657665616c2070686173650000006000830152602082019050919050565b6000614e7a601f83615718565b91507f43616c6c6572206d757374206265206d696772617465642061646472657373006000830152602082019050919050565b604082016000820151614ec360008501826147d8565b506020820151614ed66020850182614f43565b50505050565b604082016000820151614ef26000850182614864565b506020820151614f056020850182614f43565b50505050565b602082016000820151614f216000850182614f43565b50505050565b602082016000820151614f3d6000850182614f43565b50505050565b614f4c816157b3565b82525050565b614f5b816157b3565b82525050565b614f72614f6d826157b3565b6158c7565b82525050565b6000614f848289614882565b602082019150614f948288614882565b602082019150614fa48287614689565b601482019150614fb48286614f61565b602082019150614fc48285614f61565b602082019150614fd482846147f6565b602082019150819050979650505050505050565b6000602082019050614ffd60008301846146a0565b92915050565b6000602082019050615018600083018461467a565b92915050565b6000604082019050615033600083018561467a565b6150406020830184614f52565b9392505050565b600060408201905061505c60008301856146a0565b6150696020830184614f52565b9392505050565b6000602082019050818103600083015261508a81846146af565b905092915050565b600060208201905081810360008301526150ac818461470d565b905092915050565b600060208201905081810360008301526150ce818461476b565b905092915050565b60006020820190506150eb60008301846147c9565b92915050565b600060208201905061510660008301846147e7565b92915050565b600060408201905061512160008301856147e7565b61512e6020830184614f52565b9392505050565b600060208201905061514a6000830184614846565b92915050565b60006020820190506151656000830184614855565b92915050565b60006020820190506151806000830184614873565b92915050565b600060208201905081810360008301526151a081846148a8565b905092915050565b600060208201905081810360008301526151c1816148e1565b9050919050565b600060208201905081810360008301526151e181614921565b9050919050565b6000602082019050818103600083015261520181614987565b9050919050565b60006020820190508181036000830152615221816149c7565b9050919050565b6000602082019050818103600083015261524181614a07565b9050919050565b6000602082019050818103600083015261526181614a47565b9050919050565b6000602082019050818103600083015261528181614a87565b9050919050565b600060208201905081810360008301526152a181614ac7565b9050919050565b600060208201905081810360008301526152c181614b2d565b9050919050565b600060208201905081810360008301526152e181614b6d565b9050919050565b6000602082019050818103600083015261530181614bad565b9050919050565b6000602082019050818103600083015261532181614bed565b9050919050565b6000602082019050818103600083015261534181614c2d565b9050919050565b6000602082019050818103600083015261536181614c6d565b9050919050565b6000602082019050818103600083015261538181614cad565b9050919050565b600060208201905081810360008301526153a181614ced565b9050919050565b600060208201905081810360008301526153c181614d2d565b9050919050565b600060208201905081810360008301526153e181614d6d565b9050919050565b6000602082019050818103600083015261540181614dad565b9050919050565b6000602082019050818103600083015261542181614ded565b9050919050565b6000602082019050818103600083015261544181614e2d565b9050919050565b6000602082019050818103600083015261546181614e6d565b9050919050565b600060208201905061547d6000830184614f0b565b92915050565b60006020820190506154986000830184614f52565b92915050565b60006040820190506154b36000830185614f52565b81810360208301526154c5818461480d565b90509392505050565b60006040820190506154e36000830185614f52565b6154f06020830184614873565b9392505050565b600060608201905061550c6000830186614f52565b6155196020830185614873565b6155266040830184614f52565b949350505050565b60006040820190506155436000830185614f52565b6155506020830184614899565b9392505050565b600060808201905061556c6000830187614f52565b6155796020830186614f27565b6155866040830185614f27565b6155936060830184614f52565b95945050505050565b60006040820190506155b16000830185614f52565b6155be6020830184614f52565b9392505050565b6000604051905081810181811067ffffffffffffffff821117156155e857600080fd5b8060405250919050565b600067ffffffffffffffff82111561560957600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561563157600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061573482615793565b9050919050565b600061574682615793565b9050919050565b60008115159050919050565b6000819050919050565b6000819050615771826158ef565b919050565b6000819050615784826158fc565b919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006157c882615829565b9050919050565b60006157da826157e1565b9050919050565b60006157ec82615793565b9050919050565b60006157fe82615763565b9050919050565b600061581082615776565b9050919050565b6000615822826157b3565b9050919050565b60006158348261583b565b9050919050565b600061584682615793565b9050919050565b82818337600083830152505050565b60005b8381101561587a57808201518184015260208101905061585f565b83811115615889576000848401525b50505050565b600061589a826158b5565b9050919050565b6000819050919050565b6000819050919050565b60006158c0826158e2565b9050919050565b6000819050919050565b6000601f19601f8301169050919050565b60008160601b9050919050565b600381106158f957fe5b50565b6004811061590657fe5b50565b61591281615729565b811461591d57600080fd5b50565b6159298161574d565b811461593457600080fd5b50565b61594081615759565b811461594b57600080fd5b50565b61595781615789565b811461596257600080fd5b50565b61596e816157b3565b811461597957600080fd5b50565b6000811161598957600080fd5b8082600001819055505050565b60006159a182613deb565b600001518360000151111590509291505056fea2646970667358221220603edb72e806d957a3124eff1598df65b4e0135f9c91977d1af525273313eb3e64736f6c63430006020033"
