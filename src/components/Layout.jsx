import React, { useState } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StickyContainer } from "react-sticky"

import AppProvider, { AppContext } from "../contexts/state"

import Header from "./header/Header"
import Indication from "./header/Indication"
import UtilityNav from "./header/UtilityNav"
import Isi from "./isi/Isi"
import Footer from "./footer/Footer"

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
    <AppProvider>
      <StickyContainer>
        <div className="layout">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Evoke Giant Starter</title>
            <meta
              name="description"
              content="Evoke Giant Starter description"
            />
          </Helmet>
          <Indication
            indicationIsOpen={indicationIsOpen}
            setIndicationIsOpen={setIndicationIsOpen}
            openIndication={openIndication}
            closeIndication={closeIndication}
          />
          <UtilityNav openIndication={openIndication} />

          <Header
            indicationIsOpen={indicationIsOpen}
            openIndication={openIndication}
            closeIndication={closeIndication}
          />
          <div className="main">{children}</div>
          <Isi />
          <Footer />
        </div>
      </StickyContainer>
    </AppProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
