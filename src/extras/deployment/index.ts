import { toHex, toWei } from "web3-utils"
import { utils } from "ethers"
import { RemixTx } from "@remixproject/plugin-api"

import { RemixClientInstanceType } from "../../hooks"
import { debug } from "../../utils"

import {
  TimerInstanceCreator,
  VotingTokenInstanceCreator,
  IdentifierWhitelistInstanceCreator,
  FinderInstanceCreator,
  VotingInstanceCreator,
  RegistryInstanceCreator,
  FinancialContractsAdminInstanceCreator,
  StoreInstanceCreator,
  GovernorInstanceCreator,
  DesignatedVotingFactoryInstanceCreator,
  TokenFactoryInstanceCreator,
  // TestnetErc20InstanceCreator,
  // Weth9InstanceCreator,
  // ExpiringMultiPartyCreatorInstanceCreator,
  // AddressWhitelistInstanceCreator,
  // ExpiringMultiPartyInstanceCreator,
  // ExpiringMultiPartyLibFactoryLibrary,
} from "../uma-ethers"

export type Bytes20 = string
export type EthereumAddress = Bytes20

export interface Result {
  error?: Error
  success: boolean
}

export interface Options {
  from: EthereumAddress
  clientInstance: RemixClientInstanceType
}

export interface IDeployer {
  deploy: (options: Options) => Promise<Result> // TODO Review why it is compiling even if classes are not implementing the interface
}

enum InterfaceName {
  FinancialContractsAdmin = "FinancialContractsAdmin",
  Oracle = "Oracle",
  Registry = "Registry",
  Store = "Store",
  IdentifierWhitelist = "IdentifierWhitelist",
}

enum RegistryRoles {
  OWNER = "0",
  CONTRACT_CREATOR = "1",
}

const defaultTransactionValues: RemixTx = {
  gasLimit: toHex(4712388),
  value: "0x00",
  useCall: false,
  from: "0x0",
  data: "0x0",
}

const assert = (value: any) => {
  const isDefined = () => {
    if (value === undefined) {
      throw new Error(`Undefined value found`)
    }
  }

  const isString = () => {
    if (!Boolean(value)) {
      throw new Error(`Not a string value found`)
    }
  }

  return {
    isDefined,
    isString,
  }
}

export type UMAContractName =
  | "Timer"
  | "VotingToken"
  | "IdentifierWhitelist"
  | "Finder"
  | "Voting"
  | "Registry"
  | "FinancialContractAdmin"
  | "Store"
  | "Governor"
  | "DesignatedVotingFactory"
  | "TokenFactory"

