import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PurpleLineCallout = (props) => {
  const { content } = props;
  return (
    <div className='purple-line-callout-container'>
      {content}
    </div>
  )
}

export default PurpleLineCallout