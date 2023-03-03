import React, { useState, useEffect, useContext, memo } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import useHover from '../../../customHooks/useHover'

import logo from '../../../assets/images/global/header-logo.svg'

const MainNav = (props) => {
  const [isHovered, hover] = useHover('')
  const state = useContext(AppContext)
  const { currentPage, updateCurrentPage } = state

  const [currentTabHovered, handleCurrentTabHovered] = useState('')

  return (
    <section className='main-nav'>
      <section className='navigation-container'>
        <Container>
          <Row>
            <Col lg={{ span: 3, offset: 0 }}>
              <div className='header-logo-container'>
                <Link to='/'>
                  <img loading='lazy' alt='' src={logo} />
                </Link>
              </div>
            </Col>
            <Col xl={{ span: 6, offset: 3 }} lg={{ span: 7, offset: 2 }}>
              <nav className='nav-container'>
                <div className='nav-item-container'>
                  <Link
                    href='/'
                    className={currentPage === 'home' ? 'active-page' : ''}
                  >
                    Home
                  </Link>
                  <Link
                    href='/patientsandcaregivers/'
                    className={currentPage === 'patients-and-caregivers' ? 'active-page' : ''}
                  >
                    Patients and caregivers
                  </Link>
                  <Link
                    href='/hcps/'
                    className={currentPage === 'healthcare-providers' ? 'active-page' : ''}
                  >
                    Healthcare providers
                  </Link>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}

export default memo(MainNav)
