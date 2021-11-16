import React, { useState, useEffect, useContext, useRef, useCallback } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'

import CircleAnimation from '../CircleAnimation/CircleAnimation'

const CircleTypeCard = (props) => {

  const { data, image } = props;

  const {
    title,
    text,
    columns,
    list,
    delayClass,
    circleDelayClass,
  } = data[0];

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
    <Col lg={columns} ref={setCardRef} className='circle-type-card-col'>
      <div
        // className='circle-type-card-container'
        className={cardInView ? `circle-type-card-container ${delayClass} active-card` : `circle-type-card-container ${delayClass}`}
      >
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
            circleDelayClass={circleDelayClass}
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