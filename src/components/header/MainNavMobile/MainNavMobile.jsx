import React, { useState, useEffect, useContext, memo } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import useToggle from '../../../customHooks/useToggle'

import logo from '../../../assets/images/global/header-logo.svg'

const MainNavMobile = props => {
  const state = useContext(AppContext)
  const { currentPage, updateCurrentPage } = state
  const [isToggled, toggle] = useToggle(true)

  if (typeof document !== 'undefined') {
    let body = document.getElementsByTagName('body')[0]
    if (!isToggled) {
      body.classList.add('scroll-none')
    } else {
      body.classList.remove('scroll-none')
    }
  }

  return (
    <section  className={isToggled ? '' : 'overlay'}>
      <section className='main-nav-mobile'>
        <Container>
          <Row>
            <Col xs={{ span: 12 }}>
              <Row>
                <Col xs={{ span: 4 }}>
                  <div className='mobile-header-logo-container'>
                    <Link to='/'>
                      <img loading='lazy' alt='' src={logo} />
                    </Link>
                  </div>
                </Col>
                <Col xs={{ span: 2, offset: 6 }} md={{ span: 1, offset: 7 }}>
                  <div className='mobile-toggle-container'>
                    <svg
                      className={isToggled ? 'hamburger-icon' : 'hamburger-icon active'}
                      viewBox='0 0 79 48'
                      width='54'
                      height='40'
                      onClick={toggle}
                    >
                      <path
                        className='line top'
                        d='m 20,8 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -35'
                      />
                      <path className='line middle' d='m 20,25 h 40' />
                      <path
                        className='line bottom'
                        d='m 60,42 h -54 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20'
                      />
                    </svg>
                  </div>
                </Col>
              </Row>
              <div className={!isToggled ? 'mobile-dropdown' : 'mobile-dropdown hidden-dropdown'}>
                <Row>
                  <Col xs={{span: 12}}>
                    <nav className='mobile-header-nav-container'>
                      <Link
                        href='/'
                        className={currentPage === 'home' ? 'active-page' : ''}
                        onClick={toggle}
                      >
                        Home
                      </Link>
                      <Link
                        href='/patientsandcaregivers/'
                        className={currentPage === 'patients-and-caregivers' ? 'active-page' : ''}
                        onClick={toggle}
                      >
                        Patients and caregivers
                      </Link>
                      <Link
                        href='/hcps/'
                        className={currentPage === 'healthcare-providers' ? 'active-page' : ''}
                        onClick={toggle}
                      >
                        Healthcare providers
                      </Link>
                      <Link
                        href='/signup/'
                        className={currentPage === 'sign-up' ? 'active-page' : ''}
                        onClick={toggle}
                      >
                        Sign up
                      </Link>
                    </nav>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default memo(MainNavMobile)
