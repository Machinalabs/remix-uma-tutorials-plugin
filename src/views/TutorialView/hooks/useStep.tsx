import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react"

export interface StepDefinition {
  route: string
  order: number
  name: string
  key: string
}

type Step = StepDefinition[]

export const DEFAULT_STEP = 0

const STEPS: Step = [
  {
    key: "deploy_collateral_token",
    route: "deploy_collateral_token",
    order: 1,
    name: "Deploy collateral token",
  },
  {
    key: "deploy_price_identifier",
    order: 2,
    route: "deploy_price_identifier",
    name: "Deploy price identifier",
  },
  {
    key: "create_expiring_multiparty",
    order: 3,
    route: "create_expiring_multiparty",
    name: "Create expiring multiparty",
  },
  {
    key: "create_position",
    order: 4,
    route: "create_position",
    name: "Create position",
  },
  {
    key: "redeem_tokens",
    order: 5,
    route: "redeem_tokens",
    name: "Redeem tokens",
  },
  {
    key: "deposit",
    order: 6,
    route: "deposit",
    name: "Deposit",
  },
  {
    key: "withdraw",
    order: 7,
    route: "withdraw",
    name: "Withdraw",
  },
]

interface IStepProvider {
  getAllSteps: () => Step
  getNextStep: () => StepDefinition
  currentStep: StepDefinition
  getStepBefore: () => StepDefinition
  isLastStep: () => boolean
  goNextStep: () => void
  goStepBefore: () => void
}

/* tslint:disable */
// Default values
const StepContext = React.createContext<IStepProvider>({
    getAllSteps: () => STEPS,
    getNextStep: () => STEPS[DEFAULT_STEP],
    currentStep: STEPS[DEFAULT_STEP],
    getStepBefore: () => STEPS[DEFAULT_STEP],
    isLastStep: () => false,
    goNextStep: () => { },
    goStepBefore: () => { }
})
/* tslint:enable */

export const StepProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(STEPS[DEFAULT_STEP])

  const getNextStep = () => {
    const result = getNextStepInternal()
    if (!result) {
      throw new Error(
        "Invalid state, it shouldn't be called if there is not a next step"
      )
    }
    return result
  }

  const getAllSteps = () => STEPS

  const isLastStep = () => {
    const result = getNextStepInternal()
    if (!result) {
      return true
    }
    return false
  }

  const getStepBefore = () => {
    const allSteps = getAllSteps()
    const currentOrder = currentStep.order
    const stepBeforeOrder = currentOrder - 1

    const result = allSteps.find((s) => s.order === stepBeforeOrder)

    if (!result) {
      throw new Error(
        "Invalid state, it shouldn't be called if there is not a step before"
      )
    }
    return result
  }

  const goNextStep = () => {
    const nextStep = getNextStepInternal()
    if (!nextStep) {
      throw new Error("There is not next step")
    }
    setCurrentStep(nextStep)
  }

  const goStepBefore = () => {
    const stepBefore = getStepBefore()
    if (!stepBefore) {
      throw new Error("There is not step before")
    }
    setCurrentStep(stepBefore)
  }

  const getNextStepInternal = () => {
    const allSteps = getAllSteps()
    const currentOrder = currentStep.order
    const nextStepOrder = currentOrder + 1

    return allSteps.find((s) => s.order === nextStepOrder)
  }

  return (
    <StepContext.Provider
      value={{
        getAllSteps,
        currentStep,
        getNextStep,
        getStepBefore,
        isLastStep,
        goNextStep,
        goStepBefore,
      }}
    >
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
