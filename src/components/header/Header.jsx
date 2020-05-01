import React from "react"
import PropTypes from "prop-types"
import { Sticky } from "react-sticky"

import MainNav from "./MainNav"

const Header = props => {
  return (
    <Sticky topOffset={props.indicationIsOpen ? 160 : 100}>
      {({ style }) => (
        <header className="main-header" style={{ ...style }}>
          <MainNav />
        </header>
      )}
    </Sticky>
  )
}

export default Header
