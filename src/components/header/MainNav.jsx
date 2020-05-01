import React, { useState } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import $ from "jquery"

export default props => {
  const [isNavOpen, setNavOpen] = useState(false)

  function toggleNav() {
    document.querySelector(".mobile-nav").scrollTop = 0
    setNavOpen(!isNavOpen)
    if (isNavOpen) {
      $("body").removeClass("scroll-none")
      $(".isi-tray").removeClass("hide")
    } else {
      $("body").addClass("scroll-none")
      $(".isi-tray").addClass("hide")
    }
  }

  return (
    <section className="main-nav">
      <Container>
        <Row>
          <Col sm={12} lg={3} className="navbar-header">
            <Link to="/">
              <img
                alt=""
                src={require("../../assets/images/header-logo.svg")}
              />
            </Link>
            <button
              type="button"
              className={isNavOpen ? "navbar-toggle active" : "navbar-toggle"}
              onClick={() => {
                toggleNav()
              }}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </Col>
          <Col lg={9} className="navbar-collapse">
            <nav className="right" id="navbar-collapse">
              <ul>
                <li>
                  <Link to="/efficacy">Efficacy</Link>
                </li>
                <li>
                  <Link to="/safety">Safety</Link>
                </li>
                <li>
                  <Link to="/dosing">Dosing</Link>
                </li>
                <li>
                  <Link to="/mechanism-of-action">Mechanism of Action</Link>
                </li>
                <li>
                  <Link to="/support-and-resources">
                    Support &amp; Resources
                  </Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
      <div className={isNavOpen ? "mobile-nav opened" : "mobile-nav"}>
        <ul className="mobile-nav-links">
          <li
            onClick={() => {
              toggleNav()
            }}
          >
            <Link to="/efficacy">Efficacy</Link>
          </li>
          <li
            onClick={() => {
              toggleNav()
            }}
          >
            <Link to="/safety">Safety</Link>
          </li>
          <li
            onClick={() => {
              toggleNav()
            }}
          >
            <Link to="/dosing">Dosing</Link>
          </li>
          <li
            onClick={() => {
              toggleNav()
            }}
          >
            <Link to="/mechanism-of-action">Mechanism of Action</Link>
          </li>
          <li
            onClick={() => {
              toggleNav()
            }}
          >
            <Link to="/support-and-resources">Support &amp; Resources</Link>
          </li>
        </ul>
        <div className="mobile-nav-overlay">&nbsp;</div>
      </div>
    </section>
  )
}
