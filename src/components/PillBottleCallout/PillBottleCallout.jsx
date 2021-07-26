import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import pillBottle from '../../assets/images/pill-bottle.svg'

const PillBottleCallout = (props) => {
  return (
    <Col lg={{span: 12}}>
      <div className='pill-bottle-callout-container'>
        <Row>
          <Col lg={{span: 2, offset: 1, order: 1}} xs={{span: 4, offset: 4, order: 2}}>
            <div className='pill-bottle-container'>
              <img src={pillBottle} alt='' />
            </div>
          </Col>
          <Col lg={{span: 7, offset: 1, order: 2}} xs={{span: 10, offset: 1, order: 1}}>
            <div className='content-container'>
              <h2 className='white'>
                Myfembree delivers the convenience of one dose, once-daily<sup>1</sup>
              </h2>
              <h6 className='white'>
                Actual pill size: 7.94 mm in diameter. NDC 72974-415-01
              </h6>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default PillBottleCallout