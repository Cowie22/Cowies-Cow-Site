import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const DemographicsCards = (props) => {
  const { demographic, title, text } = props;
  
  return (
    <div className='demographic-card-container'>
      <Row>
        <Col lg={{span: 2, offset: 1}} className='demographic-left-card-col'>
          <div className='demographic-left-card-container'>
            <h3 className='white text-center'>
              {demographic}
            </h3>
          </div>
        </Col>
        <Col lg={{span: 8, offset: 0}}>
          <div className='demographic-right-card-container'>
            <h3 className='text-center'>
              {title}
            </h3>
            <h4 className='text-center'>
              {text}
            </h4>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DemographicsCards