export class UMADeployer implements IDeployer {
  async deploy(options: Options) {
    const addresses = new Map<UMAContractName, EthereumAddress>()
    const result: Result = {
      success: true,
      error: undefined,
    }

    const clientInstance = options.clientInstance
    const fromAddress = options.from

    // 1) Deploy finder
    const finderInstanceCreator = new FinderInstanceCreator().getDeployTransaction()
    const { createdAddress: FinderInstanceAddres } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: finderInstanceCreator.data as string,
    })
    assert(FinderInstanceAddres).isDefined()
    assert(FinderInstanceAddres).isString()
    debug("Finder deployed", FinderInstanceAddres)
    addresses.set("Finder", FinderInstanceAddres as string)

    // 2) Deploy timer
    const timerInstance = new TimerInstanceCreator().getDeployTransaction()
    const { createdAddress: TimerInstanceAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: timerInstance.data as string,
    })
    assert(TimerInstanceAddress).isDefined()
    assert(TimerInstanceAddress).isString()
    debug("Timer deployed", TimerInstanceAddress)
    addresses.set("Timer", TimerInstanceAddress as string)

    // 3) Deploy voting token
    const votingTokenInstanceCreator = new VotingTokenInstanceCreator().getDeployTransaction()
    const {
      createdAddress: VotingTokenInstanceAddress,
    } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: votingTokenInstanceCreator.data as string,
    })
    assert(VotingTokenInstanceAddress).isDefined()
    assert(VotingTokenInstanceAddress).isString()
    debug("Voting token deployed", VotingTokenInstanceAddress)
    addresses.set("VotingToken", VotingTokenInstanceAddress as string)

    const minterRoleEnumValue = 1

    // voting token setup
    const signerAddress = fromAddress
    const votingTokenInterface = new VotingTokenInstanceCreator().interface

    // add Member
    const addMemberEncodedData = votingTokenInterface.encodeFunctionData("addMember", [
      minterRoleEnumValue,
      signerAddress,
    ])
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: addMemberEncodedData,
      from: fromAddress,
    })

    // mint tokens
    const mintEncodedData = votingTokenInterface.encodeFunctionData("mint", [
      signerAddress,
      toWei("100000000"),
    ])
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: mintEncodedData,
      from: fromAddress,
    })

    // remove member
    const removeMemberEncodedData = votingTokenInterface.encodeFunctionData("removeMember", [
      minterRoleEnumValue,
      signerAddress,
    ])
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: removeMemberEncodedData,
      from: fromAddress,
    })

    // 4) Deploy identifier white list
    const identifierWhiteListInstanceCreator = new IdentifierWhitelistInstanceCreator().getDeployTransaction()
    const {
      createdAddress: IdentifierWhiteListAddress,
    } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: identifierWhiteListInstanceCreator.data as string,
    })
    assert(IdentifierWhiteListAddress).isDefined()
    assert(IdentifierWhiteListAddress).isString()
    debug("Price identifier whitelist deployed", IdentifierWhiteListAddress)
    addresses.set("IdentifierWhitelist", IdentifierWhiteListAddress as string)

    // // Set the GAT percentage to 5%
    const gatPercentage = { rawValue: toWei("0.05", "ether") }
    // // Set the inflation rate.
    const inflationRate = { rawValue: toWei("0.0005", "ether") }
    // // Set the rewards expiration timeout.
    const rewardsExpirationTimeout = 60 * 60 * 24 * 14 // Two weeks.
    // // Set phase length to one day.
    const secondsPerDay = "86400"

    // 5) Deploy voting
    const votingInstanceCreator = new VotingInstanceCreator().getDeployTransaction(
      secondsPerDay,
      gatPercentage,
      inflationRate,
      rewardsExpirationTimeout,
      VotingTokenInstanceAddress as string,
      FinderInstanceAddres as string,
      TimerInstanceAddress as string
    )
    const { createdAddress: VotingInstanceAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: votingInstanceCreator.data as string,
    })
    assert(VotingInstanceAddress).isDefined()
    assert(VotingInstanceAddress).isString()
    debug("Voting instance deployed", VotingInstanceAddress)
    addresses.set("Voting", VotingInstanceAddress as string)

    // 6) Deploy registry
    const registryInstanceCreator = new RegistryInstanceCreator().getDeployTransaction()
    const { createdAddress: RegistryInstanceAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: registryInstanceCreator.data as string,
    })
    assert(RegistryInstanceAddress).isDefined()
    assert(RegistryInstanceAddress).isString()
    debug("Registry instance deployed", RegistryInstanceAddress)
    addresses.set("Registry", RegistryInstanceAddress as string)

    // update implementation on the Finder
    const finderInstanceInterface = new FinderInstanceCreator().interface
    const changeImplementationAddressEncodedData = finderInstanceInterface.encodeFunctionData(
      "changeImplementationAddress",
      [utils.formatBytes32String(InterfaceName.Registry), RegistryInstanceAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedData,
      from: fromAddress,
    })
    debug("Changed Registry Implementation")

    // 6) Deploy financial contracts admin
    const financialContractsAdminInstanceCreator = new FinancialContractsAdminInstanceCreator().getDeployTransaction()
    const {
      createdAddress: FinancialContractsAdminAddress,
    } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: financialContractsAdminInstanceCreator.data as string,
    })
    assert(FinancialContractsAdminAddress).isDefined()
    assert(FinancialContractsAdminAddress).isString()
    debug("FinancialContractAdmin deployed", FinancialContractsAdminAddress)
    addresses.set("FinancialContractAdmin", FinancialContractsAdminAddress as string)

    // update implementation on the Finder
    const changeImplementationAddressEncodedDataForFinancialContract = finderInstanceInterface.encodeFunctionData(
      "changeImplementationAddress",
      [
        utils.formatBytes32String(InterfaceName.FinancialContractsAdmin),
        FinancialContractsAdminAddress,
      ]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedDataForFinancialContract,
      from: fromAddress,
    })
    debug("Changed FinancialContract Admin Implementation")

    // 7) Deploy store
    const initialFixedOracleFeePerSecondPerPfc = { rawValue: "0" }
    const initialWeeklyDelayFeePerSecondPerPfc = { rawValue: "0" }
    const storeInstanceCreator = new StoreInstanceCreator().getDeployTransaction(
      initialFixedOracleFeePerSecondPerPfc,
      initialWeeklyDelayFeePerSecondPerPfc,
      TimerInstanceAddress as string
    )
    const { createdAddress: StoreAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: storeInstanceCreator.data as string,
    })
    assert(StoreAddress).isDefined()
    assert(StoreAddress).isString()
    debug("Store deployed", StoreAddress)
    addresses.set("Store", StoreAddress as string)

    // update implementation on the Finder
    const changeImplementationAddressEncodedDataForStore = finderInstanceInterface.encodeFunctionData(
      "changeImplementationAddress",
      [utils.formatBytes32String(InterfaceName.Store), StoreAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedDataForStore,
      from: fromAddress,
    })
    debug("Changed Store Implementation")

    // 8) Deploy governor
    const startingId = "0"
    const governorInstanceCreator = new GovernorInstanceCreator().getDeployTransaction(
      FinderInstanceAddres as string,
      startingId,
      TimerInstanceAddress as string
    )
    const { createdAddress: GovernorAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: governorInstanceCreator.data as string,
    })
    assert(StoreAddress).isDefined()
    assert(StoreAddress).isString()
    debug("Governor deployed", GovernorAddress)
    addresses.set("Governor", GovernorAddress as string)

    // Add governor to registry so it can send price requests.
    const registryInstanceInterface = new RegistryInstanceCreator().interface
    const registryAddMemberEncodedData = registryInstanceInterface.encodeFunctionData("addMember", [
      RegistryRoles.CONTRACT_CREATOR,
      signerAddress,
    ])
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: registryAddMemberEncodedData,
      from: fromAddress,
    })
    debug("Governor added to registry")

    const registryRegisterContractEncodedData = registryInstanceInterface.encodeFunctionData(
      "registerContract",
      [[], GovernorAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: registryRegisterContractEncodedData,
      from: fromAddress,
    })
    debug("Registered Governor Contract in the registry")

    const registryRemoveMemberEncodedData = registryInstanceInterface.encodeFunctionData(
      "removeMember",
      [RegistryRoles.CONTRACT_CREATOR, signerAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: registryRemoveMemberEncodedData,
      from: fromAddress,
    })
    debug("Removed member")

    // 9) Deploy designated voting factory
    const designatedVotingInstanceCreator = new DesignatedVotingFactoryInstanceCreator().getDeployTransaction(
      FinderInstanceAddres as string
    )
    const {
      createdAddress: DesignatedVotingFactoryAddress,
    } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: designatedVotingInstanceCreator.data as string,
    })
    assert(DesignatedVotingFactoryAddress).isDefined()
    assert(DesignatedVotingFactoryAddress).isString()
    debug("DesignatedVotingFactory deployed", DesignatedVotingFactoryAddress)
    addresses.set("DesignatedVotingFactory", DesignatedVotingFactoryAddress as string)

    const tokenFactoryInstanceCreator = new TokenFactoryInstanceCreator().getDeployTransaction()
    const { createdAddress: TokenFactoryAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: tokenFactoryInstanceCreator.data as string,
    })
    assert(TokenFactoryAddress).isDefined()
    assert(TokenFactoryAddress).isString()
    debug("TokenFactory deployed", TokenFactoryAddress)
    addresses.set("TokenFactory", TokenFactoryAddress as string)
    return result
  }
}
