// const React = require("react")
// const AppProvider = require("./src/contexts/state");

import React from 'react'
import AppProvider from './src/contexts/state'

// For Gatsby, there is a special way to handle context and apply the app provider to the project.
// You simply need to use the app provider in gatsby-browser.js and gatsby-ssr.js, and it will work
// For the entire app

export default wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      {element}
    </AppProvider>
  )
}