import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import logo from '../../assets/images/global/header-logo.svg'

class MainNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentData: { list: ['placeholder'] },
      isNavOpen: false,
      mobileDropDown: {efficacyDropdown: true, supportDropdown: true},
    }
  }

  toggleNav = () => {
    document.querySelector('.mobile-nav').scrollTop = 0
    this.props.setNavOpen()
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
    let isiTray = document.getElementsByClassName('isi-tray')[0]
    if (this.state.isNavOpen) {
      document.body.classList.remove('scroll-none')
      // isiTray.classList.remove('hide');
    } else {
      document.body.classList.add('scroll-none')
      // isiTray.classList.add('hide');
    }
  }

  render() {
    const { currentData, isNavOpen, mobileDropDown } = this.state
    const {
      activeHeaderDropdown,
      handleActiveHeaderDropdown,
      activeDropdownLink,
      handleActiveDropdownLink,
      currentPage,
      handleCurrentPage,
      handleCurrentTopTab,
    } = this.props

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
                    alt='Myfembree® (relugolix, estradiol, and norethindrone acetate) tablets 40 mg, 1 mg, 0.5 mg'
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
                      this.toggleNav()
                    }}
                  >
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                  </button>
                </div>
              </Col>
              <Col
                lg={{ span: 5, offset: 5 }}
                className='d-none d-lg-block'
              >
                <nav className='header-nav-container'>
                  <ul>
                    <li
                      onMouseEnter={() => {
                        handleActiveHeaderDropdown('')
                      }}
                    >
                      <Link
                        to='/'
                        className={currentPage === 'dosing' ? 'active-link' : ''}
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      onMouseEnter={() => {
                        handleActiveHeaderDropdown('')
                      }}
                    >
                      <Link
                        to='/safety-profile/'
                        className={currentPage === 'safety' ? 'active-link' : ''}
                      >
                        Safety
                      </Link>
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
                  <ul
                    className='mobile-nav-links'
                  >
                    <li
                      onClick={() => {
                        handleActiveDropdownLink(0)
                        handleActiveHeaderDropdown('')
                        this.toggleNav()
                      }}
                      className={
                        activeDropdownLink === 0 &&
                        currentPage === 'dosing'
                          ? 'header-dropdown-active'
                          : ''
                      }
                    >
                      <Link to='/once-daily-dosing/'>
                        Once-Daily Dosing
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        handleActiveDropdownLink(2)
                        handleActiveHeaderDropdown('')
                        this.toggleNav()
                      }}
                      className={
                        activeDropdownLink === 2 &&
                        currentPage === 'safety'
                          ? 'header-dropdown-active'
                          : ''
                      }
                    >
                      <Link to='/safety-profile/'>
                        Safety
                      </Link>
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
}

export default MainNav
