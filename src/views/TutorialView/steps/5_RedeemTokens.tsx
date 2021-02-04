import React, { useState } from "react"
import { Formik, Form, FormikErrors } from "formik"
import { ethers } from "ethers"

import ExpiringMultiPartyArtifact from "@uma/core/build/contracts/ExpiringMultiParty.json"
import ExpandedERC20Artifact from "@uma/core/build/contracts/ExpandedERC20.json"

import { useRemix } from "../../../hooks"
import { useContract, useStep } from "../hooks"
import { ErrorMessage, FormItem, SuccessMessage } from "../components"
import { debug } from "../../../utils"
import { Button } from "../../../components"
import { toWei } from "web3-utils"

interface FormProps {
  syntheticTokens: number
}

const initialValues: FormProps = {
  syntheticTokens: 0,
}

export const RedeemTokens: React.FC = () => {
  const { web3Provider } = useRemix()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()
  const { positions, getContractAddress, updateBalances, updateSyntheticTotalSupply, updatePositions } = useContract()
  const [error, setError] = useState<string | undefined>(undefined)

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    setError(undefined)

    const sendTx = async () => {
      const syntheticTokens = toWei(`${values.syntheticTokens}`)
      debug("Redeeming tokens", values)

      const provider = new ethers.providers.Web3Provider(web3Provider)
      debug("Provider", provider)

      const signer = provider.getSigner()
      debug("Signer", signer)

      const accounts = await provider.listAccounts()
      debug("accounts", accounts)

      const syntheticContract = new ethers.Contract(
        getContractAddress("SynthethicToken"),
        ExpandedERC20Artifact.abi,
        signer
      )

      await syntheticContract.approve(getContractAddress("ExpiringMultiParty"), syntheticTokens)
      debug("Synthetic approved")

      const empContract = new ethers.Contract(
        getContractAddress("ExpiringMultiParty"),
        ExpiringMultiPartyArtifact.abi,
        signer
      )

      const receipt = await empContract.redeem({ rawValue: syntheticTokens })

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
        .catch((e: Error) => {
          debug(e)
          setSubmitting(false)
          setError(e.message.replace("VM Exception while processing transaction: revert", "").trim())
        })
    }, 1000)
  }

  return (
    <React.Fragment>
      <h4>Redeem Tokens</h4>
      <p>
        Because we are a token sponsor for this synthetic token contract, we can redeem some of the tokens we minted
        even before the synthetic token expires. <br />
        Let's redeem synthetic tokens.
      </p>

      <Formik
        initialValues={initialValues}
        validate={
          isCurrentStepCompleted
            ? undefined
            : (values) => {
              return new Promise((resolve, reject) => {
                const errors: FormikErrors<FormProps> = {}

                debug("values.syntheticTokens > positions[0].syntheticTokens", values.syntheticTokens)
                debug("values.syntheticTokens > positions[0].syntheticTokens", positions[0].syntheticTokens)
                if (!values.syntheticTokens) {
                  errors.syntheticTokens = "Required"
                } else if (
                  parseInt(`${values.syntheticTokens}`, 10) > parseInt(`${positions[0].syntheticTokens}`, 10)
                ) {
                  errors.syntheticTokens = "The number exceed the available synthetic tokens"
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
              label="Synthetic tokens to redeem"
              field="syntheticTokens"
              labelWidth={3}
              type="number"
              placeHolder="Amount of synthetic tokens (i.e 100)"
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

            <SuccessMessage show={isCurrentStepCompleted}>You have successfully redeemed tokens.</SuccessMessage>
            <ErrorMessage show={error !== undefined}>{error}</ErrorMessage>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
