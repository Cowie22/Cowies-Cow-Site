import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import logo from '../../assets/images/global/header-logo.svg'

const MainNav = props => {
  const [isNavOpen, handleIsNavOpen] = useState(false)
  const [yDirection, handleYDirection] = useState(0)
  const [currentTabHovered, handleCurrentTabHovered] = useState('')

  const state = useContext(AppContext)
  const { currentPage, handleCurrentPage } = state

  const toggleNav = () => {
    handleIsNavOpen(!isNavOpen)

    if (isNavOpen) {
      document.body.classList.remove('scroll-none')
    } else {
      document.body.classList.add('scroll-none')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return function cleanUp() {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    let currentY = window.pageYOffset
    handleYDirection(currentY)
  }

  return (
    <section className={yDirection > 0 ? 'main-nav dark-nav' : 'main-nav'}>
      <Container>
        <Row>
          <Col lg={2} xs={3}>
            <div className='header-logo-container'>
              <Link to='/'>
                <img loading='lazy' alt='' src={logo} />
              </Link>
            </div>
          </Col>
          <Col lg={{ span: 4, offset: 6 }} xs={{ span: 8, offset: 1 }}>
            <nav className='header-nav-container'>
              <ul>
                <Link
                  to='/'
                  onMouseEnter={() => {
                    handleCurrentTabHovered('home')
                  }}
                  onMouseLeave={() => {
                    handleCurrentTabHovered('')
                  }}
                >
                  <li>HOME</li>
                </Link>
                <div
                  className={
                    currentPage === 'home'
                      ? 'active-link home'
                      : currentPage === 'about'
                      ? 'active-link about'
                      : currentPage === 'error'
                      ? 'active-link error'
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
                <Link
                  to='/aboutnpc/'
                  onMouseEnter={() => {
                    handleCurrentTabHovered('about')
                  }}
                  onMouseLeave={() => {
                    handleCurrentTabHovered('')
                  }}
                >
                  <li>ABOUT NPC</li>
                </Link>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MainNav
