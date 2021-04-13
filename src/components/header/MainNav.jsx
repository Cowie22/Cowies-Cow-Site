import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state';

import ExternalLink from "../exitramp/ExternalLink.jsx"

import logo from '../../assets/images/logo.svg'
import headerDiscussionIconMobile from '../../assets/images/header-discussion-icon-mobile.svg'
import headerProviderIconMobile from '../../assets/images/header-provider-icon-mobile.svg'
import arrowDownGrey from '../../assets/images/arrow-down-grey.svg'
import arrowDownRed from '../../assets/images/arrow-down-red-header.svg'

export default props => {
  const { isNavOpen, setNavOpen, popup, handlePopUp } = props;
  const [windowWidth, handleWindowWidth] = useState(0)
  const [hovered, handleHovered] = useState(false)

  useEffect(() => {
    handleWindowWidth(window.innerWidth)
  })

  function toggleNav() {
    document.querySelector('.mobile-nav').scrollTop = 0
    setNavOpen()
    let isiTray = document.getElementsByClassName('isi-tray')[0];
    if (isNavOpen) {
      // $('body').removeClass('scroll-none')
      isiTray.classList.remove('hide')
    } else {
      // $('body').addClass('scroll-none')
      isiTray.classList.add('hide')
    }
  }

  return (
    <AppContext.Consumer>
      {(context) => {
        const {
          activeHeaderNav,
          handleActiveHeaderNav,
          handleActiveSite,
          handleSelectionNav,
          currentPage,
          handleCurrentPage,
        } = context;
        return (
          <>
          <section className="main-nav">
            <Container>
              <Row>
                <Col sm={12} lg={3} className="navbar-header">
                  <Link to="/">
                    <img
                      loading='lazy'
                      alt=""
                      className='header-adcetris-logo'
                      src={logo}
                      onClick={() => {
                        handleActiveHeaderNav('');
                        handleActiveSite('');
                        handleSelectionNav(1);
                        handleCurrentPage('')
                      }
                      }
                    />
                  </Link>
                  <button
                    type="button"
                    className={isNavOpen ? "navbar-toggle active cta-click" : "navbar-toggle cta-click"}
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
                <Col lg={{span: 8, offset: 1}} className="navbar-collapse">
                  <nav id="navbar-collapse">
                    <ul>
                        <div
                          className='active-header'
                          style={
                            windowWidth > 1200 ?
                            activeHeaderNav === 'Interior-Pages' ? {left: '-3.0%', width: '25.4%'} :
                            activeHeaderNav === 'CD30-Science' ? {left: '29.4%', width: '14%'} :
                            activeHeaderNav === 'Resources' ? {left: '53.3%', width: '22%'} :
                            activeHeaderNav === 'video-channel' ? {left: '84%', width: '14%'} :
                            {opacity: 0}
                            :
                            activeHeaderNav === 'Interior-Pages' ? {left: '-2.4%', width: '25.4%'} :
                            activeHeaderNav === 'CD30-Science' ? {left: '29.6%', width: '14%'} :
                            activeHeaderNav === 'Resources' ? {left: '54.6%', width: '22.2%'} :
                            activeHeaderNav === 'video-channel' ? {left: '83%', width: '14%'} :
                            {opacity: 0}
                          }
                        >
                        </div>
                      <li>
                        <div
                          onClick={() => handleSelectionNav()}
                          onMouseEnter={() => handleHovered(true)}
                          onMouseLeave={() => handleHovered(false)}
                        >
                          <div
                            className='header-list-container'
                            style={activeHeaderNav === 'Interior-Pages' ? {color: '#A51140'} : {}}
                            onClick={() => handleActiveHeaderNav('Interior-Pages')}
                          >
                            <img
                              loading='lazy'
                              src={
                                hovered === true || activeHeaderNav === 'Interior-Pages' ?
                                arrowDownRed : arrowDownGrey
                              }
                              className='header-list-icon'
                            />
                            LYMPHOMA <br /> TYPE
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link
                          to="/cd30science/"
                          style={activeHeaderNav === 'discussion-guide' ? {color: '#A51140'} : {}}
                          onClick={() => handleCurrentPage('CD30-Science')}
                          className='header-nav'
                        >
                          CD30 <br /> SCIENCE
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/resources/"
                          style={activeHeaderNav === 'Resources' ? {color: '#A51140'} : {}}
                          className='extra-padding-link header-nav'
                          onClick={() => handleCurrentPage('resources')}
                        >
                          RESOURCES AND REIMBURSEMENT
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/videochannel/"
                          style={activeHeaderNav === 'video-channel' ? {color: '#A51140'} : {}}
                          onClick={() => handleCurrentPage('video-channel')}
                          className='header-nav'
                        >
                          VIDEO <br /> CHANNEL
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
                          toggleNav();
                          handleActiveHeaderNav('');
                          handleActiveSite('');
                          handleSelectionNav(1);
                          handleCurrentPage('')
                        }}
                        // style={currentPage === '' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to='/'
                          style={currentPage === '' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                          className='header-nav'
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='header-nav'
                        >
                          LYMPHOMA TYPE
                        </Link>
                      </li>
                      <div style={{marginLeft: '20px'}}>
                        <li
                          onClick={() => {
                            toggleNav()
                          }}
                          // style={currentPage === 'chl-previously-untreated' ? {borderLeft: '4px solid #A51140'} : {}}
                        >
                          <Link
                            to='/previously-untreated-stage-III-IV-classical-hodgkin-lymphoma/'
                            style={currentPage === 'chl-previously-untreated' ? {color: '#A51140', fontWeight: 'bold'} : {color: '#A51140', fontWeight: 'normal'}}
                            className='header-nav'
                          >
                            Previously untreated Stage III/IV cHL
                          </Link>
                        </li>
                        <li
                          onClick={() => {
                            toggleNav()
                          }}
                          // style={currentPage === 'chl-post-auto' ? {borderLeft: '4px solid #A51140'} : {}}
                        >
                          <Link
                            to='/classical-hodgkin-lymphoma-post-auto-hsct-consolidation/'
                            style={currentPage === 'chl-post-auto' ? {color: '#A51140', fontWeight: 'bold'} : {color: '#A51140', fontWeight: 'normal'}}
                            className='header-nav'
                          >
                            cHL post-auto-HSCT consolidation
                          </Link>
                        </li>
                        <li
                          onClick={() => {
                            toggleNav()
                          }}
                          // style={currentPage === 'chl-relapsed' ? {borderLeft: '4px solid #A51140'} : {}}
                        >
                          <Link
                            to='/relapsed-classical-hodgkin-lymphoma/'
                            style={currentPage === 'chl-relapsed' ? {color: '#A51140', fontWeight: 'bold'} : {color: '#A51140', fontWeight: 'normal'}}
                            className='header-nav'
                          >
                            Relapsed cHL
                          </Link>
                        </li>
                        <li
                          onClick={() => {
                            toggleNav()
                          }}
                          // style={currentPage === 'ptcl-previously-untreated' ? {borderLeft: '4px solid #006983'} : {}}
                        >
                          <Link
                            to='/previously-untreated-salcl-cd30-expressing-ptcl/'
                            style={currentPage === 'ptcl-previously-untreated' ? {color: '#006983', fontWeight: 'bold'} : {color: '#006983', fontWeight: 'normal'}}
                            className='header-nav'
                          >
                            Previously untreated sALCL or other CD30-expressing PTCL
                          </Link>
                        </li>
                        <li
                          onClick={() => {
                            toggleNav()
                          }}
                          // style={currentPage === 'ptcl-CD30-Expressing-MF' ? {borderLeft: '4px solid #006983'} : {}}
                        >
                          <Link
                            to='/relapsed-pcalcl-cd30-expressing-mf/'
                            style={currentPage === 'ptcl-CD30-Expressing-MF' ? {color: '#006983', fontWeight: 'bold'} : {color: '#006983', fontWeight: 'normal'}}
                            className='header-nav'
                          >
                            Relapsed pcALCL or CD30-expressing MF
                          </Link>
                        </li>
                        <li
                          onClick={() => {
                            toggleNav()
                          }}
                          // style={currentPage === 'ptcl-relapsed' ? {borderLeft: '4px solid #006983'} : {}}
                        >
                          <Link
                            to='/relapsed-salcl/'
                            style={currentPage === 'ptcl-relapsed' ? {color: '#006983', fontWeight: 'bold'} : {color: '#006983', fontWeight: 'normal'}}
                            className='header-nav'
                          >
                            Relapsed sALCL
                          </Link>
                        </li>
                      </div>
                      <li
                        onClick={() => {
                          toggleNav()
                          handleCurrentPage('0')
                        }}
                        // style={activeHeaderNav === 'discussion-guide' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to="/cd30science/"
                          style={activeHeaderNav === 'discussion-guide' ? {color: '#A51140'} : {}}
                          className='header-nav'
                        >
                          CD30 SCIENCE
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                          handleCurrentPage('0')
                        }}
                        // style={activeHeaderNav === 'Resources' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to="/resources/"
                          style={activeHeaderNav === 'Resources' ? {color: '#A51140'} : {}}
                          className='extra-padding-link header-nav'
                        >
                          RESOURCES AND REIMBURSEMENT
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                          handleCurrentPage('0')
                        }}
                        // style={activeHeaderNav === 'video-channel' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to="/videochannel/"
                          style={activeHeaderNav === 'video-channel' ? {color: '#A51140'} : {}}
                          className='header-nav'
                        >
                          VIDEO CHANNEL
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                          handleCurrentPage('0')
                        }}
                        // style={activeHeaderNav === 'Important Facts' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <Link
                          to={'/request-a-rep/'}
                          style={activeHeaderNav === 'Important Facts' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                          className='header-nav'
                        >
                          Request Office Visit
                        </Link>
                      </li>
                      <li>
                        <a
                          target='_blank'
                          className='utility-header-nav'
                          onClick={() => handlePopUp()}
                        >
                          Non-US Residents
                        </a>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                          handleCurrentPage('0')
                        }}
                        // style={activeHeaderNav === 'US Healthcare Providers' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <ExternalLink
                          externalUrl={'https://www.adcetris.com/'}
                          style={activeHeaderNav === 'US Healthcare Providers' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                          className='header-nav'
                        >
                          <div className='header-providers-container'>
                            Visit Patient Site
                            <img loading='lazy' src={headerProviderIconMobile} alt='' className='header-providers-icon'  />
                          </div>
                        </ExternalLink>
                      </li>
                      <li
                        onClick={() => {
                          toggleNav()
                          handleCurrentPage('0')
                        }}
                        // style={activeHeaderNav === 'Prescribing Information' ? {borderLeft: '4px solid #A51140'} : {}}
                      >
                        <a
                          href={'https://seagendocs.com/adcetris/pi/attachments/gXy3FkRz6t5bQhaYA6j4Fj'}
                          target='_blank'
                          style={activeHeaderNav === 'Prescribing Information' ? {color: '#A51140', fontWeight: 'bold'} : {}}
                          className='header-nav'
                        >
                          Prescribing Information
                        </a>
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
