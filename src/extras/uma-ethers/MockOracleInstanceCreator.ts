import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { MockOracle } from "./MockOracleContractInterface"

export class MockOracleInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    _finderAddress: string,
    _timerAddress: string,
    overrides?: Overrides
  ): Promise<MockOracle> {
    return super.deploy(_finderAddress, _timerAddress, overrides || {}) as Promise<MockOracle>
  }
  getDeployTransaction(
    _finderAddress: string,
    _timerAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_finderAddress, _timerAddress, overrides || {})
  }
  attach(address: string): MockOracle {
    return super.attach(address) as MockOracle
  }
  connect(signer: Signer): MockOracleInstanceCreator {
    return super.connect(signer) as MockOracleInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockOracle {
    return new Contract(address, _abi, signerOrProvider) as MockOracle
  }
}

const _abi = [
  {
    inputs: [
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
    name: "getPendingQueries",
    outputs: [
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
        internalType: "struct MockOracle.QueryPoint[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
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
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
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
    ],
    name: "hasPrice",
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
    ],
    name: "pushPrice",
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
    ],
    name: "requestPrice",
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
]

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001137380380620011378339818101604052620000379190810190620000d9565b80806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000168565b600081519050620000d3816200014e565b92915050565b60008060408385031215620000ed57600080fd5b6000620000fd85828601620000c2565b92505060206200011085828601620000c2565b9150509250929050565b600062000127826200012e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b62000159816200011a565b81146200016557600080fd5b50565b610fbf80620001786000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806368ad8ae31161005b57806368ad8ae314610101578063a03e881a1461011d578063b555d6081461014d578063c9280f061461016b57610088565b8063051fd48c1461008d5780631c39c38d146100a957806322f8e566146100c757806329cb924d146100e3575b600080fd5b6100a760048036036100a29190810190610b92565b61019b565b005b6100b1610384565b6040516100be9190610da7565b60405180910390f35b6100e160048036036100dc9190810190610be1565b6103a9565b005b6100eb610493565b6040516100f89190610e55565b60405180910390f35b61011b60048036036101169190810190610b56565b610596565b005b61013760048036036101329190810190610b56565b610777565b6040516101449190610de4565b60405180910390f35b610155610855565b6040516101629190610dc2565b60405180910390f35b61018560048036036101809190810190610b56565b6108c8565b6040516101929190610e1a565b60405180910390f35b60405180606001604052806001151581526020018281526020016101bd610493565b81525060026000858152602001908152602001600020600084815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155905050600060036000858152602001908152602001600020600084815260200190815260200160002090508060000160009054906101000a900460ff16610294576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028b90610e35565b60405180910390fd5b600081600101549050600360008681526020019081526020016000206000858152602001908152602001600020600080820160006101000a81549060ff0219169055600182016000905550506000600160048054905003905081811461037c5760006004828154811061030357fe5b9060005260206000209060020201905082600360008360000154815260200190815260200160002060008360010154815260200190815260200160002060010181905550806004848154811061035557fe5b90600052602060002090600202016000820154816000015560018201548160010155905050505b505050505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561040457600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166322f8e566826040518263ffffffff1660e01b815260040161045e9190610e55565b600060405180830381600087803b15801561047857600080fd5b505af115801561048c573d6000803e3d6000fd5b5050505050565b60008073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461058f576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166329cb924d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561055057600080fd5b505afa158015610564573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506105889190810190610c0a565b9050610593565b4290505b90565b61059e6109b4565b73ffffffffffffffffffffffffffffffffffffffff166390978d1b836040518263ffffffff1660e01b81526004016105d69190610dff565b60206040518083038186803b1580156105ee57600080fd5b505afa158015610602573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506106269190810190610b2d565b61062f57600080fd5b600060026000848152602001908152602001600020600083815260200190815260200160002090508060000160009054906101000a900460ff161580156106a8575060036000848152602001908152602001600020600083815260200190815260200160002060000160009054906101000a900460ff16155b1561077257604051806040016040528060011515815260200160048054905081525060036000858152602001908152602001600020600084815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015590505060046040518060400160405280858152602001848152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550505b505050565b60006107816109b4565b73ffffffffffffffffffffffffffffffffffffffff166390978d1b846040518263ffffffff1660e01b81526004016107b99190610dff565b60206040518083038186803b1580156107d157600080fd5b505afa1580156107e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506108099190810190610b2d565b61081257600080fd5b600060026000858152602001908152602001600020600084815260200190815260200160002090508060000160009054906101000a900460ff1691505092915050565b60606004805480602002602001604051908101604052809291908181526020016000905b828210156108bf57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610879565b50505050905090565b60006108d26109b4565b73ffffffffffffffffffffffffffffffffffffffff166390978d1b846040518263ffffffff1660e01b815260040161090a9190610dff565b60206040518083038186803b15801561092257600080fd5b505afa158015610936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061095a9190810190610b2d565b61096357600080fd5b600060026000858152602001908152602001600020600084815260200190815260200160002090508060000160009054906101000a900460ff166109a657600080fd5b806001015491505092915050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aafd5e407f4964656e74696669657257686974656c697374000000000000000000000000006040518263ffffffff1660e01b8152600401610a319190610dff565b60206040518083038186803b158015610a4957600080fd5b505afa158015610a5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610a819190810190610b04565b905090565b600081519050610a9581610f16565b92915050565b600081519050610aaa81610f2d565b92915050565b600081359050610abf81610f44565b92915050565b600081359050610ad481610f5b565b92915050565b600081359050610ae981610f72565b92915050565b600081519050610afe81610f72565b92915050565b600060208284031215610b1657600080fd5b6000610b2484828501610a86565b91505092915050565b600060208284031215610b3f57600080fd5b6000610b4d84828501610a9b565b91505092915050565b60008060408385031215610b6957600080fd5b6000610b7785828601610ab0565b9250506020610b8885828601610ada565b9150509250929050565b600080600060608486031215610ba757600080fd5b6000610bb586828701610ab0565b9350506020610bc686828701610ada565b9250506040610bd786828701610ac5565b9150509250925092565b600060208284031215610bf357600080fd5b6000610c0184828501610ada565b91505092915050565b600060208284031215610c1c57600080fd5b6000610c2a84828501610aef565b91505092915050565b6000610c3f8383610d5a565b60408301905092915050565b610c5481610eba565b82525050565b6000610c6582610e80565b610c6f8185610e98565b9350610c7a83610e70565b8060005b83811015610cab578151610c928882610c33565b9750610c9d83610e8b565b925050600181019050610c7e565b5085935050505092915050565b610cc181610ecc565b82525050565b610cd081610ed8565b82525050565b610cdf81610ed8565b82525050565b610cee81610ee2565b82525050565b6000610d01602d83610ea9565b91507f43616e2774207075736820707269636573207468617420686176656e2774206260008301527f65656e20726571756573746564000000000000000000000000000000000000006020830152604082019050919050565b604082016000820151610d706000850182610cc7565b506020820151610d836020850182610d89565b50505050565b610d9281610f0c565b82525050565b610da181610f0c565b82525050565b6000602082019050610dbc6000830184610c4b565b92915050565b60006020820190508181036000830152610ddc8184610c5a565b905092915050565b6000602082019050610df96000830184610cb8565b92915050565b6000602082019050610e146000830184610cd6565b92915050565b6000602082019050610e2f6000830184610ce5565b92915050565b60006020820190508181036000830152610e4e81610cf4565b9050919050565b6000602082019050610e6a6000830184610d98565b92915050565b6000819050602082019050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610ec582610eec565b9050919050565b60008115159050919050565b6000819050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610f1f81610eba565b8114610f2a57600080fd5b50565b610f3681610ecc565b8114610f4157600080fd5b50565b610f4d81610ed8565b8114610f5857600080fd5b50565b610f6481610ee2565b8114610f6f57600080fd5b50565b610f7b81610f0c565b8114610f8657600080fd5b5056fea26469706673582212208f3769d897bb32b97bf7ca06bb32ab0fd6b348d79e68bf895301cebf9431bb9564736f6c63430006020033"
