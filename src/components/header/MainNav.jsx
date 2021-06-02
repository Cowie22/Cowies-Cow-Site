import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import AppProvider, { AppContext } from '../../contexts/state'

import ExternalLink from '../exitramp/ExternalLink.jsx'
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown'
import HeaderDropdownData from '../HeaderDropdown/HeaderDropdownData'

import logo from '../../assets/images/header-logo.svg'
import upArrow from '../../assets/images/upArrow.svg'
import downArrow from '../../assets/images/downArrow.svg'


class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: {list: ['placeholder']},
      isNavOpen: false,
      mobileDropDown: 0,
    }
  }

  toggleNav = () => {
    document.querySelector('.mobile-nav').scrollTop = 0;
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
    let isiTray = document.getElementsByClassName('isi-tray')[0];
    if (this.state.isNavOpen) {
      document.body.classList.remove('scroll-none');
      isiTray.classList.remove('hide');
    } else {
      document.body.classList.add('scroll-none');
      isiTray.classList.add('hide');
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
    const { activeHeaderDropdown } = this.props;
    let updatedData = {list: ['placeholder']};

    return new Promise((resolve, reject) => {
      let dataFilter = HeaderDropdownData.filter((data, i) => {
        if (data.name === activeHeaderDropdown) {
          updatedData = data;
        }
      })
      dataFilter ? resolve(updatedData) : reject('ERROR');
    })
  }

  handleDropdown = (val, name) => {
    let dropdownContainer = document.getElementById('header-dropdown-container');
    dropdownContainer.classList = `header-dropdown-container ${name}`;
    this.setState({
      currentData: val,
    })
  }

  handleMobileDropDown = (val) => {
    this.setState({
      mobileDropDown: val,
    })
  }

  render() {
    const { currentData, isNavOpen, mobileDropDown } = this.state;
    const {
      activeHeaderDropdown,
      handleActiveHeaderDropdown,
      activeDropdownLink,
      handleActiveDropdownLink,
      currentPage,
      handleCurrentPage,
    } = this.props;
    return (
      <>
        <section className='main-nav'
          onMouseLeave={() => {
            handleActiveHeaderDropdown('');
            this.handleNavHover()
          }}
        >
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
                    onMouseEnter={() => {
                      handleActiveHeaderDropdown('');
                      this.handleNavHover();
                    }}
                  />
                </Link>
              </Col>
              <Col xs={{span: 3, offset: 2}} className='d-block d-lg-none'>
                <div className='mobile-navbar-container'>
                  <button
                    type='button'
                    className={isNavOpen ? 'navbar-toggle active' : 'navbar-toggle'}
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
              <Col xl={{span: 3, offset: 3}} lg={{span: 3, offset: 2}} className='d-none d-lg-block'>
                <nav className='header-nav-container'>
                  <ul>
                    <li
                      onMouseEnter={() => {
                        handleActiveHeaderDropdown('resources');
                        this.handleNavHover();
                      }}
                      onClick={() => {
                        handleActiveHeaderDropdown('');
                        handleActiveDropdownLink(0);
                      }}
                    >
                      <Link to='/myfembree-support-program/'>
                      Access and Support
                      </Link>
                      {/* <img src={activeHeaderDropdown === 'resources' ? upArrow : downArrow} className='nav-arrow' /> */}
                      <svg
                        width="12"
                        height="6"
                        viewBox="0 0 12 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={activeHeaderDropdown === 'resources' ? 'nav-arrow' : 'nav-arrow rotated'}
                      >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99984 3.95775e-05C6.13245 3.95775e-05 6.25962 0.0527177 6.35339 0.146486L10.9367 4.72982C11.132 4.92508 11.132 5.24167 10.9367 5.43693C10.7415 5.63219 10.4249 5.63219 10.2296 5.43693L5.99984 1.20715L1.77006 5.43693C1.5748 5.63219 1.25821 5.63219 1.06295 5.43693C0.867688 5.24167 0.867688 4.92508 1.06295 4.72982L5.64628 0.146486C5.74005 0.0527177 5.86723 3.95775e-05 5.99984 3.95775e-05Z" fill="#A51890"/>
                      </svg>
                    </li>
                    {/* <li
                      onMouseEnter={() => {
                        handleActiveHeaderDropdown('test');
                        this.handleNavHover();
                      }}
                    >
                      TEST
                    </li> */}
                  </ul>
                </nav>
              </Col>
              <Col
                xl={{span: 3, offset: 0}}
                lg={{span: 4, offset: 0}}
                xs={{span: 6, offset: 1}}
                className='d-none d-lg-block'
              >
                <div
                  className='header-call-now-container'
                  onMouseEnter={() => {
                    handleActiveHeaderDropdown('');
                    this.handleNavHover();
                  }}
                >
                  <div className='cta-btn-container header-cta-btn-container'>
                    <a href='https://www.UFmanagement-learnmore.com/' target='_blank'>
                      <button className='cta-btn pink-btn'>
                        Register for Launch Broadcast
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
              <div
                className={activeHeaderDropdown === '' ? 'header-dropdown-hidden d-none d-lg-block' : 'header-dropdown d-none d-lg-block'}
                onMouseLeave={() => {
                  handleActiveHeaderDropdown('');
                  this.handleNavHover();
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
                <div
                  className='mobile-nav-list-container'
                  className={
                    mobileDropDown !== 0 ? 'mobile-nav-list-container' : 'mobile-nav-list-container hidden'
                  }
                >
                  <ul className='mobile-nav-links'>
                    <li
                      // onClick={() => {
                      //   this.toggleNav()
                      // }}
                    >
                      <div
                        className='mobile-nav-dropdown-link'
                        onClick={() => {
                          mobileDropDown !== 1 ? this.handleMobileDropDown(1) : this.handleMobileDropDown(0)
                        }}
                      >
                        Access and Support
                        <img src={mobileDropDown === 1 ? upArrow : downArrow} className='nav-arrow' />
                      </div>
                      <ul
                        className={
                          mobileDropDown === 1 ? 'header-dropdown-ul' : 'header-dropdown-ul hidden'
                        }
                      >
                        <li
                          onClick={() => {
                            handleActiveDropdownLink(0);
                            handleActiveHeaderDropdown('');
                            this.handleMobileDropDown(0)
                            this.toggleNav();
                          }}
                          className={(activeDropdownLink === 0 && currentPage === 'resources') ? 'header-dropdown-active' : ''}
                        >
                          <Link to='/myfembree-support-program/'>
                            Myfembree Support Program
                          </Link>
                        </li>
                        <ul className='header-dropdown-ul'>
                          <li
                            onClick={() => {
                              handleActiveDropdownLink(0.1);
                              handleActiveHeaderDropdown('');
                              this.handleMobileDropDown(0)
                              this.toggleNav();
                            }}
                            className={(activeDropdownLink === 0.1 && currentPage === 'resources') ? 'header-dropdown-active' : ''}
                          >
                            <Link to='/myfembree-support-program/#financial-assistance'>
                              Financial Assistance
                            </Link>
                          </li>
                          <li
                            onClick={() => {
                              handleActiveDropdownLink(0.2);
                              handleActiveHeaderDropdown('');
                              this.handleMobileDropDown(0)
                              this.toggleNav();
                            }}
                            className={(activeDropdownLink === 0.2 && currentPage === 'resources') ? 'header-dropdown-active' : ''}
                          >
                            <Link to='/myfembree-support-program/#bridge-program'>
                              Bridge Program
                            </Link>
                          </li>
                          <li
                            onClick={() => {
                              handleActiveDropdownLink(0.3);
                              handleActiveHeaderDropdown('');
                              this.handleMobileDropDown(0)
                              this.toggleNav();
                            }}
                            className={(activeDropdownLink === 0.3 && currentPage === 'resources') ? 'header-dropdown-active' : ''}
                          >
                            <Link to='/myfembree-support-program/#quick-start-program'>
                              Quick Start Program
                            </Link>
                          </li>
                          <li
                            onClick={() => {
                              handleActiveDropdownLink(0.4);
                              handleActiveHeaderDropdown('');
                              this.handleMobileDropDown(0)
                              this.toggleNav();
                            }}
                            className={(activeDropdownLink === 0.4 && currentPage === 'resources') ? 'header-dropdown-active' : ''}
                          >
                            <Link to='/myfembree-support-program/#patient-assistance-program'>
                              Patient Assistance Program
                            </Link>
                          </li>
                          <li
                            onClick={() => {
                              handleActiveDropdownLink(0.5);
                              handleActiveHeaderDropdown('');
                              this.handleMobileDropDown(0)
                              this.toggleNav();
                            }}
                            className={(activeDropdownLink === 0.5 && currentPage === 'resources') ? 'header-dropdown-active' : ''}
                          >
                            <Link to='/myfembree-support-program/'>
                              Patient e-Consent
                            </Link>
                          </li>
                        </ul>
                        <li
                          onClick={() => {
                            handleActiveDropdownLink(1);
                            handleActiveHeaderDropdown('');
                            this.handleMobileDropDown(0)
                            this.toggleNav();
                          }}
                          className={(activeDropdownLink === 1 && currentPage === 'resources') ? 'header-dropdown-active' : ''}
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
          <div className='mobile-nav-overlay d-block d-lg-none'>&nbsp;</div>
          </section>
          <section className='mobile-register-btn d-block d-lg-none'>
            <a href=''>
              <Container>
                <Row>
                  <Col>
                    <p className='white text-center mulish'>
                      Register for Launch Broadcast
                    </p>
                  </Col>
                </Row>
              </Container>
            </a>
          </section>
      </>
    )
  }
}

export default MainNav