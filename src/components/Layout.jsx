import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStateValue } from "../contexts/state"

import Header from "./header/Header"
import HeaderNoIndication from "./header/HeaderNoIndication"
import Footer from "./footer/Footer"

const Layout = ({ children }) => {
  const [{ isIndicationVisible }] = useStateValue()
  return (
    <div className="layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Evoke Giant Starter</title>
        <meta name="description" content="Evoke Giant Starter description" />
      </Helmet>
      {isIndicationVisible ? <Header /> : <HeaderNoIndication />}
      <div className="main">{children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
