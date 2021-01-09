import { renderHook, act } from "@testing-library/react-hooks"
import { useStep, StepProvider } from "./useStep"

describe("useStep tests", () => {
  const render = () => {
    const wrapper = ({ children }: any) => <StepProvider>{children}</StepProvider>
    const { result } = renderHook(() => useStep(), { wrapper })
    return {
      result,
    }
  }

  test("getAllSteps", () => {
    const { result } = render()

    const allSteps = result.current.getAllSteps()
    const stepsNumber = Object.keys(allSteps).length

    expect(allSteps).toBeDefined()
    expect(stepsNumber).toEqual(6)
  })

  test("currentStep", () => {
    const { result } = render()

    const currentStep = result.current.currentStep
    const allSteps = result.current.getAllSteps()

    expect(currentStep).toBeDefined()
    expect(currentStep).toEqual(allSteps[0])
  })

  // aqui voy..
  test("getNextStep", () => {
    const { result } = render()

    const allSteps = result.current.getAllSteps()
    const nextStep = result.current.getNextStep()

    expect(allSteps).toBeDefined()
    expect(nextStep).toEqual(allSteps[1])
  })

  test("goNextStep", () => {
    const { result } = render()

    const allSteps = result.current.getAllSteps()
    const currentStateBefore = result.current.currentStep

    expect(currentStateBefore).toEqual(allSteps[0])

    act(() => {
      result.current.goNextStep()
    })

    const currentStateAfter = result.current.currentStep

    expect(currentStateAfter).toEqual(allSteps[1])
  })

  test("getStepBefore", () => {
    const { result } = render()

    const allSteps = result.current.getAllSteps()
    const currentStateBefore = result.current.currentStep

    expect(currentStateBefore).toEqual(allSteps[0])

    act(() => {
      result.current.goNextStep()
    })

    const currentStateAfter = result.current.currentStep

    expect(currentStateAfter).toEqual(allSteps[1])

    act(() => {
      result.current.goStepBefore()
    })

    expect(result.current.currentStep).toEqual(allSteps[0])
  })

  test("isLastStep", () => {
    const { result } = render()

    const allSteps = result.current.getAllSteps()

    act(() => {
      result.current.goNextStep()
    })

    act(() => {
      result.current.goNextStep()
    })

    act(() => {
      result.current.goNextStep()
    })

    act(() => {
      result.current.goNextStep()
    })

    act(() => {
      result.current.goNextStep()
    })

    // act(() => {
    //   result.current.goNextStep()
    // })

    expect(result.current.currentStep).toEqual(allSteps[5])
  })
})
