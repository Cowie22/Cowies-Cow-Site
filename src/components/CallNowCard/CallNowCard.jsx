import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const CallNowCard = (props) => {
  return (
    <div className='call-now-container'>
      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={{span: 6, offset: 1}}>
              <h3 className='blue'>
                We'll help you started with treatment
              </h3>
              <p>
                To find out more about the Myfembree<sup>®</sup> Support Program, call 1-833-MYFEMBREE
                (1-833-693-3627), 8 AM–8 PM ET, Monday–Friday.
              </p>
            </Col>
            <Col lg={{span: 3, offset: 0}}>
              <div className='cta-btn-container call-now-btn-container'>
                <a>
                  <button className='cta-btn pink-btn'>
                    Call Now
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default CallNowCard