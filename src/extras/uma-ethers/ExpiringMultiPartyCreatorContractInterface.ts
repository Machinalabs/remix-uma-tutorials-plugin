import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface ExpiringMultiPartyCreatorInterface extends ethers.utils.Interface {
  functions: {
    "STRICT_LIQUIDATION_LIVENESS()": FunctionFragment
    "STRICT_WITHDRAWAL_LIVENESS()": FunctionFragment
    "collateralTokenWhitelist()": FunctionFragment
    "createExpiringMultiParty(tuple)": FunctionFragment
    "getCurrentTime()": FunctionFragment
    "setCurrentTime(uint256)": FunctionFragment
    "timerAddress()": FunctionFragment
    "tokenFactoryAddress()": FunctionFragment
    "validExpirationTimestamps(uint256)": FunctionFragment
  }

  encodeFunctionData(functionFragment: "STRICT_LIQUIDATION_LIVENESS", values?: undefined): string
  encodeFunctionData(functionFragment: "STRICT_WITHDRAWAL_LIVENESS", values?: undefined): string
  encodeFunctionData(functionFragment: "collateralTokenWhitelist", values?: undefined): string
  encodeFunctionData(
    functionFragment: "createExpiringMultiParty",
    values: [
      {
        expirationTimestamp: BigNumberish
        collateralAddress: string
        priceFeedIdentifier: BytesLike
        syntheticName: string
        syntheticSymbol: string
        collateralRequirement: { rawValue: BigNumberish }
        disputeBondPct: { rawValue: BigNumberish }
        sponsorDisputeRewardPct: { rawValue: BigNumberish }
        disputerDisputeRewardPct: { rawValue: BigNumberish }
        minSponsorTokens: { rawValue: BigNumberish }
      }
    ]
  ): string
  encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string
  encodeFunctionData(functionFragment: "setCurrentTime", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "timerAddress", values?: undefined): string
  encodeFunctionData(functionFragment: "tokenFactoryAddress", values?: undefined): string
  encodeFunctionData(functionFragment: "validExpirationTimestamps", values: [BigNumberish]): string

  decodeFunctionResult(functionFragment: "STRICT_LIQUIDATION_LIVENESS", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "STRICT_WITHDRAWAL_LIVENESS", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "collateralTokenWhitelist", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "createExpiringMultiParty", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "timerAddress", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "tokenFactoryAddress", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "validExpirationTimestamps", data: BytesLike): Result

  events: {
    "CreatedExpiringMultiParty(address,address)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "CreatedExpiringMultiParty"): EventFragment
}

export interface ExpiringMultiPartyCreator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: ExpiringMultiPartyCreatorInterface

  functions: {
    STRICT_LIQUIDATION_LIVENESS(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    STRICT_WITHDRAWAL_LIVENESS(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    collateralTokenWhitelist(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    createExpiringMultiParty(
      params: {
        expirationTimestamp: BigNumberish
        collateralAddress: string
        priceFeedIdentifier: BytesLike
        syntheticName: string
        syntheticSymbol: string
        collateralRequirement: { rawValue: BigNumberish }
        disputeBondPct: { rawValue: BigNumberish }
        sponsorDisputeRewardPct: { rawValue: BigNumberish }
        disputerDisputeRewardPct: { rawValue: BigNumberish }
        minSponsorTokens: { rawValue: BigNumberish }
        withdrawalLiveness: number
        liquidationLiveness: number
        excessTokenBeneficiary: string
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>

    getCurrentTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    timerAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    tokenFactoryAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    validExpirationTimestamps(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean
    }>
  }

  STRICT_LIQUIDATION_LIVENESS(overrides?: CallOverrides): Promise<BigNumber>

  STRICT_WITHDRAWAL_LIVENESS(overrides?: CallOverrides): Promise<BigNumber>

  collateralTokenWhitelist(overrides?: CallOverrides): Promise<string>

  createExpiringMultiParty(
    params: {
      expirationTimestamp: BigNumberish
      collateralAddress: string
      priceFeedIdentifier: BytesLike
      syntheticName: string
      syntheticSymbol: string
      collateralRequirement: { rawValue: BigNumberish }
      disputeBondPct: { rawValue: BigNumberish }
      sponsorDisputeRewardPct: { rawValue: BigNumberish }
      disputerDisputeRewardPct: { rawValue: BigNumberish }
      minSponsorTokens: { rawValue: BigNumberish }
      withdrawalLiveness: number
      liquidationLiveness: number
      excessTokenBeneficiary: string
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

  setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  timerAddress(overrides?: CallOverrides): Promise<string>

  tokenFactoryAddress(overrides?: CallOverrides): Promise<string>

  validExpirationTimestamps(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>

  callStatic: {
    STRICT_LIQUIDATION_LIVENESS(overrides?: CallOverrides): Promise<BigNumber>

    STRICT_WITHDRAWAL_LIVENESS(overrides?: CallOverrides): Promise<BigNumber>

    collateralTokenWhitelist(overrides?: CallOverrides): Promise<string>

    createExpiringMultiParty(
      params: {
        expirationTimestamp: BigNumberish
        collateralAddress: string
        priceFeedIdentifier: BytesLike
        syntheticName: string
        syntheticSymbol: string
        collateralRequirement: { rawValue: BigNumberish }
        disputeBondPct: { rawValue: BigNumberish }
        sponsorDisputeRewardPct: { rawValue: BigNumberish }
        disputerDisputeRewardPct: { rawValue: BigNumberish }
        minSponsorTokens: { rawValue: BigNumberish }
      },
      overrides?: Overrides
    ): Promise<string>

    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<void>

    timerAddress(overrides?: CallOverrides): Promise<string>

    tokenFactoryAddress(overrides?: CallOverrides): Promise<string>

    validExpirationTimestamps(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>
  }

  filters: {
    CreatedExpiringMultiParty(expiringMultiPartyAddress: string | null, deployerAddress: string | null): EventFilter
  }

  estimateGas: {
    STRICT_LIQUIDATION_LIVENESS(): Promise<BigNumber>
    STRICT_WITHDRAWAL_LIVENESS(): Promise<BigNumber>
    collateralTokenWhitelist(): Promise<BigNumber>
    createExpiringMultiParty(params: {
      expirationTimestamp: BigNumberish
      collateralAddress: string
      priceFeedIdentifier: BytesLike
      syntheticName: string
      syntheticSymbol: string
      collateralRequirement: { rawValue: BigNumberish }
      disputeBondPct: { rawValue: BigNumberish }
      sponsorDisputeRewardPct: { rawValue: BigNumberish }
      disputerDisputeRewardPct: { rawValue: BigNumberish }
      minSponsorTokens: { rawValue: BigNumberish }
    }): Promise<BigNumber>
    getCurrentTime(): Promise<BigNumber>
    setCurrentTime(time: BigNumberish): Promise<BigNumber>
    timerAddress(): Promise<BigNumber>
    tokenFactoryAddress(): Promise<BigNumber>
    validExpirationTimestamps(arg0: BigNumberish): Promise<BigNumber>
  }

  populateTransaction: {
    STRICT_LIQUIDATION_LIVENESS(): Promise<PopulatedTransaction>
    STRICT_WITHDRAWAL_LIVENESS(): Promise<PopulatedTransaction>
    collateralTokenWhitelist(): Promise<PopulatedTransaction>
    createExpiringMultiParty(params: {
      expirationTimestamp: BigNumberish
      collateralAddress: string
      priceFeedIdentifier: BytesLike
      syntheticName: string
      syntheticSymbol: string
      collateralRequirement: { rawValue: BigNumberish }
      disputeBondPct: { rawValue: BigNumberish }
      sponsorDisputeRewardPct: { rawValue: BigNumberish }
      disputerDisputeRewardPct: { rawValue: BigNumberish }
      minSponsorTokens: { rawValue: BigNumberish }
    }): Promise<PopulatedTransaction>
    getCurrentTime(): Promise<PopulatedTransaction>
    setCurrentTime(time: BigNumberish): Promise<PopulatedTransaction>
    timerAddress(): Promise<PopulatedTransaction>
    tokenFactoryAddress(): Promise<PopulatedTransaction>
    validExpirationTimestamps(arg0: BigNumberish): Promise<PopulatedTransaction>
  }
}
