/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */


 import "bootstrap/dist/css/bootstrap.min.css"
 import React from "react"
 import AppProvider from "./src/contexts/state.jsx"

 export const wrapRootElement = ({ element }) => {
   return (
     <AppProvider>
       {element}
     </AppProvider>
   )
 }