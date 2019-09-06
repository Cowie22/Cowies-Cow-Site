import React from "react"
import PropTypes from "prop-types"
import { Sticky } from "react-sticky"

import UtilityNav from "./UtilityNav"
import MainNav from "./MainNav"

const Header = () => {
  return (
    <Sticky>
      {({ style }) => (
        <header className="main-header" style={{ ...style }}>
          <UtilityNav />
          <MainNav />
        </header>
      )}
    </Sticky>
  )
}

Header.propTypes = {
  style: PropTypes.object.isRequired,
}

export default Header
