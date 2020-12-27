import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { Umip3Upgrader } from "./Umip3UpgraderContractInterface"

export class Umip3UpgraderInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _existingGovernor: string,
    _existingVoting: string,
    _finder: string,
    _voting: string,
    _identifierWhitelist: string,
    _store: string,
    _financialContractsAdmin: string,
    _registry: string,
    _newGovernor: string,
    overrides?: Overrides
  ): Promise<Umip3Upgrader> {
    return super.deploy(
      _existingGovernor,
      _existingVoting,
      _finder,
      _voting,
      _identifierWhitelist,
      _store,
      _financialContractsAdmin,
      _registry,
      _newGovernor,
      overrides || {}
    ) as Promise<Umip3Upgrader>
  }
  getDeployTransaction(
    _existingGovernor: string,
    _existingVoting: string,
    _finder: string,
    _voting: string,
    _identifierWhitelist: string,
    _store: string,
    _financialContractsAdmin: string,
    _registry: string,
    _newGovernor: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _existingGovernor,
      _existingVoting,
      _finder,
      _voting,
      _identifierWhitelist,
      _store,
      _financialContractsAdmin,
      _registry,
      _newGovernor,
      overrides || {}
    )
  }
  attach(address: string): Umip3Upgrader {
    return super.attach(address) as Umip3Upgrader
  }
  connect(signer: Signer): Umip3UpgraderInstanceCreator {
    return super.connect(signer) as Umip3UpgraderInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Umip3Upgrader {
    return new Contract(address, _abi, signerOrProvider) as Umip3Upgrader
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_existingGovernor",
        type: "address",
      },
      {
        internalType: "address",
        name: "_existingVoting",
        type: "address",
      },
      {
        internalType: "address",
        name: "_finder",
        type: "address",
      },
      {
        internalType: "address",
        name: "_voting",
        type: "address",
      },
      {
        internalType: "address",
        name: "_identifierWhitelist",
        type: "address",
      },
      {
        internalType: "address",
        name: "_store",
        type: "address",
      },
      {
        internalType: "address",
        name: "_financialContractsAdmin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "existingGovernor",
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
    name: "existingVoting",
    outputs: [
      {
        internalType: "contract Voting",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "financialContractsAdmin",
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
    name: "finder",
    outputs: [
      {
        internalType: "contract Finder",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "identifierWhitelist",
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
    name: "newGovernor",
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
    name: "registry",
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
    name: "store",
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
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "voting",
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
]

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611045380380611045833981810160405261012081101561003457600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050886000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555087600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505050505050610d50806102f56000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063b9a3c84c11610066578063b9a3c84c14610215578063d55ec6971461025f578063e84bf00c14610269578063ebb4bfb0146102b3578063fce1ccca146102fd5761009e565b8063679b721c146100a35780636a06d469146100ed5780637b103999146101375780638fd2057714610181578063975057e7146101cb575b600080fd5b6100ab610347565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100f561036d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61013f610393565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101896103b9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101d36103df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61021d610405565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61026761042b565b005b610271610c72565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102bb610c98565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610305610cbd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104d0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180610ce46037913960400191505060405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331f9665e7f4f7261636c650000000000000000000000000000000000000000000000000000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156105bb57600080fd5b505af11580156105cf573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331f9665e7f4964656e74696669657257686974656c69737400000000000000000000000000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156106be57600080fd5b505af11580156106d2573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331f9665e7f53746f7265000000000000000000000000000000000000000000000000000000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156107c157600080fd5b505af11580156107d5573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331f9665e7f46696e616e6369616c436f6e74726163747341646d696e000000000000000000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156108c457600080fd5b505af11580156108d8573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166331f9665e7f5265676973747279000000000000000000000000000000000000000000000000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156109c757600080fd5b505af11580156109db573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f2fde38b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015610aa257600080fd5b505af1158015610ab6573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632960b5af600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015610b7d57600080fd5b505af1158015610b91573d6000803e3d6000fd5b50505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f2fde38b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015610c5857600080fd5b505af1158015610c6c573d6000803e3d6000fd5b50505050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe557067726164652063616e206f6e6c7920626520696e6974696174656420627920746865206578697374696e6720676f7665726e6f722ea26469706673582212201029d40ccf5b86feabb7ca23addc7653edd3fddec4040f13cccb10eadfedd75064736f6c63430006020033"
