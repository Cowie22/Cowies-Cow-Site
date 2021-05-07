import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Container, Row, Col } from 'react-bootstrap'

import closeIcon from '../../assets/images/close.svg'
import closeIconHovered from '../../assets/images/close-hovered.svg'
import logo from '../../assets/images/popup-myfembree-logo.svg'

class HCPModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
  }

  handleHovered = (val) => {
    this.setState({
      hovered: val,
    })
  }

  render() {
    const { hovered } = this.state;
    const { HCPModalVisible, handleHCPModalVisible } = this.props;
    return (
      <section className={HCPModalVisible ? 'hcp-modal-overlay' : ''} onClick={() => handleHCPModalVisible()} >
        <Container>
          <Row>
            <Col lg={{span: 4, offset: 4}}>
              <div className={HCPModalVisible ? 'hcp-modal-col' : 'hcp-modal-col-hidden'}>
                <Row>
                  <Col lg={{span: 1, offset: 11}}>
                    <div
                      className='close-img-container'
                      onMouseEnter={() => this.handleHovered(true)}
                      onMouseLeave={() => this.handleHovered(false)}
                      onClick={() => handleHCPModalVisible()}
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
                <h3 className='blue text-center'>
                  Are you a US healthcare professional?
                </h3>
                <p className='text-center'>
                  The information contained in this website is intended for US healthcare professionals only.
                </p>
                <Row>
                  <Col>
                    <div className='cta-btn-container hcp-modal-btn-container' onClick={() => handleHCPModalVisible()}>
                      <button className='cta-btn pink-btn'>
                        Yes
                      </button>
                    </div>
                    <div className='cta-btn-container hcp-modal-btn-container'>
                      <a href='https://www.Myfembree.com' target='_blank'>
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

export default HCPModal