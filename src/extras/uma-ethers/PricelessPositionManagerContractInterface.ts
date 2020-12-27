import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers"
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts"
import { BytesLike } from "@ethersproject/bytes"
import { Listener, Provider } from "@ethersproject/providers"
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi"

interface PricelessPositionManagerInterface extends ethers.utils.Interface {
  functions: {
    "cancelTransferPosition()": FunctionFragment
    "cancelWithdrawal()": FunctionFragment
    "collateralCurrency()": FunctionFragment
    "contractState()": FunctionFragment
    "create(tuple,tuple)": FunctionFragment
    "cumulativeFeeMultiplier()": FunctionFragment
    "deposit(tuple)": FunctionFragment
    "depositTo(address,tuple)": FunctionFragment
    "emergencyShutdown()": FunctionFragment
    "expirationTimestamp()": FunctionFragment
    "expire()": FunctionFragment
    "expiryPrice()": FunctionFragment
    "finder()": FunctionFragment
    "getCollateral(address)": FunctionFragment
    "getCurrentTime()": FunctionFragment
    "minSponsorTokens()": FunctionFragment
    "payRegularFees()": FunctionFragment
    "pfc()": FunctionFragment
    "positions(address)": FunctionFragment
    "priceIdentifier()": FunctionFragment
    "rawTotalPositionCollateral()": FunctionFragment
    "redeem(tuple)": FunctionFragment
    "remargin()": FunctionFragment
    "requestTransferPosition()": FunctionFragment
    "requestWithdrawal(tuple)": FunctionFragment
    "setCurrentTime(uint256)": FunctionFragment
    "settleExpired()": FunctionFragment
    "timerAddress()": FunctionFragment
    "tokenCurrency()": FunctionFragment
    "totalPositionCollateral()": FunctionFragment
    "totalTokensOutstanding()": FunctionFragment
    "transferPositionPassedRequest(address)": FunctionFragment
    "withdraw(tuple)": FunctionFragment
    "withdrawPassedRequest()": FunctionFragment
    "withdrawalLiveness()": FunctionFragment
  }

  encodeFunctionData(functionFragment: "cancelTransferPosition", values?: undefined): string
  encodeFunctionData(functionFragment: "cancelWithdrawal", values?: undefined): string
  encodeFunctionData(functionFragment: "collateralCurrency", values?: undefined): string
  encodeFunctionData(functionFragment: "contractState", values?: undefined): string
  encodeFunctionData(
    functionFragment: "create",
    values: [{ rawValue: BigNumberish }, { rawValue: BigNumberish }]
  ): string
  encodeFunctionData(functionFragment: "cumulativeFeeMultiplier", values?: undefined): string
  encodeFunctionData(functionFragment: "deposit", values: [{ rawValue: BigNumberish }]): string
  encodeFunctionData(
    functionFragment: "depositTo",
    values: [string, { rawValue: BigNumberish }]
  ): string
  encodeFunctionData(functionFragment: "emergencyShutdown", values?: undefined): string
  encodeFunctionData(functionFragment: "expirationTimestamp", values?: undefined): string
  encodeFunctionData(functionFragment: "expire", values?: undefined): string
  encodeFunctionData(functionFragment: "expiryPrice", values?: undefined): string
  encodeFunctionData(functionFragment: "finder", values?: undefined): string
  encodeFunctionData(functionFragment: "getCollateral", values: [string]): string
  encodeFunctionData(functionFragment: "getCurrentTime", values?: undefined): string
  encodeFunctionData(functionFragment: "minSponsorTokens", values?: undefined): string
  encodeFunctionData(functionFragment: "payRegularFees", values?: undefined): string
  encodeFunctionData(functionFragment: "pfc", values?: undefined): string
  encodeFunctionData(functionFragment: "positions", values: [string]): string
  encodeFunctionData(functionFragment: "priceIdentifier", values?: undefined): string
  encodeFunctionData(functionFragment: "rawTotalPositionCollateral", values?: undefined): string
  encodeFunctionData(functionFragment: "redeem", values: [{ rawValue: BigNumberish }]): string
  encodeFunctionData(functionFragment: "remargin", values?: undefined): string
  encodeFunctionData(functionFragment: "requestTransferPosition", values?: undefined): string
  encodeFunctionData(
    functionFragment: "requestWithdrawal",
    values: [{ rawValue: BigNumberish }]
  ): string
  encodeFunctionData(functionFragment: "setCurrentTime", values: [BigNumberish]): string
  encodeFunctionData(functionFragment: "settleExpired", values?: undefined): string
  encodeFunctionData(functionFragment: "timerAddress", values?: undefined): string
  encodeFunctionData(functionFragment: "tokenCurrency", values?: undefined): string
  encodeFunctionData(functionFragment: "totalPositionCollateral", values?: undefined): string
  encodeFunctionData(functionFragment: "totalTokensOutstanding", values?: undefined): string
  encodeFunctionData(functionFragment: "transferPositionPassedRequest", values: [string]): string
  encodeFunctionData(functionFragment: "withdraw", values: [{ rawValue: BigNumberish }]): string
  encodeFunctionData(functionFragment: "withdrawPassedRequest", values?: undefined): string
  encodeFunctionData(functionFragment: "withdrawalLiveness", values?: undefined): string

