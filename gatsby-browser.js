/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/*
Layout unmounts/remounts on page change, which would cause
the Indication to reappear if dismissed on the previous
page. This code keeps Layout mounted and wraps the entire
web app with Layout (so it doesn't have to be in each page
component).
source: https://til.hashrocket.com/posts/qm5abe6ay8-wrap-the-root-of-a-gatsby-app-in-a-component
*/
import React from "react"
import Layout from "./src/components/Layout"

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
