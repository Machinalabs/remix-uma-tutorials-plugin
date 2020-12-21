import React, { PropsWithChildren, useContext, useEffect, useState } from "react"

interface Step {
    [key: string]: string
}

const DEFAULT_STEP = "deploy_collateral_token";

export const STEPS: Step = {
    "deploy_collateral_token": "Deploy collateral token",
    "deploy_price_identifier": "Deploy price identifier",
    "create_expiring_multiparty": "Create expiring multiparty",
    "create_position": "Create position",
    "redeem_tokens": "Redeem tokens",
    "deposit": "Deposit",
    "withdraw": "Withdraw"
}

interface IStepProvider {
    getAllSteps: () => Step,
    // getNextStep: () => string,
    // getCurrentStep: () => string,
    currentStep: string
    // getStepBefore: () => string
    // goNextStep: () => void
    // goStepBefore: () => void
}

/* tslint:disable */
// Default values
const StepContext = React.createContext<IStepProvider>({
    getAllSteps: () => STEPS,
    // getNextStep: () => STEPS["deploy_collateral_token"],
    // getCurrentStep: () => STEPS["deploy_collateral_token"],
    currentStep: STEPS[DEFAULT_STEP],
})
/* tslint:enable */

export const StepProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    // const [allSteps, setAllSteps] = useState({})
    const [currentStep, setCurrentStep] = useState(STEPS[DEFAULT_STEP])

    // useEffect(() => {

    // }, [])

    const getAllSteps = () => STEPS

    return (
        <StepContext.Provider
            value={{
                getAllSteps,
                currentStep
            }}>
            {children}
        </StepContext.Provider>
    )
}

export const useStep = () => {
    const context = useContext(StepContext)

    if (context === null) {
        throw new Error(
            "useStep() can only be used inside of <StepProvider />, please declare it at a higher level"
        )
    }
    return context
}
