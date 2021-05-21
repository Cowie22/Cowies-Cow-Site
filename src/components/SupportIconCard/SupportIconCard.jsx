import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const SupportIconCard = (props) => {
  const { data } = props;
  const { title, content, icon } = data[0];
  return (
    <Col lg={4}>
      <div className='support-card-container'>
        <Row>
          <Col lg={{span: 12, offset: 0}} xs={{span: 10, offset: 1}}>
            <img src={icon} />
            <p className='extra-bold'>
              {title}
            </p>
            <p>
              {content}
            </p>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default SupportIconCard