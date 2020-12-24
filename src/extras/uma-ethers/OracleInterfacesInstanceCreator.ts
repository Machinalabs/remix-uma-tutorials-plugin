import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { OracleInterfaces } from "./OracleInterfacesContractInterface";

export class OracleInterfacesInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<OracleInterfaces> {
    return super.deploy(overrides || {}) as Promise<OracleInterfaces>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OracleInterfaces {
    return super.attach(address) as OracleInterfaces;
  }
  connect(signer: Signer): OracleInterfacesInstanceCreator {
    return super.connect(signer) as OracleInterfacesInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OracleInterfaces {
    return new Contract(address, _abi, signerOrProvider) as OracleInterfaces;
  }
}

const _abi = [
  {
    inputs: [],
    name: "FinancialContractsAdmin",
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
    name: "IdentifierWhitelist",
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
    name: "Oracle",
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
    name: "Registry",
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
    name: "Store",
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
];

const _bytecode =
  "0x6101e6610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c80632a71e5b31461006657806342e90c33146100845780634f4a180b146100a25780637db9743b146100c0578063f24a534e146100de575b600080fd5b61006e6100fc565b6040518082815260200191505060405180910390f35b61008c610120565b6040518082815260200191505060405180910390f35b6100aa610144565b6040518082815260200191505060405180910390f35b6100c8610168565b6040518082815260200191505060405180910390f35b6100e661018c565b6040518082815260200191505060405180910390f35b7f46696e616e6369616c436f6e74726163747341646d696e00000000000000000081565b7f53746f726500000000000000000000000000000000000000000000000000000081565b7f4964656e74696669657257686974656c6973740000000000000000000000000081565b7f526567697374727900000000000000000000000000000000000000000000000081565b7f4f7261636c6500000000000000000000000000000000000000000000000000008156fea2646970667358221220db980a08441685aad76817faa09ae6b9e56fdbb88f52d7c34d7031d66874d83f64736f6c63430006020033";
