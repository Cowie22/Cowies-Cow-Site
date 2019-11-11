import React from "react"
import AppProvider, { AppContext } from '../../contexts/state';

import Header from "./Header"
import HeaderNoIndication from "./HeaderNoIndication"

/*
This is needed due to the use of react-sticky. Without this,
after the user closes the indication, the rest of the header
moves up, but the body stays in the same spot.
*/
export default () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        const { isIndicationVisible } = context;
        return (
          isIndicationVisible ? <Header /> : <HeaderNoIndication />
        )
      }}
    </AppContext.Consumer>
  )
}
