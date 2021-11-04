import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import logo from '../../assets/images/global/header-logo.svg'

const MainNav = props => {
  const [isNavOpen, handleIsNavOpen] = useState(false)
  const [currentTabHovered, handleCurrentTabHovered] = useState('')

  const {
    activeHeaderDropdown,
    handleActiveHeaderDropdown,
    activeDropdownLink,
    handleActiveDropdownLink,
    currentPage,
    handleCurrentPage,
    handleCurrentTopTab,
  } = props

  const toggleNav = () => {
    document.querySelector('.mobile-nav').scrollTop = 0
    this.props.setNavOpen()
    handleIsNavOpen(!isNavOpen)

    let isiTray = document.getElementsByClassName('isi-tray')[0]
    if (isNavOpen) {
      document.body.classList.remove('scroll-none')
      // isiTray.classList.remove('hide');
    } else {
      document.body.classList.add('scroll-none')
      // isiTray.classList.add('hide');
    }
  }

  return (
    <>
      <section
        className='main-nav'
        onMouseLeave={() => {
          handleActiveHeaderDropdown('')
        }}
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
                  onMouseEnter={() => {
                    handleActiveHeaderDropdown('')
                  }}
                  width={'86%'}
                  height={'100%'}
                />
              </Link>
            </Col>
            <Col xs={{ span: 3, offset: 3 }} className='d-block d-lg-none'>
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
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar' />
                  <span className='icon-bar' />
                  <span className='icon-bar' />
                </button>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 5 }} className='d-none d-lg-block'>
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
      <section className={isNavOpen ? 'mobile-nav opened' : 'mobile-nav'}>
        <Container>
          <Row>
            <Col className='mobile-nav-col'>
              <div className='mobile-nav-list-container'>
                <ul className='mobile-nav-links'>
                  <li
                    onClick={() => {
                      handleActiveDropdownLink(0)
                      handleActiveHeaderDropdown('')
                      toggleNav()
                    }}
                    className={
                      activeDropdownLink === 0 && currentPage === 'dosing'
                        ? 'header-dropdown-active'
                        : ''
                    }
                  >
                    <Link to='/once-daily-dosing/'>Once-Daily Dosing</Link>
                  </li>
                  <li
                    onClick={() => {
                      handleActiveDropdownLink(2)
                      handleActiveHeaderDropdown('')
                      toggleNav()
                    }}
                    className={
                      activeDropdownLink === 2 && currentPage === 'about'
                        ? 'header-dropdown-active'
                        : ''
                    }
                  >
                    <Link to='/about/'>About</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default MainNav
