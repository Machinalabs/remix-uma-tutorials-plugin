import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { ReentrancyAttack } from "./ReentrancyAttackContractInterface"

export class ReentrancyAttackInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<ReentrancyAttack> {
    return super.deploy(overrides || {}) as Promise<ReentrancyAttack>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ReentrancyAttack {
    return super.attach(address) as ReentrancyAttack
  }
  connect(signer: Signer): ReentrancyAttackInstanceCreator {
    return super.connect(signer) as ReentrancyAttackInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyAttack {
    return new Contract(address, _abi, signerOrProvider) as ReentrancyAttack
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "data",
        type: "bytes4",
      },
    ],
    name: "callSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]

const _bytecode =
  "0x608060405234801561001057600080fd5b50610245806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630a2df1ed14610030575b600080fd5b61007b6004803603602081101561004657600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019092919050505061007d565b005b60003373ffffffffffffffffffffffffffffffffffffffff1682604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061012d578051825260208201915060208101905060208303925061010a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461018f576040519150601f19603f3d011682016040523d82523d6000602084013e610194565b606091505b505090508061020b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f5265656e7472616e637941747461636b3a206661696c65642063616c6c00000081525060200191505060405180910390fd5b505056fea264697066735822122043f80725af96f7bf19768157408a5c9c6a9c322e511f349204dfd3517d520b8a64736f6c63430006020033"
