import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface FixedPointTestInterface extends ethers.utils.Interface {
  functions: {
    "wrapAdd(uint256,uint256)": FunctionFragment;
    "wrapDiv(uint256,uint256)": FunctionFragment;
    "wrapDivCeil(uint256,uint256)": FunctionFragment;
    "wrapFromUnscaledUint(uint256)": FunctionFragment;
    "wrapIsEqual(uint256,uint256)": FunctionFragment;
    "wrapIsGreaterThan(uint256,uint256)": FunctionFragment;
    "wrapIsGreaterThanOrEqual(uint256,uint256)": FunctionFragment;
    "wrapIsLessThan(uint256,uint256)": FunctionFragment;
    "wrapIsLessThanOrEqual(uint256,uint256)": FunctionFragment;
    "wrapMax(uint256,uint256)": FunctionFragment;
    "wrapMin(uint256,uint256)": FunctionFragment;
    "wrapMixedAdd(uint256,uint256)": FunctionFragment;
    "wrapMixedDiv(uint256,uint256)": FunctionFragment;
    "wrapMixedDivCeil(uint256,uint256)": FunctionFragment;
    "wrapMixedDivOpposite(uint256,uint256)": FunctionFragment;
    "wrapMixedIsEqual(uint256,uint256)": FunctionFragment;
    "wrapMixedIsGreaterThan(uint256,uint256)": FunctionFragment;
    "wrapMixedIsGreaterThanOpposite(uint256,uint256)": FunctionFragment;
    "wrapMixedIsGreaterThanOrEqual(uint256,uint256)": FunctionFragment;
    "wrapMixedIsGreaterThanOrEqualOpposite(uint256,uint256)": FunctionFragment;
    "wrapMixedIsLessThan(uint256,uint256)": FunctionFragment;
    "wrapMixedIsLessThanOpposite(uint256,uint256)": FunctionFragment;
    "wrapMixedIsLessThanOrEqual(uint256,uint256)": FunctionFragment;
    "wrapMixedIsLessThanOrEqualOpposite(uint256,uint256)": FunctionFragment;
    "wrapMixedMul(uint256,uint256)": FunctionFragment;
    "wrapMixedMulCeil(uint256,uint256)": FunctionFragment;
    "wrapMixedSub(uint256,uint256)": FunctionFragment;
    "wrapMixedSubOpposite(uint256,uint256)": FunctionFragment;
    "wrapMul(uint256,uint256)": FunctionFragment;
    "wrapMulCeil(uint256,uint256)": FunctionFragment;
    "wrapPow(uint256,uint256)": FunctionFragment;
    "wrapSub(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "wrapAdd",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapDiv",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapDivCeil",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapFromUnscaledUint",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapIsEqual",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapIsGreaterThan",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapIsGreaterThanOrEqual",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapIsLessThan",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapIsLessThanOrEqual",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMax",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMin",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedAdd",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedDiv",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedDivCeil",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedDivOpposite",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedIsEqual",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedIsGreaterThan",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedIsGreaterThanOpposite",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedIsGreaterThanOrEqual",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedIsGreaterThanOrEqualOpposite",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedIsLessThan",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedIsLessThanOpposite",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedIsLessThanOrEqual",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedIsLessThanOrEqualOpposite",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedMul",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedMulCeil",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedSub",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMixedSubOpposite",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMul",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapMulCeil",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapPow",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapSub",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "wrapAdd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrapDiv", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrapDivCeil",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapFromUnscaledUint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapIsEqual",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapIsGreaterThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapIsGreaterThanOrEqual",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapIsLessThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapIsLessThanOrEqual",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wrapMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrapMin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedAdd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedDiv",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedDivCeil",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedDivOpposite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedIsEqual",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedIsGreaterThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedIsGreaterThanOpposite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedIsGreaterThanOrEqual",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedIsGreaterThanOrEqualOpposite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedIsLessThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedIsLessThanOpposite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedIsLessThanOrEqual",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedIsLessThanOrEqualOpposite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedMul",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedMulCeil",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedSub",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapMixedSubOpposite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wrapMul", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrapMulCeil",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wrapPow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wrapSub", data: BytesLike): Result;

  events: {};
}

export interface FixedPointTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FixedPointTestInterface;

  functions: {
    wrapAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapDivCeil(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapFromUnscaledUint(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapIsEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapIsGreaterThan(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapIsGreaterThanOrEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapIsLessThan(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapIsLessThanOrEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMax(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMin(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMixedAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMixedDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMixedDivCeil(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMixedDivOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMixedIsEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMixedIsGreaterThan(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMixedIsGreaterThanOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMixedIsGreaterThanOrEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMixedIsGreaterThanOrEqualOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMixedIsLessThan(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMixedIsLessThanOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMixedIsLessThanOrEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMixedIsLessThanOrEqualOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    wrapMixedMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMixedMulCeil(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMixedSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMixedSubOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapMulCeil(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapPow(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    wrapSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  wrapAdd(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapDiv(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapDivCeil(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapFromUnscaledUint(
    a: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapIsEqual(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapIsGreaterThan(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapIsGreaterThanOrEqual(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapIsLessThan(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapIsLessThanOrEqual(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMax(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMin(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMixedAdd(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMixedDiv(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMixedDivCeil(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMixedDivOpposite(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMixedIsEqual(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMixedIsGreaterThan(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMixedIsGreaterThanOpposite(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMixedIsGreaterThanOrEqual(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMixedIsGreaterThanOrEqualOpposite(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMixedIsLessThan(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMixedIsLessThanOpposite(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMixedIsLessThanOrEqual(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMixedIsLessThanOrEqualOpposite(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  wrapMixedMul(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMixedMulCeil(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMixedSub(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMixedSubOpposite(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMul(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapMulCeil(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapPow(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapSub(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    wrapAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapDivCeil(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapFromUnscaledUint(
      a: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapIsEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapIsGreaterThan(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapIsGreaterThanOrEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapIsLessThan(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapIsLessThanOrEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMax(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMin(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMixedAdd(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMixedDiv(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMixedDivCeil(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMixedDivOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMixedIsEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMixedIsGreaterThan(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMixedIsGreaterThanOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMixedIsGreaterThanOrEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMixedIsGreaterThanOrEqualOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMixedIsLessThan(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMixedIsLessThanOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMixedIsLessThanOrEqual(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMixedIsLessThanOrEqualOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    wrapMixedMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMixedMulCeil(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMixedSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMixedSubOpposite(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMul(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapMulCeil(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapPow(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapSub(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    wrapAdd(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapDiv(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapDivCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapFromUnscaledUint(a: BigNumberish): Promise<BigNumber>;
    wrapIsEqual(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapIsGreaterThan(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapIsGreaterThanOrEqual(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<BigNumber>;
    wrapIsLessThan(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapIsLessThanOrEqual(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMax(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMin(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedAdd(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedDiv(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedDivCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedDivOpposite(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedIsEqual(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedIsGreaterThan(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<BigNumber>;
    wrapMixedIsGreaterThanOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<BigNumber>;
    wrapMixedIsGreaterThanOrEqual(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<BigNumber>;
    wrapMixedIsGreaterThanOrEqualOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<BigNumber>;
    wrapMixedIsLessThan(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedIsLessThanOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<BigNumber>;
    wrapMixedIsLessThanOrEqual(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<BigNumber>;
    wrapMixedIsLessThanOrEqualOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<BigNumber>;
    wrapMixedMul(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedMulCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedSub(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMixedSubOpposite(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMul(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapMulCeil(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapPow(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
    wrapSub(a: BigNumberish, b: BigNumberish): Promise<BigNumber>;
  };

  populateTransaction: {
    wrapAdd(a: BigNumberish, b: BigNumberish): Promise<PopulatedTransaction>;
    wrapDiv(a: BigNumberish, b: BigNumberish): Promise<PopulatedTransaction>;
    wrapDivCeil(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapFromUnscaledUint(a: BigNumberish): Promise<PopulatedTransaction>;
    wrapIsEqual(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapIsGreaterThan(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapIsGreaterThanOrEqual(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapIsLessThan(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapIsLessThanOrEqual(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMax(a: BigNumberish, b: BigNumberish): Promise<PopulatedTransaction>;
    wrapMin(a: BigNumberish, b: BigNumberish): Promise<PopulatedTransaction>;
    wrapMixedAdd(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedDiv(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedDivCeil(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedDivOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedIsEqual(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedIsGreaterThan(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedIsGreaterThanOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedIsGreaterThanOrEqual(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedIsGreaterThanOrEqualOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedIsLessThan(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedIsLessThanOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedIsLessThanOrEqual(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedIsLessThanOrEqualOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedMul(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedMulCeil(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedSub(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMixedSubOpposite(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapMul(a: BigNumberish, b: BigNumberish): Promise<PopulatedTransaction>;
    wrapMulCeil(
      a: BigNumberish,
      b: BigNumberish
    ): Promise<PopulatedTransaction>;
    wrapPow(a: BigNumberish, b: BigNumberish): Promise<PopulatedTransaction>;
    wrapSub(a: BigNumberish, b: BigNumberish): Promise<PopulatedTransaction>;
  };
}