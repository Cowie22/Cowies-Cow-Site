import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import ExternalLink from '../exitramp/ExternalLink.jsx'
import NonUSPopUp from '../../components/NonUSPopUp/NonUSPopUp'
import SignUpForm from '../SignUpForm/SignUpForm'

class UtilityNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      signUpForm: false,
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
      let modalContainer = document.getElementById('sign-up-modal-container');
      if (this.state.signUpForm === false) {
        document.body.classList.add('modal-hidden');
        modalContainer.classList.add('modal-overflow');
      } else {
        document.body.classList.remove('modal-hidden');
        modalContainer.classList.remove('modal-overflow');
      }
    }
    this.setState({
      signUpForm: !this.state.signUpForm,
    })
  }

  render() {
    const { xDirection, yDirection, popup, signUpForm } = this.state;
    return (
      <>
      <section
        id='sign-up-modal-container'
        onClick={() => this.handlePopUp()}
      >
      </section>
      <SignUpForm
        handlePopUp={this.handlePopUp}
        signUpForm={signUpForm}
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
                            href='https://www.google.com/'
                          >
                            <span>Prescribing Information, including <b>BOXED WARNING</b></span>
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
                          <li onClick={() => this.handlePopUp()}>
                            Request a Representative
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
