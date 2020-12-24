import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { FeePayer } from "./FeePayerContractInterface";

export class FeePayerInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _collateralAddress: string,
    _finderAddress: string,
    _timerAddress: string,
    overrides?: Overrides
  ): Promise<FeePayer> {
    return super.deploy(
      _collateralAddress,
      _finderAddress,
      _timerAddress,
      overrides || {}
    ) as Promise<FeePayer>;
  }
  getDeployTransaction(
    _collateralAddress: string,
    _finderAddress: string,
    _timerAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _collateralAddress,
      _finderAddress,
      _timerAddress,
      overrides || {}
    );
  }
  attach(address: string): FeePayer {
    return super.attach(address) as FeePayer;
  }
  connect(signer: Signer): FeePayerInstanceCreator {
    return super.connect(signer) as FeePayerInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeePayer {
    return new Contract(address, _abi, signerOrProvider) as FeePayer;
  }
}

const _abi = [
  {
    inputs: [
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
];

const _bytecode = "";
