import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'

const DemographicsCards = props => {
  const { demographic, title, text, delayClass } = props

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
    <div
      ref={setCardRef}
      className={
        cardInView
          ? `demographic-card-container active-card`
          : `demographic-card-container`
      }
    >
      <Row>
        <Col lg={{ span: 2, offset: 1 }} className='demographic-left-card-col'>
          <div className='demographic-left-card-container'>
            <h3 className='white text-center'>{demographic}</h3>
          </div>
        </Col>
        <Col lg={{ span: 8, offset: 0 }}>
          <div className='demographic-right-card-container'>
            <h3 className='text-center'>{title}</h3>
            <h4 className='text-center'>{text}</h4>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default DemographicsCards
