import { toWei } from "web3-utils"
import { ethers, utils } from "ethers"

import FinderArtifact from "@uma/core/build/contracts/Finder.json"
import TimerArtifact from "@uma/core/build/contracts/Timer.json"
import VotingTokenArtifact from "@uma/core/build/contracts/VotingToken.json"
import VotingArtifact from "@uma/core/build/contracts/Voting.json"
import IdentifierWhiteListArtifact from "@uma/core/build/contracts/IdentifierWhitelist.json"
import RegistryArtifact from "@uma/core/build/contracts/Registry.json"
import FinancialContractsAdminArtifact from "@uma/core/build/contracts/FinancialContractsAdmin.json"
import StoreArtifact from "@uma/core/build/contracts/Store.json"
import ExpiringMultiPartyCreatorArtifact from "@uma/core/build/contracts/ExpiringMultiPartyCreator.json"
import GovernorArtifact from "@uma/core/build/contracts/Governor.json"
import DesignatedVotingFactoryArtifact from "@uma/core/build/contracts/DesignatedVotingFactory.json"
import TokenFactoryArtifact from "@uma/core/build/contracts/TokenFactory.json"
import AddressWhitelistArtifact from "@uma/core/build/contracts/AddressWhitelist.json"
import ExpiringMultiPartyLibArtifact from "@uma/core/build/contracts/ExpiringMultiPartyLib.json"

import { RemixClientInstanceType } from "../../hooks"
import { debug, defaultTransactionValues } from "../../utils"

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
  deploy: (options: Options) => Promise<Map<UMAContractName, EthereumAddress>> // TODO Review why it is compiling even if classes are not implementing the interface
}

export enum InterfaceName {
  FinancialContractsAdmin = "FinancialContractsAdmin",
  Oracle = "Oracle",
  Registry = "Registry",
  Store = "Store",
  IdentifierWhitelist = "IdentifierWhitelist",
  CollateralWhitelist = "CollateralWhitelist",
}

enum RegistryRoles {
  OWNER = "0",
  CONTRACT_CREATOR = "1",
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
  | "AddressWhitelist"
  | "ExpiringMultiPartyCreator"
  | "TestnetErc20Address"
  | "ExpiringMultiParty"
  | "SynthethicToken"

export class UMADeployer implements IDeployer {
  async deploy(options: Options) {
    const addresses = new Map<UMAContractName, EthereumAddress>()

    const clientInstance = options.clientInstance

    const web3Provider = {
      sendAsync(payload, callback) {
        clientInstance
          .call("web3Provider" as any, "sendAsync", payload)
          .then((result) => callback(null, result))
          .catch((e) => {
            // console.log("Here is the error", e)
            callback(e)
          })
      },
    }

    const provider = new ethers.providers.Web3Provider(web3Provider)
    debug("Provider", provider)

    const signer = provider.getSigner()
    debug("Signer", signer)

    const address = await signer.getAddress()
    debug("address", address)

    const accounts = await provider.listAccounts()
    console.log("Accounts", accounts[0])

    const fromAddress = accounts[0]

    // 1) Deploy finder
    const finderFactory = new ethers.ContractFactory(FinderArtifact.abi, FinderArtifact.bytecode, signer)
    const finderInstanceCreator = finderFactory.getDeployTransaction()
    const { createdAddress: FinderInstanceAddres } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: finderInstanceCreator.data as string,
    })
    assert(FinderInstanceAddres).isDefined()
    assert(FinderInstanceAddres).isString()
    debug("Finder deployed", FinderInstanceAddres)
    addresses.set("Finder", FinderInstanceAddres as string)

    const finderInterface = finderFactory.interface

