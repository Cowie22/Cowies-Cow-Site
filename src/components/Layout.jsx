import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StickyContainer } from "react-sticky"

import { StateProvider } from "../contexts/state"
import HeaderSwitcher from "./header/HeaderSwitcher"
import Footer from "./footer/Footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "../pages/index.scss"
// Import font-awesome
// Sources:
// https://github.com/gatsbyjs/gatsby/issues/6357#issuecomment-490972478 - source of code below
// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently
// import { library } from "@fortawesome/fontawesome-svg-core"
// import brand icons
// import { fab } from "@fortawesome/free-brands-svg-icons"
// import pro icons
// import { faTimesCircle, faAngleRight } from "@fortawesome/pro-light-svg-icons"
// then add icons to the library
// library.add(faTimesCircle, faAngleRight)

const Layout = ({ children }) => {
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
          <HeaderSwitcher />
          <div className="main">{children}</div>
          <Footer />
        </div>
      </StickyContainer>
    </StateProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
