import React, { useState } from "react"
import { Formik, Form, FormikErrors } from "formik"

import ExpiringMultiPartyArtifact from "@uma/core/build/contracts/ExpiringMultiParty.json"

import { Button } from "../../../components"
import { useRemix } from "../../../hooks"
import { debug } from "../../../utils"
import { useContract, useStep } from "../hooks"
import { ErrorMessage, FormItem, SuccessMessage } from "../components"
import { BigNumber, ethers } from "ethers"
import { toWei } from "web3-utils"

interface FormProps {
  syntheticTokens: number
  collateralAmount: number
}

const initialValues: FormProps = {
  syntheticTokens: 0,
  collateralAmount: 0,
}

export const CreatePosition: React.FC = () => {
  const {
    getContractAddress,
    updateBalances,
    updateSyntheticTotalSupply,
    expiringMultiParties,
    collateralTokens,
    updatePositions,
  } = useContract()
  const { web3Provider } = useRemix()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()
  const [error, setError] = useState<string | undefined>(undefined)

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    setError(undefined)

    const sendTx = async () => {
      debug("Creating position", values)

      const provider = new ethers.providers.Web3Provider(web3Provider)
      debug("Provider", provider)

      const signer = provider.getSigner()
      debug("Signer", signer)

      const accounts = await provider.listAccounts()
      debug("accounts", accounts)

      const contract = new ethers.Contract(
        getContractAddress("ExpiringMultiParty"),
        ExpiringMultiPartyArtifact.abi,
        signer
      )

      debug(
        "params",
        { rawValue: toWei(`${values.collateralAmount}`) },
        { rawValue: toWei(`${values.syntheticTokens}`) }
      )

      const receipt = await contract.create(
        { rawValue: toWei(`${values.collateralAmount}`) },
        { rawValue: toWei(`${values.syntheticTokens}`) }
      )

      debug("Receipt", await receipt.wait())

      updateBalances(signer, accounts[0])

      await updateSyntheticTotalSupply(signer)

      await updatePositions(signer, accounts[0])
    }

    setTimeout(() => {
      sendTx()
        .then(() => {
          setSubmitting(false)
          setCurrentStepCompleted()
        })
        .catch((e) => {
          debug(e)
          setSubmitting(false)
          setError(e.message.replace("VM Exception while processing transaction: revert", "").trim())
        })
    }, 2000)
  }
  return (
    <React.Fragment>
      <h4>CreatePosition</h4>

      <p>
        We can now create a synthetic token position. We will deposit X units of collateral to create Y units of
        synthetic tokens.
      </p>

      <Formik
        initialValues={initialValues}
        validate={
          isCurrentStepCompleted
            ? undefined
            : (values) => {
              return new Promise((resolve, reject) => {
                const errors: FormikErrors<FormProps> = {}

                const minSponsorTokens = expiringMultiParties[0].minSponsorTokens
                const collateralRequirement = expiringMultiParties[0].collateralRequirement

                if (!values.collateralAmount) {
                  errors.collateralAmount = "Required"
                } else if (values.collateralAmount / values.syntheticTokens < collateralRequirement / 100) {
                  errors.collateralAmount = `The collateral requirement is ${collateralRequirement} %`
                } else if (BigNumber.from(values.collateralAmount).gt(collateralTokens[0].totalSupply)) {
                  errors.collateralAmount = `The collateral desired is bigger than the total supply`
                }

                if (!values.syntheticTokens) {
                  errors.syntheticTokens = "Required"
                } else if (values.syntheticTokens < 100) {
                  errors.syntheticTokens = "Value should be higher than 100" // TO BE CONFIGURED via call to get the value..
                } else if (values.syntheticTokens < minSponsorTokens) {
                  errors.syntheticTokens = `The minimum number of synthetic tokens is ${minSponsorTokens}`
                } else if (values.syntheticTokens < minSponsorTokens) {
                  errors.syntheticTokens = `The minimum number of synthetic tokens is ${minSponsorTokens}`
                }

                resolve(errors)
              })
            }
        }
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormItem
              key="syntheticTokens"
              label="Synthetic tokens"
              field="syntheticTokens"
              labelWidth={3}
              placeHolder="Amount of synthetic tokens (i.e 100)"
            />

            <FormItem
              key="collateralAmount"
              label="Collateral amount"
              field="collateralAmount"
              labelWidth={3}
              placeHolder="Amount of collateral (i.e. 150)"
            />

            <Button
              variant="primary"
              type="submit"
              size="sm"
              disabled={isSubmitting}
              isLoading={isSubmitting}
              loadingText="Submitting..."
              text="Deploy"
              show={!isCurrentStepCompleted}
            />

            <SuccessMessage show={isCurrentStepCompleted}>You have successfully created a position.</SuccessMessage>
            <ErrorMessage show={error !== undefined}>{error}</ErrorMessage>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
