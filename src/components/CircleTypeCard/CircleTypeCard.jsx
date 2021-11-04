import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import CircleAnimation from '../CircleAnimation/CircleAnimation'

const CircleTypeCard = (props) => {

  const { data, image } = props;

  const {
    title,
    text,
    columns,
    list,
  } = data[0];
  
  return (
    <Col lg={columns}>
      <div className='circle-type-card-container'>
        <div className='circle-type-content-container'>
          <p className='white bolder'>
            {title}
          </p>
          <p className='white'>
            {text}
          </p>
        </div>
        <div className='circle-type-img-container'>
          <CircleAnimation 
            image={image}
          />
        </div>
        <ul className='light-grey-ul'>
          {
            list.map((item, i) => {
              return (
                <li key={i}>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    </Col>
  )
}

export default CircleTypeCard