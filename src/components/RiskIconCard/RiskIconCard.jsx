import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const RiskIconCard = (props) => {

  const { data } = props;

  const {
    title,
    icon,
    columns,
    list,
  } = data[0];
  
  return (
    <Col lg={columns}>
      <div className='risk-icon-card-container'>
        <div className='risk-icon-icon-container'>
          <img src={icon} alt='' />
          <p className='text-center bolder'>
            {title}
          </p>
        </div>
        <ul className='dark-grey-ul risk-icon-ul'>
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

export default RiskIconCard