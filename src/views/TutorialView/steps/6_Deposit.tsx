import React, { useState } from "react"
import { Formik, Form, FormikErrors } from "formik"
import Alert from "react-bootstrap/Alert"
import { toWei } from "web3-utils"

import ExpiringMultiPartyArtifact from "@uma/core/build/contracts/ExpiringMultiParty.json"

import { useRemix } from "../../../hooks"
import { useContract, useStep } from "../hooks"
import { FormItem } from "../components"
import { Button } from "../../../components"
import { debug } from "../../../utils"
import { BigNumber, ethers } from "ethers"

interface FormProps {
  collateralAmount: number
}

const initialValues: FormProps = {
  collateralAmount: 0,
}

export const Deposit: React.FC = () => {
  const {
    getContractAddress,
    updateBalances,
    collateralTokens,
  } = useContract()
  const { web3Provider } = useRemix()
  const { setCurrentStepCompleted, isCurrentStepCompleted } = useStep()
  const [error, setError] = useState<string | undefined>(undefined)

  const handleSubmit = (values: FormProps, { setSubmitting }) => {
    const sendTx = async () => {
      debug("Depositing", values)

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

      const receipt = await contract.deposit({ rawValue: toWei(`${values.collateralAmount}`) })

      debug("Receipt", await receipt.wait())

      updateBalances(signer, accounts[0])

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
      <h4>Deposit</h4>
      <p>As a token sponsor, we may wish to add additional collateral to our position to avoid being liquidated.
        <br />
      Let’s deposit additional collateral tokens to our position.</p>

      <Formik
        initialValues={initialValues}
        validate={
          isCurrentStepCompleted
            ? undefined
            : (values) => {
              return new Promise((resolve, reject) => {
                const errors: FormikErrors<FormProps> = {}

                if (!values.collateralAmount) {
                  errors.collateralAmount = "Required"
                } else if (BigNumber.from(values.collateralAmount).gt(collateralTokens[0].totalSupply)) {
                  errors.collateralAmount = `The collateral desired is bigger than the total supply`
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
              key="collateralAmount"
              label="Collateral amount"
              field="collateralAmount"
              labelWidth={3}
              placeHolder="Collateral amount (i.e 100)"
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
              You have successfully deposited collateral.
            </Alert>

            <Alert variant="danger" style={{ width: "85%", marginTop: "1em" }} show={error !== undefined} transition={false} >
              {error}
            </Alert>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}
