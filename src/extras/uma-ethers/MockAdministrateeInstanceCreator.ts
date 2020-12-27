import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { MockAdministratee } from "./MockAdministrateeContractInterface"

export class MockAdministrateeInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<MockAdministratee> {
    return super.deploy(overrides || {}) as Promise<MockAdministratee>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): MockAdministratee {
    return super.attach(address) as MockAdministratee
  }
  connect(signer: Signer): MockAdministrateeInstanceCreator {
    return super.connect(signer) as MockAdministrateeInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockAdministratee {
    return new Contract(address, _abi, signerOrProvider) as MockAdministratee
  }
}

const _abi = [
  {
    inputs: [],
    name: "emergencyShutdown",
    outputs: [],
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
    name: "timesEmergencyShutdown",
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
    name: "timesRemargined",
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
]

const _bytecode =
  "0x608060405234801561001057600080fd5b5060fc8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060465760003560e01c80633403c2fc14604b5780635d21f153146053578063bda02e7714606f578063bea002bc146077575b600080fd5b60516093565b005b605960a7565b6040518082815260200191505060405180910390f35b607560ad565b005b607d60c0565b6040518082815260200191505060405180910390f35b600160008154809291906001019190505550565b60015481565b6000808154809291906001019190505550565b6000548156fea2646970667358221220238ccede6eeb195c0b74549625e4cb5c893cde131cb32235fe8350a828760f5b64736f6c63430006020033"
