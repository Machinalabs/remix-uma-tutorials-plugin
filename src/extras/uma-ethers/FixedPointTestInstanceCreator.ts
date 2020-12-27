import { Signer } from "ethers"
import { Provider, TransactionRequest } from "@ethersproject/providers"
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts"

import { FixedPointTest } from "./FixedPointTestContractInterface"

export class FixedPointTestInstanceCreator extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<FixedPointTest> {
    return super.deploy(overrides || {}) as Promise<FixedPointTest>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): FixedPointTest {
    return super.attach(address) as FixedPointTest
  }
  connect(signer: Signer): FixedPointTestInstanceCreator {
    return super.connect(signer) as FixedPointTestInstanceCreator
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FixedPointTest {
    return new Contract(address, _abi, signerOrProvider) as FixedPointTest
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapAdd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapDivCeil",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
    ],
    name: "wrapFromUnscaledUint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapIsEqual",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapIsGreaterThan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapIsGreaterThanOrEqual",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapIsLessThan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapIsLessThanOrEqual",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMax",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedAdd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedDivCeil",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedDivOpposite",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedIsEqual",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedIsGreaterThan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedIsGreaterThanOpposite",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedIsGreaterThanOrEqual",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedIsGreaterThanOrEqualOpposite",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedIsLessThan",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedIsLessThanOpposite",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedIsLessThanOrEqual",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedIsLessThanOrEqualOpposite",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedMul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedMulCeil",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedSub",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMixedSubOpposite",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapMulCeil",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapPow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "wrapSub",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
]

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c82806100206000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80636f486eee1161010f578063928d9cf4116100a2578063de24b20411610071578063de24b20414610a67578063de27b9ba14610ab3578063e9f798ed14610b03578063fb1701cc14610b53576101f0565b8063928d9cf41461092f578063a9ad4e671461097b578063b097c2e1146109c7578063b0c6619514610a17576101f0565b806384ea8404116100de57806384ea8404146107ff57806385ec2dc11461084b5780638b257fde146108975780638de1c54c146108e3576101f0565b80636f486eee146106c7578063778c752214610713578063785baba7146107635780637ec47fc6146107b3576101f0565b80634038dc1c1161018757806355243e9b1161015657806355243e9b146105995780635f2d4b64146105e95780636361b81b146106395780636e1c91ac1461067b576101f0565b80634038dc1c146104655780634c72910c146104b15780634e55787f146104fd5780635043b58a14610549576101f0565b8063305cc77d116101c3578063305cc77d14610329578063308a1af8146103795780633210b59e146103c95780633d5dbce214610419576101f0565b80630169cb43146101f5578063098967cd1461024157806316f0a5fd1461028d578063303cc9a2146102d9575b600080fd5b61022b6004803603604081101561020b57600080fd5b810190808035906020019092919080359060200190929190505050610ba3565b6040518082815260200191505060405180910390f35b6102776004803603604081101561025757600080fd5b810190808035906020019092919080359060200190929190505050610be0565b6040518082815260200191505060405180910390f35b6102c3600480360360408110156102a357600080fd5b810190808035906020019092919080359060200190929190505050610c0f565b6040518082815260200191505060405180910390f35b61030f600480360360408110156102ef57600080fd5b810190808035906020019092919080359060200190929190505050610c3e565b604051808215151515815260200191505060405180910390f35b61035f6004803603604081101561033f57600080fd5b810190808035906020019092919080359060200190929190505050610c69565b604051808215151515815260200191505060405180910390f35b6103af6004803603604081101561038f57600080fd5b810190808035906020019092919080359060200190929190505050610c94565b604051808215151515815260200191505060405180910390f35b6103ff600480360360408110156103df57600080fd5b810190808035906020019092919080359060200190929190505050610cbf565b604051808215151515815260200191505060405180910390f35b61044f6004803603604081101561042f57600080fd5b810190808035906020019092919080359060200190929190505050610cea565b6040518082815260200191505060405180910390f35b61049b6004803603604081101561047b57600080fd5b810190808035906020019092919080359060200190929190505050610d27565b6040518082815260200191505060405180910390f35b6104e7600480360360408110156104c757600080fd5b810190808035906020019092919080359060200190929190505050610d56565b6040518082815260200191505060405180910390f35b6105336004803603604081101561051357600080fd5b810190808035906020019092919080359060200190929190505050610d93565b6040518082815260200191505060405180910390f35b61057f6004803603604081101561055f57600080fd5b810190808035906020019092919080359060200190929190505050610dc2565b604051808215151515815260200191505060405180910390f35b6105cf600480360360408110156105af57600080fd5b810190808035906020019092919080359060200190929190505050610dfb565b604051808215151515815260200191505060405180910390f35b61061f600480360360408110156105ff57600080fd5b810190808035906020019092919080359060200190929190505050610e26565b604051808215151515815260200191505060405180910390f35b6106656004803603602081101561064f57600080fd5b8101908080359060200190929190505050610e5f565b6040518082815260200191505060405180910390f35b6106b16004803603604081101561069157600080fd5b810190808035906020019092919080359060200190929190505050610e75565b6040518082815260200191505060405180910390f35b6106fd600480360360408110156106dd57600080fd5b810190808035906020019092919080359060200190929190505050610ea4565b6040518082815260200191505060405180910390f35b6107496004803603604081101561072957600080fd5b810190808035906020019092919080359060200190929190505050610ee1565b604051808215151515815260200191505060405180910390f35b6107996004803603604081101561077957600080fd5b810190808035906020019092919080359060200190929190505050610f1a565b604051808215151515815260200191505060405180910390f35b6107e9600480360360408110156107c957600080fd5b810190808035906020019092919080359060200190929190505050610f45565b6040518082815260200191505060405180910390f35b6108356004803603604081101561081557600080fd5b810190808035906020019092919080359060200190929190505050610f82565b6040518082815260200191505060405180910390f35b6108816004803603604081101561086157600080fd5b810190808035906020019092919080359060200190929190505050610fb1565b6040518082815260200191505060405180910390f35b6108cd600480360360408110156108ad57600080fd5b810190808035906020019092919080359060200190929190505050610fee565b6040518082815260200191505060405180910390f35b610919600480360360408110156108f957600080fd5b81019080803590602001909291908035906020019092919050505061101d565b6040518082815260200191505060405180910390f35b6109656004803603604081101561094557600080fd5b81019080803590602001909291908035906020019092919050505061104c565b6040518082815260200191505060405180910390f35b6109b16004803603604081101561099157600080fd5b810190808035906020019092919080359060200190929190505050611089565b6040518082815260200191505060405180910390f35b6109fd600480360360408110156109dd57600080fd5b8101908080359060200190929190803590602001909291905050506110b8565b604051808215151515815260200191505060405180910390f35b610a4d60048036036040811015610a2d57600080fd5b8101908080359060200190929190803590602001909291905050506110f1565b604051808215151515815260200191505060405180910390f35b610a9d60048036036040811015610a7d57600080fd5b81019080803590602001909291908035906020019092919050505061112a565b6040518082815260200191505060405180910390f35b610ae960048036036040811015610ac957600080fd5b810190808035906020019092919080359060200190929190505050611167565b604051808215151515815260200191505060405180910390f35b610b3960048036036040811015610b1957600080fd5b810190808035906020019092919080359060200190929190505050611192565b604051808215151515815260200191505060405180910390f35b610b8960048036036040811015610b6957600080fd5b8101908080359060200190929190803590602001909291905050506111bd565b604051808215151515815260200191505060405180910390f35b6000610bd46040518060200160405280848152506040518060200160405280868152506111e890919063ffffffff16565b60000151905092915050565b6000610c038260405180602001604052808681525061120f90919063ffffffff16565b60000151905092915050565b6000610c326040518060200160405280848152508461124490919063ffffffff16565b60000151905092915050565b6000610c616040518060200160405280848152508461126690919063ffffffff16565b905092915050565b6000610c8c8260405180602001604052808681525061128490919063ffffffff16565b905092915050565b6000610cb7604051806020016040528084815250846112a290919063ffffffff16565b905092915050565b6000610ce2604051806020016040528084815250846112bf90919063ffffffff16565b905092915050565b6000610d1b6040518060200160405280848152506040518060200160405280868152506112dd90919063ffffffff16565b60000151905092915050565b6000610d4a8260405180602001604052808681525061133090919063ffffffff16565b60000151905092915050565b6000610d8760405180602001604052808481525060405180602001604052808681525061138090919063ffffffff16565b60000151905092915050565b6000610db6826040518060200160405280868152506113a790919063ffffffff16565b60000151905092915050565b6000610df36040518060200160405280848152506040518060200160405280868152506113dc90919063ffffffff16565b905092915050565b6000610e1e826040518060200160405280868152506113f290919063ffffffff16565b905092915050565b6000610e5760405180602001604052808481525060405180602001604052808681525061140f90919063ffffffff16565b905092915050565b6000610e6a82611424565b600001519050919050565b6000610e988260405180602001604052808681525061145c90919063ffffffff16565b60000151905092915050565b6000610ed560405180602001604052808481525060405180602001604052808681525061149190919063ffffffff16565b60000151905092915050565b6000610f126040518060200160405280848152506040518060200160405280868152506114db90919063ffffffff16565b905092915050565b6000610f3d604051806020016040528084815250846114f190919063ffffffff16565b905092915050565b6000610f7660405180602001604052808481525060405180602001604052808681525061150e90919063ffffffff16565b60000151905092915050565b6000610fa5826040518060200160405280868152506115b990919063ffffffff16565b60000151905092915050565b6000610fe26040518060200160405280848152506040518060200160405280868152506115db90919063ffffffff16565b60000151905092915050565b60006110118260405180602001604052808681525061161490919063ffffffff16565b60000151905092915050565b60006110408260405180602001604052808681525061163690919063ffffffff16565b60000151905092915050565b600061107d60405180602001604052808481525060405180602001604052808681525061165890919063ffffffff16565b60000151905092915050565b60006110ac6040518060200160405280848152508461169190919063ffffffff16565b60000151905092915050565b60006110e96040518060200160405280848152506040518060200160405280868152506116b390919063ffffffff16565b905092915050565b60006111226040518060200160405280848152506040518060200160405280868152506116c890919063ffffffff16565b905092915050565b600061115b6040518060200160405280848152506040518060200160405280868152506116dd90919063ffffffff16565b60000151905092915050565b600061118a8260405180602001604052808681525061178d90919063ffffffff16565b905092915050565b60006111b5826040518060200160405280868152506117aa90919063ffffffff16565b905092915050565b60006111e0826040518060200160405280868152506117c790919063ffffffff16565b905092915050565b6111f0611c18565b81600001518360000151106112055781611207565b825b905092915050565b611217611c18565b60405180602001604052806112398486600001516117e590919063ffffffff16565b815250905092915050565b61124c611c18565b61125e61125884611424565b836112dd565b905092915050565b6000816000015161127684611424565b600001511015905092915050565b600061128f82611424565b6000015183600001511115905092915050565b600081600001516112b284611424565b6000015111905092915050565b600081600001516112cf84611424565b600001511115905092915050565b6112e5611c18565b60405180602001604052806113258460000151611317670de0b6b3a764000088600001516117e590919063ffffffff16565b61186b90919063ffffffff16565b815250905092915050565b611338611c18565b6113426001611424565b905060008090505b828110156113795761135c8285611491565b91506113726001826118b590919063ffffffff16565b905061134a565b5092915050565b611388611c18565b816000015183600001511161139d578161139f565b825b905092915050565b6113af611c18565b60405180602001604052806113d18486600001516117e590919063ffffffff16565b815250905092915050565b6000816000015183600001511015905092915050565b60006113fd82611424565b60000151836000015114905092915050565b60008160000151836000015110905092915050565b61142c611c18565b6040518060200160405280611452670de0b6b3a7640000856117e590919063ffffffff16565b8152509050919050565b611464611c18565b604051806020016040528061148684866000015161186b90919063ffffffff16565b815250905092915050565b611499611c18565b6040518060200160405280670de0b6b3a76400006114c8856000015187600001516117e590919063ffffffff16565b816114cf57fe5b04815250905092915050565b6000816000015183600001511115905092915050565b6000816000015161150184611424565b6000015110905092915050565b611516611c18565b6000611533836000015185600001516117e590919063ffffffff16565b90506000670de0b6b3a7640000828161154857fe5b0490506000611568670de0b6b3a76400008461193d90919063ffffffff16565b90506000811461159e5760405180602001604052806115916001856118b590919063ffffffff16565b81525093505050506115b3565b60405180602001604052808381525093505050505b92915050565b6115c1611c18565b6115d3836115ce84611424565b6115db565b905092915050565b6115e3611c18565b6040518060200160405280611609846000015186600001516118b590919063ffffffff16565b815250905092915050565b61161c611c18565b61162e8361162984611424565b611658565b905092915050565b61163e611c18565b6116508361164b84611424565b6116dd565b905092915050565b611660611c18565b60405180602001604052806116868460000151866000015161198790919063ffffffff16565b815250905092915050565b611699611c18565b6116ab6116a584611424565b83611658565b905092915050565b60008160000151836000015114905092915050565b60008160000151836000015111905092915050565b6116e5611c18565b6000611706670de0b6b3a764000085600001516117e590919063ffffffff16565b9050600061172184600001518361186b90919063ffffffff16565b9050600061173c85600001518461193d90919063ffffffff16565b9050600081146117725760405180602001604052806117656001856118b590919063ffffffff16565b8152509350505050611787565b60405180602001604052808381525093505050505b92915050565b600061179882611424565b60000151836000015111905092915050565b60006117b582611424565b60000151836000015110905092915050565b60006117d282611424565b6000015183600001511015905092915050565b6000808314156117f85760009050611865565b600082840290508284828161180957fe5b0414611860576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611c2c6021913960400191505060405180910390fd5b809150505b92915050565b60006118ad83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506119d1565b905092915050565b600080828401905083811015611933576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600061197f83836040518060400160405280601881526020017f536166654d6174683a206d6f64756c6f206279207a65726f0000000000000000815250611a97565b905092915050565b60006119c983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611b58565b905092915050565b60008083118290611a7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611a42578082015181840152602081019050611a27565b50505050905090810190601f168015611a6f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611a8957fe5b049050809150509392505050565b6000808314158290611b44576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b09578082015181840152602081019050611aee565b50505050905090810190601f168015611b365780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50828481611b4e57fe5b0690509392505050565b6000838311158290611c05576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611bca578082015181840152602081019050611baf565b50505050905090810190601f168015611bf75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b604051806020016040528060008152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220d74845edc7df61af843492e901db23e061a923979ecee3be6cef9147ede4bf1d64736f6c63430006020033"
