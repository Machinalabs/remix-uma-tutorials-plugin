import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TokenFactory } from "./TokenFactoryContractInterface";

export class TokenFactoryInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TokenFactory> {
    return super.deploy(overrides || {}) as Promise<TokenFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenFactory {
    return super.attach(address) as TokenFactory;
  }
  connect(signer: Signer): TokenFactoryInstanceCreator {
    return super.connect(signer) as TokenFactoryInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenFactory {
    return new Contract(address, _abi, signerOrProvider) as TokenFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "tokenDecimals",
        type: "uint8",
      },
    ],
    name: "createToken",
    outputs: [
      {
        internalType: "contract ExpandedIERC20",
        name: "newToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016000806101000a81548160ff0219169083151502179055506139d08061002d6000396000f3fe60806040523480156200001157600080fd5b50600436106200002e5760003560e01c8063e8a0aed31462000033575b600080fd5b62000115600480360360608110156200004b57600080fd5b81019080803590602001906401000000008111156200006957600080fd5b8201836020820111156200007c57600080fd5b803590602001918460018302840111640100000000831117156200009f57600080fd5b909192939192939080359060200190640100000000811115620000c157600080fd5b820183602082011115620000d457600080fd5b80359060200191846001830284011164010000000083111715620000f757600080fd5b9091929391929390803560ff16906020019092919050505062000157565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600062000163620003f8565b6200016d6200047c565b600086868686866040516200018290620004b4565b8080602001806020018460ff1660ff1681526020018381038352888882818152602001925080828437600081840152601f19601f8201169050808301925050508381038252868682818152602001925080828437600081840152601f19601f820116905080830192505050975050505050505050604051809103906000f08015801562000213573d6000803e3d6000fd5b5090508073ffffffffffffffffffffffffffffffffffffffff1663983b2d56336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156200029657600080fd5b505af1158015620002ab573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff1663f44637ba336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156200032f57600080fd5b505af115801562000344573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff166373cc802a336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b158015620003c857600080fd5b505af1158015620003dd573d6000803e3d6000fd5b5050505080915050620003ef62000498565b95945050505050565b6000809054906101000a900460ff166200047a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b565b60008060006101000a81548160ff021916908315150217905550565b60016000806101000a81548160ff021916908315150217905550565b6134d880620004c38339019056fe60806040523480156200001157600080fd5b50604051620034d8380380620034d8833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919050505082828282828160039080519060200190620001df929190620009de565b508060049080519060200190620001f8929190620009de565b506012600560006101000a81548160ff021916908360ff160217905550505062000228816200036760201b60201c565b62000255600060028111156200023a57fe5b600060028111156200024857fe5b336200038560201b60201c565b620002b3600160028111156200026757fe5b600060028111156200027557fe5b6000604051908082528060200260200182016040528015620002a65781602001602082028038833980820191505090505b506200053a60201b60201c565b62000310600280811115620002c457fe5b60006002811115620002d257fe5b6000604051908082528060200260200182016040528015620003035781602001602082028038833980820191505090505b506200053a60201b60201c565b5050506001600760006101000a81548160ff0219169083151502179055506200033e620006ef60201b60201c565b6200034e6200077460201b60201c565b6200035e6200079160201b60201c565b50505062000a8d565b80600560006101000a81548160ff021916908360ff16021790555050565b82600060028111156200039457fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff166002811115620003c457fe5b1462000438576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000081525060200191505060405180910390fd5b600060066000868152602001908152602001600020905060018160010160006101000a81548160ff021916908360028111156200047157fe5b02179055508381600001819055506200049c8382600201620007ae60201b6200271a1790919060201c565b60006002811115620004aa57fe5b6006600086815260200190815260200160002060010160009054906101000a900460ff166002811115620004da57fe5b141562000533576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c81526020018062003441603c913960400191505060405180910390fd5b5050505050565b82600060028111156200054957fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff1660028111156200057957fe5b14620005ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f43616e6e6f74207573652061207072652d6578697374696e6720726f6c65000081525060200191505060405180910390fd5b600060066000868152602001908152602001600020905060028160010160006101000a81548160ff021916908360028111156200062657fe5b0217905550838160000181905550620006518382600301620007c460201b620027281790919060201c565b600060028111156200065f57fe5b6006600086815260200190815260200160002060010160009054906101000a900460ff1660028111156200068f57fe5b1415620006e8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180620034a06038913960400191505060405180910390fd5b5050505050565b600760009054906101000a900460ff1662000772576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b565b6000600760006101000a81548160ff021916908315150217905550565b6001600760006101000a81548160ff021916908315150217905550565b620007c082826200080d60201b60201c565b5050565b60008090505b81518110156200080857620007fa83838381518110620007e657fe5b6020026020010151620008dc60201b60201c565b8080600101915050620007ca565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000895576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806200347d6023913960400191505060405180910390fd5b808260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000980576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43616e6e6f74206164642030783020746f20612073686172656420726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1062000a2157805160ff191683800117855562000a52565b8280016001018555821562000a52579182015b8281111562000a5157825182559160200191906001019062000a34565b5b50905062000a61919062000a65565b5090565b62000a8a91905b8082111562000a8657600081600090555060010162000a6c565b5090565b90565b6129a48062000a9d6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806373cc802a116100de578063a9059cbb11610097578063ab3545e511610071578063ab3545e5146108dd578063d97c05be1461094b578063dd62ed3e14610999578063f44637ba14610a115761018e565b8063a9059cbb146107ed578063aa271e1a14610853578063aaa14ca3146108af5761018e565b806373cc802a146105c857806374d0a6761461060c5780637cdc1cb91461065a57806395d89b41146106c0578063983b2d5614610743578063a457c2d7146107875761018e565b8063313ce5671161014b57806342966c681161012557806342966c68146104985780634334614a146104c65780636be7658b1461052257806370a08231146105705761018e565b8063313ce567146103a857806339509351146103cc57806340c10f19146104325761018e565b8063028468581461019357806306fdde03146101d7578063095ea7b31461025a57806318160ddd146102c057806323b872dd146102de5780633092afd514610364575b600080fd5b6101d5600480360360208110156101a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a55565b005b6101df610a85565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561021f578082015181840152602081019050610204565b50505050905090810190601f16801561024c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102a66004803603604081101561027057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b27565b604051808215151515815260200191505060405180910390f35b6102c8610b45565b6040518082815260200191505060405180910390f35b61034a600480360360608110156102f457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b4f565b604051808215151515815260200191505060405180910390f35b6103a66004803603602081101561037a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c28565b005b6103b0610c59565b604051808260ff1660ff16815260200191505060405180910390f35b610418600480360360408110156103e257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c70565b604051808215151515815260200191505060405180910390f35b61047e6004803603604081101561044857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d23565b604051808215151515815260200191505060405180910390f35b6104c4600480360360208110156104ae57600080fd5b8101908080359060200190929190505050610da6565b005b610508600480360360208110156104dc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e1f565b604051808215151515815260200191505060405180910390f35b61056e6004803603604081101561053857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e45565b005b6105b26004803603602081101561058657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fd6565b6040518082815260200191505060405180910390f35b61060a600480360360208110156105de57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061101e565b005b6106586004803603604081101561062257600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061104f565b005b6106a66004803603604081101561067057600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506111e0565b604051808215151515815260200191505060405180910390f35b6106c8611307565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107085780820151818401526020810190506106ed565b50505050905090810190601f1680156107355780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107856004803603602081101561075957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113a9565b005b6107d36004803603604081101561079d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506113da565b604051808215151515815260200191505060405180910390f35b6108396004803603604081101561080357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114a7565b604051808215151515815260200191505060405180910390f35b6108956004803603602081101561086957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114c5565b604051808215151515815260200191505060405180910390f35b6108db600480360360208110156108c557600080fd5b81019080803590602001909291905050506114ec565b005b610909600480360360208110156108f357600080fd5b8101908080359060200190929190505050611666565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6109976004803603604081101561096157600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611721565b005b6109fb600480360360408110156109af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506118b3565b6040518082815260200191505060405180910390f35b610a5360048036036020811015610a2757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061193a565b005b610a5d61196a565b610a656119ee565b610a7a600280811115610a7457fe5b82610e45565b610a82611a0b565b50565b606060038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b1d5780601f10610af257610100808354040283529160200191610b1d565b820191906000526020600020905b815481529060010190602001808311610b0057829003601f168201915b5050505050905090565b6000610b3b610b34611a28565b8484611a30565b6001905092915050565b6000600254905090565b6000610b5c848484611c27565b610c1d84610b68611a28565b610c188560405180606001604052806028815260200161287160289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610bce611a28565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ee89092919063ffffffff16565b611a30565b600190509392505050565b610c3061196a565b610c386119ee565b610c4e60016002811115610c4857fe5b82610e45565b610c56611a0b565b50565b6000600560009054906101000a900460ff16905090565b6000610d19610c7d611a28565b84610d148560016000610c8e611a28565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611fa890919063ffffffff16565b611a30565b6001905092915050565b600060016002811115610d3257fe5b610d3c81336111e0565b610d91576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061284f6022913960400191505060405180910390fd5b610d9b8484612030565b600191505092915050565b600280811115610db257fe5b610dbc81336111e0565b610e11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061284f6022913960400191505060405180910390fd5b610e1b33836121f7565b5050565b6000610e2961196a565b610e3e600280811115610e3857fe5b836111e0565b9050919050565b81600280811115610e5257fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff166002811115610e8157fe5b14610ed7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612823602c913960400191505060405180910390fd5b82610ef86006600083815260200190815260200160002060000154336111e0565b610f4d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806129266024913960400191505060405180910390fd5b610f7583600660008781526020019081526020016000206003016123bb90919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af60405160405180910390a450505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61102661196a565b61102e6119ee565b6110446000600281111561103e57fe5b82611721565b61104c611a0b565b50565b8160028081111561105c57fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff16600281111561108b57fe5b146110e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612823602c913960400191505060405180910390fd5b826111026006600083815260200190815260200160002060000154336111e0565b611157576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806129266024913960400191505060405180910390fd5b61117f836006600087815260200190815260200160002060030161241990919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f63502af7324ff6db91ab38f8236a648727d9385ea6c782073dd4882d8a61a48f60405160405180910390a450505050565b6000806006600085815260200190815260200160002090506001600281111561120557fe5b8160010160009054906101000a900460ff16600281111561122257fe5b14156112465761123e838260020161251a90919063ffffffff16565b915050611301565b60028081111561125257fe5b8160010160009054906101000a900460ff16600281111561126f57fe5b14156112935761128b838260030161257790919063ffffffff16565b915050611301565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f496e76616c696420726f6c65496400000000000000000000000000000000000081525060200191505060405180910390fd5b92915050565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561139f5780601f106113745761010080835404028352916020019161139f565b820191906000526020600020905b81548152906001019060200180831161138257829003601f168201915b5050505050905090565b6113b161196a565b6113b96119ee565b6113cf600160028111156113c957fe5b8261104f565b6113d7611a0b565b50565b600061149d6113e7611a28565b846114988560405180606001604052806025815260200161294a6025913960016000611411611a28565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ee89092919063ffffffff16565b611a30565b6001905092915050565b60006114bb6114b4611a28565b8484611c27565b6001905092915050565b60006114cf61196a565b6114e5600160028111156114df57fe5b836111e0565b9050919050565b806002808111156114f957fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff16600281111561152857fe5b1461157e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612823602c913960400191505060405180910390fd5b8161158981336111e0565b6115de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061284f6022913960400191505060405180910390fd5b61160633600660008681526020019081526020016000206003016123bb90919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16847feb3e33034c392e69263b04ec0fa376dc12784a41b6676c7f31b936cbc0fbb5af60405160405180910390a4505050565b6000816001600281111561167657fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff1660028111156116a557fe5b146116fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806127f4602f913960400191505060405180910390fd5b611719600660008581526020019081526020016000206002016125d0565b915050919050565b816001600281111561172f57fe5b6006600083815260200190815260200160002060010160009054906101000a900460ff16600281111561175e57fe5b146117b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806127f4602f913960400191505060405180910390fd5b826117d56006600083815260200190815260200160002060000154336111e0565b61182a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806129266024913960400191505060405180910390fd5b61185283600660008781526020019081526020016000206002016125fe90919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f3b855c56b409b671c7112789d022675eb639d0bcb8896f1b6197c132f799e74660405160405180910390a450505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61194261196a565b61194a6119ee565b61195f60028081111561195957fe5b8261104f565b611967611a0b565b50565b600760009054906101000a900460ff166119ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b565b6000600760006101000a81548160ff021916908315150217905550565b6001600760006101000a81548160ff021916908315150217905550565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611ab6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806129026024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b3c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806127ac6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611cad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806128dd6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d33576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806127676023913960400191505060405180910390fd5b611d3e8383836126cb565b611da9816040518060600160405280602681526020016127ce602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ee89092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611e3c816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611fa890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611f95576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f5a578082015181840152602081019050611f3f565b50505050905090810190601f168015611f875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015612026576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156120d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6120df600083836126cb565b6120f481600254611fa890919063ffffffff16565b60028190555061214b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611fa890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561227d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806128996021913960400191505060405180910390fd5b612289826000836126cb565b6122f48160405180606001604052806022815260200161278a602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611ee89092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061234b816002546126d090919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156124bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f43616e6e6f74206164642030783020746f20612073686172656420726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008173ffffffffffffffffffffffffffffffffffffffff168360000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614905092915050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415612684576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806128ba6023913960400191505060405180910390fd5b808260000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b505050565b600061271283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611ee8565b905092915050565b61272482826125fe565b5050565b60008090505b8151811015612761576127548383838151811061274757fe5b6020026020010151612419565b808060010191505061272e565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654d7573742062652063616c6c6564206f6e20616e20696e697469616c697a6564204578636c757369766520726f6c654d7573742062652063616c6c6564206f6e20616e20696e697469616c697a65642053686172656420726f6c6553656e64657220646f6573206e6f7420686f6c6420726571756972656420726f6c6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737343616e6e6f742073657420616e206578636c757369766520726f6c6520746f2030783045524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737343616e206f6e6c792062652063616c6c6564206279206120726f6c65206d616e6167657245524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212207b62a98c476e2e9e93858dce762b09dbe7d1595c9e45415e1d212843c1ca385364736f6c63430006020033417474656d7074656420746f2075736520616e20696e76616c696420726f6c6520746f206d616e61676520616e206578636c757369766520726f6c6543616e6e6f742073657420616e206578636c757369766520726f6c6520746f20307830417474656d7074656420746f2075736520616e20696e76616c696420726f6c6520746f206d616e61676520612073686172656420726f6c65a26469706673582212202bb557aa6cd466638e54144fd91769720c555d58eaf8ec1ed7b2bf687945ca6464736f6c63430006020033";