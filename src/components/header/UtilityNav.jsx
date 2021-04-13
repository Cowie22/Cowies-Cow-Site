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
        {/* <section className='d-block d-lg-none mobile-intended-container'>
          <Container>
            <Row>
              <Col>
                <p>
                  This site is intended for US healthcare providers only
                </p>
              </Col>
            </Row>
          </Container>
        </section> */}
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
              <Col lg={5}>
                <p className='d-none d-lg-block'>
                  This site is intended for US healthcare providers only
                </p>
              </Col>
              <Col lg={7} xs={12}>
                <nav className='right'>
                  <ul>
                    <li className='d-none d-lg-block'>
                      <Link
                        to='/request-a-rep/'
                        className='utility-header-nav'
                      >
                        Request Office Visit
                      </Link>
                    </li>
                    <li className='d-none d-lg-block'>
                      <a
                        target='_blank'
                        className='utility-header-nav'
                        onClick={() => this.handlePopUp()}
                      >
                        Non-US Residents
                      </a>
                    </li>
                    <li className='d-none d-lg-block'>
                      <ExternalLink
                        externalUrl={'https://www.adcetris.com/'}
                        className='utility-header-nav'
                      >
                        Visit Patient Site
                      </ExternalLink>
                    </li>
                    <li className='d-block d-lg-none'>
                      <a
                        target='_blank'
                        className='utility-header-nav'
                      >
                        For US healthcare providers
                      </a>
                    </li>
                    <li>
                      <a
                        href={'https://seagendocs.com/adcetris/pi/attachments/gXy3FkRz6t5bQhaYA6j4Fj'}
                        target='_blank'
                        className='utility-header-nav'
                      >
                        <strong className='cashmere'>Prescribing Information</strong>
                      </a>
                    </li>
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
