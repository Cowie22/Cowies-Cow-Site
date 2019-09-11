/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
/*
In order to persist state, AppWrapper was created. The following
code keeps AppWrapper mounted throughout the browser session.
source: https://til.hashrocket.com/posts/qm5abe6ay8-wrap-the-root-of-a-gatsby-app-in-a-component
*/
import React from "react"
import AppWrapper from "./src/components/AppWrapper"

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./src/pages/index.scss"

export const wrapRootElement = ({ element }) => {
  return <AppWrapper>{element}</AppWrapper>
}
