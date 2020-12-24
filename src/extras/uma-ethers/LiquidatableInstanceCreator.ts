import { Signer, BytesLike, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Liquidatable } from "./LiquidatableContractInterface";

export class LiquidatableInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    params: {
      expirationTimestamp: BigNumberish;
      withdrawalLiveness: BigNumberish;
      collateralAddress: string;
      finderAddress: string;
      tokenFactoryAddress: string;
      timerAddress: string;
      priceFeedIdentifier: BytesLike;
      syntheticName: string;
      syntheticSymbol: string;
      minSponsorTokens: { rawValue: BigNumberish };
      liquidationLiveness: BigNumberish;
      collateralRequirement: { rawValue: BigNumberish };
      disputeBondPct: { rawValue: BigNumberish };
      sponsorDisputeRewardPct: { rawValue: BigNumberish };
      disputerDisputeRewardPct: { rawValue: BigNumberish };
    },
    overrides?: Overrides
  ): Promise<Liquidatable> {
    return super.deploy(params, overrides || {}) as Promise<Liquidatable>;
  }
  getDeployTransaction(
    params: {
      expirationTimestamp: BigNumberish;
      withdrawalLiveness: BigNumberish;
      collateralAddress: string;
      finderAddress: string;
      tokenFactoryAddress: string;
      timerAddress: string;
      priceFeedIdentifier: BytesLike;
      syntheticName: string;
      syntheticSymbol: string;
      minSponsorTokens: { rawValue: BigNumberish };
      liquidationLiveness: BigNumberish;
      collateralRequirement: { rawValue: BigNumberish };
      disputeBondPct: { rawValue: BigNumberish };
      sponsorDisputeRewardPct: { rawValue: BigNumberish };
      disputerDisputeRewardPct: { rawValue: BigNumberish };
    },
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(params, overrides || {});
  }
  attach(address: string): Liquidatable {
    return super.attach(address) as Liquidatable;
  }
  connect(signer: Signer): LiquidatableInstanceCreator {
    return super.connect(signer) as LiquidatableInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Liquidatable {
    return new Contract(address, _abi, signerOrProvider) as Liquidatable;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "expirationTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawalLiveness",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "finderAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenFactoryAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "timerAddress",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "priceFeedIdentifier",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "syntheticName",
            type: "string",
          },
          {
            internalType: "string",
            name: "syntheticSymbol",
            type: "string",
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
            name: "minSponsorTokens",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "liquidationLiveness",
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
            name: "collateralRequirement",
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
            name: "disputeBondPct",
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
            name: "sponsorDisputeRewardPct",
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
            name: "disputerDisputeRewardPct",
            type: "tuple",
          },
        ],
        internalType: "struct Liquidatable.ConstructorParams",
        name: "params",
        type: "tuple",
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
        indexed: true,
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "disputer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "disputeSucceeded",
        type: "bool",
      },
    ],
    name: "DisputeSettled",
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
      {
        indexed: true,
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "liquidationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensOutstanding",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockedCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidatedCollateral",
        type: "uint256",
      },
    ],
    name: "LiquidationCreated",
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
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "disputer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidationId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "disputeBondAmount",
        type: "uint256",
      },
    ],
    name: "LiquidationDisputed",
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
        name: "withdrawalAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum Liquidatable.Status",
        name: "liquidationStatus",
        type: "uint8",
      },
    ],
    name: "LiquidationWithdrawn",
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
    name: "collateralRequirement",
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
        name: "minCollateralPerToken",
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
        name: "maxCollateralPerToken",
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
        name: "maxTokensToLiquidate",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "createLiquidation",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidationId",
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
        name: "tokensLiquidated",
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
        name: "finalFeeBond",
        type: "tuple",
      },
    ],
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
    inputs: [
      {
        internalType: "uint256",
        name: "liquidationId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
    ],
    name: "dispute",
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
    name: "disputeBondPct",
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
    name: "disputerDisputeRewardPct",
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
    inputs: [
      {
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
    ],
    name: "getLiquidations",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sponsor",
            type: "address",
          },
          {
            internalType: "address",
            name: "liquidator",
            type: "address",
          },
          {
            internalType: "enum Liquidatable.Status",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "liquidationTime",
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
            name: "tokensOutstanding",
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
            name: "lockedCollateral",
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
            name: "liquidatedCollateral",
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
            name: "rawUnitCollateral",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "disputer",
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
            name: "settlementPrice",
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
            name: "finalFee",
            type: "tuple",
          },
        ],
        internalType: "struct Liquidatable.LiquidationData[]",
        name: "liquidationData",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidationLiveness",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "liquidations",
    outputs: [
      {
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidator",
        type: "address",
      },
      {
        internalType: "enum Liquidatable.Status",
        name: "state",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "liquidationTime",
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
        name: "tokensOutstanding",
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
        name: "lockedCollateral",
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
        name: "liquidatedCollateral",
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
        name: "rawUnitCollateral",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "disputer",
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
        name: "settlementPrice",
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
        name: "finalFee",
        type: "tuple",
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
    name: "rawLiquidationCollateral",
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
    name: "sponsorDisputeRewardPct",
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
    inputs: [
      {
        internalType: "uint256",
        name: "liquidationId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sponsor",
        type: "address",
      },
    ],
    name: "withdrawLiquidation",
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
  "0x60806040523480156200001157600080fd5b506040516200976a3803806200976a833981810160405262000037919081019062000d03565b80600001518160200151826040015183606001518460c001518560e0015186610100015187608001518861012001518960a0015187878280806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506001600060146101000a81548160ff021916908315150217905550620000db620005a460201b60201c565b620000eb620005f860201b60201c565b82600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200017d6200061460201b60201c565b6003819055506200019a60016200071d60201b62004abb1760201c565b600460008201518160000155905050620001b96200075e60201b60201c565b505050620001cc620005a460201b60201c565b620001dc620005f860201b60201c565b620001ec6200061460201b60201c565b8a1162000230576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002279062001077565b60405180910390fd5b620002406200077b60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff166390978d1b876040518263ffffffff1660e01b81526004016200027a919062000fcb565b60206040518083038186803b1580156200029357600080fd5b505afa158015620002a8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250620002ce919081019062000cab565b62000310576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200030790620010dd565b60405180910390fd5b89600b8190555088600c8190555060008390508073ffffffffffffffffffffffffffffffffffffffff1663e8a0aed3878760126040518463ffffffff1660e01b8152600401620003639392919062000fe8565b602060405180830381600087803b1580156200037e57600080fd5b505af115801562000393573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250620003b9919081019062000cd7565b600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600d6000820151816000015590505086600a8190555050620004216200075e60201b60201c565b505050505050505050506200043b620005a460201b60201c565b6200044b620005f860201b60201c565b6200046b60018261016001516200085360201b620048f51790919060201c565b620004ad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004a49062001099565b60405180910390fd5b620004eb6001620004d7836101c00151846101a001516200087860201b62004e791790919060201c565b620008ba60201b6200841d1790919060201c565b6200052d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005249062001055565b60405180910390fd5b806101400151601181905550806101600151601260008201518160000155905050806101800151601360008201518160000155905050806101a00151601460008201518160000155905050806101c001516015600082015181600001559050506200059d6200075e60201b60201c565b50620012ea565b600060149054906101000a900460ff16620005f6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620005ed90620010ff565b60405180910390fd5b565b60008060146101000a81548160ff021916908315150217905550565b60008073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161462000716576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b158015620006d357600080fd5b505afa158015620006e8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506200070e919081019062000d48565b90506200071a565b4290505b90565b62000727620009ad565b604051806020016040528062000754670de0b6b3a764000085620008df60201b620062ee1790919060201c565b8152509050919050565b6001600060146101000a81548160ff021916908315150217905550565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f4964656e74696669657257686974656c697374000000000000000000000000006040518263ffffffff1660e01b8152600401620007fa919062000fcb565b60206040518083038186803b1580156200081357600080fd5b505afa15801562000828573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506200084e919081019062000c7f565b905090565b600062000866826200071d60201b60201c565b60000151836000015111905092915050565b62000882620009ad565b6040518060200160405280620008af846000015186600001516200095560201b620056981790919060201c565b815250905092915050565b6000620008cd826200071d60201b60201c565b60000151836000015110905092915050565b600080831415620008f457600090506200094f565b60008284029050828482816200090657fe5b04146200094a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200094190620010bb565b60405180910390fd5b809150505b92915050565b600080828401905083811015620009a3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200099a9062001033565b60405180910390fd5b8091505092915050565b6040518060200160405280600081525090565b600081519050620009d18162001268565b92915050565b600081519050620009e88162001282565b92915050565b600081519050620009ff816200129c565b92915050565b60008151905062000a1681620012b6565b92915050565b600082601f83011262000a2e57600080fd5b815162000a4562000a3f826200114f565b62001121565b9150808252602083016020830185838301111562000a6257600080fd5b62000a6f83828462001221565b50505092915050565b60006101e0828403121562000a8c57600080fd5b62000a996101e062001121565b9050600062000aab8482850162000c68565b600083015250602062000ac18482850162000c68565b602083015250604062000ad784828501620009c0565b604083015250606062000aed84828501620009c0565b606083015250608062000b0384828501620009c0565b60808301525060a062000b1984828501620009c0565b60a08301525060c062000b2f84828501620009ee565b60c08301525060e082015167ffffffffffffffff81111562000b5057600080fd5b62000b5e8482850162000a1c565b60e08301525061010082015167ffffffffffffffff81111562000b8057600080fd5b62000b8e8482850162000a1c565b6101008301525061012062000ba68482850162000c2b565b6101208301525061014062000bbe8482850162000c68565b6101408301525061016062000bd68482850162000c2b565b6101608301525061018062000bee8482850162000c2b565b610180830152506101a062000c068482850162000c2b565b6101a0830152506101c062000c1e8482850162000c2b565b6101c08301525092915050565b60006020828403121562000c3e57600080fd5b62000c4a602062001121565b9050600062000c5c8482850162000c68565b60008301525092915050565b60008151905062000c7981620012d0565b92915050565b60006020828403121562000c9257600080fd5b600062000ca284828501620009c0565b91505092915050565b60006020828403121562000cbe57600080fd5b600062000cce84828501620009d7565b91505092915050565b60006020828403121562000cea57600080fd5b600062000cfa8482850162000a05565b91505092915050565b60006020828403121562000d1657600080fd5b600082015167ffffffffffffffff81111562000d3157600080fd5b62000d3f8482850162000a78565b91505092915050565b60006020828403121562000d5b57600080fd5b600062000d6b8482850162000c68565b91505092915050565b62000d7f81620011b8565b82525050565b62000d90816200120d565b82525050565b600062000da3826200117c565b62000daf818562001187565b935062000dc181856020860162001221565b62000dcc8162001257565b840191505092915050565b600062000de6601b8362001187565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b600062000e28601a8362001187565b91507f5265776172647320617265206d6f7265207468616e20313030250000000000006000830152602082019050919050565b600062000e6a601c8362001187565b91507f496e76616c69642065787069726174696f6e20696e20667574757265000000006000830152602082019050919050565b600062000eac60148362001187565b91507f4352206973206d6f7265207468616e20313030250000000000000000000000006000830152602082019050919050565b600062000eee60218362001187565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600062000f56601c8362001187565b91507f556e737570706f72746564207072696365206964656e746966696572000000006000830152602082019050919050565b600062000f98601f8362001187565b91507f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006000830152602082019050919050565b600060208201905062000fe2600083018462000d74565b92915050565b6000606082019050818103600083015262001004818662000d96565b905081810360208301526200101a818562000d96565b90506200102b604083018462000d85565b949350505050565b600060208201905081810360008301526200104e8162000dd7565b9050919050565b60006020820190508181036000830152620010708162000e19565b9050919050565b60006020820190508181036000830152620010928162000e5b565b9050919050565b60006020820190508181036000830152620010b48162000e9d565b9050919050565b60006020820190508181036000830152620010d68162000edf565b9050919050565b60006020820190508181036000830152620010f88162000f47565b9050919050565b600060208201905081810360008301526200111a8162000f89565b9050919050565b6000604051905081810181811067ffffffffffffffff821117156200114557600080fd5b8060405250919050565b600067ffffffffffffffff8211156200116757600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000620011a582620011d6565b9050919050565b60008115159050919050565b6000819050919050565b6000620011cf8262001198565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006200121a8262001200565b9050919050565b60005b838110156200124157808201518184015260208101905062001224565b8381111562001251576000848401525b50505050565b6000601f19601f8301169050919050565b620012738162001198565b81146200127f57600080fd5b50565b6200128d81620011ac565b81146200129957600080fd5b50565b620012a781620011b8565b8114620012b357600080fd5b50565b620012c181620011c2565b8114620012cd57600080fd5b50565b620012db81620011f6565b8114620012e757600080fd5b50565b61847080620012fa6000396000f3fe608060405234801561001057600080fd5b506004361061028a5760003560e01c80635f1af1ca1161015c5780639ff4dea8116100ce578063bda02e7711610087578063bda02e7714610783578063c13f62e11461078d578063d1e92c11146107ab578063dd0eef3d146107c7578063edfa9a9b146107e5578063fcccedc7146108035761028a565b80639ff4dea8146106c1578063a1c4d1e7146106df578063a765fbea1461070f578063b795f0d41461073f578063b9a3c84c14610749578063bc121630146107675761028a565b806385209ee01161012057806385209ee0146105fb5780638c382eb21461061957806392120aec1461063757806397523661146106555780639b56d6c9146106735780639f43ddd2146106a35761028a565b80635f1af1ca146105695780636ba2f992146105995780637048594b146105b557806379599f96146105d357806381a10ae1146105dd5761028a565b8063360598e11161020057806348e30c3f116101b957806348e30c3f146104855780634f8c4847146104a357806350f49846146104dd57806355f57510146104fb5780635617151c1461052f5780635ee0fe321461054b5761028a565b8063360598e1146103c157806336980f58146103f1578063391fe4e2146103fb5780633cb6ce83146104195780633ee7a5ce1461043757806343e4771b146104675761028a565b806322f8e5661161025257806322f8e5661461030f57806325ed4dd81461032b57806329cb924d1461035d5780632d5436cf1461037b57806333a46ca2146103995780633403c2fc146103b75761028a565b80630c9229ca1461028f5780630de15fd9146102ad57806318928a0c146102cb5780631c39c38d146102e75780632261128014610305575b600080fd5b610297610821565b6040516102a4919061809a565b60405180910390f35b6102b561082d565b6040516102c29190617b94565b60405180910390f35b6102e560048036036102e09190810190616b27565b610853565b005b6102ef610992565b6040516102fc9190617905565b60405180910390f35b61030d6109b7565b005b61032960048036036103249190810190616cbb565b610a83565b005b61034560048036036103409190810190616ab0565b610b6d565b604051610354939291906180b5565b60405180910390f35b610365611367565b604051610372919061809a565b60405180910390f35b61038361146a565b604051610390919061809a565b60405180910390f35b6103a1611470565b6040516103ae919061802c565b60405180910390f35b6103bf611657565b005b6103db60048036036103d69190810190616d0d565b61178d565b6040516103e8919061802c565b60405180910390f35b6103f96124c2565b005b6104036125ea565b604051610410919061809a565b60405180910390f35b6104216125f6565b60405161042e919061802c565b60405180910390f35b610451600480360361044c9190810190616bf1565b6129a5565b60405161045e919061802c565b60405180910390f35b61046f612aec565b60405161047c919061802c565b60405180910390f35b61048d612b20565b60405161049a919061809a565b60405180910390f35b6104bd60048036036104b89190810190616b63565b612b2c565b6040516104d49b9a9998979695949392919061798d565b60405180910390f35b6104e5612c85565b6040516104f2919061809a565b60405180910390f35b61051560048036036105109190810190616a5e565b612c91565b604051610526959493929190618047565b60405180910390f35b61054960048036036105449190810190616a5e565b612d03565b005b610553613053565b604051610560919061809a565b60405180910390f35b610583600480360361057e9190810190616bf1565b61305f565b604051610590919061802c565b60405180910390f35b6105b360048036036105ae9190810190616c43565b613444565b005b6105bd613833565b6040516105ca9190617b5e565b60405180910390f35b6105db613859565b005b6105e561390f565b6040516105f2919061802c565b60405180910390f35b61060361392c565b6040516106109190617baf565b60405180910390f35b61062161393f565b60405161062e919061809a565b60405180910390f35b61063f61394b565b60405161064c919061809a565b60405180910390f35b61065d613957565b60405161066a9190617b1a565b60405180910390f35b61068d60048036036106889190810190616a5e565b61395d565b60405161069a919061802c565b60405180910390f35b6106ab6139d3565b6040516106b8919061809a565b60405180910390f35b6106c96139d9565b6040516106d6919061809a565b60405180910390f35b6106f960048036036106f49190810190616a5e565b6139df565b6040516107069190617af8565b60405180910390f35b61072960048036036107249190810190616d0d565b613c73565b604051610736919061802c565b60405180910390f35b610747613f07565b005b610751613fcc565b60405161075e9190617b79565b60405180910390f35b610781600480360361077c9190810190616bf1565b613ff2565b005b61078b614184565b005b6107956141a6565b6040516107a2919061809a565b60405180910390f35b6107c560048036036107c09190810190616bf1565b6141b2565b005b6107cf6141bf565b6040516107dc919061809a565b60405180910390f35b6107ed6141cb565b6040516107fa919061809a565b60405180910390f35b61080b6141d7565b604051610818919061802c565b60405180910390f35b60078060000154905081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61085b6147e9565b8161086581614836565b61086d6125f6565b50610876614888565b61087e6148d9565b6108926000836148f590919063ffffffff16565b6108d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c890617d4c565b60405180910390fd5b60006108dc84614912565b90506108e88184614965565b5082600001518473ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60405160405180910390a361098433308560000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661498e909392919063ffffffff16565b5061098d614a17565b505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6109bf6147e9565b6109c7614888565b6109cf6148d9565b60006109da33614912565b9050600081600101541415610a24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1b9061800c565b60405180910390fd5b80600201600001543373ffffffffffffffffffffffffffffffffffffffff167f74d8a3658feb89d1a5c335229bbbfc3bbcfaf492769feb7aa4cd2d92efeaf69160405160405180910390a3610a7881614a34565b50610a81614a17565b565b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610ade57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322f8e566826040518263ffffffff1660e01b8152600401610b38919061809a565b600060405180830381600087803b158015610b5257600080fd5b505af1158015610b66573d6000803e3d6000fd5b5050505050565b6000610b77616942565b610b7f616942565b610b876125f6565b50610b906147e9565b610b98614888565b610ba06148d9565b83610ba9611367565b1115610bea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be190617c8c565b60405180910390fd5b6000610bf589614912565b9050610c2986803603610c0b9190810190616bf1565b82600001604051806020016040529081600082015481525050614a5c565b9250610c33616942565b610c5482600301604051806020016040529081600082015481525050614a83565b9050610c5e616942565b610c686000614abb565b9050610c958284600201604051806020016040529081600082015481525050614af390919063ffffffff16565b15610cc857610cc58360020160405180602001604052908160008201548152505083614b0990919063ffffffff16565b90505b610cd0616942565b836000016040518060200160405290816000820154815250509050610d2082610d12838d803603610d049190810190616bf1565b614b4290919063ffffffff16565b614b8c90919063ffffffff16565b610d5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5690617e6c565b60405180910390fd5b610d9482610d86838e803603610d789190810190616bf1565b614b4290919063ffffffff16565b614af390919063ffffffff16565b610dd3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dca90617f4c565b60405180910390fd5b50610ddc614ba2565b9350610de6616942565b610dee616942565b610df6616942565b610e218660000160405180602001604052908160008201548152505089614c6790919063ffffffff16565b9050610e368186614b4290919063ffffffff16565b9250610e4b8185614b4290919063ffffffff16565b9150610e55616942565b610e808288600201604051806020016040529081600082015481525050614b4290919063ffffffff16565b9050610e8e8f8a8684614cba565b5050610ead6010610ea88885614e7990919063ffffffff16565b614eb2565b50600f60008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509750600f60008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518061016001604052808f73ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff16815260200160016004811115610f8357fe5b8152602001610f90611367565b8152602001898152602001848152602001838152602001610fb9610fb46001614abb565b614f63565b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001610fe56000614abb565b81526020018881525090806001815401808255809150506001900390600052602060002090600a020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff021916908360048111156110c957fe5b02179055506060820151816002015560808201518160030160008201518160000155505060a08201518160040160008201518160000155505060c08201518160050160008201518160000155505060e0820151816006016000820151816000015550506101008201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061012082015181600801600082015181600001555050610140820151816009016000820151816000015550505050873373ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff167fb936121d607177b497d6d988b46eba92e61c4d475c0cf8e27fc7d1731e2365dc8a60000151866000015186600001516040516112109392919061814c565b60405180910390a461126b33308960000151600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661498e909392919063ffffffff16565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c6888600001516040518263ffffffff1660e01b81526004016112ca919061809a565b600060405180830381600087803b1580156112e457600080fd5b505af11580156112f8573d6000803e3d6000fd5b5050505061134f33308860000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661498e909392919063ffffffff16565b505050505061135c614a17565b955095509592505050565b60008073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611463576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561142457600080fd5b505afa158015611438573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061145c9190810190616ce4565b9050611467565b4290505b90565b60115481565b611478616942565b6114806147e9565b6114886125f6565b50611491614888565b6114996148d9565b60006114a433614912565b905060008160010154141580156114c657506114be611367565b816001015411155b611505576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114fc90617dec565b60405180910390fd5b61150d616942565b81600201604051806020016040529081600082015481525050905061157361154c83600301604051806020016040529081600082015481525050614a83565b83600201604051806020016040529081600082015481525050614f9b90919063ffffffff16565b1561159c5761159982600301604051806020016040529081600082015481525050614a83565b90505b6115a68282614fb0565b92506115b182614a34565b611602338460000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16614fd99092919063ffffffff16565b82600001513373ffffffffffffffffffffffffffffffffffffffff167fc86c3298cb79f486674dca87d9247e88b76146160e7d412cc59b26b14c358a6860405160405180910390a35050611654614a17565b90565b61165f6147e9565b61166761505f565b61166f614888565b6116776148d9565b61167f6150c9565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146116ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116e390617e2c565b60405180910390fd5b6001600560006101000a81548160ff0219169083600281111561170b57fe5b02179055506000600b54905061171f611367565b600b81905550611730600b5461519b565b3373ffffffffffffffffffffffffffffffffffffffff167fd39eeb7157d9c446579a0893ecf9ecd87d1f466cdb270c6a189cf38ca1e30f4882600b5460405161177a9291906180ec565b60405180910390a25061178b614a17565b565b611795616942565b82826117a1828261521a565b6117a96125f6565b506117b2614888565b6117ba6148d9565b60006117c685876152d9565b90508060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061187557508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806118cf57508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b61190e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190590617c2c565b60405180910390fd5b61191886866153d3565b611920616942565b61194182600601604051806020016040529081600082015481525050614a83565b905061194b616942565b6119a0826119928560080160405180602001604052908160008201548152505086600301604051806020016040529081600082015481525050614b4290919063ffffffff16565b614b4290919063ffffffff16565b90506119aa616942565b6119d58385600401604051806020016040529081600082015481525050614b4290919063ffffffff16565b90506119df616942565b611a08836015604051806020016040529081600082015481525050614b4290919063ffffffff16565b9050611a12616942565b611a3b846014604051806020016040529081600082015481525050614b4290919063ffffffff16565b9050611a45616942565b611a6e601360405180602001604052908160008201548152505085614b4290919063ffffffff16565b9050611a78616942565b611aa38789600901604051806020016040529081600082015481525050614b4290919063ffffffff16565b9050611aad616942565b611ab76000614abb565b905060036004811115611ac657fe5b8960010160149054906101000a900460ff166004811115611ae357fe5b1415611fa1578860070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611bae57611b49616942565b611b6e83611b608689614e7990919063ffffffff16565b614e7990919063ffffffff16565b9050611b838183614e7990919063ffffffff16565b91508960070160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055505b8860000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611c7f57611c0e616942565b611c218888614b0990919063ffffffff16565b9050611c2b616942565b611c3e8287614e7990919063ffffffff16565b9050611c538184614e7990919063ffffffff16565b92508a60000160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550505b8860010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611d4457611cdf616942565b611d0486611cf6878b614b0990919063ffffffff16565b614b0990919063ffffffff16565b9050611d198183614e7990919063ffffffff16565b91508960010160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055505b600073ffffffffffffffffffffffffffffffffffffffff168960070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015611df45750600073ffffffffffffffffffffffffffffffffffffffff168960000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b8015611e505750600073ffffffffffffffffffffffffffffffffffffffff168960010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b15611f9c57600f60008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208e81548110611e9f57fe5b90600052602060002090600a0201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff021916905560028201600090556003820160008082016000905550506004820160008082016000905550506005820160008082016000905550506006820160008082016000905550506007820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560088201600080820160009055505060098201600080820160009055505050505b612386565b600480811115611fad57fe5b8960010160149054906101000a900460ff166004811115611fca57fe5b14801561202657508860010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1561219d57612050826120428589614e7990919063ffffffff16565b614e7990919063ffffffff16565b9050600f60008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208e8154811061209c57fe5b90600052602060002090600a0201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff021916905560028201600090556003820160008082016000905550506004820160008082016000905550506005820160008082016000905550506006820160008082016000905550506007820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556008820160008082016000905550506009820160008082016000905550505050612385565b600160048111156121aa57fe5b8960010160149054906101000a900460ff1660048111156121c757fe5b14801561222357508860010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b156123845761223b8287614e7990919063ffffffff16565b9050600f60008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208e8154811061228757fe5b90600052602060002090600a0201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160146101000a81549060ff021916905560028201600090556003820160008082016000905550506004820160008082016000905550506005820160008082016000905550506006820160008082016000905550506007820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560088201600080820160009055505060098201600080820160009055505050505b5b5b61239a6000826148f590919063ffffffff16565b6123d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123d090617bec565b60405180910390fd5b6123e46010826155e7565b9b508860010160149054906101000a900460ff16600481111561240357fe5b3373ffffffffffffffffffffffffffffffffffffffff167f6b1dd0a2f9139859db0869429aa0d5042a624c6da84633f568767549a58937b08e6000015160405161244d919061809a565b60405180910390a36124a6338d60000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16614fd99092919063ffffffff16565b8b9b505050505050505050506124ba614a17565b505092915050565b6124ca6147e9565b6124d2614888565b6124da6148d9565b60006124e533614912565b9050600081600401541461252e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161252590617fcc565b60405180910390fd5b600061254c600c5461253e611367565b61569890919063ffffffff16565b9050600b548110612592576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161258990617f2c565b60405180910390fd5b8082600401819055503373ffffffffffffffffffffffffffffffffffffffff167fbf457c80c8bf299d5c48272c4c1168bf87b33d83b13f0ab9aac332ce1161ed1e60405160405180910390a250506125e8614a17565b565b60138060000154905081565b6125fe616942565b612606614888565b61260e6148d9565b60006126186156ed565b90506000612624611367565b905061262e616942565b6126366157bf565b905061264c60008261580490919063ffffffff16565b1561265c5783935050505061299a565b8160035414156126715783935050505061299a565b612679616942565b612681616942565b8473ffffffffffffffffffffffffffffffffffffffff166374201feb60035486866040518463ffffffff1660e01b81526004016126c093929190618115565b604080518083038186803b1580156126d757600080fd5b505afa1580156126eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061270f9190810190616c7f565b915091508360038190555061272d8183614e7990919063ffffffff16565b955061274360008761580490919063ffffffff16565b1561275557859550505050505061299a565b6127688387614f9b90919063ffffffff16565b156127ec57612775616942565b6127888488614b0990919063ffffffff16565b9050612792616942565b61279c8383614a5c565b90506127b18184614b0990919063ffffffff16565b92506127c68183614b0990919063ffffffff16565b91506127e46127d58584614a5c565b85614b0990919063ffffffff16565b935084975050505b806000015182600001517f19b92e73d08d517d71ec46136266e4f5d526a8cd4f8501d73713cebfe4f335ef60405160405180910390a361282c8684615821565b6128406000836148f590919063ffffffff16565b1561292657612896858360000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166158969092919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff16638659d232600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b81526004016128f3929190617a6f565b600060405180830381600087803b15801561290d57600080fd5b505af1158015612921573d6000803e3d6000fd5b505050505b61293a6000826148f590919063ffffffff16565b1561299157612990338260000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16614fd99092919063ffffffff16565b5b85955050505050505b6129a2614a17565b90565b6129ad616942565b6129b56147e9565b336129bf81614836565b6129c76125f6565b506129d0614888565b6129d86148d9565b60006129e333614912565b90506129f96000856148f590919063ffffffff16565b612a38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a2f90617d4c565b60405180910390fd5b612a4281856159be565b925082600001513373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6560405160405180910390a3612add338460000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16614fd99092919063ffffffff16565b50612ae6614a17565b50919050565b612af4616942565b612afc614888565b612b1b6008604051806020016040529081600082015481525050614a83565b905090565b60128060000154905081565b600f6020528160005260406000208181548110612b4557fe5b90600052602060002090600a0201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160149054906101000a900460ff169080600201549080600301604051806020016040529081600082015481525050908060040160405180602001604052908160008201548152505090806005016040518060200160405290816000820154815250509080600601604051806020016040529081600082015481525050908060070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600801604051806020016040529081600082015481525050908060090160405180602001604052908160008201548152505090508b565b60108060000154905081565b60066020528060005260406000206000915090508060000160405180602001604052908160008201548152505090806001015490806002016040518060200160405290816000820154815250509080600301604051806020016040529081600082015481525050908060040154905085565b612d0b6147e9565b33612d1581614836565b612d1d614888565b612d256148d9565b612d9f612d326000614abb565b612d91600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301604051806020016040529081600082015481525050614a83565b615a2f90919063ffffffff16565b612dde576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612dd590617ecc565b60405180910390fd5b6000612de933614912565b90506000816004015414158015612e0b5750612e03611367565b816004015411155b612e4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612e4190617e0c565b60405180910390fd5b6000816004018190555080600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820181600001600082015481600001555050600182015481600101556002820181600201600082015481600001555050600382018160030160008201548160000155505060048201548160040155905050600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160008082016000905550506001820160009055600282016000808201600090555050600382016000808201600090555050600482016000905550508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167ff1a2dcf23621f1a96185c79d39a5776b5ba3dadbea70c5aa86d84c17c7e9418e60405160405180910390a38273ffffffffffffffffffffffffffffffffffffffff167ff60993fa76f94c9e0a803526ee6e1314814ed4d2b0d223febf1436b36897fb3760405160405180910390a23373ffffffffffffffffffffffffffffffffffffffff167fcad20625296d189a6fc6e5b39d0d544e5bd99dbda0c8f2f0ecffef3e0fbcc28260405160405180910390a25061304f614a17565b5050565b60158060000154905081565b613067616942565b61306f6147e9565b3361307981614836565b6130816125f6565b5061308a614888565b6130926148d9565b600061309d33614912565b90506130ca8160000160405180602001604052908160008201548152505085614f9b90919063ffffffff16565b1561310a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161310190617cac565b60405180910390fd5b613112616942565b61313d8260000160405180602001604052908160008201548152505086614c6790919063ffffffff16565b9050613147616942565b61317a61316b84600301604051806020016040529081600082015481525050614a83565b83614b4290919063ffffffff16565b90506131a78684600001604051806020016040529081600082015481525050615a2f90919063ffffffff16565b156131bc576131b533615a44565b94506132b1565b6131c68382614fb0565b94506131d0616942565b6131fb8785600001604051806020016040529081600082015481525050614b0990919063ffffffff16565b9050613226600d60405180602001604052908160008201548152505082614b8c90919063ffffffff16565b613265576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161325c90617d0c565b60405180910390fd5b8084600001600082015181600001559050506132a0876007604051806020016040529081600082015481525050614b0990919063ffffffff16565b600760008201518160000155905050505b856000015185600001513373ffffffffffffffffffffffffffffffffffffffff167fe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a92960405160405180910390a461334f338660000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16614fd99092919063ffffffff16565b6133a233308860000151600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661498e909392919063ffffffff16565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c6887600001516040518263ffffffff1660e01b8152600401613401919061809a565b600060405180830381600087803b15801561341b57600080fd5b505af115801561342f573d6000803e3d6000fd5b5050505050505061343e614a17565b50919050565b61344c6147e9565b6134546125f6565b5061345d614888565b6134656148d9565b61346f8282615c2a565b6134ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016134a590617e8c565b60405180910390fd5b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816001015414613538576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161352f90617dcc565b60405180910390fd5b61356460008260000160405180602001604052908160008201548152505061580490919063ffffffff16565b1561361557613592600d60405180602001604052908160008201548152505083614b8c90919063ffffffff16565b6135d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016135c890617d0c565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167ff60993fa76f94c9e0a803526ee6e1314814ed4d2b0d223febf1436b36897fb3760405160405180910390a25b61361f8184614965565b5061364b8282600001604051806020016040529081600082015481525050614e7990919063ffffffff16565b8160000160008201518160000155905050613685826007604051806020016040529081600082015481525050614e7990919063ffffffff16565b600760008201518160000155905050816000015183600001513373ffffffffffffffffffffffffffffffffffffffff167f4b82aa16e071a61de1a6b9aeec9edab0356331f8122c78683b469ac8e685dabc60405160405180910390a461373433308560000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661498e909392919063ffffffff16565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f193384600001516040518363ffffffff1660e01b815260040161379592919061793b565b602060405180830381600087803b1580156137af57600080fd5b505af11580156137c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506137e79190810190616b9f565b613826576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161381d90617e4c565b60405180910390fd5b5061382f614a17565b5050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b613861615ca6565b61386961505f565b6138716125f6565b5061387a614888565b6138826148d9565b6001600560006101000a81548160ff021916908360028111156138a157fe5b02179055506138b7306138b2614ba2565b615cf4565b6138c2600b5461519b565b3373ffffffffffffffffffffffffffffffffffffffff167f18600820405d6cf356e3556301762ca32395e72d8c81494fa344835c9da3633d60405160405180910390a261390d614a17565b565b613917616942565b61391f614888565b6139276157bf565b905090565b600560009054906101000a900460ff1681565b60088060000154905081565b600d8060000154905081565b600a5481565b613965616942565b61396d614888565b6139cc600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301604051806020016040529081600082015481525050614a83565b9050919050565b600b5481565b600c5481565b60606139e9614888565b600f60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015613c6857838290600052602060002090600a0201604051806101600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160149054906101000a900460ff166004811115613b3657fe5b6004811115613b4157fe5b8152602001600282015481526020016003820160405180602001604052908160008201548152505081526020016004820160405180602001604052908160008201548152505081526020016005820160405180602001604052908160008201548152505081526020016006820160405180602001604052908160008201548152505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600882016040518060200160405290816000820154815250508152602001600982016040518060200160405290816000820154815250508152505081526020019060010190613a48565b505050509050919050565b613c7b616942565b8282613c878282615f30565b613c8f6125f6565b50613c98614888565b613ca06148d9565b6000613cac85876152d9565b9050613cb6616942565b613d29613cda83600601604051806020016040529081600082015481525050614a83565b613d1b601360405180602001604052908160008201548152505085600401604051806020016040529081600082015481525050614b4290919063ffffffff16565b614b4290919063ffffffff16565b9050613d36601082614eb2565b5060028260010160146101000a81548160ff02191690836004811115613d5857fe5b0217905550338260070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613dad826002015461519b565b3373ffffffffffffffffffffffffffffffffffffffff168260010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fcaca181ccad7979cf36ed4fc921e496001ab5264608f0fac7007ae1b43d361028a8560000151604051613e4b9291906180ec565b60405180910390a4613e7e8260090160405180602001604052908160008201548152505082614e7990919063ffffffff16565b9450613ea23383600901604051806020016040529081600082015481525050615cf4565b613ef533308360000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661498e909392919063ffffffff16565b5050613eff614a17565b505092915050565b613f0f6147e9565b613f17614888565b613f1f6148d9565b6000613f2a33614912565b9050600081600401541415613f74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613f6b90617c6c565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff167f2e5702420c76e041698ad7ba57a9ff5cadccf647ea8d96e6007a40b5b2662f5660405160405180910390a26000816004018190555050613fca614a17565b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b613ffa6147e9565b3361400481614836565b61400c614888565b6140146148d9565b600061401f33614912565b90506140356000846148f590919063ffffffff16565b8015614070575061406f61406082600301604051806020016040529081600082015481525050614a83565b84614af390919063ffffffff16565b5b6140af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016140a690617d4c565b60405180910390fd5b60006140cd600c546140bf611367565b61569890919063ffffffff16565b9050600b548110614113576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161410a90617f2c565b60405180910390fd5b80826001018190555083826002016000820151816000015590505083600001513373ffffffffffffffffffffffffffffffffffffffff167fd33b726e11d2c5d38e6702b16613df0160a07f7ba5185455ee3c45d0494fab1160405160405180910390a35050614180614a17565b5050565b61418c6147e9565b614194614888565b61419c6148d9565b6141a4614a17565b565b60148060000154905081565b6141bc3382610853565b50565b60048060000154905081565b600e8060000154905081565b6141df616942565b6141e7615ca6565b6141ef6125f6565b506141f8614888565b6142006148d9565b6000600281111561420d57fe5b600560009054906101000a900460ff16600281111561422857fe5b1415614269576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161426090617fac565b60405180910390fd5b60028081111561427557fe5b600560009054906101000a900460ff16600281111561429057fe5b146142d4576142a0600b54615fc7565b600e600082015181600001559050506002600560006101000a81548160ff021916908360028111156142ce57fe5b02179055505b6142dc616942565b6040518060200160405280600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016143429190617920565b60206040518083038186803b15801561435a57600080fd5b505afa15801561436e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506143929190810190616ce4565b815250905061439f616942565b6143c8600e60405180602001604052908160008201548152505083614b4290919063ffffffff16565b90506000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050614441600061443383600301604051806020016040529081600082015481525050614a83565b6148f590919063ffffffff16565b156145e15761444e616942565b61448f600e60405180602001604052908160008201548152505083600001604051806020016040529081600082015481525050614b4290919063ffffffff16565b9050614499616942565b6144ba83600301604051806020016040529081600082015481525050614a83565b90506144c4616942565b6144d7828461615e90919063ffffffff16565b6144f05760405180602001604052806000815250614504565b6145038383614b0990919063ffffffff16565b5b90506145198186614e7990919063ffffffff16565b9450600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160008082016000905550506001820160009055600282016000808201600090555050600382016000808201600090555050600482016000905550503373ffffffffffffffffffffffffffffffffffffffff167fcad20625296d189a6fc6e5b39d0d544e5bd99dbda0c8f2f0ecffef3e0fbcc28260405160405180910390a25050505b6145e9616942565b61461161460b6008604051806020016040529081600082015481525050614a83565b84614a5c565b905061461e6008826155e7565b9450614649846007604051806020016040529081600082015481525050614b0990919063ffffffff16565b600760008201518160000155905050836000015185600001513373ffffffffffffffffffffffffffffffffffffffff167f9d349c102bec959fb7f20f9a3621e015819d3ae4ed6e9afd1f56a69d5845600660405160405180910390a46146f6338660000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16614fd99092919063ffffffff16565b61474933308660000151600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661498e909392919063ffffffff16565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342966c6885600001516040518263ffffffff1660e01b81526004016147a8919061809a565b600060405180830381600087803b1580156147c257600080fd5b505af11580156147d6573d6000803e3d6000fd5b50505050505050506147e6614a17565b90565b600b546147f4611367565b10614834576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161482b90617eec565b60405180910390fd5b565b600061484182614912565b6001015414614885576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161487c90617dcc565b60405180910390fd5b50565b600060149054906101000a900460ff166148d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016148ce90617f8c565b60405180910390fd5b565b60008060146101000a81548160ff021916908315150217905550565b600061490082614abb565b60000151836000015111905092915050565b60008161491e81616173565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020915050919050565b61496d616942565b61497a8360030183614eb2565b50614986600883614eb2565b905092915050565b614a11846323b872dd60e01b8585856040516024016149af93929190617a38565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050616227565b50505050565b6001600060146101000a81548160ff021916908315150217905550565b614a3e6000614abb565b81600201600082015181600001559050506000816001018190555050565b614a64616942565b8160000151836000015110614a795781614a7b565b825b905092915050565b614a8b616942565b614ab4600460405180602001604052908160008201548152505083614b4290919063ffffffff16565b9050919050565b614ac3616942565b6040518060200160405280614ae9670de0b6b3a7640000856162ee90919063ffffffff16565b8152509050919050565b6000816000015183600001511115905092915050565b614b11616942565b6040518060200160405280614b378460000151866000015161635e90919063ffffffff16565b815250905092915050565b614b4a616942565b6040518060200160405280670de0b6b3a7640000614b79856000015187600001516162ee90919063ffffffff16565b81614b8057fe5b04815250905092915050565b6000816000015183600001511015905092915050565b614baa616942565b6000614bb46156ed565b90508073ffffffffffffffffffffffffffffffffffffffff16635b97aadd600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401614c119190617905565b60206040518083038186803b158015614c2957600080fd5b505afa158015614c3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250614c619190810190616c1a565b91505090565b614c6f616942565b6040518060200160405280614caf8460000151614ca1670de0b6b3a764000088600001516162ee90919063ffffffff16565b6163a890919063ffffffff16565b815250905092915050565b6000614cc585614912565b9050614cf28160000160405180602001604052908160008201548152505085615a2f90919063ffffffff16565b8015614d2d5750614d2c83614d1e83600301604051806020016040529081600082015481525050614a83565b615a2f90919063ffffffff16565b5b15614d4257614d3b85615a44565b5050614e73565b614d4c8184614fb0565b50614d55616942565b614d808583600001604051806020016040529081600082015481525050614b0990919063ffffffff16565b9050614dab600d60405180602001604052908160008201548152505082614b8c90919063ffffffff16565b614dea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401614de190617d0c565b60405180910390fd5b808260000160008201518160000155905050614e278383600201604051806020016040529081600082015481525050614b0990919063ffffffff16565b8260020160008201518160000155905050614e61856007604051806020016040529081600082015481525050614b0990919063ffffffff16565b60076000820151816000015590505050505b50505050565b614e81616942565b6040518060200160405280614ea78460000151866000015161569890919063ffffffff16565b815250905092915050565b614eba616942565b614ec2616942565b614ee084604051806020016040529081600082015481525050614a83565b9050614eea616942565b614ef384614f63565b9050614f1d8186604051806020016040529081600082015481525050614e7990919063ffffffff16565b600001518560000181905550614f5982614f4b87604051806020016040529081600082015481525050614a83565b614b0990919063ffffffff16565b9250505092915050565b614f6b616942565b614f94600460405180602001604052908160008201548152505083614c6790919063ffffffff16565b9050919050565b60008160000151836000015111905092915050565b614fb8616942565b614fc583600301836155e7565b50614fd16008836155e7565b905092915050565b61505a8363a9059cbb60e01b8484604051602401614ff8929190617a98565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050616227565b505050565b6000600281111561506c57fe5b600560009054906101000a900460ff16600281111561508757fe5b146150c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016150be90617ccc565b60405180910390fd5b565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f46696e616e6369616c436f6e74726163747341646d696e0000000000000000006040518263ffffffff1660e01b81526004016151469190617b1a565b60206040518083038186803b15801561515e57600080fd5b505afa158015615172573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506151969190810190616a87565b905090565b60006151a56163f2565b90508073ffffffffffffffffffffffffffffffffffffffff166368ad8ae3600a54846040518363ffffffff1660e01b81526004016151e4929190617b35565b600060405180830381600087803b1580156151fe57600080fd5b505af1158015615212573d6000803e3d6000fd5b505050505050565b600061522682846152d9565b905060008160010160149054906101000a900460ff1690506001600481111561524b57fe5b81600481111561525757fe5b11806152945750615266611367565b61526f836164c4565b1115801561529357506001600481111561528557fe5b81600481111561529157fe5b145b5b6152d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016152ca90617c0c565b60405180910390fd5b50505050565b600080600f60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905080805490508310801561537157506000600481111561533857fe5b81848154811061534457fe5b90600052602060002090600a020160010160149054906101000a900460ff16600481111561536e57fe5b14155b6153b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016153a790617d2c565b60405180910390fd5b8083815481106153bc57fe5b90600052602060002090600a020191505092915050565b60006153df82846152d9565b9050600260048111156153ee57fe5b8160010160149054906101000a900460ff16600481111561540b57fe5b1461541657506155e3565b6154238160020154615fc7565b816008016000820151816000015590505061543c616942565b61547f8260080160405180602001604052908160008201548152505083600301604051806020016040529081600082015481525050614b4290919063ffffffff16565b9050615489616942565b6154b2601260405180602001604052908160008201548152505083614b4290919063ffffffff16565b905060006154e18285600501604051806020016040529081600082015481525050614b8c90919063ffffffff16565b9050806154ef5760046154f2565b60035b8460010160146101000a81548160ff0219169083600481111561551157fe5b02179055508360010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6c5582199868fabbe697f9ea10abe481bacf53ac78c02a965b34dff82fd20e3b8760070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168a866040516155d693929190617ac1565b60405180910390a4505050505b5050565b6155ef616942565b6155f7616942565b61561584604051806020016040529081600082015481525050614a83565b905061561f616942565b61562884614f63565b90506156528186604051806020016040529081600082015481525050614b0990919063ffffffff16565b60000151856000018190555061568e61567f86604051806020016040529081600082015481525050614a83565b83614b0990919063ffffffff16565b9250505092915050565b6000808284019050838110156156e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016156da90617c4c565b60405180910390fd5b8091505092915050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f53746f72650000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040161576a9190617b1a565b60206040518083038186803b15801561578257600080fd5b505afa158015615796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506157ba9190810190616a87565b905090565b6157c7616942565b6157ff6157e96010604051806020016040529081600082015481525050614a83565b6157f16164e6565b614e7990919063ffffffff16565b905090565b600061580f82614abb565b60000151836000015114905092915050565b615829616942565b61583c828461651290919063ffffffff16565b905061588261585d8261584f6001614abb565b614b0990919063ffffffff16565b6004604051806020016040529081600082015481525050614b4290919063ffffffff16565b600460008201518160000155905050505050565b6000615935828573ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30876040518363ffffffff1660e01b81526004016158d7929190617964565b60206040518083038186803b1580156158ef57600080fd5b505afa158015615903573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506159279190810190616ce4565b61569890919063ffffffff16565b90506159b88463095ea7b360e01b8584604051602401615956929190617a98565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050616227565b50505050565b6159c6616942565b6159d383600301836155e7565b506159dd836165c2565b615a1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401615a1390617e8c565b60405180910390fd5b615a276008836155e7565b905092915050565b60008160000151836000015114905092915050565b615a4c616942565b6000615a5783614912565b9050615a61616942565b615a806008604051806020016040529081600082015481525050614a83565b9050615a8a616942565b826003016040518060200160405290816000820154815250509050615ace816008604051806020016040529081600082015481525050614b0990919063ffffffff16565b600860008201518160000155905050615b1e836000016040518060200160405290816000820154815250506007604051806020016040529081600082015481525050614b0990919063ffffffff16565b600760008201518160000155905050600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160008082016000905550506001820160009055600282016000808201600090555050600382016000808201600090555050600482016000905550508473ffffffffffffffffffffffffffffffffffffffff167fcad20625296d189a6fc6e5b39d0d544e5bd99dbda0c8f2f0ecffef3e0fbcc28260405160405180910390a2615c20615c116008604051806020016040529081600082015481525050614a83565b83614b0990919063ffffffff16565b9350505050919050565b6000615c34616942565b615c72615c566008604051806020016040529081600082015481525050614a83565b600760405180602001604052908160008201548152505061660d565b9050615c7c616942565b615c86858561660d565b9050615c9b8183614f9b90919063ffffffff16565b159250505092915050565b600b54615cb1611367565b1015615cf2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401615ce990617f0c565b60405180910390fd5b565b615d0860008261580490919063ffffffff16565b15615d1257615f2c565b3073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614615d9d57615d9882308360000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661498e909392919063ffffffff16565b615e0d565b615da5616942565b615dad6157bf565b9050615dc28282614f9b90919063ffffffff16565b615e01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401615df890617fec565b60405180910390fd5b615e0b8282615821565b505b80600001517f4f9bf7e8cd0f2456f9c43d2597bedcf1446c9c64544053f1ece6423ae9a07e5260405160405180910390a26000615e486156ed565b9050615e9b818360000151600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166158969092919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff16638659d232600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b8152600401615ef8929190617a6f565b600060405180830381600087803b158015615f1257600080fd5b505af1158015615f26573d6000803e3d6000fd5b50505050505b5050565b6000615f3c82846152d9565b9050615f47816164c4565b615f4f611367565b108015615f83575060016004811115615f6457fe5b8160010160149054906101000a900460ff166004811115615f8157fe5b145b615fc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401615fb990617d8c565b60405180910390fd5b505050565b615fcf616942565b6000615fd96163f2565b90508073ffffffffffffffffffffffffffffffffffffffff1663a03e881a600a54856040518363ffffffff1660e01b8152600401616018929190617b35565b60206040518083038186803b15801561603057600080fd5b505afa158015616044573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506160689190810190616b9f565b6160a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161609e90617cec565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff1663c9280f06600a54866040518363ffffffff1660e01b81526004016160e6929190617b35565b60206040518083038186803b1580156160fe57600080fd5b505afa158015616112573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506161369190810190616bc8565b9050600081121561614657600090505b60405180602001604052808281525092505050919050565b60008160000151836000015110905092915050565b6161e560006161d7600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301604051806020016040529081600082015481525050614a83565b6148f590919063ffffffff16565b616224576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161621b90617d6c565b60405180910390fd5b50565b6060616289826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661665a9092919063ffffffff16565b90506000815111156162e957808060200190516162a99190810190616b9f565b6162e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016162df90617f6c565b60405180910390fd5b5b505050565b6000808314156163015760009050616358565b600082840290508284828161631257fe5b0414616353576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161634a90617dac565b60405180910390fd5b809150505b92915050565b60006163a083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250616672565b905092915050565b60006163ea83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506166cd565b905092915050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f4f7261636c6500000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040161646f9190617b1a565b60206040518083038186803b15801561648757600080fd5b505afa15801561649b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506164bf9190810190616a87565b905090565b60006164df601154836002015461569890919063ffffffff16565b9050919050565b6164ee616942565b61650d6008604051806020016040529081600082015481525050614a83565b905090565b61651a616942565b600061653b670de0b6b3a764000085600001516162ee90919063ffffffff16565b905060006165568460000151836163a890919063ffffffff16565b9050600061657185600001518461672e90919063ffffffff16565b9050600081146165a757604051806020016040528061659a60018561569890919063ffffffff16565b81525093505050506165bc565b60405180602001604052808381525093505050505b92915050565b60006166066165e883600301604051806020016040529081600082015481525050614a83565b83600001604051806020016040529081600082015481525050615c2a565b9050919050565b616615616942565b6166296000836148f590919063ffffffff16565b61663e576166376000614abb565b9050616654565b6166518284614c6790919063ffffffff16565b90505b92915050565b60606166698484600085616778565b90509392505050565b60008383111582906166ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016166b19190617bca565b60405180910390fd5b5060008385039050809150509392505050565b60008083118290616714576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161670b9190617bca565b60405180910390fd5b50600083858161672057fe5b049050809150509392505050565b600061677083836040518060400160405280601881526020017f536166654d6174683a206d6f64756c6f206279207a65726f000000000000000081525061689b565b905092915050565b6060616783856168f7565b6167c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016167b990617eac565b60405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040516167ec91906178ee565b60006040518083038185875af1925050503d8060008114616829576040519150601f19603f3d011682016040523d82523d6000602084013e61682e565b606091505b50915091508115616843578092505050616893565b6000815111156168565780518082602001fd5b836040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161688a9190617bca565b60405180910390fd5b949350505050565b60008083141582906168e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016168da9190617bca565b60405180910390fd5b508284816168ed57fe5b0690509392505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561693957506000801b8214155b92505050919050565b6040518060200160405280600081525090565b600081359050616964816183c1565b92915050565b600081519050616979816183c1565b92915050565b60008151905061698e816183d8565b92915050565b6000815190506169a3816183ef565b92915050565b6000602082840312156169bb57600080fd5b81905092915050565b6000602082840312156169d657600080fd5b6169e06020618183565b905060006169f084828501616a34565b60008301525092915050565b600060208284031215616a0e57600080fd5b616a186020618183565b90506000616a2884828501616a49565b60008301525092915050565b600081359050616a4381618406565b92915050565b600081519050616a5881618406565b92915050565b600060208284031215616a7057600080fd5b6000616a7e84828501616955565b91505092915050565b600060208284031215616a9957600080fd5b6000616aa78482850161696a565b91505092915050565b600080600080600060a08688031215616ac857600080fd5b6000616ad688828901616955565b9550506020616ae7888289016169a9565b9450506040616af8888289016169a9565b9350506060616b09888289016169a9565b9250506080616b1a88828901616a34565b9150509295509295909350565b60008060408385031215616b3a57600080fd5b6000616b4885828601616955565b9250506020616b59858286016169c4565b9150509250929050565b60008060408385031215616b7657600080fd5b6000616b8485828601616955565b9250506020616b9585828601616a34565b9150509250929050565b600060208284031215616bb157600080fd5b6000616bbf8482850161697f565b91505092915050565b600060208284031215616bda57600080fd5b6000616be884828501616994565b91505092915050565b600060208284031215616c0357600080fd5b6000616c11848285016169c4565b91505092915050565b600060208284031215616c2c57600080fd5b6000616c3a848285016169fc565b91505092915050565b60008060408385031215616c5657600080fd5b6000616c64858286016169c4565b9250506020616c75858286016169c4565b9150509250929050565b60008060408385031215616c9257600080fd5b6000616ca0858286016169fc565b9250506020616cb1858286016169fc565b9150509250929050565b600060208284031215616ccd57600080fd5b6000616cdb84828501616a34565b91505092915050565b600060208284031215616cf657600080fd5b6000616d0484828501616a49565b91505092915050565b60008060408385031215616d2057600080fd5b6000616d2e85828601616a34565b9250506020616d3f85828601616955565b9150509250929050565b6000616d55838361779b565b6101608301905092915050565b616d6b8161829d565b82525050565b616d7a8161821b565b82525050565b616d898161821b565b82525050565b6000616d9a826181c0565b616da481856181ee565b9350616daf836181b0565b8060005b83811015616de0578151616dc78882616d49565b9750616dd2836181e1565b925050600181019050616db3565b5085935050505092915050565b616df68161822d565b82525050565b616e0581618239565b82525050565b6000616e16826181cb565b616e2081856181ff565b9350616e30818560208601618363565b80840191505092915050565b616e45816182af565b82525050565b616e54816182d3565b82525050565b616e63816182f7565b82525050565b616e728161831b565b82525050565b616e818161832d565b82525050565b616e908161832d565b82525050565b6000616ea1826181d6565b616eab818561820a565b9350616ebb818560208601618363565b616ec481618396565b840191505092915050565b6000616edc60198361820a565b91507f496e76616c6964207769746864726177616c20616d6f756e74000000000000006000830152602082019050919050565b6000616f1c601c8361820a565b91507f4c69717569646174696f6e206e6f7420776974686472617761626c65000000006000830152602082019050919050565b6000616f5c601e8361820a565b91507f43616c6c65722063616e6e6f74207769746864726177207265776172647300006000830152602082019050919050565b6000616f9c601b8361820a565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b6000616fdc60138361820a565b91507f4e6f2070656e64696e67207472616e73666572000000000000000000000000006000830152602082019050919050565b600061701c60148361820a565b91507f4d696e656420616674657220646561646c696e650000000000000000000000006000830152602082019050919050565b600061705c60148361820a565b91507f496e76616c696420746f6b656e20616d6f756e740000000000000000000000006000830152602082019050919050565b600061709c601a8361820a565b91507f436f6e7472616374207374617465206973206e6f74204f50454e0000000000006000830152602082019050919050565b60006170dc60178361820a565b91507f556e7265736f6c766564206f7261636c652070726963650000000000000000006000830152602082019050919050565b600061711c601e8361820a565b91507f42656c6f77206d696e696d756d2073706f6e736f7220706f736974696f6e00006000830152602082019050919050565b600061715c60168361820a565b91507f496e76616c6964206c69717569646174696f6e204944000000000000000000006000830152602082019050919050565b600061719c60198361820a565b91507f496e76616c696420636f6c6c61746572616c20616d6f756e74000000000000006000830152602082019050919050565b60006171dc601a8361820a565b91507f506f736974696f6e20686173206e6f20636f6c6c61746572616c0000000000006000830152602082019050919050565b600061721c601a8361820a565b91507f4c69717569646174696f6e206e6f742064697370757461626c650000000000006000830152602082019050919050565b600061725c60218361820a565b91507f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60008301527f77000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006172c260128361820a565b91507f50656e64696e67207769746864726177616c00000000000000000000000000006000830152602082019050919050565b600061730260188361820a565b91507f496e76616c6964207769746864726177207265717565737400000000000000006000830152602082019050919050565b600061734260188361820a565b91507f496e76616c6964207472616e73666572207265717565737400000000000000006000830152602082019050919050565b600061738260138361820a565b91507f43616c6c6572206e6f7420476f7665726e6f72000000000000000000000000006000830152602082019050919050565b60006173c2601f8361820a565b91507f4d696e74696e672073796e74686574696320746f6b656e73206661696c6564006000830152602082019050919050565b6000617402601e8361820a565b91507f4352206973206d6f7265207468616e206d6178206c69712e20707269636500006000830152602082019050919050565b6000617442600c8361820a565b91507f43522062656c6f772047435200000000000000000000000000000000000000006000830152602082019050919050565b6000617482601d8361820a565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b60006174c2601c8361820a565b91507f53706f6e736f7220616c72656164792068617320706f736974696f6e000000006000830152602082019050919050565b600061750260188361820a565b91507f4f6e6c792063616c6c61626c65207072652d65787069727900000000000000006000830152602082019050919050565b600061754260198361820a565b91507f4f6e6c792063616c6c61626c6520706f73742d657870697279000000000000006000830152602082019050919050565b6000617582601b8361820a565b91507f52657175657374206578706972657320706f73742d65787069727900000000006000830152602082019050919050565b60006175c2601e8361820a565b91507f4352206973206c657373207468616e206d696e206c69712e20707269636500006000830152602082019050919050565b6000617602602a8361820a565b91507f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008301527f6f742073756363656564000000000000000000000000000000000000000000006020830152604082019050919050565b6000617668601f8361820a565b91507f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006000830152602082019050919050565b60006176a860128361820a565b91507f556e6578706972656420706f736974696f6e00000000000000000000000000006000830152602082019050919050565b60006176e860108361820a565b91507f50656e64696e67207472616e73666572000000000000000000000000000000006000830152602082019050919050565b6000617728601a8361820a565b91507f46696e616c20666565206973206d6f7265207468616e205066430000000000006000830152602082019050919050565b600061776860158361820a565b91507f4e6f2070656e64696e67207769746864726177616c00000000000000000000006000830152602082019050919050565b610160820160008201516177b26000850182616d71565b5060208201516177c56020850182616d71565b5060408201516177d86040850182616e78565b5060608201516177eb60608501826178d0565b5060808201516177fe6080850182617898565b5060a082015161781160a0850182617898565b5060c082015161782460c0850182617898565b5060e082015161783760e0850182617898565b5061010082015161784c610100850182616d71565b50610120820151617861610120850182617898565b50610140820151617876610140850182617898565b50505050565b60208201600082015161789260008501826178d0565b50505050565b6020820160008201516178ae60008501826178d0565b50505050565b6020820160008201516178ca60008501826178d0565b50505050565b6178d981618293565b82525050565b6178e881618293565b82525050565b60006178fa8284616e0b565b915081905092915050565b600060208201905061791a6000830184616d80565b92915050565b60006020820190506179356000830184616d62565b92915050565b60006040820190506179506000830185616d62565b61795d60208301846178df565b9392505050565b60006040820190506179796000830185616d80565b6179866020830184616d80565b9392505050565b6000610160820190506179a3600083018e616d80565b6179b0602083018d616d80565b6179bd604083018c616e87565b6179ca606083018b6178df565b6179d7608083018a6178b4565b6179e460a08301896178b4565b6179f160c08301886178b4565b6179fe60e08301876178b4565b617a0c610100830186616d80565b617a1a6101208301856178b4565b617a286101408301846178b4565b9c9b505050505050505050505050565b6000606082019050617a4d6000830186616d80565b617a5a6020830185616d80565b617a6760408301846178df565b949350505050565b6000604082019050617a846000830185616d80565b617a91602083018461787c565b9392505050565b6000604082019050617aad6000830185616d80565b617aba60208301846178df565b9392505050565b6000606082019050617ad66000830186616d80565b617ae360208301856178df565b617af06040830184616ded565b949350505050565b60006020820190508181036000830152617b128184616d8f565b905092915050565b6000602082019050617b2f6000830184616dfc565b92915050565b6000604082019050617b4a6000830185616dfc565b617b5760208301846178df565b9392505050565b6000602082019050617b736000830184616e3c565b92915050565b6000602082019050617b8e6000830184616e4b565b92915050565b6000602082019050617ba96000830184616e5a565b92915050565b6000602082019050617bc46000830184616e69565b92915050565b60006020820190508181036000830152617be48184616e96565b905092915050565b60006020820190508181036000830152617c0581616ecf565b9050919050565b60006020820190508181036000830152617c2581616f0f565b9050919050565b60006020820190508181036000830152617c4581616f4f565b9050919050565b60006020820190508181036000830152617c6581616f8f565b9050919050565b60006020820190508181036000830152617c8581616fcf565b9050919050565b60006020820190508181036000830152617ca58161700f565b9050919050565b60006020820190508181036000830152617cc58161704f565b9050919050565b60006020820190508181036000830152617ce58161708f565b9050919050565b60006020820190508181036000830152617d05816170cf565b9050919050565b60006020820190508181036000830152617d258161710f565b9050919050565b60006020820190508181036000830152617d458161714f565b9050919050565b60006020820190508181036000830152617d658161718f565b9050919050565b60006020820190508181036000830152617d85816171cf565b9050919050565b60006020820190508181036000830152617da58161720f565b9050919050565b60006020820190508181036000830152617dc58161724f565b9050919050565b60006020820190508181036000830152617de5816172b5565b9050919050565b60006020820190508181036000830152617e05816172f5565b9050919050565b60006020820190508181036000830152617e2581617335565b9050919050565b60006020820190508181036000830152617e4581617375565b9050919050565b60006020820190508181036000830152617e65816173b5565b9050919050565b60006020820190508181036000830152617e85816173f5565b9050919050565b60006020820190508181036000830152617ea581617435565b9050919050565b60006020820190508181036000830152617ec581617475565b9050919050565b60006020820190508181036000830152617ee5816174b5565b9050919050565b60006020820190508181036000830152617f05816174f5565b9050919050565b60006020820190508181036000830152617f2581617535565b9050919050565b60006020820190508181036000830152617f4581617575565b9050919050565b60006020820190508181036000830152617f65816175b5565b9050919050565b60006020820190508181036000830152617f85816175f5565b9050919050565b60006020820190508181036000830152617fa58161765b565b9050919050565b60006020820190508181036000830152617fc58161769b565b9050919050565b60006020820190508181036000830152617fe5816176db565b9050919050565b600060208201905081810360008301526180058161771b565b9050919050565b600060208201905081810360008301526180258161775b565b9050919050565b6000602082019050618041600083018461787c565b92915050565b600060a08201905061805c60008301886178b4565b61806960208301876178df565b61807660408301866178b4565b61808360608301856178b4565b61809060808301846178df565b9695505050505050565b60006020820190506180af60008301846178df565b92915050565b60006060820190506180ca60008301866178df565b6180d7602083018561787c565b6180e4604083018461787c565b949350505050565b600060408201905061810160008301856178df565b61810e60208301846178df565b9392505050565b600060608201905061812a60008301866178df565b61813760208301856178df565b618144604083018461787c565b949350505050565b600060608201905061816160008301866178df565b61816e60208301856178df565b61817b60408301846178df565b949350505050565b6000604051905081810181811067ffffffffffffffff821117156181a657600080fd5b8060405250919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600061822682618273565b9050919050565b60008115159050919050565b6000819050919050565b6000819050618251826183a7565b919050565b6000819050618264826183b4565b919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006182a88261833f565b9050919050565b60006182ba826182c1565b9050919050565b60006182cc82618273565b9050919050565b60006182de826182e5565b9050919050565b60006182f082618273565b9050919050565b600061830282618309565b9050919050565b600061831482618273565b9050919050565b600061832682618243565b9050919050565b600061833882618256565b9050919050565b600061834a82618351565b9050919050565b600061835c82618273565b9050919050565b60005b83811015618381578082015181840152602081019050618366565b83811115618390576000848401525b50505050565b6000601f19601f8301169050919050565b600381106183b157fe5b50565b600581106183be57fe5b50565b6183ca8161821b565b81146183d557600080fd5b50565b6183e18161822d565b81146183ec57600080fd5b50565b6183f881618269565b811461840357600080fd5b50565b61840f81618293565b811461841a57600080fd5b50565b600061842882614abb565b6000015183600001511090509291505056fea2646970667358221220f0f8d5a5d2f8ef6ca9e27a520d6c052ccfef1ca8d74593a190c11ee4faa44f4d64736f6c63430006020033";
