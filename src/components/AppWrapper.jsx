import React from "react"
import PropTypes from "prop-types"
import { StickyContainer } from "react-sticky"

import { StateProvider } from "../contexts/state"

const AppWrapper = ({ children }) => {
  const initialState = {
    isIndicationVisible: true,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "hideIndication":
        return {
          ...state,
          isIndicationVisible: false,
        }

      default:
        return state
    }
  }
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <StickyContainer>{children}</StickyContainer>
    </StateProvider>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppWrapper
