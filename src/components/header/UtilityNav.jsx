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
      <NonUSPopUp
        handlePopUp={this.handlePopUp}
        popup={popup}
      />
        <section className='utility-nav'>
          <Container>
            <Row>
              <Col xl={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                <nav className='utility-nav-container'>
                  <Row>
                    <Col xl={{span: 8, offset: 4}} lg={{span: 10, offset: 2}}>
                      <ul className='utility-left-container'>
                        <li>
                          <a
                            className='utility-header-nav'
                            href='#isi'
                          >
                            Important Safety Information
                          </a>
                        </li>
                        <li className='center-nav'>
                          <a
                            target='_blank'
                            className='utility-header-nav'
                          >
                            <span>Prescribing Information including <b>BOXED WARNING</b></span>
                          </a>
                        </li>
                        <li>
                          <a
                            target='_blank'
                            className='utility-header-nav'
                            href='https://www.Myfembree.com'
                          >
                            Visit Patient Site
                          </a>
                        </li>
                      </ul>
                    </Col>
                    {/* <Col lg={{span: 4}} className='utility-right-col'>
                      <div className='utility-nav-end-container'>
                        <ul>
                          <li>
                            <a
                              href=''
                            >
                              Request a Representative
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col> */}
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
