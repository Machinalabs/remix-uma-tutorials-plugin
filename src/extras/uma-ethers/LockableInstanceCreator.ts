import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Lockable } from "./LockableContractInterface";

export class LockableInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Lockable> {
    return super.deploy(overrides || {}) as Promise<Lockable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Lockable {
    return super.attach(address) as Lockable;
  }
  connect(signer: Signer): LockableInstanceCreator {
    return super.connect(signer) as LockableInstanceCreator;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Lockable {
    return new Contract(address, _abi, signerOrProvider) as Lockable;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode = "";
