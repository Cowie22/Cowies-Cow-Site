import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import AppProvider, { AppContext } from '../../contexts/state'

import ExternalLink from '../exitramp/ExternalLink.jsx'
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown'
import HeaderDropdownData from '../HeaderDropdown/HeaderDropdownData'

import logo from '../../assets/images/header-logo.svg'


class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: {list: ['placeholder']},
      isNavOpen: false,
    }
  }

  toggleNav = () => {
    document.querySelector('.mobile-nav').scrollTop = 0;
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
    let isiTray = document.getElementsByClassName('isi-tray')[0];
    if (this.state.isNavOpen) {
      console.log('here', document.body.classList)
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

  render() {
    const { currentData, isNavOpen } = this.state;
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
              <Col lg={3} xs={12} className='navbar-header'>
                <Link
                  to='/'
                >
                  <img
                    loading='lazy'
                    alt='Myovant logo'
                    className='header-logo'
                    src={logo}
                    onMouseEnter={() => {
                      handleActiveHeaderDropdown('');
                      this.handleNavHover();
                    }}
                  />
                </Link>
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
                      }}
                    >
                      <Link to='/resources/'>
                        Access & Resources
                      </Link>
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
                    <a href='tel:1-833-693-3627'>
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
                <div className='mobile-nav-list-container'>
                  <ul className='mobile-nav-links'>
                    <li
                      onClick={() => {
                        this.toggleNav()
                      }}
                    >
                      <Link
                        to='/resources/'
                        className='mobile-nav-link'
                        onClick={() => {
                          handleActiveDropdownLink(0);
                          handleActiveHeaderDropdown('');
                        }}
                      >
                        Access & Resources
                      </Link>
                      <ul className='header-dropdown-ul'>
                        <li
                          onClick={() => {
                            handleActiveDropdownLink(1);
                            handleActiveHeaderDropdown('');
                          }}
                          className={(activeDropdownLink === 1 && currentPage === 'resources') ? 'header-dropdown-active' : ''}
                        >
                          <Link to='/resources/#resource-access-content'>
                            Access Information
                          </Link>
                        </li>
                        <li
                          onClick={() => {
                            handleActiveDropdownLink(2);
                            handleActiveHeaderDropdown('');
                          }}
                          className={(activeDropdownLink === 2 && currentPage === 'resources') ? 'header-dropdown-active' : ''}
                        >
                          <Link to='/resources/#resource-patient-content'>
                            Patient Support Program
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className='mobile-nav-overlay'>&nbsp;</div>
              </Col>
            </Row>
          </Container>
          </section>
          <section className='mobile-register-btn d-block d-lg-none'>
            <a href=''>
              <Container>
                <Row>
                  <Col>
                    <p className='white text-center'>
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