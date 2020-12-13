import { render } from "@testing-library/react"

import App from "./App"

describe("App tests", () => {
  test("snapshot", () => {
    const { container } = render(<App />)

    expect(container).toMatchSnapshot()
  })
})
