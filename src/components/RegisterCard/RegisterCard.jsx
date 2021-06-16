import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import calendar from '../../assets/images/calendar-icon.svg'

const RegisterCard = (props) => {
  return (
    <div className='register-container'>
      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={{span: 7, offset: 1}} xs={{span: 12, offset: 0}}>
              <div className='register-icon-container'>
                <img src={calendar} alt='' />
                <h3 className='blue'>
                  Register to attend the launch broadcast
                </h3>
              </div>
            </Col>
            <Col lg={{span: 3, offset: 0}} xs={{span: 10, offset: 0}}>
              <div className='register-inner-container'>
                <div className='cta-btn-container register-btn-container'>
                  <a href='https://www.UFmanagement-learnmore.com/' target='_blank'>
                    <button className='cta-btn pink-btn'>
                      Register Here
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

export default RegisterCard