  decodeFunctionResult(functionFragment: "cancelTransferPosition", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "cancelWithdrawal", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "collateralCurrency", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "contractState", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "cumulativeFeeMultiplier", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "emergencyShutdown", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "expirationTimestamp", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "expire", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "expiryPrice", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "finder", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCollateral", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "getCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "minSponsorTokens", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "payRegularFees", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "pfc", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "priceIdentifier", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "rawTotalPositionCollateral", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "remargin", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "requestTransferPosition", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "requestWithdrawal", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "setCurrentTime", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "settleExpired", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "timerAddress", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "tokenCurrency", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "totalPositionCollateral", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "totalTokensOutstanding", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "transferPositionPassedRequest", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdrawPassedRequest", data: BytesLike): Result
  decodeFunctionResult(functionFragment: "withdrawalLiveness", data: BytesLike): Result

  events: {
    "ContractExpired(address)": EventFragment
    "Deposit(address,uint256)": EventFragment
    "EmergencyShutdown(address,uint256,uint256)": EventFragment
    "EndedSponsorPosition(address)": EventFragment
    "FinalFeesPaid(uint256)": EventFragment
    "NewSponsor(address)": EventFragment
    "PositionCreated(address,uint256,uint256)": EventFragment
    "Redeem(address,uint256,uint256)": EventFragment
    "RegularFeesPaid(uint256,uint256)": EventFragment
    "RequestTransferPosition(address)": EventFragment
    "RequestTransferPositionCanceled(address)": EventFragment
    "RequestTransferPositionExecuted(address,address)": EventFragment
    "RequestWithdrawal(address,uint256)": EventFragment
    "RequestWithdrawalCanceled(address,uint256)": EventFragment
    "RequestWithdrawalExecuted(address,uint256)": EventFragment
    "SettleExpiredPosition(address,uint256,uint256)": EventFragment
    "Withdrawal(address,uint256)": EventFragment
  }

  getEvent(nameOrSignatureOrTopic: "ContractExpired"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment
  getEvent(nameOrSignatureOrTopic: "EmergencyShutdown"): EventFragment
  getEvent(nameOrSignatureOrTopic: "EndedSponsorPosition"): EventFragment
  getEvent(nameOrSignatureOrTopic: "FinalFeesPaid"): EventFragment
  getEvent(nameOrSignatureOrTopic: "NewSponsor"): EventFragment
  getEvent(nameOrSignatureOrTopic: "PositionCreated"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Redeem"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RegularFeesPaid"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RequestTransferPosition"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RequestTransferPositionCanceled"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RequestTransferPositionExecuted"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawal"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawalCanceled"): EventFragment
  getEvent(nameOrSignatureOrTopic: "RequestWithdrawalExecuted"): EventFragment
  getEvent(nameOrSignatureOrTopic: "SettleExpiredPosition"): EventFragment
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment
}

export interface PricelessPositionManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: PricelessPositionManagerInterface

  functions: {
    cancelTransferPosition(overrides?: Overrides): Promise<ContractTransaction>

    cancelWithdrawal(overrides?: Overrides): Promise<ContractTransaction>

    collateralCurrency(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    contractState(
      overrides?: CallOverrides
    ): Promise<{
      0: number
    }>

    create(
      collateralAmount: { rawValue: BigNumberish },
      numTokens: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>

    cumulativeFeeMultiplier(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber
      0: BigNumber
    }>

    deposit(
      collateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>

    depositTo(
      sponsor: string,
      collateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>

    emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>

    expirationTimestamp(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    expire(overrides?: Overrides): Promise<ContractTransaction>

    expiryPrice(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber
      0: BigNumber
    }>

    finder(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    getCollateral(
      sponsor: string,
      overrides?: CallOverrides
    ): Promise<{
      collateralAmount: { rawValue: BigNumber; 0: BigNumber }
      0: { rawValue: BigNumber; 0: BigNumber }
    }>

    getCurrentTime(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>

    minSponsorTokens(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber
      0: BigNumber
    }>

    payRegularFees(overrides?: Overrides): Promise<ContractTransaction>

    pfc(
      overrides?: CallOverrides
    ): Promise<{
      0: { rawValue: BigNumber; 0: BigNumber }
    }>

    positions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      tokensOutstanding: { rawValue: BigNumber; 0: BigNumber }
      withdrawalRequestPassTimestamp: BigNumber
      withdrawalRequestAmount: { rawValue: BigNumber; 0: BigNumber }
      rawCollateral: { rawValue: BigNumber; 0: BigNumber }
      transferPositionRequestPassTimestamp: BigNumber
      0: { rawValue: BigNumber; 0: BigNumber }
      1: BigNumber
      2: { rawValue: BigNumber; 0: BigNumber }
      3: { rawValue: BigNumber; 0: BigNumber }
      4: BigNumber
    }>

    priceIdentifier(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    rawTotalPositionCollateral(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber
      0: BigNumber
    }>

    redeem(
      numTokens: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>

    remargin(overrides?: Overrides): Promise<ContractTransaction>

    requestTransferPosition(overrides?: Overrides): Promise<ContractTransaction>

    requestWithdrawal(
      collateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    settleExpired(overrides?: Overrides): Promise<ContractTransaction>

    timerAddress(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    tokenCurrency(
      overrides?: CallOverrides
    ): Promise<{
      0: string
    }>

    totalPositionCollateral(
      overrides?: CallOverrides
    ): Promise<{
      totalCollateral: { rawValue: BigNumber; 0: BigNumber }
      0: { rawValue: BigNumber; 0: BigNumber }
    }>

    totalTokensOutstanding(
      overrides?: CallOverrides
    ): Promise<{
      rawValue: BigNumber
      0: BigNumber
    }>

    transferPositionPassedRequest(
      newSponsorAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    withdraw(
      collateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>

    withdrawPassedRequest(overrides?: Overrides): Promise<ContractTransaction>

    withdrawalLiveness(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber
    }>
  }

  cancelTransferPosition(overrides?: Overrides): Promise<ContractTransaction>

  cancelWithdrawal(overrides?: Overrides): Promise<ContractTransaction>

  collateralCurrency(overrides?: CallOverrides): Promise<string>

  contractState(overrides?: CallOverrides): Promise<number>

  create(
    collateralAmount: { rawValue: BigNumberish },
    numTokens: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>

  cumulativeFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>

  deposit(
    collateralAmount: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>

  depositTo(
    sponsor: string,
    collateralAmount: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>

  emergencyShutdown(overrides?: Overrides): Promise<ContractTransaction>

  expirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>

  expire(overrides?: Overrides): Promise<ContractTransaction>

  expiryPrice(overrides?: CallOverrides): Promise<BigNumber>

  finder(overrides?: CallOverrides): Promise<string>

  getCollateral(
    sponsor: string,
    overrides?: CallOverrides
  ): Promise<{ rawValue: BigNumber; 0: BigNumber }>

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

  minSponsorTokens(overrides?: CallOverrides): Promise<BigNumber>

  payRegularFees(overrides?: Overrides): Promise<ContractTransaction>

  pfc(overrides?: CallOverrides): Promise<{ rawValue: BigNumber; 0: BigNumber }>

  positions(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    tokensOutstanding: { rawValue: BigNumber; 0: BigNumber }
    withdrawalRequestPassTimestamp: BigNumber
    withdrawalRequestAmount: { rawValue: BigNumber; 0: BigNumber }
    rawCollateral: { rawValue: BigNumber; 0: BigNumber }
    transferPositionRequestPassTimestamp: BigNumber
    0: { rawValue: BigNumber; 0: BigNumber }
    1: BigNumber
    2: { rawValue: BigNumber; 0: BigNumber }
    3: { rawValue: BigNumber; 0: BigNumber }
    4: BigNumber
  }>

  priceIdentifier(overrides?: CallOverrides): Promise<string>

  rawTotalPositionCollateral(overrides?: CallOverrides): Promise<BigNumber>

  redeem(numTokens: { rawValue: BigNumberish }, overrides?: Overrides): Promise<ContractTransaction>

  remargin(overrides?: Overrides): Promise<ContractTransaction>

  requestTransferPosition(overrides?: Overrides): Promise<ContractTransaction>

  requestWithdrawal(
    collateralAmount: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>

  setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  settleExpired(overrides?: Overrides): Promise<ContractTransaction>

  timerAddress(overrides?: CallOverrides): Promise<string>

  tokenCurrency(overrides?: CallOverrides): Promise<string>

  totalPositionCollateral(overrides?: CallOverrides): Promise<{ rawValue: BigNumber; 0: BigNumber }>

  totalTokensOutstanding(overrides?: CallOverrides): Promise<BigNumber>

  transferPositionPassedRequest(
    newSponsorAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  withdraw(
    collateralAmount: { rawValue: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>

  withdrawPassedRequest(overrides?: Overrides): Promise<ContractTransaction>

  withdrawalLiveness(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    cancelTransferPosition(overrides?: Overrides): Promise<void>

    cancelWithdrawal(overrides?: Overrides): Promise<void>

    collateralCurrency(overrides?: CallOverrides): Promise<string>

    contractState(overrides?: CallOverrides): Promise<number>

    create(
      collateralAmount: { rawValue: BigNumberish },
      numTokens: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<void>

    cumulativeFeeMultiplier(overrides?: CallOverrides): Promise<BigNumber>

    deposit(collateralAmount: { rawValue: BigNumberish }, overrides?: Overrides): Promise<void>

    depositTo(
      sponsor: string,
      collateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<void>

    emergencyShutdown(overrides?: Overrides): Promise<void>

    expirationTimestamp(overrides?: CallOverrides): Promise<BigNumber>

    expire(overrides?: Overrides): Promise<void>

    expiryPrice(overrides?: CallOverrides): Promise<BigNumber>

    finder(overrides?: CallOverrides): Promise<string>

    getCollateral(
      sponsor: string,
      overrides?: CallOverrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>

    minSponsorTokens(overrides?: CallOverrides): Promise<BigNumber>

    payRegularFees(overrides?: Overrides): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    pfc(overrides?: CallOverrides): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    positions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      tokensOutstanding: { rawValue: BigNumber; 0: BigNumber }
      withdrawalRequestPassTimestamp: BigNumber
      withdrawalRequestAmount: { rawValue: BigNumber; 0: BigNumber }
      rawCollateral: { rawValue: BigNumber; 0: BigNumber }
      transferPositionRequestPassTimestamp: BigNumber
      0: { rawValue: BigNumber; 0: BigNumber }
      1: BigNumber
      2: { rawValue: BigNumber; 0: BigNumber }
      3: { rawValue: BigNumber; 0: BigNumber }
      4: BigNumber
    }>

    priceIdentifier(overrides?: CallOverrides): Promise<string>

    rawTotalPositionCollateral(overrides?: CallOverrides): Promise<BigNumber>

    redeem(
      numTokens: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    remargin(overrides?: Overrides): Promise<void>

    requestTransferPosition(overrides?: Overrides): Promise<void>

    requestWithdrawal(
      collateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<void>

    setCurrentTime(time: BigNumberish, overrides?: Overrides): Promise<void>

    settleExpired(overrides?: Overrides): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    timerAddress(overrides?: CallOverrides): Promise<string>

    tokenCurrency(overrides?: CallOverrides): Promise<string>

    totalPositionCollateral(
      overrides?: CallOverrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    totalTokensOutstanding(overrides?: CallOverrides): Promise<BigNumber>

    transferPositionPassedRequest(newSponsorAddress: string, overrides?: Overrides): Promise<void>

    withdraw(
      collateralAmount: { rawValue: BigNumberish },
      overrides?: Overrides
    ): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    withdrawPassedRequest(overrides?: Overrides): Promise<{ rawValue: BigNumber; 0: BigNumber }>

    withdrawalLiveness(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {
    ContractExpired(caller: string | null): EventFilter

    Deposit(sponsor: string | null, collateralAmount: BigNumberish | null): EventFilter

    EmergencyShutdown(
      caller: string | null,
      originalExpirationTimestamp: null,
      shutdownTimestamp: null
    ): EventFilter

    EndedSponsorPosition(sponsor: string | null): EventFilter

    FinalFeesPaid(amount: BigNumberish | null): EventFilter

    NewSponsor(sponsor: string | null): EventFilter

    PositionCreated(
      sponsor: string | null,
      collateralAmount: BigNumberish | null,
      tokenAmount: BigNumberish | null
    ): EventFilter

    Redeem(
      sponsor: string | null,
      collateralAmount: BigNumberish | null,
      tokenAmount: BigNumberish | null
    ): EventFilter

    RegularFeesPaid(regularFee: BigNumberish | null, lateFee: BigNumberish | null): EventFilter

    RequestTransferPosition(oldSponsor: string | null): EventFilter

    RequestTransferPositionCanceled(oldSponsor: string | null): EventFilter

    RequestTransferPositionExecuted(
      oldSponsor: string | null,
      newSponsor: string | null
    ): EventFilter

    RequestWithdrawal(sponsor: string | null, collateralAmount: BigNumberish | null): EventFilter

    RequestWithdrawalCanceled(
      sponsor: string | null,
      collateralAmount: BigNumberish | null
    ): EventFilter

    RequestWithdrawalExecuted(
      sponsor: string | null,
      collateralAmount: BigNumberish | null
    ): EventFilter

    SettleExpiredPosition(
      caller: string | null,
      collateralReturned: BigNumberish | null,
      tokensBurned: BigNumberish | null
    ): EventFilter

    Withdrawal(sponsor: string | null, collateralAmount: BigNumberish | null): EventFilter
  }

  estimateGas: {
    cancelTransferPosition(): Promise<BigNumber>
    cancelWithdrawal(): Promise<BigNumber>
    collateralCurrency(): Promise<BigNumber>
    contractState(): Promise<BigNumber>
    create(
      collateralAmount: { rawValue: BigNumberish },
      numTokens: { rawValue: BigNumberish }
    ): Promise<BigNumber>
    cumulativeFeeMultiplier(): Promise<BigNumber>
    deposit(collateralAmount: { rawValue: BigNumberish }): Promise<BigNumber>
    depositTo(sponsor: string, collateralAmount: { rawValue: BigNumberish }): Promise<BigNumber>
    emergencyShutdown(): Promise<BigNumber>
    expirationTimestamp(): Promise<BigNumber>
    expire(): Promise<BigNumber>
    expiryPrice(): Promise<BigNumber>
    finder(): Promise<BigNumber>
    getCollateral(sponsor: string): Promise<BigNumber>
    getCurrentTime(): Promise<BigNumber>
    minSponsorTokens(): Promise<BigNumber>
    payRegularFees(): Promise<BigNumber>
    pfc(): Promise<BigNumber>
    positions(arg0: string): Promise<BigNumber>
    priceIdentifier(): Promise<BigNumber>
    rawTotalPositionCollateral(): Promise<BigNumber>
    redeem(numTokens: { rawValue: BigNumberish }): Promise<BigNumber>
    remargin(): Promise<BigNumber>
    requestTransferPosition(): Promise<BigNumber>
    requestWithdrawal(collateralAmount: { rawValue: BigNumberish }): Promise<BigNumber>
    setCurrentTime(time: BigNumberish): Promise<BigNumber>
    settleExpired(): Promise<BigNumber>
    timerAddress(): Promise<BigNumber>
    tokenCurrency(): Promise<BigNumber>
    totalPositionCollateral(): Promise<BigNumber>
    totalTokensOutstanding(): Promise<BigNumber>
    transferPositionPassedRequest(newSponsorAddress: string): Promise<BigNumber>
    withdraw(collateralAmount: { rawValue: BigNumberish }): Promise<BigNumber>
    withdrawPassedRequest(): Promise<BigNumber>
    withdrawalLiveness(): Promise<BigNumber>
  }

  populateTransaction: {
    cancelTransferPosition(): Promise<PopulatedTransaction>
    cancelWithdrawal(): Promise<PopulatedTransaction>
    collateralCurrency(): Promise<PopulatedTransaction>
    contractState(): Promise<PopulatedTransaction>
    create(
      collateralAmount: { rawValue: BigNumberish },
      numTokens: { rawValue: BigNumberish }
    ): Promise<PopulatedTransaction>
    cumulativeFeeMultiplier(): Promise<PopulatedTransaction>
    deposit(collateralAmount: { rawValue: BigNumberish }): Promise<PopulatedTransaction>
    depositTo(
      sponsor: string,
      collateralAmount: { rawValue: BigNumberish }
    ): Promise<PopulatedTransaction>
    emergencyShutdown(): Promise<PopulatedTransaction>
    expirationTimestamp(): Promise<PopulatedTransaction>
    expire(): Promise<PopulatedTransaction>
    expiryPrice(): Promise<PopulatedTransaction>
    finder(): Promise<PopulatedTransaction>
    getCollateral(sponsor: string): Promise<PopulatedTransaction>
    getCurrentTime(): Promise<PopulatedTransaction>
    minSponsorTokens(): Promise<PopulatedTransaction>
    payRegularFees(): Promise<PopulatedTransaction>
    pfc(): Promise<PopulatedTransaction>
    positions(arg0: string): Promise<PopulatedTransaction>
    priceIdentifier(): Promise<PopulatedTransaction>
    rawTotalPositionCollateral(): Promise<PopulatedTransaction>
    redeem(numTokens: { rawValue: BigNumberish }): Promise<PopulatedTransaction>
    remargin(): Promise<PopulatedTransaction>
    requestTransferPosition(): Promise<PopulatedTransaction>
    requestWithdrawal(collateralAmount: { rawValue: BigNumberish }): Promise<PopulatedTransaction>
    setCurrentTime(time: BigNumberish): Promise<PopulatedTransaction>
    settleExpired(): Promise<PopulatedTransaction>
    timerAddress(): Promise<PopulatedTransaction>
    tokenCurrency(): Promise<PopulatedTransaction>
    totalPositionCollateral(): Promise<PopulatedTransaction>
    totalTokensOutstanding(): Promise<PopulatedTransaction>
    transferPositionPassedRequest(newSponsorAddress: string): Promise<PopulatedTransaction>
    withdraw(collateralAmount: { rawValue: BigNumberish }): Promise<PopulatedTransaction>
    withdrawPassedRequest(): Promise<PopulatedTransaction>
    withdrawalLiveness(): Promise<PopulatedTransaction>
  }
}
