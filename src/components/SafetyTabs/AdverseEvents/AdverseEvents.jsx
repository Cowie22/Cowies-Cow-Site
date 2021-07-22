import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import CircleGraphCallout from '../../CircleGraphCallout/CircleGraphCallout'
import CircleGraphCalloutData from '../../CircleGraphCallout/CircleGraphCalloutData.js'


const AdverseEvents = (props) => {
  const { CircleGraphCalloutData1, CircleGraphCalloutData2 } = CircleGraphCalloutData;

  return (
    <div className='adverse-events-container'>
      <Row>
        <Col lg={{span: 12, offset: 0}}>
          <div className='circle-graph-container'>
            <CircleGraphCallout data={CircleGraphCalloutData1} />
            <CircleGraphCallout data={CircleGraphCalloutData2} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 9, offset: 1}}>
          <div className='footnote-container'>
            <h6>
              *Iron therapy was required for women with Hgb ≥8 g/dL and ≤10 g/dL.
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AdverseEvents