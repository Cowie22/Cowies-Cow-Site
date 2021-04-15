import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

import ExternalLink from "../exitramp/ExternalLink.jsx"

import logo from '../../assets/images/logo.svg'
import headerProviderIconMobile from '../../assets/images/header-provider-icon-mobile.svg'

export default props => {
  const [isNavOpen, setNavOpen] = useState(false)
  const [windowWidth, handleWindowWidth] = useState(0)

  useEffect(() => {
    handleWindowWidth(window.innerWidth)
  })

  function toggleNav() {
    document.querySelector('.mobile-nav').scrollTop = 0
    setNavOpen(!isNavOpen)
    let isiTray = document.getElementsByClassName('isi-tray')[0];
    if (isNavOpen) {
      isiTray.classList.remove('hide')
    } else {
      isiTray.classList.add('hide')
    }
  }

  return (
    <AppContext.Consumer>
      {(context) => {
        const { activeHeaderNav, handleActiveHeaderNav, handleActiveSite } = context;
        return (
          <>
          <section className="main-nav">
            <Container>
              <Row>
                <Col sm={12} lg={3} className="navbar-header">
                  <Link
                    to="/"
                  >
                    <img
                      loading='lazy'
                      alt=""
                      className='header-logo'
                      src={logo}
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
                  <nav className="nav-container" id="navbar-collapse">
                    <ul>
                      <li>
                        <Link
                          to="/"
                          className='hovered-red-nav'
                        >
                          Home
                        </Link>
                      </li>
                        <div
                          className='active-header'
                          style={
                            windowWidth > 1200 ?
                            activeHeaderNav === 'home' ? {left: '2.8%', width: '7.4%'} :
                            activeHeaderNav === 'dosing' ? {left: '19.6%', width: '8.6%'} :
                            activeHeaderNav === 'efficacy' ? {left: '36.0%', width: '10.8%'} :
                            activeHeaderNav === 'moa' ? {left: '52.0%', width: '13.3%'} :
                            activeHeaderNav === 'safety' ? {left: '72%', width: '8.6%'} :
                            activeHeaderNav === 'resources' ? {left: '87.2%', width: '13.3%'} :
                            {left: '2.8%', width: '7%'}
                            :
                            activeHeaderNav === 'home' ? {left: '2.8%', width: '7.7%'} :
                            activeHeaderNav === 'dosing' ? {left: '19.6%', width: '8.6%'} :
                            activeHeaderNav === 'efficacy' ? {left: '36.0%', width: '10.8%'} :
                            activeHeaderNav === 'moa' ? {left: '52.0%', width: '13.3%'} :
                            activeHeaderNav === 'safety' ? {left: '72%', width: '8.6%'} :
                            activeHeaderNav === 'resources' ? {left: '86.8%', width: '13.3%'} :
                            {left: '2.8%', width: '7%'}
                          }
                        >
                        </div>
                      <li>
                        <Link
                          to="/dosing/"
                          className='hovered-red-nav'
                        >
                          Dosing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/efficacy/"
                          className='hovered-red-nav'
                        >
                          Efficacy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/mechanism-of-action/"
                          className='hovered-red-nav'
                        >
                          Mechanism Of Action
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/safety/"
                          className='hovered-red-nav'
                        >
                          Safety
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resources/"
                          className='hovered-red-nav'
                        >
                          Support & Resources
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
            </Container>
            </section>
            <section className={isNavOpen ? "mobile-nav opened" : "mobile-nav"}>
            <Container>
              <Row>
                <Col className='mobile-nav-col'>
                  <div>
                    <ul className="mobile-nav-links">
                      <li
                        onClick={() => {
                          toggleNav()
                        }}
                        style={activeHeaderNav === 'home' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to="/"
                          className='hovered-red-nav'
                          style={activeHeaderNav === 'home' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                        >
                          Home
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                        }}
                        style={activeHeaderNav === 'dosing' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to="/dosing/"
                          className='hovered-red-nav'
                          style={activeHeaderNav === 'dosing' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                        >
                          Dosing
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                        }}
                        style={activeHeaderNav === 'efficacy' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to="/efficacy/"
                          className='hovered-red-nav'
                          style={activeHeaderNav === 'efficacy' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                        >
                          Efficacy
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                        }}
                        style={activeHeaderNav === 'moa' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to="/mechanism-of-action/"
                          className='hovered-red-nav'
                          style={activeHeaderNav === 'moa' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                        >
                          Mechanism Of Action
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                        }}
                        style={activeHeaderNav === 'safety' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to="/safety/"
                          className='hovered-red-nav'
                          style={activeHeaderNav === 'safety' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                        >
                          Safety
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                        }}
                        style={activeHeaderNav === 'resources' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to="/resources/"
                          className='hovered-red-nav'
                          style={activeHeaderNav === 'resources' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                        >
                          Support & Resources
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                        }}
                        style={activeHeaderNav === 'Important Facts' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <a
                          href={'https://www.google.com/'}
                          target='_blank'
                          className='hovered-red-nav'
                          style={activeHeaderNav === 'Important Facts' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                        >
                          Important Facts
                        </a>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                        }}
                        style={activeHeaderNav === 'Prescribing Information' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <a
                          href={'https://www.google.com/'}
                          target='_blank'
                          className='hovered-red-nav'
                          style={activeHeaderNav === 'Prescribing Information' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                        >
                          Prescribing Information
                        </a>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                        }}
                        style={activeHeaderNav === 'US Healthcare Providers' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <ExternalLink
                          externalUrl={'https://www.google.com/'}
                          className='hovered-red-nav'
                          style={activeHeaderNav === 'US Healthcare Providers' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                        >
                          <div className='header-providers-container'>
                            US Healthcare Providers
                            <img loading='lazy' src={headerProviderIconMobile} alt='' className='header-providers-icon'  />
                          </div>
                        </ExternalLink>
                      </li>
                    </ul>
                    <div className="mobile-nav-overlay">&nbsp;</div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          </>
        )
      }}
    </AppContext.Consumer>
  )
}
