import React, { useState } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StickyContainer } from "react-sticky"

import AppProvider, { AppContext } from "../contexts/state"

import Header from "./header/Header"
import UtilityNav from "./header/UtilityNav"
import Isi from "./isi/Isi"
import Footer from "./footer/Footer"
import ExitRamp from "../components/exitramp/ExitRamp"

import "bootstrap/dist/css/bootstrap.min.css"
import "../pages/index.scss"

const Layout = ({ children }) => {
  const [indicationIsOpen, setIndicationIsOpen] = useState(false)

  function closeIndication() {
    setIndicationIsOpen(false)
  }

  function openIndication() {
    document.cookie = "indication=true"
    setIndicationIsOpen(true)
  }

  return (
    <div className="layout">
      <StickyContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Evoke Giant Starter</title>
          <meta
            name="description"
            content="Evoke Giant Starter description"
          />
        </Helmet>
        <UtilityNav openIndication={openIndication} />

        <Header
          indicationIsOpen={indicationIsOpen}
          openIndication={openIndication}
          closeIndication={closeIndication}
        />
        <div className="main">{children}</div>
        <Isi />
        <Footer />
      </StickyContainer>
      <ExitRamp />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
