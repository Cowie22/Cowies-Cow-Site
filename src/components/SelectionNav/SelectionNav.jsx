import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state';
import ClickOutHandler from 'react-onclickout';

import fatArrow from '../../assets/images/fat-arrow-right-grey.svg'

class SelectionNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    }
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
    })
  }

  render() {
    const { width } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => {
          const { selectionNav, currentPage, handleSelectionNav } = context;
          return (
            <section className={selectionNav ? 'selection-nav' : 'selection-nav hidden'}>
              <Container>
                <Row>
                  <ClickOutHandler onClickOut={() => handleSelectionNav(1)}>
                    <Col lg={12} className='selection-nav-outer-col'>
                      <Row>
                        <Col lg={6}>
                          <div
                            className='active-selection-nav'
                            style={
                              width > 1200 ?
                              currentPage === 'chl-previously-untreated' ? {left: '2%', width: '34%', background: '#A51140'} :
                              currentPage === 'chl-post-auto' ? {left: '43%', width: '29%', background: '#A51140'} :
                              currentPage === 'chl-relapsed' ? {left: '82%', width: '18%', background: '#A51140'} :
                              currentPage === 'ptcl-previously-untreated' ? {left: '100%', width: '42%', background: '#006983'} :
                              currentPage === 'ptcl-CD30-Expressing-MF' ? {left: '148%', width: '30%', background: '#006983'} :
                              currentPage === 'ptcl-relapsed' ? {left: '183%', width: '18%', background: '#006983'} :
                              {left: '0', width: '0', background: '#A51140'}
                              :
                              currentPage === 'chl-previously-untreated' ? {left: '2%', width: '33%', background: '#A51140'} :
                              currentPage === 'chl-post-auto' ? {left: '43%', width: '33%', background: '#A51140'} :
                              currentPage === 'chl-relapsed' ? {left: '82%', width: '18%', background: '#A51140'} :
                              currentPage === 'ptcl-previously-untreated' ? {left: '100%', width: '46%', background: '#006983'} :
                              currentPage === 'ptcl-CD30-Expressing-MF' ? {left: '148%', width: '30%', background: '#006983'} :
                              currentPage === 'ptcl-relapsed' ? {left: '182%', width: '18%', background: '#006983'} :
                              {left: '0', width: '0', background: '#A51140'}
                            }
                          >
                          </div>
                          <div className='selection-nav-list-container'>
                            <ul className='selection-nav-list'>
                              <Link className='link-left header-nav' to='/'>
                                <li
                                  className='selection-nav-list-item'
                                  style={currentPage === 'chl-previously-untreated' ? {color: '#A51140'} : {}}
                                >
                                  Previously untreated Stage III/IV cHL
                                </li>
                              </Link>
                              <Link className='link-left header-nav' to='/'>
                                <li
                                  className='selection-nav-list-item'
                                  style={currentPage === 'chl-post-auto' ? {color: '#A51140'} : {}}
                                >
                                  cHL post-auto-HSCT consolidation
                                </li>
                              </Link>
                              <Link className='link-left header-nav' to='/'>
                                <li
                                  className='selection-nav-list-item'
                                  style={currentPage === 'chl-relapsed' ? {color: '#A51140'} : {}}
                                >
                                  Relapsed cHL
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className='selection-nav-list-container'>
                            <ul className='selection-nav-list'>
                              <Link className='link-right header-nav' to='/'>
                                <li
                                  className='selection-nav-list-item'
                                  style={currentPage === 'ptcl-previously-untreated' ? {color: '#006983'} : {}}
                                >
                                  Previously untreated sALCL or other CD30-expressing PTCL
                                </li>
                              </Link>
                              <Link className='link-right header-nav' to='/'>
                                <li
                                  className='selection-nav-list-item'
                                  style={currentPage === 'ptcl-CD30-Expressing-MF' ? {color: '#006983'} : {}}
                                >
                                  Relapsed pcALCL or CD30-expressing MF
                                </li>
                              </Link>
                              <Link className='link-right header-nav' to='/'>
                                <li
                                  className='selection-nav-list-item'
                                  style={currentPage === 'ptcl-relapsed' ? {color: '#006983'} : {}}
                                >
                                  Relapsed sALCL
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                  </ClickOutHandler>
                </Row>
              </Container>
            </section>
          )
        }}
      </AppContext.Consumer>
    )
  }
}


export default SelectionNav