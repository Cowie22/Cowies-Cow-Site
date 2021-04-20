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
                <nav>
                  <ul>
                    <li className='d-none d-lg-block'>
                      <a
                        target='_blank'
                        className='utility-header-nav'
                        onClick={() => this.handlePopUp()}
                      >
                        Important Safety Information
                      </a>
                    </li>
                    <li className='d-none d-lg-block'>
                      <a
                        target='_blank'
                        className='utility-header-nav'
                      >
                        Prescribing Information
                      </a>
                    </li>
                    <li className='d-none d-lg-block'>
                      <a
                        target='_blank'
                        // TODO: HERE IS HOW TO RUN THE CALL NOW BTN
                        // href="tel:+15302772232"
                        className='utility-header-nav'
                      >
                        Medication Guide
                      </a>
                    </li>
                    <div className='utility-nav-end-container'>
                      <li className='d-none d-lg-block'>
                        <ExternalLink
                          externalUrl={'https://www.google.com/'}
                          className='utility-header-nav'
                        >
                          Visit Healthcare Professional Site
                        </ExternalLink>
                      </li>
                    </div>
                  </ul>
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
