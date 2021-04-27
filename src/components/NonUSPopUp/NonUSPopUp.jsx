import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'

import closeIcon from '../../assets/images/close.svg'
import closeIconHovered from '../../assets/images/close-hovered.svg'
import logo from '../../assets/images/popup-myfembree-logo.svg'

class NonUSPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yDirection: 0,
      xDirection: 0,
      hovered: false,
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

  handleHovered = (val) => {
    this.setState({
      hovered: val,
    })
  }

  render() {
    const { yDirection, xDirection, hovered } = this.state;
    const { popup, handlePopUp } = this.props;
    return (
      <section className={popup ? 'non-us-popup-overlay' : ''} onClick={() => handlePopUp()} >
        <Container>
          <Row>
            <Col lg={{span: 4, offset: 4}}>
              <div className={popup ? 'non-us-popup-col' : 'non-us-popup-col-hidden'}>
                <Row>
                  <Col lg={{span: 1, offset: 11}}>
                    <div
                      className='close-img-container'
                      onMouseEnter={() => this.handleHovered(true)}
                      onMouseLeave={() => this.handleHovered(false)}
                      onClick={() => handlePopUp()}
                    >
                      <img
                        src={hovered ? closeIconHovered : closeIcon}
                        className='close-img'
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={{span: 6, offset: 3}}>
                    <div className='popup-logo-container'>
                      <img src={logo} />
                    </div>
                  </Col>
                </Row>
                <h6 className='text-center'>
                  The information contained in this website is intended for US healthcare professionals only.
                </h6>
                <h3 className='blue text-center'>
                  Are you a US healthcare professional?
                </h3>
                <Row>
                  <Col>
                    <div className='cta-btn-container non-us-popup-btn-container'>
                      <a>
                        <button className='cta-btn pink-btn'>
                          Yes
                        </button>
                      </a>
                    </div>
                    <div className='cta-btn-container non-us-popup-btn-container' onClick={() => handlePopUp()}>
                      <a>
                        <button className='cta-btn transparent-btn-pink'>
                          No
                        </button>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default NonUSPopUp