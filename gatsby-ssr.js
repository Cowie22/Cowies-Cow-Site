// const React = require("react")
// const AppProvider = require("./src/contexts/state");

import React from 'react'
import AppProvider from './src/contexts/state'

export default wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      {element}
    </AppProvider>
  )
}