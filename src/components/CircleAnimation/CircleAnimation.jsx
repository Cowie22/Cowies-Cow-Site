import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const CircleAnimation = props => {
  const { image, circleDelayClass } = props
  return (
    <div className={`circle-animation-img-container ${circleDelayClass}`}>
      {image}
    </div>
  )
}

export default CircleAnimation
