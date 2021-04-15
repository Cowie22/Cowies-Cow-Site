import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'

import closeIcon from '../../assets/images/interstit-close.svg'

class NonUSPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { yDirection, xDirection } = this.state;
    const { popup, handlePopUp } = this.props;
    return (
      <section
        className={popup ? 'non-us-popup-col' : 'non-us-popup-col-hidden'}
        // style={
        //   xDirection < 426 ? {top: '100px'} :
        //   xDirection < 769 ? {top: '100px'} :
        //   {top: `${yDirection + 100}px`}
        // }
      >
        <Container>
          <Row>
            <Col lg={12}>
              <Row>
                <Col lg={{span: 1, offset: 11}} className='close-img-container'>
                  <img loading='lazy' src={closeIcon} className='close-img' onClick={() => handlePopUp()} />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <h2 className='popup-title text-center'>
                    This site is intended for US healthcare providers only
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col
                  lg={{ span: 5, order: 1, offset: 1 }}
                  xs={{ span: 12, order: 12 }}
                  className='link-wrapper'
                >
                  <div className='cta-btn-container'>
                    <a
                      className='text-center'
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.google.com/'
                    >
                      <button
                        className='cta-btn text-center'
                      >
                        I am a healthcare provider in Canada
                      </button>
                    </a>
                  </div>
                </Col>
                <Col
                  lg={{ span: 5, order: 1, offset: 0 }}
                  xs={{ span: 12, order: 12 }}
                  className='link-wrapper'
                >
                  <div className='cta-btn-container'>
                    <a
                      className='text-center'
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.google.com/'
                    >
                      <button
                        className='cta-btn text-center'
                      >
                        I am a healthcare provider outside of US/Canada
                      </button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default NonUSPopUp