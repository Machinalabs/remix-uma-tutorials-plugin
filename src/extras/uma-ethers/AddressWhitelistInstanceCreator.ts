import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { AddressWhitelist } from "./AddressWhitelistContractInterface";

export class AddressWhitelistInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<AddressWhitelist> {
    return super.deploy(overrides || {}) as Promise<AddressWhitelist>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AddressWhitelist {
    return super.attach(address) as AddressWhitelist;
  }
  connect(signer: Signer): AddressWhitelistInstanceCreator {
    return super.connect(signer) as AddressWhitelistInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AddressWhitelist {
    return new Contract(address, _abi, signerOrProvider) as AddressWhitelist;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addedAddress",
        type: "address",
      },
    ],
    name: "AddedToWhitelist",
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
        internalType: "address",
        name: "removedAddress",
        type: "address",
      },
    ],
    name: "RemovedFromWhitelist",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newElement",
        type: "address",
      },
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWhitelist",
    outputs: [
      {
        internalType: "address[]",
        name: "activeWhitelist",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "elementToCheck",
        type: "address",
      },
    ],
    name: "isOnWhitelist",
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
        internalType: "address",
        name: "elementToRemove",
        type: "address",
      },
    ],
    name: "removeFromWhitelist",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "enum AddressWhitelist.Status",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "whitelistIndices",
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
];

const _bytecode =
  "0x608060405260006100146100d260201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506001600060146101000a81548160ff0219169083151502179055506100da565b600033905090565b610fe0806100e96000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638da5cb5b116100665780638da5cb5b146101b05780639b19251a146101fa578063d01f63f514610260578063e43252d7146102bf578063f2fde38b1461030357610093565b806337797c08146100985780633a3ab67214610106578063715018a6146101625780638ab1d6811461016c575b600080fd5b6100c4600480360360208110156100ae57600080fd5b8101908080359060200190929190505050610347565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101486004803603602081101561011c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610383565b604051808215151515815260200191505060405180910390f35b61016a6103fa565b005b6101ae6004803603602081101561018257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610582565b005b6101b8610774565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61023c6004803603602081101561021057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061079d565b6040518082600281111561024c57fe5b60ff16815260200191505060405180910390f35b6102686107bd565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102ab578082015181840152602081019050610290565b505050509050019250505060405180910390f35b610301600480360360208110156102d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109eb565b005b6103456004803603602081101561031957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cb2565b005b6002818154811061035457fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600061038d610ebf565b6001600281111561039a57fe5b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660028111156103f257fe5b149050919050565b610402610f43565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b61058a610ebf565b610592610f4b565b61059a610f43565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461065b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60028081111561066757fe5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660028111156106bf57fe5b14610769576002600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083600281111561072057fe5b02179055508073ffffffffffffffffffffffffffffffffffffffff167fcdd2e9b91a56913d370075169cefa1602ba36be5301664f752192bb1709df75760405160405180910390a25b610771610f67565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60016020528060005260406000206000915054906101000a900460ff1681565b60606107c7610ebf565b600080905060008090505b60028054905081101561089757600160028111156107ec57fe5b60016000600284815481106107fd57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16600281111561087b57fe5b141561088a5781806001019250505b80806001019150506107d2565b50806040519080825280602002602001820160405280156108c75781602001602082028038833980820191505090505b5091506000905060008090505b6002805490508110156109e6576000600282815481106108f057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506001600281111561092a57fe5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16600281111561098257fe5b14156109d8578084848151811061099557fe5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505082806001019350505b5080806001019150506108d4565b505090565b6109f3610ebf565b6109fb610f4b565b610a03610f43565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ac4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60016002811115610ad157fe5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166002811115610b2957fe5b1415610b3457610ca7565b60006002811115610b4157fe5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166002811115610b9957fe5b1415610c03576002819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690836002811115610c5e57fe5b02179055508073ffffffffffffffffffffffffffffffffffffffff167fa850ae9193f515cbae8d35e8925bd2be26627fc91bce650b8652ed254e9cab0360405160405180910390a25b610caf610f67565b50565b610cba610f43565b73ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d7b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610f856026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060149054906101000a900460ff16610f41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b565b600033905090565b60008060146101000a81548160ff021916908315150217905550565b6001600060146101000a81548160ff02191690831515021790555056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a26469706673582212200fea74b7268150924222fd610392de350aec7f1fa0ad8d394b78f19a36af255964736f6c63430006020033";
