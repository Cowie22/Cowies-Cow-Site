import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PurpleLineCallout = (props) => {
  const { title } = props;
  return (
    <div className='purple-line-callout-container'>
      {title}
    </div>
  )
}

export default PurpleLineCallout