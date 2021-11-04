import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import CircleAnimation from '../CircleAnimation/CircleAnimation'

const CircleRectangleCard = (props) => {
  const { title, content, image } = props;
  
  return (
    <Col lg={{span: 6, offset: 0}}>
      <div className='circle-rectangle-card-container'>
        <div className='circle-rectangle-content-container'>
          <p className='white bolder'>
            {title}
          </p>
          <p className='white'>
            {content}
          </p>
        </div>
        <div className='circle-rectangle-img-container'>
          <CircleAnimation 
            image={image}
          />
        </div>
      </div>
    </Col>
  )
}

export default CircleRectangleCard