import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { DesignatedVoting } from "./DesignatedVotingContractInterface";

export class DesignatedVotingInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    finderAddress: string,
    ownerAddress: string,
    voterAddress: string,
    overrides?: Overrides
  ): Promise<DesignatedVoting> {
    return super.deploy(
      finderAddress,
      ownerAddress,
      voterAddress,
      overrides || {}
    ) as Promise<DesignatedVoting>;
  }
  getDeployTransaction(
    finderAddress: string,
    ownerAddress: string,
    voterAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      finderAddress,
      ownerAddress,
      voterAddress,
      overrides || {}
    );
  }
  attach(address: string): DesignatedVoting {
    return super.attach(address) as DesignatedVoting;
  }
  connect(signer: Signer): DesignatedVotingInstanceCreator {
    return super.connect(signer) as DesignatedVotingInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DesignatedVoting {
    return new Contract(address, _abi, signerOrProvider) as DesignatedVoting;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "finderAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "ownerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "voterAddress",
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

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002fcc38038062002fcc8339818101604052620000379190810190620003d8565b62000064600060018111156200004957fe5b600060018111156200005757fe5b84620000f860201b60201c565b620000906001808111156200007557fe5b600060018111156200008357fe5b83620000f860201b60201c565b620000ae60006001811115620000a257fe5b6200026460201b60201c565b82600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200068f565b82600060028111156200010757fe5b60008083815260200190815260200160002060010160009054906101000a900460ff1660028111156200013657fe5b1462000179576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200017090620005ec565b60405180910390fd5b6000806000868152602001908152602001600020905060018160010160006101000a81548160ff02191690836002811115620001b157fe5b0217905550838160000181905550620001dc8382600201620002f160201b620028e91790919060201c565b60006002811115620001ea57fe5b60008086815260200190815260200160002060010160009054906101000a900460ff1660028111156200021957fe5b14156200025d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200025490620005ca565b60405180910390fd5b5050505050565b80600060028111156200027357fe5b60008083815260200190815260200160002060010160009054906101000a900460ff166002811115620002a257fe5b1415620002e6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002dd90620005a8565b60405180910390fd5b816001819055505050565b6200030382826200030760201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200037a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000371906200060e565b60405180910390fd5b808260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600081519050620003d28162000675565b92915050565b600080600060608486031215620003ee57600080fd5b6000620003fe86828701620003c1565b93505060206200041186828701620003c1565b92505060406200042486828701620003c1565b9150509250925092565b60006200043d60228362000630565b91507f417474656d7074656420746f2075736520616e20696e76616c696420726f6c6560008301527f49640000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000620004a5603c8362000630565b91507f417474656d7074656420746f2075736520616e20696e76616c696420726f6c6560008301527f20746f206d616e61676520616e206578636c757369766520726f6c65000000006020830152604082019050919050565b60006200050d601e8362000630565b91507f43616e6e6f74207573652061207072652d6578697374696e6720726f6c6500006000830152602082019050919050565b60006200054f60238362000630565b91507f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060008301527f30783000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006020820190508181036000830152620005c3816200042e565b9050919050565b60006020820190508181036000830152620005e58162000496565b9050919050565b600060208201905081810360008301526200060781620004fe565b9050919050565b60006020820190508181036000830152620006298162000540565b9050919050565b600082825260208201905092915050565b60006200064e8262000655565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620006808162000641565b81146200068c57600080fd5b50565b61292d806200069f6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806374d0a6761161008c578063ab3545e511610066578063ab3545e5146101f8578063bd1f4b5214610228578063d8651ad014610244578063d97c05be14610260576100cf565b806374d0a676146101905780637cdc1cb9146101ac578063aaa14ca3146101dc576100cf565b80632e1a7d4d146100d45780633756a796146100f05780634c7a2603146101205780636852eea01461013c5780636be7658b1461015857806370a0cf2c14610174575b600080fd5b6100ee60048036036100e99190810190611a32565b61027c565b005b61010a60048036036101059190810190611a97565b6102d6565b60405161011791906125c0565b60405180910390f35b61013a600480360361013591908101906119a6565b6103d2565b005b610156600480360361015191908101906118e9565b6104a6565b005b610172600480360361016d9190810190611a5b565b610574565b005b61018e600480360361018991908101906118a4565b6106d6565b005b6101aa60048036036101a59190810190611a5b565b6107a4565b005b6101c660048036036101c19190810190611a5b565b610906565b6040516101d3919061238c565b60405180910390f35b6101f660048036036101f19190810190611a32565b6109f9565b005b610212600480360361020d9190810190611a32565b610b45565b60405161021f91906122c2565b60405180910390f35b610242600480360361023d9190810190611868565b610be8565b005b61025e60048036036102599190810190611957565b610c6a565b005b61027a60048036036102759190810190611a5b565b610d3b565b005b6001546102898133610906565b6102c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bf90612500565b60405180910390fd5b6102d23383610e9e565b5050565b6102de6115fe565b6001808111156102ea57fe5b6102f48133610906565b610333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032a90612500565b60405180910390fd5b61033b610f92565b73ffffffffffffffffffffffffffffffffffffffff16630d434e7e3086866040518463ffffffff1660e01b815260040161037793929190612306565b602060405180830381600087803b15801561039157600080fd5b505af11580156103a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506103c99190810190611a09565b91505092915050565b6001808111156103de57fe5b6103e88133610906565b610427576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041e90612500565b60405180910390fd5b61042f610f92565b73ffffffffffffffffffffffffffffffffffffffff16634c7a2603868686866040518563ffffffff1660e01b815260040161046d94939291906123f9565b600060405180830381600087803b15801561048757600080fd5b505af115801561049b573d6000803e3d6000fd5b505050505050505050565b6001808111156104b257fe5b6104bc8133610906565b6104fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f290612500565b60405180910390fd5b610503610f92565b73ffffffffffffffffffffffffffffffffffffffff16636852eea084846040518363ffffffff1660e01b815260040161053d929190612368565b600060405180830381600087803b15801561055757600080fd5b505af115801561056b573d6000803e3d6000fd5b50505050505050565b8160028081111561058157fe5b60008083815260200190815260200160002060010160009054906101000a900460ff1660028111156105af57fe5b146105ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e6906124e0565b60405180910390fd5b8261060f6000808381526020019081526020016000206000015433610906565b61064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064590612560565b60405180910390fd5b6106758360008087815260200190815260200160002060030161106490919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af60405160405180910390a450505050565b6001808111156106e257fe5b6106ec8133610906565b61072b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072290612500565b60405180910390fd5b610733610f92565b73ffffffffffffffffffffffffffffffffffffffff166370a0cf2c84846040518363ffffffff1660e01b815260040161076d929190612344565b600060405180830381600087803b15801561078757600080fd5b505af115801561079b573d6000803e3d6000fd5b50505050505050565b816002808111156107b157fe5b60008083815260200190815260200160002060010160009054906101000a900460ff1660028111156107df57fe5b1461081f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610816906124e0565b60405180910390fd5b8261083f6000808381526020019081526020016000206000015433610906565b61087e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087590612560565b60405180910390fd5b6108a5836000808781526020019081526020016000206003016110c290919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f60405160405180910390a450505050565b60008060008085815260200190815260200160002090506001600281111561092a57fe5b8160010160009054906101000a900460ff16600281111561094757fe5b141561096b57610963838260020161119090919063ffffffff16565b9150506109f3565b60028081111561097757fe5b8160010160009054906101000a900460ff16600281111561099457fe5b14156109b8576109b083826003016111ed90919063ffffffff16565b9150506109f3565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ea90612580565b60405180910390fd5b92915050565b80600280811115610a0657fe5b60008083815260200190815260200160002060010160009054906101000a900460ff166002811115610a3457fe5b14610a74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6b906124e0565b60405180910390fd5b81610a7f8133610906565b610abe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab590612500565b60405180910390fd5b610ae53360008086815260200190815260200160002060030161106490919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16847feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af60405160405180910390a4505050565b60008160016002811115610b5557fe5b60008083815260200190815260200160002060010160009054906101000a900460ff166002811115610b8357fe5b14610bc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bba90612480565b60405180910390fd5b610be0600080858152602001908152602001600020600201611246565b915050919050565b600154610bf58133610906565b610c34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2b90612500565b60405180910390fd5b6000839050610c6433848373ffffffffffffffffffffffffffffffffffffffff166112749092919063ffffffff16565b50505050565b600180811115610c7657fe5b610c808133610906565b610cbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb690612500565b60405180910390fd5b610cc7610f92565b73ffffffffffffffffffffffffffffffffffffffff1663d8651ad08585856040518463ffffffff1660e01b8152600401610d03939291906123c2565b600060405180830381600087803b158015610d1d57600080fd5b505af1158015610d31573d6000803e3d6000fd5b5050505050505050565b8160016002811115610d4957fe5b60008083815260200190815260200160002060010160009054906101000a900460ff166002811115610d7757fe5b14610db7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dae90612480565b60405180910390fd5b82610dd76000808381526020019081526020016000206000015433610906565b610e16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0d90612560565b60405180910390fd5b610e3d836000808781526020019081526020016000206002016112fa90919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e74660405160405180910390a450505050565b80471015610ee1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed8906124c0565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610f07906122ad565b60006040518083038185875af1925050503d8060008114610f44576040519150601f19603f3d011682016040523d82523d6000602084013e610f49565b606091505b5050905080610f8d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f84906124a0565b60405180910390fd5b505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f4f7261636c6500000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040161100f91906123a7565b60206040518083038186803b15801561102757600080fd5b505afa15801561103b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061105f919081019061183f565b905090565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611132576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112990612460565b60405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008173ffffffffffffffffffffffffffffffffffffffff168360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905092915050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6112f58363a9059cbb60e01b84846040516024016112939291906122dd565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113b1565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561136a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136190612520565b60405180910390fd5b808260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6060611413826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114789092919063ffffffff16565b90506000815111156114735780806020019051611433919081019061192e565b611472576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611469906125a0565b60405180910390fd5b5b505050565b60606114878484600085611490565b90509392505050565b606061149b856115b3565b6114da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d190612540565b60405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040516115049190612296565b60006040518083038185875af1925050503d8060008114611541576040519150601f19603f3d011682016040523d82523d6000602084013e611546565b606091505b5091509150811561155b5780925050506115ab565b60008151111561156e5780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a2919061243e565b60405180910390fd5b949350505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91508082141580156115f557506000801b8214155b92505050919050565b6040518060200160405280600081525090565b60008135905061162081612876565b92915050565b60008151905061163581612876565b92915050565b60008083601f84011261164d57600080fd5b8235905067ffffffffffffffff81111561166657600080fd5b60208301915083602082028301111561167e57600080fd5b9250929050565b600082601f83011261169657600080fd5b81356116a96116a482612608565b6125db565b915081818352602084019350602081019050838560408402820111156116ce57600080fd5b60005b838110156116fe57816116e48882611791565b8452602084019350604083019250506001810190506116d1565b5050505092915050565b60008083601f84011261171a57600080fd5b8235905067ffffffffffffffff81111561173357600080fd5b60208301915083608082028301111561174b57600080fd5b9250929050565b6000815190506117618161288d565b92915050565b600081359050611776816128a4565b92915050565b60008135905061178b816128bb565b92915050565b6000604082840312156117a357600080fd5b6117ad60406125db565b905060006117bd84828501611767565b60008301525060206117d184828501611815565b60208301525092915050565b6000602082840312156117ef57600080fd5b6117f960206125db565b905060006118098482850161182a565b60008301525092915050565b600081359050611824816128d2565b92915050565b600081519050611839816128d2565b92915050565b60006020828403121561185157600080fd5b600061185f84828501611626565b91505092915050565b6000806040838503121561187b57600080fd5b600061188985828601611611565b925050602061189a85828601611815565b9150509250929050565b600080602083850312156118b757600080fd5b600083013567ffffffffffffffff8111156118d157600080fd5b6118dd8582860161163b565b92509250509250929050565b600080602083850312156118fc57600080fd5b600083013567ffffffffffffffff81111561191657600080fd5b61192285828601611708565b92509250509250929050565b60006020828403121561194057600080fd5b600061194e84828501611752565b91505092915050565b60008060006060848603121561196c57600080fd5b600061197a86828701611767565b935050602061198b86828701611815565b925050604061199c86828701611767565b9150509250925092565b600080600080608085870312156119bc57600080fd5b60006119ca87828801611767565b94505060206119db87828801611815565b93505060406119ec8782880161177c565b92505060606119fd8782880161177c565b91505092959194509250565b600060208284031215611a1b57600080fd5b6000611a29848285016117dd565b91505092915050565b600060208284031215611a4457600080fd5b6000611a5284828501611815565b91505092915050565b60008060408385031215611a6e57600080fd5b6000611a7c85828601611815565b9250506020611a8d85828601611611565b9150509250929050565b60008060408385031215611aaa57600080fd5b6000611ab885828601611815565b925050602083013567ffffffffffffffff811115611ad557600080fd5b611ae185828601611685565b9150509250929050565b6000611af78383612133565b905092915050565b6000611b0b83836121b8565b60408301905092915050565b6000611b2383836121e7565b60808301905092915050565b611b38816127c7565b82525050565b6000611b4a838561269c565b935083602084028501611b5c84612630565b8060005b87811015611ba0578484038952611b778284612781565b611b818582611aeb565b9450611b8c83612675565b925060208a01995050600181019050611b60565b50829750879450505050509392505050565b6000611bbd82612654565b611bc781856126ad565b9350611bd28361263a565b8060005b83811015611c03578151611bea8882611aff565b9750611bf583612682565b925050600181019050611bd6565b5085935050505092915050565b6000611c1c83856126be565b9350611c278261264a565b8060005b85811015611c6057611c3d82846127a5565b611c478882611b17565b9750611c528361268f565b925050600181019050611c2b565b5085925050509392505050565b611c76816127d9565b82525050565b611c85816127e5565b82525050565b611c94816127e5565b82525050565b6000611ca683856126cf565b9350611cb3838584612823565b611cbc83612865565b840190509392505050565b6000611cd28261265f565b611cdc81856126e0565b9350611cec818560208601612832565b80840191505092915050565b611d01816127ef565b82525050565b611d10816127ef565b82525050565b6000611d218261266a565b611d2b81856126eb565b9350611d3b818560208601612832565b611d4481612865565b840191505092915050565b6000611d5c601f836126eb565b91507f43616e6e6f74206164642030783020746f20612073686172656420726f6c65006000830152602082019050919050565b6000611d9c602f836126eb565b91507f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460008301527f204578636c757369766520726f6c6500000000000000000000000000000000006020830152604082019050919050565b6000611e02603a836126eb565b91507f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008301527f6563697069656e74206d617920686176652072657665727465640000000000006020830152604082019050919050565b6000611e68601d836126eb565b91507f416464726573733a20696e73756666696369656e742062616c616e63650000006000830152602082019050919050565b6000611ea8602c836126eb565b91507f4d7573742062652063616c6c6564206f6e20616e20696e697469616c697a656460008301527f2053686172656420726f6c6500000000000000000000000000000000000000006020830152604082019050919050565b6000611f0e6022836126eb565b91507f53656e64657220646f6573206e6f7420686f6c6420726571756972656420726f60008301527f6c650000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611f746023836126eb565b91507f43616e6e6f742073657420616e206578636c757369766520726f6c6520746f2060008301527f30783000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611fda6000836126e0565b9150600082019050919050565b6000611ff4601d836126eb565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b60006120346024836126eb565b91507f43616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e60008301527f61676572000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061209a600e836126eb565b91507f496e76616c696420726f6c6549640000000000000000000000000000000000006000830152602082019050919050565b60006120da602a836126eb565b91507f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008301527f6f742073756363656564000000000000000000000000000000000000000000006020830152604082019050919050565b60006080830161214660008401846126fc565b6121536000860182611c7c565b5061216160208401846127b0565b61216e6020860182612278565b5061217c60408401846126fc565b6121896040860182611c7c565b506121976060840184612713565b85830360608701526121aa838284611c9a565b925050508091505092915050565b6040820160008201516121ce6000850182611c7c565b5060208201516121e16020850182612278565b50505050565b608082016121f860008301836126fc565b6122056000850182611c7c565b5061221360208301836127b0565b6122206020850182612278565b5061222e604083018361276a565b61223b6040850182611cf8565b50612249606083018361276a565b6122566060850182611cf8565b50505050565b6020820160008201516122726000850182612278565b50505050565b61228181612819565b82525050565b61229081612819565b82525050565b60006122a28284611cc7565b915081905092915050565b60006122b882611fcd565b9150819050919050565b60006020820190506122d76000830184611b2f565b92915050565b60006040820190506122f26000830185611b2f565b6122ff6020830184612287565b9392505050565b600060608201905061231b6000830186611b2f565b6123286020830185612287565b818103604083015261233a8184611bb2565b9050949350505050565b6000602082019050818103600083015261235f818486611b3e565b90509392505050565b60006020820190508181036000830152612383818486611c10565b90509392505050565b60006020820190506123a16000830184611c6d565b92915050565b60006020820190506123bc6000830184611c8b565b92915050565b60006060820190506123d76000830186611c8b565b6123e46020830185612287565b6123f16040830184611c8b565b949350505050565b600060808201905061240e6000830187611c8b565b61241b6020830186612287565b6124286040830185611d07565b6124356060830184611d07565b95945050505050565b600060208201905081810360008301526124588184611d16565b905092915050565b6000602082019050818103600083015261247981611d4f565b9050919050565b6000602082019050818103600083015261249981611d8f565b9050919050565b600060208201905081810360008301526124b981611df5565b9050919050565b600060208201905081810360008301526124d981611e5b565b9050919050565b600060208201905081810360008301526124f981611e9b565b9050919050565b6000602082019050818103600083015261251981611f01565b9050919050565b6000602082019050818103600083015261253981611f67565b9050919050565b6000602082019050818103600083015261255981611fe7565b9050919050565b6000602082019050818103600083015261257981612027565b9050919050565b600060208201905081810360008301526125998161208d565b9050919050565b600060208201905081810360008301526125b9816120cd565b9050919050565b60006020820190506125d5600083018461225c565b92915050565b6000604051905081810181811067ffffffffffffffff821117156125fe57600080fd5b8060405250919050565b600067ffffffffffffffff82111561261f57600080fd5b602082029050602081019050919050565b6000819050919050565b6000819050602082019050919050565b6000819050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b6000608082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061270b6020840184611767565b905092915050565b6000808335600160200384360303811261272c57600080fd5b83810192508235915060208301925067ffffffffffffffff82111561275057600080fd5b60018202360384131561276257600080fd5b509250929050565b6000612779602084018461177c565b905092915050565b60008235600160800383360303811261279957600080fd5b82810191505092915050565b600082905092915050565b60006127bf6020840184611815565b905092915050565b60006127d2826127f9565b9050919050565b60008115159050919050565b6000819050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612850578082015181840152602081019050612835565b8381111561285f576000848401525b50505050565b6000601f19601f8301169050919050565b61287f816127c7565b811461288a57600080fd5b50565b612896816127d9565b81146128a157600080fd5b50565b6128ad816127e5565b81146128b857600080fd5b50565b6128c4816127ef565b81146128cf57600080fd5b50565b6128db81612819565b81146128e657600080fd5b50565b6128f382826112fa565b505056fea26469706673582212202a1c468c1769c54645c35c34332cfac367ed1779ed9e55f918bb70c92ba41d6e64736f6c63430006020033";