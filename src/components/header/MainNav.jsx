import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import ExternalLink from '../exitramp/ExternalLink.jsx'
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown'
import HeaderDropdownData from '../HeaderDropdown/HeaderDropdownData'

import logo from '../../assets/images/header-logo.svg'

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

  handleNavHover = () => {
    this.headerDropdownPromise()
      .then(currentData => this.headerDropdownPromise())
      .then(currentData => {
        this.handleDropdown(currentData, currentData.name)
      })
      .catch(err => console.log('There was an error:' + err))
  }

  headerDropdownPromise = () => {
    const { activeHeaderDropdown } = this.props
    let updatedData = { list: ['placeholder'] }

    return new Promise((resolve, reject) => {
      let dataFilter = HeaderDropdownData.filter((data, i) => {
        if (data.name === activeHeaderDropdown) {
          updatedData = data
        }
      })
      dataFilter ? resolve(updatedData) : reject('ERROR')
    })
  }

  handleDropdown = (val, name) => {
    let dropdownContainer = document.getElementById('header-dropdown-container')
    dropdownContainer.classList = `header-dropdown-container ${name}`
    this.setState({
      currentData: val,
    })
  }

  handleMobileDropDown = (dropdown, bool) => {
    const { mobileDropDown } = this.state;
    let newDropdownObj = mobileDropDown;
    newDropdownObj[dropdown] = bool;
    this.setState({
      mobileDropDown: newDropdownObj,
    })
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
    } = this.props

    return (
      <>
        <section
          className='main-nav'
          onMouseLeave={() => {
            handleActiveHeaderDropdown('')
            this.handleNavHover()
          }}
        >
          <Container>
            <Row>
              <Col lg={3} xs={7} className='navbar-header'>
                <Link to='/'>
                  <img
                    loading='lazy'
                    alt='Myfembree® (relugolix, estradiol, and norethindrone acetate) tablets 40 mg, 1 mg, 0.5 mg'
                    className='header-logo'
                    src={logo}
                    onMouseEnter={() => {
                      handleActiveHeaderDropdown('')
                      this.handleNavHover()
                    }}
                  />
                </Link>
              </Col>
              <Col xs={{ span: 3, offset: 2 }} className='d-block d-lg-none'>
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
                xl={{ span: 8, offset: 1 }}
                lg={{ span: 9, offset: 0 }}
                className='d-none d-lg-block'
              >
                <nav className='header-nav-container'>
                  <ul>
                    <li
                      onMouseEnter={() => {
                        handleActiveHeaderDropdown('')
                        this.handleNavHover()
                      }}
                    >
                      <Link
                        to='/once-daily-dosing/'
                        className={currentPage === 'dosing' ? 'active-link' : ''}
                      >
                        Once-Daily Dosing
                      </Link>
                    </li>
                    <li
                      onMouseEnter={() => {
                        handleActiveHeaderDropdown('efficacy')
                        this.handleNavHover()
                      }}
                      onClick={() => {
                        handleActiveHeaderDropdown('')
                        handleActiveDropdownLink(1.1)
                      }}
                    >
                      <Link
                        to='/liberty-trials/'
                        className={
                          currentPage === 'efficacy-data' || currentPage === 'liberty-trials' ? 'active-link' : ''
                        }
                      >
                        Efficacy
                      </Link>
                      <svg
                        width='12'
                        height='6'
                        viewBox='0 0 12 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className={
                          activeHeaderDropdown === 'efficacy'
                            ? 'nav-arrow rotated'
                            : 'nav-arrow'
                        }
                      >
                        <path
                          className={
                            currentPage === 'efficacy-data' || currentPage === 'liberty-trials' ? 'active-link-arrow' : ''
                          }
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.99984 3.95775e-05C6.13245 3.95775e-05 6.25962 0.0527177 6.35339 0.146486L10.9367 4.72982C11.132 4.92508 11.132 5.24167 10.9367 5.43693C10.7415 5.63219 10.4249 5.63219 10.2296 5.43693L5.99984 1.20715L1.77006 5.43693C1.5748 5.63219 1.25821 5.63219 1.06295 5.43693C0.867688 5.24167 0.867688 4.92508 1.06295 4.72982L5.64628 0.146486C5.74005 0.0527177 5.86723 3.95775e-05 5.99984 3.95775e-05Z'
                        />
                      </svg>
                    </li>
                    <li
                      onMouseEnter={() => {
                        handleActiveHeaderDropdown('')
                        this.handleNavHover()
                      }}
                    >
                      <Link
                        to='/safety-profile/'
                        className={currentPage === 'safety' ? 'active-link' : ''}
                      >
                        Safety Profile
                      </Link>
                    </li>
                    <li
                      onMouseEnter={() => {
                        handleActiveHeaderDropdown('')
                        this.handleNavHover()
                      }}
                    >
                      <Link
                        to='/how-it-works/'
                        className={currentPage === 'how-it-works' ? 'active-link' : ''}
                      >
                        How It Works
                      </Link>
                    </li>
                    <li
                      onMouseEnter={() => {
                        handleActiveHeaderDropdown('support')
                        this.handleNavHover()
                      }}
                      onClick={() => {
                        handleActiveHeaderDropdown('')
                        handleActiveDropdownLink(4.1)
                      }}
                    >
                      <Link
                        to='/myfembree-support-program/'
                        className={
                          currentPage === 'support' || currentPage === 'resources' ? 'active-link' : ''
                        }
                      >
                        Support & Savings
                      </Link>
                      <svg
                        width='12'
                        height='6'
                        viewBox='0 0 12 6'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className={
                          activeHeaderDropdown === 'support'
                            ? 'nav-arrow rotated'
                            : 'nav-arrow'
                        }
                      >
                        <path
                          className={
                            currentPage === 'support' || currentPage === 'resources' ? 'active-link-arrow' : ''
                          }
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.99984 3.95775e-05C6.13245 3.95775e-05 6.25962 0.0527177 6.35339 0.146486L10.9367 4.72982C11.132 4.92508 11.132 5.24167 10.9367 5.43693C10.7415 5.63219 10.4249 5.63219 10.2296 5.43693L5.99984 1.20715L1.77006 5.43693C1.5748 5.63219 1.25821 5.63219 1.06295 5.43693C0.867688 5.24167 0.867688 4.92508 1.06295 4.72982L5.64628 0.146486C5.74005 0.0527177 5.86723 3.95775e-05 5.99984 3.95775e-05Z'
                        />
                      </svg>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>
            <div
              className={
                activeHeaderDropdown === ''
                  ? 'header-dropdown-hidden d-none d-lg-block'
                  : 'header-dropdown d-none d-lg-block'
              }
              onMouseLeave={() => {
                handleActiveHeaderDropdown('')
                this.handleNavHover()
              }}
            >
              <HeaderDropdown
                currentData={currentData}
                activeDropdownLink={activeDropdownLink}
                handleActiveDropdownLink={handleActiveDropdownLink}
                handleActiveHeaderDropdown={handleActiveHeaderDropdown}
                currentPage={currentPage}
                handleCurrentPage={handleCurrentPage}
              />
            </div>
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
                    <li>
                      <div
                        className='mobile-nav-dropdown-link'
                        onClick={() => {
                          mobileDropDown.efficacyDropdown ? this.handleMobileDropDown('efficacyDropdown', false) :
                          this.handleMobileDropDown('efficacyDropdown', true);
                        }}
                      >
                        Efficacy
                        <svg
                          width='12'
                          height='6'
                          viewBox='0 0 12 6'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className={
                            mobileDropDown.efficacyDropdown
                              ? 'nav-arrow'
                              : 'nav-arrow rotated'
                          }
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5.99984 3.95775e-05C6.13245 3.95775e-05 6.25962 0.0527177 6.35339 0.146486L10.9367 4.72982C11.132 4.92508 11.132 5.24167 10.9367 5.43693C10.7415 5.63219 10.4249 5.63219 10.2296 5.43693L5.99984 1.20715L1.77006 5.43693C1.5748 5.63219 1.25821 5.63219 1.06295 5.43693C0.867688 5.24167 0.867688 4.92508 1.06295 4.72982L5.64628 0.146486C5.74005 0.0527177 5.86723 3.95775e-05 5.99984 3.95775e-05Z'
                            fill='#A51890'
                          />
                        </svg>
                      </div>
                      <ul
                        className={
                          mobileDropDown.efficacyDropdown
                            ? 'header-dropdown-ul'
                            : 'header-dropdown-ul hidden'
                        }
                      >
                        <li
                          onClick={() => {
                            handleActiveDropdownLink(1.1)
                            handleActiveHeaderDropdown('')
                            this.toggleNav()
                          }}
                          className={
                            activeDropdownLink === 1.1 &&
                            currentPage === 'liberty-trials'
                              ? 'header-dropdown-active'
                              : ''
                          }
                        >
                          <Link to='/liberty-trials/'>
                            LIBERTY Trials
                          </Link>
                        </li>
                        <li
                          onClick={() => {
                            handleActiveDropdownLink(1.2)
                            handleActiveHeaderDropdown('')
                            this.toggleNav()
                          }}
                          className={
                            activeDropdownLink === 1.2 &&
                            currentPage === 'efficacy-data'
                              ? 'header-dropdown-active'
                              : ''
                          }
                        >
                          <Link to='/efficacy-data/'>
                            Efficacy Data
                          </Link>
                        </li>
                      </ul>
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
                        Safety Profile
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        handleActiveDropdownLink(3)
                        handleActiveHeaderDropdown('')
                        this.toggleNav()
                      }}
                      className={
                        activeDropdownLink === 3 &&
                        currentPage === 'how-it-works'
                          ? 'header-dropdown-active'
                          : ''
                      }
                    >
                      <Link to='/how-it-works/'>
                        How It Works
                      </Link>
                    </li>
                    <li>
                      <div
                        className='mobile-nav-dropdown-link'
                        onClick={() => {
                          mobileDropDown.supportDropdown ? this.handleMobileDropDown('supportDropdown', false) :
                          this.handleMobileDropDown('supportDropdown', true);
                        }}
                      >
                        Support & Savings
                        <svg
                          width='12'
                          height='6'
                          viewBox='0 0 12 6'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className={
                            mobileDropDown.supportDropdown
                              ? 'nav-arrow'
                              : 'nav-arrow rotated'
                          }
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5.99984 3.95775e-05C6.13245 3.95775e-05 6.25962 0.0527177 6.35339 0.146486L10.9367 4.72982C11.132 4.92508 11.132 5.24167 10.9367 5.43693C10.7415 5.63219 10.4249 5.63219 10.2296 5.43693L5.99984 1.20715L1.77006 5.43693C1.5748 5.63219 1.25821 5.63219 1.06295 5.43693C0.867688 5.24167 0.867688 4.92508 1.06295 4.72982L5.64628 0.146486C5.74005 0.0527177 5.86723 3.95775e-05 5.99984 3.95775e-05Z'
                            fill='#A51890'
                          />
                        </svg>
                      </div>
                      <ul
                        className={
                          mobileDropDown.supportDropdown
                            ? 'header-dropdown-ul'
                            : 'header-dropdown-ul hidden'
                        }
                      >
                        <li
                          onClick={() => {
                            handleActiveDropdownLink(4.1)
                            handleActiveHeaderDropdown('')
                            this.toggleNav()
                          }}
                          className={
                            activeDropdownLink === 4.1 &&
                            currentPage === 'support'
                              ? 'header-dropdown-active'
                              : ''
                          }
                        >
                          <Link to='/myfembree-support-program/'>
                            Myfembree Support Program
                          </Link>
                        </li>
                        <li
                          onClick={() => {
                            handleActiveDropdownLink(4.2)
                            handleActiveHeaderDropdown('')
                            this.toggleNav()
                          }}
                          className={
                            activeDropdownLink === 4.2 &&
                            currentPage === 'resources'
                              ? 'header-dropdown-active'
                              : ''
                          }
                        >
                          <Link to='/resources/'>
                            Resources
                          </Link>
                        </li>
                      </ul>
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
