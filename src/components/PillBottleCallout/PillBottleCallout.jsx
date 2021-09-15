import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import pillBottle from '../../assets/images/pill-bottle.webp'
import pillBottleFB from '../../assets/images/pill-bottle.png'

const PillBottleCallout = (props) => {
  return (
    <Col lg={{span: 12}}>
      <div className='pill-bottle-callout-container'>
        <Row>
          <Col lg={{span: 3, offset: 1, order: 1}} xs={{span: 6, offset: 3, order: 2}}>
            <div className='pill-bottle-container'>
              <picture>
                <source srcSet={pillBottle} type='image/webp' />
                <img src={pillBottleFB} alt='' loading='lazy' />
              </picture>
            </div>
          </Col>
          <Col lg={{span: 7, offset: 0, order: 2}} xs={{span: 10, offset: 1, order: 1}}>
            <div className='content-container'>
              <h2 className='white'>
                Myfembree delivers the convenience of one dose, once daily<sup>1</sup>
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