    // 2) Deploy timer
    const timerFactory = new ethers.ContractFactory(TimerArtifact.abi, TimerArtifact.bytecode, signer)
    const timerInstanceCreator = timerFactory.getDeployTransaction()
    const { createdAddress: TimerInstanceAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: timerInstanceCreator.data as string,
    })
    assert(TimerInstanceAddress).isDefined()
    assert(TimerInstanceAddress).isString()
    debug("Timer deployed", TimerInstanceAddress)
    addresses.set("Timer", TimerInstanceAddress as string)

    // 3) Deploy voting token
    const votingTokenFactory = new ethers.ContractFactory(VotingTokenArtifact.abi, VotingTokenArtifact.bytecode, signer)
    const votingTokenInstanceCreator = votingTokenFactory.getDeployTransaction()
    const { createdAddress: VotingTokenInstanceAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: votingTokenInstanceCreator.data as string,
    })
    assert(VotingTokenInstanceAddress).isDefined()
    assert(VotingTokenInstanceAddress).isString()
    debug("Voting token deployed", VotingTokenInstanceAddress)
    addresses.set("VotingToken", VotingTokenInstanceAddress as string)

    // voting token setup
    const minterRoleEnumValue = 1
    const signerAddress = fromAddress
    const votingTokenInterface = votingTokenFactory.interface

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
    const mintEncodedData = votingTokenInterface.encodeFunctionData("mint", [signerAddress, toWei("100000000")])
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
    const identifierWhiteListFactory = new ethers.ContractFactory(
      IdentifierWhiteListArtifact.abi,
      IdentifierWhiteListArtifact.bytecode,
      signer
    )
    const identifierWhiteListInstanceCreator = identifierWhiteListFactory.getDeployTransaction()
    const { createdAddress: IdentifierWhiteListAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: identifierWhiteListInstanceCreator.data as string,
    })
    assert(IdentifierWhiteListAddress).isDefined()
    assert(IdentifierWhiteListAddress).isString()
    debug("Price identifier whitelist deployed", IdentifierWhiteListAddress)
    addresses.set("IdentifierWhitelist", IdentifierWhiteListAddress as string)

    // update implementation on the Finder
    const changeImplementationAddressEncodedDataForIdentifierWhitelist = finderInterface.encodeFunctionData(
      "changeImplementationAddress",
      [utils.formatBytes32String(InterfaceName.IdentifierWhitelist), IdentifierWhiteListAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedDataForIdentifierWhitelist,
      from: fromAddress,
      to: FinderInstanceAddres,
    })
    debug(
      "Changed Registry Implementation for IdentifierWhitelist",
      utils.formatBytes32String(InterfaceName.IdentifierWhitelist)
    )

    // // Set the GAT percentage to 5%
    const gatPercentage = { rawValue: toWei("0.05", "ether") }
    // // Set the inflation rate.
    const inflationRate = { rawValue: toWei("0.0005", "ether") }
    // // Set the rewards expiration timeout.
    const rewardsExpirationTimeout = 60 * 60 * 24 * 14 // Two weeks.
    // // Set phase length to one day.
    const secondsPerDay = "86400"

    // 5) Deploy voting
    const votingFactory = new ethers.ContractFactory(VotingArtifact.abi, VotingArtifact.bytecode, signer)
    const votingInstanceCreator = votingFactory.getDeployTransaction(
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
    const registryFactory = new ethers.ContractFactory(RegistryArtifact.abi, RegistryArtifact.bytecode, signer)
    const registryInstanceCreator = registryFactory.getDeployTransaction()
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
    const changeImplementationAddressEncodedData = finderInterface.encodeFunctionData("changeImplementationAddress", [
      utils.formatBytes32String("Registry"),
      RegistryInstanceAddress,
    ])
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedData,
      from: fromAddress,
      to: FinderInstanceAddres,
    })
    debug("Changed Registry Implementation", utils.formatBytes32String("Registry"))

    // 6) Deploy financial contracts admin
    const financialContractFactory = new ethers.ContractFactory(
      FinancialContractsAdminArtifact.abi,
      FinancialContractsAdminArtifact.bytecode,
      signer
    )
    const financialContractsAdminInstanceCreator = financialContractFactory.getDeployTransaction()
    const { createdAddress: FinancialContractsAdminAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: financialContractsAdminInstanceCreator.data as string,
    })
    assert(FinancialContractsAdminAddress).isDefined()
    assert(FinancialContractsAdminAddress).isString()
    debug("FinancialContractAdmin deployed", FinancialContractsAdminAddress)
    addresses.set("FinancialContractAdmin", FinancialContractsAdminAddress as string)

    // update implementation on the Finder
    const changeImplementationAddressEncodedDataForFinancialContract = finderInterface.encodeFunctionData(
      "changeImplementationAddress",
      [utils.formatBytes32String(InterfaceName.FinancialContractsAdmin), FinancialContractsAdminAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedDataForFinancialContract,
      from: fromAddress,
      to: FinderInstanceAddres,
    })
    debug("Changed FinancialContract Admin Implementation")

    // 7) Deploy store
    const initialFixedOracleFeePerSecondPerPfc = { rawValue: "0" }
    const initialWeeklyDelayFeePerSecondPerPfc = { rawValue: "0" }

    const storeFactory = new ethers.ContractFactory(StoreArtifact.abi, StoreArtifact.bytecode, signer)
    const storeInstanceCreator = storeFactory.getDeployTransaction(
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
    const changeImplementationAddressEncodedDataForStore = finderInterface.encodeFunctionData(
      "changeImplementationAddress",
      [utils.formatBytes32String(InterfaceName.Store), StoreAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedDataForStore,
      from: fromAddress,
      to: FinderInstanceAddres,
    })
    debug("Changed Store Implementation")

    // 8) Deploy governor
    const startingId = "0"
    const governorFactory = new ethers.ContractFactory(GovernorArtifact.abi, GovernorArtifact.bytecode, signer)
    const governorInstanceCreator = governorFactory.getDeployTransaction(
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
    const registryInstanceInterface = registryFactory.interface
    const registryAddMemberEncodedData = registryInstanceInterface.encodeFunctionData("addMember", [
      RegistryRoles.CONTRACT_CREATOR,
      signerAddress,
    ])
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: registryAddMemberEncodedData,
      from: fromAddress,
      to: RegistryInstanceAddress,
    })
    debug("Governor added to registry")

    const registryRegisterContractEncodedData = registryInstanceInterface.encodeFunctionData("registerContract", [
      [],
      GovernorAddress,
    ])
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: registryRegisterContractEncodedData,
      from: fromAddress,
      to: RegistryInstanceAddress,
    })
    debug("Registered Governor Contract in the registry")

    const registryRemoveMemberEncodedData = registryInstanceInterface.encodeFunctionData("removeMember", [
      RegistryRoles.CONTRACT_CREATOR,
      signerAddress,
    ])
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: registryRemoveMemberEncodedData,
      from: fromAddress,
      to: RegistryInstanceAddress,
    })
    debug("Removed member")

    // 9) Deploy designated voting factory
    const designatedVotingFactoryFactory = new ethers.ContractFactory(
      DesignatedVotingFactoryArtifact.abi,
      DesignatedVotingFactoryArtifact.bytecode,
      signer
    )
    const designatedVotingInstanceCreator = designatedVotingFactoryFactory.getDeployTransaction(
      FinderInstanceAddres as string
    )
    const { createdAddress: DesignatedVotingFactoryAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: designatedVotingInstanceCreator.data as string,
    })
    assert(DesignatedVotingFactoryAddress).isDefined()
    assert(DesignatedVotingFactoryAddress).isString()
    debug("DesignatedVotingFactory deployed", DesignatedVotingFactoryAddress)
    addresses.set("DesignatedVotingFactory", DesignatedVotingFactoryAddress as string)

    const tokenFactoryFactory = new ethers.ContractFactory(
      TokenFactoryArtifact.abi,
      TokenFactoryArtifact.bytecode,
      signer
    )
    const tokenFactoryInstanceCreator = tokenFactoryFactory.getDeployTransaction()
    const { createdAddress: TokenFactoryAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: tokenFactoryInstanceCreator.data as string,
    })
    assert(TokenFactoryAddress).isDefined()
    assert(TokenFactoryAddress).isString()
    debug("TokenFactory deployed", TokenFactoryAddress)
    addresses.set("TokenFactory", TokenFactoryAddress as string)

    // Deploy AddressWhitelist
    const addressWhitelistFactory = new ethers.ContractFactory(
      AddressWhitelistArtifact.abi,
      AddressWhitelistArtifact.bytecode,
      signer
    )
    const addressWhitelistInstanceCreator = addressWhitelistFactory.getDeployTransaction()
    const { createdAddress: AddressWhitelistAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: addressWhitelistInstanceCreator.data as string,
    })
    assert(AddressWhitelistAddress).isDefined()
    assert(AddressWhitelistAddress).isString()
    debug("AddressWhitelist deployed", AddressWhitelistAddress)
    addresses.set("AddressWhitelist", AddressWhitelistAddress as string)

    // Add CollateralWhitelist to finder
    const changeImplementationAddressEncodedDataForCollateralWhitelist = finderInterface.encodeFunctionData(
      "changeImplementationAddress",
      [utils.formatBytes32String(InterfaceName.CollateralWhitelist), AddressWhitelistAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedDataForCollateralWhitelist,
      from: fromAddress,
      to: FinderInstanceAddres,
    })
    debug("Changed AddressWhitelist Implementation", utils.formatBytes32String(InterfaceName.CollateralWhitelist))

    // Then deploy expiring multi party creator (library)
    const expiringMultiPartyLibFactory = new ethers.ContractFactory(
      ExpiringMultiPartyLibArtifact.abi,
      ExpiringMultiPartyLibArtifact.bytecode,
      signer
    )
    const { data: multiPartyLibraryData } = expiringMultiPartyLibFactory.getDeployTransaction()
    const { createdAddress: MultipartyLibraryAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: multiPartyLibraryData as string,
    })
    assert(MultipartyLibraryAddress).isDefined()
    assert(MultipartyLibraryAddress).isString()
    debug("MultipartyLibrary deployed", MultipartyLibraryAddress)

    // Then deploy expiring multi party creator (contract)
    const linkBytecode = (bytecode, linkLibraryAddresses): string => {
      let linkedBytecode = bytecode

      linkedBytecode = linkedBytecode.replace(
        "__ExpiringMultiPartyLib_________________",
        linkLibraryAddresses.replace(/^0x/, "").toLowerCase()
      )

      return linkedBytecode
    }

    const expiringMultiPartyCreatorFactory = new ethers.ContractFactory(
      ExpiringMultiPartyCreatorArtifact.abi,
      linkBytecode(ExpiringMultiPartyCreatorArtifact.bytecode, MultipartyLibraryAddress),
      signer
    )
    const { data: ExpiringMultiPartyCreatorData } = expiringMultiPartyCreatorFactory.getDeployTransaction(
      FinderInstanceAddres as string,
      TokenFactoryAddress as string,
      TimerInstanceAddress as string
    )
    const { createdAddress: ExpiringMultiPartyCreatorAddress } = await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      from: fromAddress,
      data: ExpiringMultiPartyCreatorData as string,
    })
    assert(ExpiringMultiPartyCreatorAddress).isDefined()
    assert(ExpiringMultiPartyCreatorAddress).isString()
    debug("ExpiringMultiPartyCreator deployed", ExpiringMultiPartyCreatorAddress)
    addresses.set("ExpiringMultiPartyCreator", ExpiringMultiPartyCreatorAddress as string)

    const registryAddMemberEncodedDataForEMP = registryInstanceInterface.encodeFunctionData("addMember", [
      RegistryRoles.CONTRACT_CREATOR,
      ExpiringMultiPartyCreatorAddress as string,
    ])

    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: registryAddMemberEncodedDataForEMP,
      from: fromAddress,
      to: RegistryInstanceAddress,
    })
    debug("ExpiringMultiPartyCreator added to registry")

    // // 13) Deploy local WETH

    // const { data: wethData } = new Weth9InstanceCreator().getDeployTransaction()
    // const { createdAddress: WethAddress } = await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   from: fromAddress,
    //   data: wethData as string,
    // })
    // assert(WethAddress).isDefined()
    // assert(WethAddress).isString()
    // debug("WETH deployed", WethAddress)

    // const collateralCurrencyWhitelistInterface = new AddressWhitelistInstanceCreator().interface
    // const addToWhitelistEncodedData = collateralCurrencyWhitelistInterface.encodeFunctionData("addToWhitelist", [
    //   WethAddress,
    // ])
    // await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   data: addToWhitelistEncodedData,
    //   from: fromAddress,
    //   to: AddressWhitelistAddress,
    // })
    // debug("WETH Token added to whitelist")
    return addresses
  }
}
