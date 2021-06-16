import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PersonIconCard = (props) => {
  const { title, icon } = props;
  return (
    <Col lg={{span: 6}}>
      <div className='person-icon-card-container'>
        <img src={icon} alt='' />
        <h3 className='blue'>
          {title}
        </h3>
      </div>
    </Col>
  )
}

export default PersonIconCard