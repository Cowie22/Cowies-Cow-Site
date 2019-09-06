import React from "react"

import Header from "./Header"
import HeaderNoIndication from "./HeaderNoIndication"
import { useStateValue } from "../../contexts/state"

/*
This is needed due to the use of react-sticky. Without this,
after the user closes the indication, the rest of the header
moves up, but the body stays in the same spot.
*/
export default () => {
  const [{ isIndicationVisible }] = useStateValue()
  return isIndicationVisible ? <Header /> : <HeaderNoIndication />
}
