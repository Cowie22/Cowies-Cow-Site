/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// For Gatsby, there is a special way to handle context and apply the app provider to the project.
// You simply need to use the app provider in gatsby-browser.js and gatsby-ssr.js, and it will work
// For the entire app

 import "bootstrap/dist/css/bootstrap.min.css"
 import React from "react"
 import { AppWrapper } from "./src/contexts/state.jsx"

 export const wrapRootElement = ({ element }) => {
   return (
     <AppWrapper>
       {element}
     </AppWrapper>
   )
 }