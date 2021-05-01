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
        console.log(data.name)
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
    const { currentData } = this.state;
    const { activeHeaderDropdown, handleActiveHeaderDropdown } = this.props;
    return (
      <AppContext.Consumer>
        {(context) => {
          const {
            handleActiveSite,
          } = context;
          return (
            <>
              <section className='main-nav'>
                <Container>
                  <Row>
                    <Col lg={3} xs={5} className='navbar-header'>
                      <Link
                        to='/'
                      >
                        <img
                          loading='lazy'
                          alt='Myovant logo'
                          className='header-logo'
                          src={logo}
                        />
                      </Link>
                    </Col>
                    <Col xl={{span: 4, offset: 2}} lg={{span: 5, offset: 0}}>
                      <nav className='header-nav-container'>
                        <ul>
                          <li
                            onMouseEnter={() => {
                              handleActiveHeaderDropdown('resources');
                              this.handleNavHover()
                            }}
                            onMouseLeave={() => {
                              handleActiveHeaderDropdown('');
                              this.handleNavHover()
                            }}
                          >
                            Access & Resources
                          </li>
                          <li
                            onMouseEnter={() => {
                              handleActiveHeaderDropdown('test');
                              this.handleNavHover()
                            }}
                            onMouseLeave={() => {
                              handleActiveHeaderDropdown('');
                              this.handleNavHover()
                            }}
                          >
                            TEST
                          </li>
                        </ul>
                      </nav>
                    </Col>
                    <Col
                      xl={{span: 3, offset: 0}}
                      lg={{span: 4, offset: 0}}
                      xs={{span: 6, offset: 1}}
                      className='d-none d-lg-block'
                    >
                      <div className='header-call-now-container'>
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
                    <div className={activeHeaderDropdown !== '' ? 'header-dropdown' : 'header-dropdown-hidden'}>
                      <HeaderDropdown
                        currentData={currentData}
                      />
                    </div>
                </Container>
              </section>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default MainNav