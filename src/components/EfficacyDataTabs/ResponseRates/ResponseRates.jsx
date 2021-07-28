import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import InfoGraphic from '../../InfoGraphic/InfoGraphic'
import InfoGraphicData from '../../InfoGraphic/InfoGraphicData.js'

const ResponseRates = (props) => {
  const state = useContext(AppContext);
  const {
    setReferences
  } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      setReferences([1, 2]);
      mounted.current = true;
    } else {
      setReferences([1, 2]);
    }
  }, []);

  const { ResponseRatesData1 } = InfoGraphicData;

  return (
    <div className='response-rates-container'>
      <h4 className='mulish purple'>
        PRIMARY ENDPOINT: PROPORTION OF WOMEN WHO ACHIEVED A MENSTRUAL BLOOD LOSS RESPONSE
      </h4>
      <h2 className='blue'>
        Approximately 70% of women responded to treatment with Myfembree<sup>1,*</sup>
      </h2>
      <p>
        A response was defined as menstrual blood loss (MBL) volume &#60;80 mL <strong><em>and</em></strong> ≥50%
        reduction in menstrual blood loss volume from baseline* over the last 35 days of treatment.
      </p>
      <Row>
        <Col lg={{span: 10, offset: 1}}>
          <div className='graph-container'>
            <InfoGraphic data={ResponseRatesData1} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='footnote-container'>
            <h6>
              *Mean menstrual blood loss volume (± SD) at baseline was 231 mL (± 156).
            </h6>
            <h6>
              MBL = menstrual blood loss.
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ResponseRates