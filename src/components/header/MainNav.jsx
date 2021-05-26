import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import AppProvider, { AppContext } from '../../contexts/state'

import ExternalLink from '../exitramp/ExternalLink.jsx'

import logo from '../../assets/images/header-logo.svg'
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
            <section className='main-nav'>
              <Container>
                <Row>
                  <Col lg={3} xs={7} className='navbar-header'>
                    <Link
                      to='/'
                    >
                      <img
                        loading='lazy'
                        alt='Myfembree® (relugolix, estradiol, and norethindrone acetate) tablets 40 mg, 1 mg, 0.5 mg'
                        className='header-logo'
                        src={logo}
                      />
                    </Link>
                  </Col>
                  <Col
                    xl={{span: 3, offset: 6}}
                    lg={{span: 4, offset: 5}}
                    xs={{span: 6, offset: 1}}
                    className='d-none d-lg-block'
                  >
                    {/* <div className='header-call-now-container'>
                      <div className='cta-btn-container header-cta-btn-container'>
                        <a href='tel:1-833-693-3627'>
                          <button className='cta-btn transparent-btn-pink'>
                            Register for Launch Broadcast
                          </button>
                        </a>
                      </div>
                    </div> */}
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
