import React, {
  useRef,
  useCallback,
  memo,
} from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'

const RiskIconCard = props => {
  const { data } = props

  const { title, icon, columns, list, paddingClass, delayClass, altTag } = data[0]

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
    <Col lg={columns} ref={setCardRef}>
      <div
        // className={`risk-icon-card-container ${paddingClass}`}
        className={
          cardInView
            ? `risk-icon-card-container ${paddingClass} ${delayClass} active-card`
            : `risk-icon-card-container ${paddingClass} ${delayClass}`
        }
      >
        <div className='risk-icon-icon-container'>
          <img src={icon} alt={altTag} />
          <p className='text-center bolder'>{title}</p>
        </div>
        <ul className='dark-grey-ul risk-icon-ul'>
          {list.map((item, i) => {
            return <li key={i}>{item}</li>
          })}
        </ul>
      </div>
    </Col>
  )
}

export default memo(RiskIconCard)
