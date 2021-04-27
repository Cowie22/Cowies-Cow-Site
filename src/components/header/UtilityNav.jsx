import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import ExternalLink from '../exitramp/ExternalLink.jsx'
import NonUSPopUp from '../../components/NonUSPopUp/NonUSPopUp'

class UtilityNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      yDirection: 0,
      xDirection: 0,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      yDirection: window.pageYOffset,
      xDirection: window.innerWidth,
    })
  }

  handlePopUp = () => {
    if (document.getElementsByTagName('body')) {
      let modalContainer = document.getElementById('non-us-modal-container');
      {
        if (this.state.popup === false) {
          document.body.classList.add('modal-hidden');
          modalContainer.classList.add('modal-overflow');
        } else {
          document.body.classList.remove('modal-hidden');
          modalContainer.classList.remove('modal-overflow');
        }
      }
    }
    this.setState({
      popup: !this.state.popup,
    })
  }

  render() {
    const { xDirection, yDirection, popup } = this.state;
    return (
      <>
      <section
        id='non-us-modal-container'
        style={
          xDirection < 426 ? {top: `${yDirection - 650}px`} :
          xDirection < 769 ? {top: `${yDirection - 450}px`} :
          {top: `${yDirection - 350}px`}
        }
        onClick={() => this.handlePopUp()}
      >
      </section>
        <section className='utility-nav'>
          <Container>
            <Row>
              <Col>
                <NonUSPopUp
                  handlePopUp={this.handlePopUp}
                  popup={popup}
                />
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 10, offset: 2 }}>
                <nav className='utility-nav-container'>
                  <Row>
                    <Col lg={{span: 8}}>
                      <ul className='utility-left-container'>
                        <li>
                          <a
                            className='utility-header-nav'
                            href='#isi'
                          >
                            Important Safety Information
                          </a>
                        </li>
                        <li>
                          <a
                            target='_blank'
                            className='utility-header-nav'
                          >
                            Prescribing Information
                          </a>
                        </li>
                        <li>
                          <a
                            target='_blank'
                            className='utility-header-nav'
                          >
                            Medication <br className='d-xs-block d-md-none'></br> Guide
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={{span: 4}} className='utility-right-col'>
                      <div className='utility-nav-end-container'>
                        <ul>
                          <li>
                            <a
                              externalUrl={'https://www.google.com/'}
                              onClick={() => this.handlePopUp()}
                            >
                              Visit Healthcare Professional Site
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </nav>
              </Col>
            </Row>
          </Container>
        </section>
      </>

    )
  }
}

export default UtilityNav
// export default props => (
// )
