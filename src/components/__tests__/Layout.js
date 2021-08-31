import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import Layout from "../Layout"

afterEach(cleanup)

const { container } = render(
  <Layout>
    <div>test</div>
  </Layout>
)

test("Layout snapshot matches", () => {
  expect(container.firstChild).toMatchSnapshot()
})