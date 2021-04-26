import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const CallNowCard = (props) => {
  return (
    <div className='call-now-container'>
      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={{span: 6, offset: 2}}>
              <h3 className='blue'>
                Questions about getting Myfembree?
              </h3>
              <p>
                To find out more about the Myfembree® Support Program, call {' '}
                <a className='call-now-text-link'>1-833-MYFEMBREE (1-833-693-3627)</a>, 8 AM–8 PM ET, Monday–Friday.
              </p>
            </Col>
            <Col lg={{span: 3, offset: 0}}>
              <div class='call-now-inner-container'>
                <div className='cta-btn-container call-now-btn-container'>
                  <a>
                    <button className='cta-btn pink-btn'>
                      Call Now
                    </button>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default CallNowCard