import React from "react"
import { Formik, Form, FormikErrors } from "formik"
import Alert from "react-bootstrap/Alert"

import ExpiringMultiPartyArtifact from "@uma/core/build/contracts/ExpiringMultiParty.json"

import { Button } from "../../../components"
import { useRemix } from "../../../hooks"
import { debug } from "../../../utils"
import { useContract, useStep } from "../hooks"
import { FormItem } from "../components"
import { ethers } from "ethers"
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
  const { getContractAddress, updateBalances, addPosition, updateSyntheticTotalSupply } = useContract()
  const { web3Provider } = useRemix()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
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

      addPosition({
        collateralAmount: values.collateralAmount,
        syntheticTokens: values.syntheticTokens,
      })

      await updateSyntheticTotalSupply(signer)
    }

    setTimeout(() => {
      sendTx().then(() => {
        setSubmitting(false)
        setCurrentStepCompleted()
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
                const errors: FormikErrors<FormProps> = {}
                if (!values.collateralAmount) {
                  errors.collateralAmount = "Required"
                }

                if (!values.syntheticTokens) {
                  errors.syntheticTokens = "Required"
                } else if (values.syntheticTokens < 100) {
                  errors.syntheticTokens = "Value should be higher than 100" // TO BE CONFIGURED via call to get the value..
                }

                // valiadate the collateral requirement

                return errors
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

            <Alert variant="success" style={{ width: "85%" }} show={isCurrentStepCompleted} transition={false}>
              You have successfully created a position.
              {/* Created ${argv.tokens} tokens (backed by ${argv.collateral} collateral) */}
            </Alert>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
