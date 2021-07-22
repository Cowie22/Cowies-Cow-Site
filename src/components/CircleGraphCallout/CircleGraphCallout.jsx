import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const CircleGraphCallout = (props) => {
  const { data } = props;
  const { title, subTitle, circleIconOne, circleIconTwo, content } = data[0];
  return (
    <Col lg={{span: 12, offset: 0}}>
      <div className='circle-graph-callout-container'>
        {title}
        <Row>
          <Col lg={{span: 10, offset: 1}}>
            {subTitle}
            <Row>
              <Col lg={{span: 3}}>
                <div className='circle-icon-container'>
                  <img src={circleIconOne} alt='' />
                </div>
              </Col>
              <Col lg={{span: 3}}>
                <div className='circle-icon-container'>
                  <img src={circleIconTwo} alt='' />
                </div>
              </Col>
              <Col lg={{span: 6}}>
                <div className='circle-graph-content-container'>
                  {content}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default CircleGraphCallout