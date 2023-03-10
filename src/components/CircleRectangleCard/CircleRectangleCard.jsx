import React, {
  useRef,
  useCallback,
  memo,
} from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'

import CircleAnimation from '../CircleAnimation/CircleAnimation'

const CircleRectangleCard = props => {
  const { title, content, image, delayClass, circleDelayClass } = props

  const cardRef = useRef()
  const [cardView, cardInView] = useInView({ triggerOnce: true })
  const setCardRef = useCallback(
    node => {
      cardRef.current = node
      cardView(node)
    },
    [cardView]
  )

  return (
    <Col lg={{ span: 6, offset: 0 }} ref={setCardRef}>
      <div
        className={
          cardInView
            ? `circle-rectangle-card-container ${delayClass} active-card`
            : `circle-rectangle-card-container ${delayClass}`
        }
      >
        <div className='circle-rectangle-content-container'>
          <p className='white bolder'>{title}</p>
          <p className='white'>{content}</p>
        </div>
        <div className='circle-rectangle-img-container'>
          <CircleAnimation image={image} circleDelayClass={circleDelayClass} />
        </div>
      </div>
    </Col>
  )
}

export default memo(CircleRectangleCard)
