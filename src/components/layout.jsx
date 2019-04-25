import React from "react"
import { Helmet } from "react-helmet"
import Header from "./header/Header"
import Footer from "./footer/Footer"

import "../pages/index.scss"

export default props => (
  <div className="layout">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
    <Header />
    <div className="main">{props.children}</div>
    <Footer />
  </div>
)
