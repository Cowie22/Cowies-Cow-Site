import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import logo from '../../assets/images/global/header-logo.svg'

const MainNav = props => {
  const [isNavOpen, handleIsNavOpen] = useState(false)
  const [yDirection, handleYDirection] = useState(0);
  const [currentTabHovered, handleCurrentTabHovered] = useState('')

  const state = useContext(AppContext);
  const {
    currentPage,
    handleCurrentPage,
  } = state;

  const toggleNav = () => {
    handleIsNavOpen(!isNavOpen)

    if (isNavOpen) {
      document.body.classList.remove('scroll-none')
    } else {
      document.body.classList.add('scroll-none')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return function cleanUp() {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleScroll = () => {
    let currentY = window.pageYOffset;
    handleYDirection(currentY);
  }

  return (
    <>
      <section
        className={yDirection > 0 ? 'main-nav dark-nav d-none d-lg-block' : 'main-nav d-none d-lg-block'}
      >
        <Container>
          <Row>
            <Col lg={2} xs={6} className='navbar-header'>
              <Link to='/'>
                <img
                  loading='lazy'
                  alt=''
                  className='header-logo'
                  src={logo}
                  width={'86%'}
                  height={'100%'}
                />
              </Link>
            </Col>
            <Col lg={{ span: 5, offset: 5 }}>
              <nav className='header-nav-container'>
                <ul>
                  <li
                    onMouseEnter={() => {
                      handleCurrentTabHovered('home')
                    }}
                    onMouseLeave={() => {
                      handleCurrentTabHovered('')
                    }}
                  >
                    <Link to='/'>HOME</Link>
                  </li>
                  <div
                    className={
                      currentPage === 'home'
                        ? 'active-link home'
                        : currentPage === 'about'
                        ? 'active-link about'
                        : 'active-link home'
                    }
                  ></div>
                  <div
                    className={
                      currentTabHovered === 'home'
                        ? 'active-link-hovered home'
                        : currentTabHovered === 'about'
                        ? 'active-link-hovered about'
                        : currentTabHovered === '' && currentPage === 'home'
                        ? 'active-link-hovered home'
                        : currentTabHovered === '' && currentPage === 'about'
                        ? 'active-link-hovered about'
                        : 'active-link-hovered'
                    }
                  ></div>
                  <li
                    onMouseEnter={() => {
                      handleCurrentTabHovered('about')
                    }}
                    onMouseLeave={() => {
                      handleCurrentTabHovered('')
                    }}
                  >
                    <Link to='/about/'>ABOUT NPC</Link>
                  </li>
                </ul>
              </nav>
              <nav className={currentPage === 'home' ? 'secondary-nav' : 'secondary-nav none'}>
                <ul>
                  <li>
                    <a href='#outcomes'>
                      NPC outcomes
                    </a>
                  </li>
                  <li>
                    <a href='#treatment'>
                      Treatment options
                    </a>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className={
          yDirection > 0 || isNavOpen ? 'header-section-mobile dark-nav d-block d-lg-none' :
          'header-section-mobile d-block d-lg-none'
        }
      >
        <Container>
          <Row>
            <Col xs={{span: 4, offset: 0}}>
              <div className='header-logo-container'>
                <Link to='/'>
                  <img
                    loading='lazy'
                    alt=''
                    className='header-logo'
                    src={logo}
                    width={'86%'}
                    height={'100%'}
                  />
                </Link>
              </div>
            </Col>
            <Col xs={{ span: 2, offset: 6 }}>
              <div className='mobile-navbar-container'>
                <button
                  type='button'
                  className={
                    isNavOpen ? 'navbar-toggle active' : 'navbar-toggle'
                  }
                  onClick={() => {
                    toggleNav()
                  }}
                >
                  <div className='sr-only'>Toggle navigation</div>
                  <div className='icon-bar'>
                    <span className='icon-bar-inner'>

                    </span>
                  </div>
                  <div className='icon-bar'>
                    <span className='icon-bar-inner'>

                    </span>
                  </div>
                  <div className='icon-bar'>
                    <span className='icon-bar-inner'>

                    </span>
                  </div>
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 12, offset: 0}}>
              <nav
                className={
                  isNavOpen ? 'header-nav-container-mobile' : 'header-nav-container-mobile hidden-dropdown'}
                >
                <ul className='header-nav-list'>
                  <div
                    className={
                      currentPage === 'home' ? 'home-page-list-items active-list' :
                      'home-page-list-items'
                    }
                  >
                    <li
                      onClick={() => {
                        toggleNav()
                      }}
                      className='mobile-page-nav-item'
                    >
                      <Link to='/'>
                        HOME
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        toggleNav()
                      }}
                    >
                      <Link to='/#outcomes'>
                        NPC outcomes
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        toggleNav()
                      }}
                    >
                      <Link to='/#treatment'>
                        Treatment options
                      </Link>
                    </li>
                  </div>
                  <div
                    className={
                      currentPage === 'about' ? 'about-page-list-items active-list' :
                      'about-page-list-items'
                    }
                  >
                    <li
                      onClick={() => {
                        toggleNav()
                      }}
                      className='mobile-page-nav-item'
                    >
                      <Link to='/about/'>
                        ABOUT NPC
                      </Link>
                    </li>
                  </div>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default MainNav