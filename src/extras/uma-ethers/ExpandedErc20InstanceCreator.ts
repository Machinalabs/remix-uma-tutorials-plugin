import { Signer, BigNumberish } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { ExpandedErc20 } from "./ExpandedErc20ContractInterface"

export class ExpandedErc20InstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _tokenName: string,
    _tokenSymbol: string,
    _tokenDecimals: BigNumberish,
    overrides?: Overrides
  ): Promise<ExpandedErc20> {
    return super.deploy(
      _tokenName,
      _tokenSymbol,
      _tokenDecimals,
      overrides || {}
    ) as Promise<ExpandedErc20>
  }
  getDeployTransaction(
    _tokenName: string,
    _tokenSymbol: string,
    _tokenDecimals: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenName, _tokenSymbol, _tokenDecimals, overrides || {})
  }
  attach(address: string): ExpandedErc20 {
    return super.attach(address) as ExpandedErc20
  }
  connect(signer: Signer): ExpandedErc20InstanceCreator {
    return super.connect(signer) as ExpandedErc20InstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ExpandedErc20 {
    return new Contract(address, _abi, signerOrProvider) as ExpandedErc20
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_tokenDecimals",
        type: "uint8",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002f5138038062002f51833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919050505082828160039080519060200190620001dc929190620008ce565b508060049080519060200190620001f5929190620008ce565b506012600560006101000a81548160ff021916908360ff160217905550505062000225816200031660201b60201c565b62000252600060028111156200023757fe5b600060028111156200024557fe5b336200033460201b60201c565b620002b0600160028111156200026457fe5b600060028111156200027257fe5b6000604051908082528060200260200182016040528015620002a35781602001602082028038833980820191505090505b50620004e960201b60201c565b6200030d600280811115620002c157fe5b60006002811115620002cf57fe5b6000604051908082528060200260200182016040528015620003005781602001602082028038833980820191505090505b50620004e960201b60201c565b5050506200097d565b80600560006101000a81548160ff021916908360ff16021790555050565b82600060028111156200034357fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff1660028111156200037357fe5b14620003e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000081525060200191505060405180910390fd5b600060066000868152602001908152602001600020905060018160010160006101000a81548160ff021916908360028111156200042057fe5b02179055508381600001819055506200044b83826002016200069e60201b620022a31790919060201c565b600060028111156200045957fe5b6006600086815260200190815260200160002060010160009054906101000a900460ff1660028111156200048957fe5b1415620004e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c81526020018062002eba603c913960400191505060405180910390fd5b5050505050565b8260006002811115620004f857fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff1660028111156200052857fe5b146200059c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000081525060200191505060405180910390fd5b600060066000868152602001908152602001600020905060028160010160006101000a81548160ff02191690836002811115620005d557fe5b0217905550838160000181905550620006008382600301620006b460201b620022b11790919060201c565b600060028111156200060e57fe5b6006600086815260200190815260200160002060010160009054906101000a900460ff1660028111156200063e57fe5b141562000697576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018062002f196038913960400191505060405180910390fd5b5050505050565b620006b08282620006fd60201b60201c565b5050565b60008090505b8151811015620006f857620006ea83838381518110620006d657fe5b6020026020010151620007cc60201b60201c565b8080600101915050620006ba565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000785576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018062002ef66023913960400191505060405180910390fd5b808260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43616e6e6f74206164642030783020746f20612073686172656420726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200091157805160ff191683800117855562000942565b8280016001018555821562000942579182015b828111156200094157825182559160200191906001019062000924565b5b50905062000951919062000955565b5090565b6200097a91905b80821115620009765760008160009055506001016200095c565b5090565b90565b61252d806200098d6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a9059cbb11610071578063a9059cbb14610614578063aaa14ca31461067a578063ab3545e5146106a8578063d97c05be14610716578063dd62ed3e1461076457610121565b806370a082311461041f57806374d0a676146104775780637cdc1cb9146104c557806395d89b411461052b578063a457c2d7146105ae57610121565b8063313ce567116100f4578063313ce567146102b357806339509351146102d757806340c10f191461033d57806342966c68146103a35780636be7658b146103d157610121565b806306fdde0314610126578063095ea7b3146101a957806318160ddd1461020f57806323b872dd1461022d575b600080fd5b61012e6107dc565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561016e578082015181840152602081019050610153565b50505050905090810190601f16801561019b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f5600480360360408110156101bf57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061087e565b604051808215151515815260200191505060405180910390f35b61021761089c565b6040518082815260200191505060405180910390f35b6102996004803603606081101561024357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a6565b604051808215151515815260200191505060405180910390f35b6102bb61097f565b604051808260ff1660ff16815260200191505060405180910390f35b610323600480360360408110156102ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610996565b604051808215151515815260200191505060405180910390f35b6103896004803603604081101561035357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a49565b604051808215151515815260200191505060405180910390f35b6103cf600480360360208110156103b957600080fd5b8101908080359060200190929190505050610acc565b005b61041d600480360360408110156103e757600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b45565b005b6104616004803603602081101561043557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cd6565b6040518082815260200191505060405180910390f35b6104c36004803603604081101561048d57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d1e565b005b610511600480360360408110156104db57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610eaf565b604051808215151515815260200191505060405180910390f35b610533610fd6565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610573578082015181840152602081019050610558565b50505050905090810190601f1680156105a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105fa600480360360408110156105c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611078565b604051808215151515815260200191505060405180910390f35b6106606004803603604081101561062a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611145565b604051808215151515815260200191505060405180910390f35b6106a66004803603602081101561069057600080fd5b8101908080359060200190929190505050611163565b005b6106d4600480360360208110156106be57600080fd5b81019080803590602001909291905050506112dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107626004803603604081101561072c57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611398565b005b6107c66004803603604081101561077a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061152a565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108745780601f1061084957610100808354040283529160200191610874565b820191906000526020600020905b81548152906001019060200180831161085757829003601f168201915b5050505050905090565b600061089261088b6115b1565b84846115b9565b6001905092915050565b6000600254905090565b60006108b38484846117b0565b610974846108bf6115b1565b61096f856040518060600160405280602881526020016123fa60289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006109256115b1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a719092919063ffffffff16565b6115b9565b600190509392505050565b6000600560009054906101000a900460ff16905090565b6000610a3f6109a36115b1565b84610a3a85600160006109b46115b1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b3190919063ffffffff16565b6115b9565b6001905092915050565b600060016002811115610a5857fe5b610a628133610eaf565b610ab7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806123d86022913960400191505060405180910390fd5b610ac18484611bb9565b600191505092915050565b600280811115610ad857fe5b610ae28133610eaf565b610b37576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806123d86022913960400191505060405180910390fd5b610b413383611d80565b5050565b81600280811115610b5257fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff166002811115610b8157fe5b14610bd7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806123ac602c913960400191505060405180910390fd5b82610bf8600660008381526020019081526020016000206000015433610eaf565b610c4d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806124af6024913960400191505060405180910390fd5b610c758360066000878152602001908152602001600020600301611f4490919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af60405160405180910390a450505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b81600280811115610d2b57fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff166002811115610d5a57fe5b14610db0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806123ac602c913960400191505060405180910390fd5b82610dd1600660008381526020019081526020016000206000015433610eaf565b610e26576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806124af6024913960400191505060405180910390fd5b610e4e8360066000878152602001908152602001600020600301611fa290919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f60405160405180910390a450505050565b60008060066000858152602001908152602001600020905060016002811115610ed457fe5b8160010160009054906101000a900460ff166002811115610ef157fe5b1415610f1557610f0d83826002016120a390919063ffffffff16565b915050610fd0565b600280811115610f2157fe5b8160010160009054906101000a900460ff166002811115610f3e57fe5b1415610f6257610f5a838260030161210090919063ffffffff16565b915050610fd0565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f496e76616c696420726f6c65496400000000000000000000000000000000000081525060200191505060405180910390fd5b92915050565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561106e5780601f106110435761010080835404028352916020019161106e565b820191906000526020600020905b81548152906001019060200180831161105157829003601f168201915b5050505050905090565b600061113b6110856115b1565b84611136856040518060600160405280602581526020016124d360259139600160006110af6115b1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a719092919063ffffffff16565b6115b9565b6001905092915050565b60006111596111526115b1565b84846117b0565b6001905092915050565b8060028081111561117057fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff16600281111561119f57fe5b146111f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806123ac602c913960400191505060405180910390fd5b816112008133610eaf565b611255576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806123d86022913960400191505060405180910390fd5b61127d3360066000868152602001908152602001600020600301611f4490919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16847feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af60405160405180910390a4505050565b600081600160028111156112ed57fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff16600281111561131c57fe5b14611372576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061237d602f913960400191505060405180910390fd5b61139060066000858152602001908152602001600020600201612159565b915050919050565b81600160028111156113a657fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff1660028111156113d557fe5b1461142b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061237d602f913960400191505060405180910390fd5b8261144c600660008381526020019081526020016000206000015433610eaf565b6114a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806124af6024913960400191505060405180910390fd5b6114c9836006600087815260200190815260200160002060020161218790919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e74660405160405180910390a450505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561163f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061248b6024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806123356022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611836576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806124666025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806122f06023913960400191505060405180910390fd5b6118c7838383612254565b61193281604051806060016040528060268152602001612357602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a719092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506119c5816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b3190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611b1e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ae3578082015181840152602081019050611ac8565b50505050905090810190601f168015611b105780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015611baf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611c6860008383612254565b611c7d81600254611b3190919063ffffffff16565b600281905550611cd4816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b3190919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806124226021913960400191505060405180910390fd5b611e1282600083612254565b611e7d81604051806060016040528060228152602001612313602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a719092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611ed48160025461225990919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612045576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43616e6e6f74206164642030783020746f20612073686172656420726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008173ffffffffffffffffffffffffffffffffffffffff168360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905092915050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561220d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806124436023913960400191505060405180910390fd5b808260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b505050565b600061229b83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611a71565b905092915050565b6122ad8282612187565b5050565b60008090505b81518110156122ea576122dd838383815181106122d057fe5b6020026020010151611fa2565b80806001019150506122b7565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654d7573742062652063616c6c6564206f6e20616e20696e697469616c697a6564204578636c757369766520726f6c654d7573742062652063616c6c6564206f6e20616e20696e697469616c697a65642053686172656420726f6c6553656e64657220646f6573206e6f7420686f6c6420726571756972656420726f6c6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737343616e6e6f742073657420616e206578636c757369766520726f6c6520746f2030783045524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737343616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e6167657245524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122069806fa61e62a135cb770ae0a210f9dd91566ebada8bfb951e95eec5edefce1e64736f6c63430006020033417474656d7074656420746f2075736520616e20696e76616c696420726f6c6520746f206d616e61676520616e206578636c757369766520726f6c6543616e6e6f742073657420616e206578636c757369766520726f6c6520746f20307830417474656d7074656420746f2075736520616e20696e76616c696420726f6c6520746f206d616e61676520612073686172656420726f6c65"
