import { Signer, BytesLike, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { PricelessPositionManager } from "./PricelessPositionManagerContractInterface";

export class PricelessPositionManagerInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _expirationTimestamp: BigNumberish,
    _withdrawalLiveness: BigNumberish,
    _collateralAddress: string,
    _finderAddress: string,
    _priceIdentifier: BytesLike,
    _syntheticName: string,
    _syntheticSymbol: string,
    _tokenFactoryAddress: string,
    _minSponsorTokens: { rawValue: BigNumberish },
    _timerAddress: string,
    overrides?: Overrides
  ): Promise<PricelessPositionManager> {
    return super.deploy(
      _expirationTimestamp,
      _withdrawalLiveness,
      _collateralAddress,
      _finderAddress,
      _priceIdentifier,
      _syntheticName,
      _syntheticSymbol,
      _tokenFactoryAddress,
      _minSponsorTokens,
      _timerAddress,
      overrides || {}
    ) as Promise<PricelessPositionManager>;
  }
  getDeployTransaction(
    _expirationTimestamp: BigNumberish,
    _withdrawalLiveness: BigNumberish,
    _collateralAddress: string,
    _finderAddress: string,
    _priceIdentifier: BytesLike,
    _syntheticName: string,
    _syntheticSymbol: string,
    _tokenFactoryAddress: string,
    _minSponsorTokens: { rawValue: BigNumberish },
    _timerAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _expirationTimestamp,
      _withdrawalLiveness,
      _collateralAddress,
      _finderAddress,
      _priceIdentifier,
      _syntheticName,
      _syntheticSymbol,
      _tokenFactoryAddress,
      _minSponsorTokens,
      _timerAddress,
      overrides || {}
    );
  }
  attach(address: string): PricelessPositionManager {
    return super.attach(address) as PricelessPositionManager;
  }
  connect(signer: Signer): PricelessPositionManagerInstanceCreator {
    return super.connect(signer) as PricelessPositionManagerInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PricelessPositionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PricelessPositionManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_expirationTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_withdrawalLiveness",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_collateralAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_finderAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_priceIdentifier",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_syntheticName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_syntheticSymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_tokenFactoryAddress",
        type: "address",
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
        name: "_minSponsorTokens",
        type: "tuple",
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
        name: "caller",
        type: "address",
      },
    ],
    name: "ContractExpired",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "originalExpirationTimestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shutdownTimestamp",
        type: "uint256",
      },
    ],
    name: "EmergencyShutdown",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
    ],
    name: "EndedSponsorPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FinalFeesPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
    ],
    name: "NewSponsor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "PositionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "regularFee",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "lateFee",
        type: "uint256",
      },
    ],
    name: "RegularFeesPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldSponsor",
        type: "address",
      },
    ],
    name: "RequestTransferPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldSponsor",
        type: "address",
      },
    ],
    name: "RequestTransferPositionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldSponsor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newSponsor",
        type: "address",
      },
    ],
    name: "RequestTransferPositionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "RequestWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "RequestWithdrawalCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "RequestWithdrawalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collateralReturned",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokensBurned",
        type: "uint256",
      },
    ],
    name: "SettleExpiredPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "collateralAmount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "cancelTransferPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "collateralCurrency",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractState",
    outputs: [
      {
        internalType: "enum PricelessPositionManager.ContractState",
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
        components: [
          {
            internalType: "uint256",
            name: "rawValue",
            type: "uint256",
          },
        ],
        internalType: "struct FixedPoint.Unsigned",
        name: "collateralAmount",
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
        name: "numTokens",
        type: "tuple",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cumulativeFeeMultiplier",
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
        name: "collateralAmount",
        type: "tuple",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sponsor",
        type: "address",
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
        name: "collateralAmount",
        type: "tuple",
      },
    ],
    name: "depositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyShutdown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "expirationTimestamp",
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
    name: "expire",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "expiryPrice",
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
    name: "finder",
    outputs: [
      {
        internalType: "contract FinderInterface",
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
        name: "sponsor",
        type: "address",
      },
    ],
    name: "getCollateral",
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
        name: "collateralAmount",
        type: "tuple",
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
    name: "minSponsorTokens",
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
    name: "payRegularFees",
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
        name: "totalPaid",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pfc",
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
    stateMutability: "view",
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
    name: "positions",
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
        name: "tokensOutstanding",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "withdrawalRequestPassTimestamp",
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
        name: "withdrawalRequestAmount",
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
        name: "rawCollateral",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "transferPositionRequestPassTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceIdentifier",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rawTotalPositionCollateral",
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
        name: "numTokens",
        type: "tuple",
      },
    ],
    name: "redeem",
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
        name: "amountWithdrawn",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "remargin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "requestTransferPosition",
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
        name: "collateralAmount",
        type: "tuple",
      },
    ],
    name: "requestWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "settleExpired",
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
        name: "amountWithdrawn",
        type: "tuple",
      },
    ],
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
    inputs: [],
    name: "tokenCurrency",
    outputs: [
      {
        internalType: "contract ExpandedIERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPositionCollateral",
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
        name: "totalCollateral",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokensOutstanding",
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
    inputs: [
      {
        internalType: "address",
        name: "newSponsorAddress",
        type: "address",
      },
    ],
    name: "transferPositionPassedRequest",
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
        name: "collateralAmount",
        type: "tuple",
      },
    ],
    name: "withdraw",
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
        name: "amountWithdrawn",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawPassedRequest",
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
        name: "amountWithdrawn",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalLiveness",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162006684380380620066848339818101604052620000379190810190620008f1565b87878280806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506001600060146101000a81548160ff021916908315150217905550620000a7620003fd60201b60201c565b620000b76200045160201b60201c565b82600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001496200046d60201b60201c565b6003819055506200016660016200057660201b6200330f1760201c565b60046000820151816000015590505062000185620005b760201b60201c565b50505062000198620003fd60201b60201c565b620001a86200045160201b60201c565b620001b86200046d60201b60201c565b8a11620001fc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001f39062000c0c565b60405180910390fd5b6200020c620005d460201b60201c565b73ffffffffffffffffffffffffffffffffffffffff166390978d1b876040518263ffffffff1660e01b815260040162000246919062000ba4565b60206040518083038186803b1580156200025f57600080fd5b505afa15801562000274573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506200029a91908101906200086d565b620002dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002d39062000c50565b60405180910390fd5b89600b8190555088600c8190555060008390508073ffffffffffffffffffffffffffffffffffffffff1663e8a0aed3878760126040518463ffffffff1660e01b81526004016200032f9392919062000bc1565b602060405180830381600087803b1580156200034a57600080fd5b505af11580156200035f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525062000385919081019062000899565b600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600d6000820151816000015590505086600a8190555050620003ed620005b760201b60201c565b5050505050505050505062000e5d565b600060149054906101000a900460ff166200044f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004469062000c72565b60405180910390fd5b565b60008060146101000a81548160ff021916908315150217905550565b60008073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146200056f576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200052c57600080fd5b505afa15801562000541573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250620005679190810190620008c5565b905062000573565b4290505b90565b6200058062000722565b6040518060200160405280620005ad670de0b6b3a764000085620006ac60201b620040761790919060201c565b8152509050919050565b6001600060146101000a81548160ff021916908315150217905550565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f4964656e74696669657257686974656c697374000000000000000000000000006040518263ffffffff1660e01b815260040162000653919062000ba4565b60206040518083038186803b1580156200066c57600080fd5b505afa15801562000681573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250620006a7919081019062000841565b905090565b600080831415620006c157600090506200071c565b6000828402905082848281620006d357fe5b041462000717576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200070e9062000c2e565b60405180910390fd5b809150505b92915050565b6040518060200160405280600081525090565b600081519050620007468162000ddb565b92915050565b6000815190506200075d8162000df5565b92915050565b600081519050620007748162000e0f565b92915050565b6000815190506200078b8162000e29565b92915050565b600082601f830112620007a357600080fd5b8151620007ba620007b48262000cc2565b62000c94565b91508082526020830160208301858383011115620007d757600080fd5b620007e483828462000d94565b50505092915050565b6000602082840312156200080057600080fd5b6200080c602062000c94565b905060006200081e848285016200082a565b60008301525092915050565b6000815190506200083b8162000e43565b92915050565b6000602082840312156200085457600080fd5b6000620008648482850162000735565b91505092915050565b6000602082840312156200088057600080fd5b600062000890848285016200074c565b91505092915050565b600060208284031215620008ac57600080fd5b6000620008bc848285016200077a565b91505092915050565b600060208284031215620008d857600080fd5b6000620008e8848285016200082a565b91505092915050565b6000806000806000806000806000806101408b8d0312156200091257600080fd5b6000620009228d828e016200082a565b9a50506020620009358d828e016200082a565b9950506040620009488d828e0162000735565b98505060606200095b8d828e0162000735565b97505060806200096e8d828e0162000763565b96505060a08b015167ffffffffffffffff8111156200098c57600080fd5b6200099a8d828e0162000791565b95505060c08b015167ffffffffffffffff811115620009b857600080fd5b620009c68d828e0162000791565b94505060e0620009d98d828e0162000735565b935050610100620009ed8d828e01620007ed565b92505061012062000a018d828e0162000735565b9150509295989b9194979a5092959850565b62000a1e8162000d2b565b82525050565b62000a2f8162000d80565b82525050565b600062000a428262000cef565b62000a4e818562000cfa565b935062000a6081856020860162000d94565b62000a6b8162000dca565b840191505092915050565b600062000a85601c8362000cfa565b91507f496e76616c69642065787069726174696f6e20696e20667574757265000000006000830152602082019050919050565b600062000ac760218362000cfa565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600062000b2f601c8362000cfa565b91507f556e737570706f72746564207072696365206964656e746966696572000000006000830152602082019050919050565b600062000b71601f8362000cfa565b91507f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006000830152602082019050919050565b600060208201905062000bbb600083018462000a13565b92915050565b6000606082019050818103600083015262000bdd818662000a35565b9050818103602083015262000bf3818562000a35565b905062000c04604083018462000a24565b949350505050565b6000602082019050818103600083015262000c278162000a76565b9050919050565b6000602082019050818103600083015262000c498162000ab8565b9050919050565b6000602082019050818103600083015262000c6b8162000b20565b9050919050565b6000602082019050818103600083015262000c8d8162000b62565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171562000cb857600080fd5b8060405250919050565b600067ffffffffffffffff82111562000cda57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600062000d188262000d49565b9050919050565b60008115159050919050565b6000819050919050565b600062000d428262000d0b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600062000d8d8262000d73565b9050919050565b60005b8381101562000db457808201518184015260208101905062000d97565b8381111562000dc4576000848401525b50505050565b6000601f19601f8301169050919050565b62000de68162000d0b565b811462000df257600080fd5b50565b62000e008162000d1f565b811462000e0c57600080fd5b50565b62000e1a8162000d2b565b811462000e2657600080fd5b50565b62000e348162000d35565b811462000e4057600080fd5b50565b62000e4e8162000d69565b811462000e5a57600080fd5b50565b6158178062000e6d6000396000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c80637048594b116101255780639ff4dea8116100ad578063bda02e771161007c578063bda02e7714610578578063d1e92c1114610582578063dd0eef3d1461059e578063edfa9a9b146105bc578063fcccedc7146105da57610211565b80639ff4dea814610516578063b795f0d414610534578063b9a3c84c1461053e578063bc1216301461055c57610211565b80638c382eb2116100f45780638c382eb21461046e57806392120aec1461048c57806397523661146104aa5780639b56d6c9146104c85780639f43ddd2146104f857610211565b80637048594b1461040a57806379599f961461042857806381a10ae11461043257806385209ee01461045057610211565b80633403c2fc116101a857806343e4771b1161017757806343e4771b1461035057806355f575101461036e5780635617151c146103a25780635f1af1ca146103be5780636ba2f992146103ee57610211565b80633403c2fc146102ee57806336980f58146102f85780633cb6ce83146103025780633ee7a5ce1461032057610211565b806322611280116101e4578063226112801461028c57806322f8e5661461029657806329cb924d146102b257806333a46ca2146102d057610211565b80630c9229ca146102165780630de15fd91461023457806318928a0c146102525780631c39c38d1461026e575b600080fd5b61021e6105f8565b60405161022b9190615537565b60405180910390f35b61023c610604565b6040516102499190615131565b60405180910390f35b61026c600480360361026791908101906145f0565b61062a565b005b610276610769565b6040516102839190614fa6565b60405180910390f35b61029461078e565b005b6102b060048036036102ab9190810190614748565b61085a565b005b6102ba610944565b6040516102c79190615537565b60405180910390f35b6102d8610a47565b6040516102e591906154c9565b60405180910390f35b6102f6610c2e565b005b610300610d64565b005b61030a610e8c565b60405161031791906154c9565b60405180910390f35b61033a6004803603610335919081019061467e565b61123b565b60405161034791906154c9565b60405180910390f35b610358611382565b60405161036591906154c9565b60405180910390f35b6103886004803603610383919081019061459e565b6113b6565b6040516103999594939291906154e4565b60405180910390f35b6103bc60048036036103b7919081019061459e565b611428565b005b6103d860048036036103d3919081019061467e565b611778565b6040516103e591906154c9565b60405180910390f35b610408600480360361040391908101906146d0565b611b5d565b005b610412611f4c565b60405161041f91906150fb565b60405180910390f35b610430611f72565b005b61043a612028565b60405161044791906154c9565b60405180910390f35b610458612045565b604051610465919061514c565b60405180910390f35b610476612058565b6040516104839190615537565b60405180910390f35b610494612064565b6040516104a19190615537565b60405180910390f35b6104b2612070565b6040516104bf91906150b7565b60405180910390f35b6104e260048036036104dd919081019061459e565b612076565b6040516104ef91906154c9565b60405180910390f35b6105006120ec565b60405161050d9190615537565b60405180910390f35b61051e6120f2565b60405161052b9190615537565b60405180910390f35b61053c6120f8565b005b6105466121bd565b6040516105539190615116565b60405180910390f35b6105766004803603610571919081019061467e565b6121e3565b005b610580612375565b005b61059c6004803603610597919081019061467e565b612397565b005b6105a66123a4565b6040516105b39190615537565b60405180910390f35b6105c46123b0565b6040516105d19190615537565b60405180910390f35b6105e26123bc565b6040516105ef91906154c9565b60405180910390f35b60078060000154905081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6106326129ce565b8161063c81612a1b565b610644610e8c565b5061064d612a6d565b610655612abe565b610669600083612ada90919063ffffffff16565b6106a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069f90615249565b60405180910390fd5b60006106b384612af7565b90506106bf8184612b4a565b5082600001518473ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60405160405180910390a361075b33308560000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612b73909392919063ffffffff16565b50610764612bfc565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6107966129ce565b61079e612a6d565b6107a6612abe565b60006107b133612af7565b90506000816001015414156107fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f2906154a9565b60405180910390fd5b80600201600001543373ffffffffffffffffffffffffffffffffffffffff167f74d8a3658feb89d1a5c335229bbbfc3bbcfaf492769feb7aa4cd2d92efeaf69160405160405180910390a361084f81612c19565b50610858612bfc565b565b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156108b557600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322f8e566826040518263ffffffff1660e01b815260040161090f9190615537565b600060405180830381600087803b15801561092957600080fd5b505af115801561093d573d6000803e3d6000fd5b5050505050565b60008073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a40576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a0157600080fd5b505afa158015610a15573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610a399190810190614771565b9050610a44565b4290505b90565b610a4f61449d565b610a576129ce565b610a5f610e8c565b50610a68612a6d565b610a70612abe565b6000610a7b33612af7565b90506000816001015414158015610a9d5750610a95610944565b816001015411155b610adc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad3906152c9565b60405180910390fd5b610ae461449d565b816002016040518060200160405290816000820154815250509050610b4a610b2383600301604051806020016040529081600082015481525050612c41565b83600201604051806020016040529081600082015481525050612c7990919063ffffffff16565b15610b7357610b7082600301604051806020016040529081600082015481525050612c41565b90505b610b7d8282612c8e565b9250610b8882612c19565b610bd9338460000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612cb79092919063ffffffff16565b82600001513373ffffffffffffffffffffffffffffffffffffffff167fc86c3298cb79f486674dca87d9247e88b76146160e7d412cc59b26b14c358a6860405160405180910390a35050610c2b612bfc565b90565b610c366129ce565b610c3e612d3d565b610c46612a6d565b610c4e612abe565b610c56612da7565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cba90615309565b60405180910390fd5b6001600560006101000a81548160ff02191690836002811115610ce257fe5b02179055506000600b549050610cf6610944565b600b81905550610d07600b54612e79565b3373ffffffffffffffffffffffffffffffffffffffff167fd39eeb7157d9c446579a0893ecf9ecd87d1f466cdb270c6a189cf38ca1e30f4882600b54604051610d51929190615552565b60405180910390a250610d62612bfc565b565b610d6c6129ce565b610d74612a6d565b610d7c612abe565b6000610d8733612af7565b90506000816004015414610dd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc790615469565b60405180910390fd5b6000610dee600c54610de0610944565b612ef890919063ffffffff16565b9050600b548110610e34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2b906153e9565b60405180910390fd5b8082600401819055503373ffffffffffffffffffffffffffffffffffffffff167fbf457c80c8bf299d5c48272c4c1168bf87b33d83b13f0ab9aac332ce1161ed1e60405160405180910390a25050610e8a612bfc565b565b610e9461449d565b610e9c612a6d565b610ea4612abe565b6000610eae612f4d565b90506000610eba610944565b9050610ec461449d565b610ecc61301f565b9050610ee260008261304b90919063ffffffff16565b15610ef257839350505050611230565b816003541415610f0757839350505050611230565b610f0f61449d565b610f1761449d565b8473ffffffffffffffffffffffffffffffffffffffff166374201feb60035486866040518463ffffffff1660e01b8152600401610f569392919061557b565b604080518083038186803b158015610f6d57600080fd5b505afa158015610f81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610fa5919081019061470c565b9150915083600381905550610fc3818361306890919063ffffffff16565b9550610fd960008761304b90919063ffffffff16565b15610feb578595505050505050611230565b610ffe8387612c7990919063ffffffff16565b156110825761100b61449d565b61101e84886130a190919063ffffffff16565b905061102861449d565b61103283836130da565b905061104781846130a190919063ffffffff16565b925061105c81836130a190919063ffffffff16565b915061107a61106b85846130da565b856130a190919063ffffffff16565b935084975050505b806000015182600001517f19b92e73d08d517d71ec46136266e4f5d526a8cd4f8501d73713cebfe4f335ef60405160405180910390a36110c28684613101565b6110d6600083612ada90919063ffffffff16565b156111bc5761112c858360000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166131769092919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff16638659d232600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b8152600401611189929190615065565b600060405180830381600087803b1580156111a357600080fd5b505af11580156111b7573d6000803e3d6000fd5b505050505b6111d0600082612ada90919063ffffffff16565b1561122757611226338260000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612cb79092919063ffffffff16565b5b85955050505050505b611238612bfc565b90565b61124361449d565b61124b6129ce565b3361125581612a1b565b61125d610e8c565b50611266612a6d565b61126e612abe565b600061127933612af7565b905061128f600085612ada90919063ffffffff16565b6112ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c590615249565b60405180910390fd5b6112d8818561329e565b925082600001513373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6560405160405180910390a3611373338460000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612cb79092919063ffffffff16565b5061137c612bfc565b50919050565b61138a61449d565b611392612a6d565b6113b16008604051806020016040529081600082015481525050612c41565b905090565b60066020528060005260406000206000915090508060000160405180602001604052908160008201548152505090806001015490806002016040518060200160405290816000820154815250509080600301604051806020016040529081600082015481525050908060040154905085565b6114306129ce565b3361143a81612a1b565b611442612a6d565b61144a612abe565b6114c4611457600061330f565b6114b6600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301604051806020016040529081600082015481525050612c41565b61334790919063ffffffff16565b611503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114fa90615389565b60405180910390fd5b600061150e33612af7565b905060008160040154141580156115305750611528610944565b816004015411155b61156f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611566906152e9565b60405180910390fd5b6000816004018190555080600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820181600001600082015481600001555050600182015481600101556002820181600201600082015481600001555050600382018160030160008201548160000155505060048201548160040155905050600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160008082016000905550506001820160009055600282016000808201600090555050600382016000808201600090555050600482016000905550508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167ff1a2dcf23621f1a96185c79d39a5776b5ba3dadbea70c5aa86d84c17c7e9418e60405160405180910390a38273ffffffffffffffffffffffffffffffffffffffff167ff60993fa76f94c9e0a803526ee6e1314814ed4d2b0d223febf1436b36897fb3760405160405180910390a23373ffffffffffffffffffffffffffffffffffffffff167fcad20625296d189a6fc6e5b39d0d544e5bd99dbda0c8f2f0ecffef3e0fbcc28260405160405180910390a250611774612bfc565b5050565b61178061449d565b6117886129ce565b3361179281612a1b565b61179a610e8c565b506117a3612a6d565b6117ab612abe565b60006117b633612af7565b90506117e38160000160405180602001604052908160008201548152505085612c7990919063ffffffff16565b15611823576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161181a906151c9565b60405180910390fd5b61182b61449d565b611856826000016040518060200160405290816000820154815250508661335c90919063ffffffff16565b905061186061449d565b61189361188484600301604051806020016040529081600082015481525050612c41565b836133af90919063ffffffff16565b90506118c0868460000160405180602001604052908160008201548152505061334790919063ffffffff16565b156118d5576118ce336133f9565b94506119ca565b6118df8382612c8e565b94506118e961449d565b61191487856000016040518060200160405290816000820154815250506130a190919063ffffffff16565b905061193f600d604051806020016040529081600082015481525050826135df90919063ffffffff16565b61197e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161197590615229565b60405180910390fd5b8084600001600082015181600001559050506119b98760076040518060200160405290816000820154815250506130a190919063ffffffff16565b600760008201518160000155905050505b856000015185600001513373ffffffffffffffffffffffffffffffffffffffff167fe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a92960405160405180910390a4611a68338660000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612cb79092919063ffffffff16565b611abb33308860000151600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612b73909392919063ffffffff16565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c6887600001516040518263ffffffff1660e01b8152600401611b1a9190615537565b600060405180830381600087803b158015611b3457600080fd5b505af1158015611b48573d6000803e3d6000fd5b50505050505050611b57612bfc565b50919050565b611b656129ce565b611b6d610e8c565b50611b76612a6d565b611b7e612abe565b611b8882826135f5565b611bc7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bbe90615349565b60405180910390fd5b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816001015414611c51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c48906152a9565b60405180910390fd5b611c7d60008260000160405180602001604052908160008201548152505061304b90919063ffffffff16565b15611d2e57611cab600d604051806020016040529081600082015481525050836135df90919063ffffffff16565b611cea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce190615229565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167ff60993fa76f94c9e0a803526ee6e1314814ed4d2b0d223febf1436b36897fb3760405160405180910390a25b611d388184612b4a565b50611d64828260000160405180602001604052908160008201548152505061306890919063ffffffff16565b8160000160008201518160000155905050611d9e82600760405180602001604052908160008201548152505061306890919063ffffffff16565b600760008201518160000155905050816000015183600001513373ffffffffffffffffffffffffffffffffffffffff167f4b82aa16e071a61de1a6b9aeec9edab0356331f8122c78683b469ac8e685dabc60405160405180910390a4611e4d33308560000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612b73909392919063ffffffff16565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f193384600001516040518363ffffffff1660e01b8152600401611eae929190614fdc565b602060405180830381600087803b158015611ec857600080fd5b505af1158015611edc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250611f00919081019061462c565b611f3f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f3690615329565b60405180910390fd5b50611f48612bfc565b5050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611f7a613671565b611f82612d3d565b611f8a610e8c565b50611f93612a6d565b611f9b612abe565b6001600560006101000a81548160ff02191690836002811115611fba57fe5b0217905550611fd030611fcb6136bf565b613784565b611fdb600b54612e79565b3373ffffffffffffffffffffffffffffffffffffffff167f18600820405d6cf356e3556301762ca32395e72d8c81494fa344835c9da3633d60405160405180910390a2612026612bfc565b565b61203061449d565b612038612a6d565b61204061301f565b905090565b600560009054906101000a900460ff1681565b60088060000154905081565b600d8060000154905081565b600a5481565b61207e61449d565b612086612a6d565b6120e5600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301604051806020016040529081600082015481525050612c41565b9050919050565b600b5481565b600c5481565b6121006129ce565b612108612a6d565b612110612abe565b600061211b33612af7565b9050600081600401541415612165576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161215c906151a9565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f2e5702420c76e041698ad7ba57a9ff5cadccf647ea8d96e6007a40b5b2662f5660405160405180910390a260008160040181905550506121bb612bfc565b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6121eb6129ce565b336121f581612a1b565b6121fd612a6d565b612205612abe565b600061221033612af7565b9050612226600084612ada90919063ffffffff16565b8015612261575061226061225182600301604051806020016040529081600082015481525050612c41565b846139c090919063ffffffff16565b5b6122a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161229790615249565b60405180910390fd5b60006122be600c546122b0610944565b612ef890919063ffffffff16565b9050600b548110612304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122fb906153e9565b60405180910390fd5b80826001018190555083826002016000820151816000015590505083600001513373ffffffffffffffffffffffffffffffffffffffff167fd33b726e11d2c5d38e6702b16613df0160a07f7ba5185455ee3c45d0494fab1160405160405180910390a35050612371612bfc565b5050565b61237d6129ce565b612385612a6d565b61238d612abe565b612395612bfc565b565b6123a1338261062a565b50565b60048060000154905081565b600e8060000154905081565b6123c461449d565b6123cc613671565b6123d4610e8c565b506123dd612a6d565b6123e5612abe565b600060028111156123f257fe5b600560009054906101000a900460ff16600281111561240d57fe5b141561244e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161244590615449565b60405180910390fd5b60028081111561245a57fe5b600560009054906101000a900460ff16600281111561247557fe5b146124b957612485600b546139d6565b600e600082015181600001559050506002600560006101000a81548160ff021916908360028111156124b357fe5b02179055505b6124c161449d565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016125279190614fc1565b60206040518083038186803b15801561253f57600080fd5b505afa158015612553573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506125779190810190614771565b815250905061258461449d565b6125ad600e604051806020016040529081600082015481525050836133af90919063ffffffff16565b90506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050612626600061261883600301604051806020016040529081600082015481525050612c41565b612ada90919063ffffffff16565b156127c65761263361449d565b612674600e604051806020016040529081600082015481525050836000016040518060200160405290816000820154815250506133af90919063ffffffff16565b905061267e61449d565b61269f83600301604051806020016040529081600082015481525050612c41565b90506126a961449d565b6126bc8284613b6d90919063ffffffff16565b6126d557604051806020016040528060008152506126e9565b6126e883836130a190919063ffffffff16565b5b90506126fe818661306890919063ffffffff16565b9450600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160008082016000905550506001820160009055600282016000808201600090555050600382016000808201600090555050600482016000905550503373ffffffffffffffffffffffffffffffffffffffff167fcad20625296d189a6fc6e5b39d0d544e5bd99dbda0c8f2f0ecffef3e0fbcc28260405160405180910390a25050505b6127ce61449d565b6127f66127f06008604051806020016040529081600082015481525050612c41565b846130da565b9050612803600882613b82565b945061282e8460076040518060200160405290816000820154815250506130a190919063ffffffff16565b600760008201518160000155905050836000015185600001513373ffffffffffffffffffffffffffffffffffffffff167f9d349c102bec959fb7f20f9a3621e015819d3ae4ed6e9afd1f56a69d5845600660405160405180910390a46128db338660000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612cb79092919063ffffffff16565b61292e33308660000151600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612b73909392919063ffffffff16565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c6885600001516040518263ffffffff1660e01b815260040161298d9190615537565b600060405180830381600087803b1580156129a757600080fd5b505af11580156129bb573d6000803e3d6000fd5b50505050505050506129cb612bfc565b90565b600b546129d9610944565b10612a19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a10906153a9565b60405180910390fd5b565b6000612a2682612af7565b6001015414612a6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a61906152a9565b60405180910390fd5b50565b600060149054906101000a900460ff16612abc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ab390615429565b60405180910390fd5b565b60008060146101000a81548160ff021916908315150217905550565b6000612ae58261330f565b60000151836000015111905092915050565b600081612b0381613c33565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020915050919050565b612b5261449d565b612b5f8360030183613ce7565b50612b6b600883613ce7565b905092915050565b612bf6846323b872dd60e01b858585604051602401612b949392919061502e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613d98565b50505050565b6001600060146101000a81548160ff021916908315150217905550565b612c23600061330f565b81600201600082015181600001559050506000816001018190555050565b612c4961449d565b612c726004604051806020016040529081600082015481525050836133af90919063ffffffff16565b9050919050565b60008160000151836000015111905092915050565b612c9661449d565b612ca38360030183613b82565b50612caf600883613b82565b905092915050565b612d388363a9059cbb60e01b8484604051602401612cd692919061508e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613d98565b505050565b60006002811115612d4a57fe5b600560009054906101000a900460ff166002811115612d6557fe5b14612da5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d9c906151e9565b60405180910390fd5b565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f46696e616e6369616c436f6e74726163747341646d696e0000000000000000006040518263ffffffff1660e01b8152600401612e2491906150b7565b60206040518083038186803b158015612e3c57600080fd5b505afa158015612e50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250612e7491908101906145c7565b905090565b6000612e83613e5f565b90508073ffffffffffffffffffffffffffffffffffffffff166368ad8ae3600a54846040518363ffffffff1660e01b8152600401612ec29291906150d2565b600060405180830381600087803b158015612edc57600080fd5b505af1158015612ef0573d6000803e3d6000fd5b505050505050565b600080828401905083811015612f43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f3a90615189565b60405180910390fd5b8091505092915050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f53746f72650000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401612fca91906150b7565b60206040518083038186803b158015612fe257600080fd5b505afa158015612ff6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061301a91908101906145c7565b905090565b61302761449d565b6130466008604051806020016040529081600082015481525050612c41565b905090565b60006130568261330f565b60000151836000015114905092915050565b61307061449d565b604051806020016040528061309684600001518660000151612ef890919063ffffffff16565b815250905092915050565b6130a961449d565b60405180602001604052806130cf84600001518660000151613f3190919063ffffffff16565b815250905092915050565b6130e261449d565b81600001518360000151106130f757816130f9565b825b905092915050565b61310961449d565b61311c8284613f7b90919063ffffffff16565b905061316261313d8261312f600161330f565b6130a190919063ffffffff16565b60046040518060200160405290816000820154815250506133af90919063ffffffff16565b600460008201518160000155905050505050565b6000613215828573ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30876040518363ffffffff1660e01b81526004016131b7929190615005565b60206040518083038186803b1580156131cf57600080fd5b505afa1580156131e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506132079190810190614771565b612ef890919063ffffffff16565b90506132988463095ea7b360e01b858460405160240161323692919061508e565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613d98565b50505050565b6132a661449d565b6132b38360030183613b82565b506132bd8361402b565b6132fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016132f390615349565b60405180910390fd5b613307600883613b82565b905092915050565b61331761449d565b604051806020016040528061333d670de0b6b3a76400008561407690919063ffffffff16565b8152509050919050565b60008160000151836000015114905092915050565b61336461449d565b60405180602001604052806133a48460000151613396670de0b6b3a7640000886000015161407690919063ffffffff16565b6140e690919063ffffffff16565b815250905092915050565b6133b761449d565b6040518060200160405280670de0b6b3a76400006133e68560000151876000015161407690919063ffffffff16565b816133ed57fe5b04815250905092915050565b61340161449d565b600061340c83612af7565b905061341661449d565b6134356008604051806020016040529081600082015481525050612c41565b905061343f61449d565b8260030160405180602001604052908160008201548152505090506134838160086040518060200160405290816000820154815250506130a190919063ffffffff16565b6008600082015181600001559050506134d38360000160405180602001604052908160008201548152505060076040518060200160405290816000820154815250506130a190919063ffffffff16565b600760008201518160000155905050600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160008082016000905550506001820160009055600282016000808201600090555050600382016000808201600090555050600482016000905550508473ffffffffffffffffffffffffffffffffffffffff167fcad20625296d189a6fc6e5b39d0d544e5bd99dbda0c8f2f0ecffef3e0fbcc28260405160405180910390a26135d56135c66008604051806020016040529081600082015481525050612c41565b836130a190919063ffffffff16565b9350505050919050565b6000816000015183600001511015905092915050565b60006135ff61449d565b61363d6136216008604051806020016040529081600082015481525050612c41565b6007604051806020016040529081600082015481525050614130565b905061364761449d565b6136518585614130565b90506136668183612c7990919063ffffffff16565b159250505092915050565b600b5461367c610944565b10156136bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016136b4906153c9565b60405180910390fd5b565b6136c761449d565b60006136d1612f4d565b90508073ffffffffffffffffffffffffffffffffffffffff16635b97aadd600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b815260040161372e9190614fa6565b60206040518083038186803b15801561374657600080fd5b505afa15801561375a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061377e91908101906146a7565b91505090565b61379860008261304b90919063ffffffff16565b156137a2576139bc565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461382d5761382882308360000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612b73909392919063ffffffff16565b61389d565b61383561449d565b61383d61301f565b90506138528282612c7990919063ffffffff16565b613891576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161388890615489565b60405180910390fd5b61389b8282613101565b505b80600001517f4f9bf7e8cd0f2456f9c43d2597bedcf1446c9c64544053f1ece6423ae9a07e5260405160405180910390a260006138d8612f4d565b905061392b818360000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166131769092919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff16638659d232600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b8152600401613988929190615065565b600060405180830381600087803b1580156139a257600080fd5b505af11580156139b6573d6000803e3d6000fd5b50505050505b5050565b6000816000015183600001511115905092915050565b6139de61449d565b60006139e8613e5f565b90508073ffffffffffffffffffffffffffffffffffffffff1663a03e881a600a54856040518363ffffffff1660e01b8152600401613a279291906150d2565b60206040518083038186803b158015613a3f57600080fd5b505afa158015613a53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250613a77919081019061462c565b613ab6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613aad90615209565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663c9280f06600a54866040518363ffffffff1660e01b8152600401613af59291906150d2565b60206040518083038186803b158015613b0d57600080fd5b505afa158015613b21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250613b459190810190614655565b90506000811215613b5557600090505b60405180602001604052808281525092505050919050565b60008160000151836000015110905092915050565b613b8a61449d565b613b9261449d565b613bb084604051806020016040529081600082015481525050612c41565b9050613bba61449d565b613bc38461417d565b9050613bed81866040518060200160405290816000820154815250506130a190919063ffffffff16565b600001518560000181905550613c29613c1a86604051806020016040529081600082015481525050612c41565b836130a190919063ffffffff16565b9250505092915050565b613ca56000613c97600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301604051806020016040529081600082015481525050612c41565b612ada90919063ffffffff16565b613ce4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613cdb90615269565b60405180910390fd5b50565b613cef61449d565b613cf761449d565b613d1584604051806020016040529081600082015481525050612c41565b9050613d1f61449d565b613d288461417d565b9050613d52818660405180602001604052908160008201548152505061306890919063ffffffff16565b600001518560000181905550613d8e82613d8087604051806020016040529081600082015481525050612c41565b6130a190919063ffffffff16565b9250505092915050565b6060613dfa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166141b59092919063ffffffff16565b9050600081511115613e5a5780806020019051613e1a919081019061462c565b613e59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613e5090615409565b60405180910390fd5b5b505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f4f7261636c6500000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401613edc91906150b7565b60206040518083038186803b158015613ef457600080fd5b505afa158015613f08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250613f2c91908101906145c7565b905090565b6000613f7383836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506141cd565b905092915050565b613f8361449d565b6000613fa4670de0b6b3a7640000856000015161407690919063ffffffff16565b90506000613fbf8460000151836140e690919063ffffffff16565b90506000613fda85600001518461422890919063ffffffff16565b905060008114614010576040518060200160405280614003600185612ef890919063ffffffff16565b8152509350505050614025565b60405180602001604052808381525093505050505b92915050565b600061406f61405183600301604051806020016040529081600082015481525050612c41565b836000016040518060200160405290816000820154815250506135f5565b9050919050565b60008083141561408957600090506140e0565b600082840290508284828161409a57fe5b04146140db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016140d290615289565b60405180910390fd5b809150505b92915050565b600061412883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250614272565b905092915050565b61413861449d565b61414c600083612ada90919063ffffffff16565b6141615761415a600061330f565b9050614177565b614174828461335c90919063ffffffff16565b90505b92915050565b61418561449d565b6141ae60046040518060200160405290816000820154815250508361335c90919063ffffffff16565b9050919050565b60606141c484846000856142d3565b90509392505050565b6000838311158290614215576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161420c9190615167565b60405180910390fd5b5060008385039050809150509392505050565b600061426a83836040518060400160405280601881526020017f536166654d6174683a206d6f64756c6f206279207a65726f00000000000000008152506143f6565b905092915050565b600080831182906142b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016142b09190615167565b60405180910390fd5b5060008385816142c557fe5b049050809150509392505050565b60606142de85614452565b61431d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161431490615369565b60405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040516143479190614f8f565b60006040518083038185875af1925050503d8060008114614384576040519150601f19603f3d011682016040523d82523d6000602084013e614389565b606091505b5091509150811561439e5780925050506143ee565b6000815111156143b15780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016143e59190615167565b60405180910390fd5b949350505050565b600080831415829061443e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016144359190615167565b60405180910390fd5b5082848161444857fe5b0690509392505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561449457506000801b8214155b92505050919050565b6040518060200160405280600081525090565b6000813590506144bf81615785565b92915050565b6000815190506144d481615785565b92915050565b6000815190506144e98161579c565b92915050565b6000815190506144fe816157b3565b92915050565b60006020828403121561451657600080fd5b61452060206155b2565b9050600061453084828501614574565b60008301525092915050565b60006020828403121561454e57600080fd5b61455860206155b2565b9050600061456884828501614589565b60008301525092915050565b600081359050614583816157ca565b92915050565b600081519050614598816157ca565b92915050565b6000602082840312156145b057600080fd5b60006145be848285016144b0565b91505092915050565b6000602082840312156145d957600080fd5b60006145e7848285016144c5565b91505092915050565b6000806040838503121561460357600080fd5b6000614611858286016144b0565b925050602061462285828601614504565b9150509250929050565b60006020828403121561463e57600080fd5b600061464c848285016144da565b91505092915050565b60006020828403121561466757600080fd5b6000614675848285016144ef565b91505092915050565b60006020828403121561469057600080fd5b600061469e84828501614504565b91505092915050565b6000602082840312156146b957600080fd5b60006146c78482850161453c565b91505092915050565b600080604083850312156146e357600080fd5b60006146f185828601614504565b925050602061470285828601614504565b9150509250929050565b6000806040838503121561471f57600080fd5b600061472d8582860161453c565b925050602061473e8582860161453c565b9150509250929050565b60006020828403121561475a57600080fd5b600061476884828501614574565b91505092915050565b60006020828403121561478357600080fd5b600061479184828501614589565b91505092915050565b6147a381615680565b82525050565b6147b281615611565b82525050565b6147c18161562f565b82525050565b60006147d2826155df565b6147dc81856155f5565b93506147ec818560208601615734565b80840191505092915050565b61480181615692565b82525050565b614810816156b6565b82525050565b61481f816156da565b82525050565b61482e816156fe565b82525050565b600061483f826155ea565b6148498185615600565b9350614859818560208601615734565b61486281615767565b840191505092915050565b600061487a601b83615600565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b60006148ba601383615600565b91507f4e6f2070656e64696e67207472616e73666572000000000000000000000000006000830152602082019050919050565b60006148fa601483615600565b91507f496e76616c696420746f6b656e20616d6f756e740000000000000000000000006000830152602082019050919050565b600061493a601a83615600565b91507f436f6e7472616374207374617465206973206e6f74204f50454e0000000000006000830152602082019050919050565b600061497a601783615600565b91507f556e7265736f6c766564206f7261636c652070726963650000000000000000006000830152602082019050919050565b60006149ba601e83615600565b91507f42656c6f77206d696e696d756d2073706f6e736f7220706f736974696f6e00006000830152602082019050919050565b60006149fa601983615600565b91507f496e76616c696420636f6c6c61746572616c20616d6f756e74000000000000006000830152602082019050919050565b6000614a3a601a83615600565b91507f506f736974696f6e20686173206e6f20636f6c6c61746572616c0000000000006000830152602082019050919050565b6000614a7a602183615600565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000614ae0601283615600565b91507f50656e64696e67207769746864726177616c00000000000000000000000000006000830152602082019050919050565b6000614b20601883615600565b91507f496e76616c6964207769746864726177207265717565737400000000000000006000830152602082019050919050565b6000614b60601883615600565b91507f496e76616c6964207472616e73666572207265717565737400000000000000006000830152602082019050919050565b6000614ba0601383615600565b91507f43616c6c6572206e6f7420476f7665726e6f72000000000000000000000000006000830152602082019050919050565b6000614be0601f83615600565b91507f4d696e74696e672073796e74686574696320746f6b656e73206661696c6564006000830152602082019050919050565b6000614c20600c83615600565b91507f43522062656c6f772047435200000000000000000000000000000000000000006000830152602082019050919050565b6000614c60601d83615600565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b6000614ca0601c83615600565b91507f53706f6e736f7220616c72656164792068617320706f736974696f6e000000006000830152602082019050919050565b6000614ce0601883615600565b91507f4f6e6c792063616c6c61626c65207072652d65787069727900000000000000006000830152602082019050919050565b6000614d20601983615600565b91507f4f6e6c792063616c6c61626c6520706f73742d657870697279000000000000006000830152602082019050919050565b6000614d60601b83615600565b91507f52657175657374206578706972657320706f73742d65787069727900000000006000830152602082019050919050565b6000614da0602a83615600565b91507f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008301527f6f742073756363656564000000000000000000000000000000000000000000006020830152604082019050919050565b6000614e06601f83615600565b91507f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006000830152602082019050919050565b6000614e46601283615600565b91507f556e6578706972656420706f736974696f6e00000000000000000000000000006000830152602082019050919050565b6000614e86601083615600565b91507f50656e64696e67207472616e73666572000000000000000000000000000000006000830152602082019050919050565b6000614ec6601a83615600565b91507f46696e616c20666565206973206d6f7265207468616e205066430000000000006000830152602082019050919050565b6000614f06601583615600565b91507f4e6f2070656e64696e67207769746864726177616c00000000000000000000006000830152602082019050919050565b602082016000820151614f4f6000850182614f71565b50505050565b602082016000820151614f6b6000850182614f71565b50505050565b614f7a81615676565b82525050565b614f8981615676565b82525050565b6000614f9b82846147c7565b915081905092915050565b6000602082019050614fbb60008301846147a9565b92915050565b6000602082019050614fd6600083018461479a565b92915050565b6000604082019050614ff1600083018561479a565b614ffe6020830184614f80565b9392505050565b600060408201905061501a60008301856147a9565b61502760208301846147a9565b9392505050565b600060608201905061504360008301866147a9565b61505060208301856147a9565b61505d6040830184614f80565b949350505050565b600060408201905061507a60008301856147a9565b6150876020830184614f39565b9392505050565b60006040820190506150a360008301856147a9565b6150b06020830184614f80565b9392505050565b60006020820190506150cc60008301846147b8565b92915050565b60006040820190506150e760008301856147b8565b6150f46020830184614f80565b9392505050565b600060208201905061511060008301846147f8565b92915050565b600060208201905061512b6000830184614807565b92915050565b60006020820190506151466000830184614816565b92915050565b60006020820190506151616000830184614825565b92915050565b600060208201905081810360008301526151818184614834565b905092915050565b600060208201905081810360008301526151a28161486d565b9050919050565b600060208201905081810360008301526151c2816148ad565b9050919050565b600060208201905081810360008301526151e2816148ed565b9050919050565b600060208201905081810360008301526152028161492d565b9050919050565b600060208201905081810360008301526152228161496d565b9050919050565b60006020820190508181036000830152615242816149ad565b9050919050565b60006020820190508181036000830152615262816149ed565b9050919050565b6000602082019050818103600083015261528281614a2d565b9050919050565b600060208201905081810360008301526152a281614a6d565b9050919050565b600060208201905081810360008301526152c281614ad3565b9050919050565b600060208201905081810360008301526152e281614b13565b9050919050565b6000602082019050818103600083015261530281614b53565b9050919050565b6000602082019050818103600083015261532281614b93565b9050919050565b6000602082019050818103600083015261534281614bd3565b9050919050565b6000602082019050818103600083015261536281614c13565b9050919050565b6000602082019050818103600083015261538281614c53565b9050919050565b600060208201905081810360008301526153a281614c93565b9050919050565b600060208201905081810360008301526153c281614cd3565b9050919050565b600060208201905081810360008301526153e281614d13565b9050919050565b6000602082019050818103600083015261540281614d53565b9050919050565b6000602082019050818103600083015261542281614d93565b9050919050565b6000602082019050818103600083015261544281614df9565b9050919050565b6000602082019050818103600083015261546281614e39565b9050919050565b6000602082019050818103600083015261548281614e79565b9050919050565b600060208201905081810360008301526154a281614eb9565b9050919050565b600060208201905081810360008301526154c281614ef9565b9050919050565b60006020820190506154de6000830184614f39565b92915050565b600060a0820190506154f96000830188614f55565b6155066020830187614f80565b6155136040830186614f55565b6155206060830185614f55565b61552d6080830184614f80565b9695505050505050565b600060208201905061554c6000830184614f80565b92915050565b60006040820190506155676000830185614f80565b6155746020830184614f80565b9392505050565b60006060820190506155906000830186614f80565b61559d6020830185614f80565b6155aa6040830184614f39565b949350505050565b6000604051905081810181811067ffffffffffffffff821117156155d557600080fd5b8060405250919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b600061561c82615656565b9050919050565b60008115159050919050565b6000819050919050565b600081905061564782615778565b919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061568b82615710565b9050919050565b600061569d826156a4565b9050919050565b60006156af82615656565b9050919050565b60006156c1826156c8565b9050919050565b60006156d382615656565b9050919050565b60006156e5826156ec565b9050919050565b60006156f782615656565b9050919050565b600061570982615639565b9050919050565b600061571b82615722565b9050919050565b600061572d82615656565b9050919050565b60005b83811015615752578082015181840152602081019050615737565b83811115615761576000848401525b50505050565b6000601f19601f8301169050919050565b6003811061578257fe5b50565b61578e81615611565b811461579957600080fd5b50565b6157a581615623565b81146157b057600080fd5b50565b6157bc8161564c565b81146157c757600080fd5b50565b6157d381615676565b81146157de57600080fd5b5056fea26469706673582212205bcd368c99ff3fd53ce662ad38d9247f52ddb73ebdd61ca04937ee0a6b5f577164736f6c63430006020033";
