import React, { useState, useEffect, useContext, useRef, useCallback } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'

import CircleAnimation from '../CircleAnimation/CircleAnimation'

const CircleRectangleCard = (props) => {
  const { title, content, image } = props;

  const cardRef = useRef()
  const [cardView, cardInView] = useInView({triggerOnce: true});
  const setCardRef = useCallback(
    (node) => {
      cardRef.current = node;
      cardView(node);
    },
    [cardView],
  );
  
  return (
    <Col lg={{span: 6, offset: 0}} ref={setCardRef}>
      <div
        className='circle-rectangle-card-container'
        className={cardInView ? 'circle-rectangle-card-container active-card' : 'circle-rectangle-card-container'}
      >
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