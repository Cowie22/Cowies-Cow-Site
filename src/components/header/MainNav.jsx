import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import AppProvider, { AppContext } from '../../contexts/state'

import ExternalLink from '../exitramp/ExternalLink.jsx'
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown'
import HeaderDropdownData from '../HeaderDropdown/HeaderDropdownData'

import logo from '../../assets/images/header-logo.svg'

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
        const { activeHeaderDropdown, handleActiveHeaderDropdown, handleActiveSite } = context;
        console.log('FIRST', activeHeaderDropdown)
        return (
          <>
            <section className='main-nav'>
              <Container>
                <Row>
                  <Col lg={3} xs={5} className='navbar-header'>
                    <Link
                      to='/'
                    >
                      <img
                        loading='lazy'
                        alt='Myovant logo'
                        className='header-logo'
                        src={logo}
                      />
                    </Link>
                  </Col>
                  <Col xl={{span: 4, offset: 2}} lg={{span: 5, offset: 0}}>
                    <nav className='header-nav-container'>
                      <ul>
                        <li
                          onMouseEnter={() => handleActiveHeaderDropdown('resources')}
                          onMouseLeave={() => handleActiveHeaderDropdown('')}
                        >
                          Access & Resources
                        </li>
                        <li
                          onMouseEnter={() => handleActiveHeaderDropdown('test')}
                          onMouseLeave={() => handleActiveHeaderDropdown('')}
                        >
                          TEST
                        </li>
                      </ul>
                    </nav>
                  </Col>
                  <Col
                    xl={{span: 3, offset: 0}}
                    lg={{span: 4, offset: 0}}
                    xs={{span: 6, offset: 1}}
                    className='d-none d-lg-block'
                  >
                    <div className='header-call-now-container'>
                      <div className='cta-btn-container header-cta-btn-container'>
                        <a href='tel:1-833-693-3627'>
                          <button className='cta-btn pink-btn'>
                            Register for Launch Broadcast
                          </button>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
                  {/* <div className={activeHeaderDropdown !== '' ? 'header-dropdown' : 'header-dropdown-hidden'}> */}
                  <HeaderDropdown
                      activeHeaderDropdown={activeHeaderDropdown}
                      HeaderDropdownData={HeaderDropdownData}
                    />
                  {/* </div> */}
              </Container>
            </section>
          </>
        )
      }}
    </AppContext.Consumer>
  )
}
