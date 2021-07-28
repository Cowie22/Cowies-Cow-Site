import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import InfoGraphic from '../../InfoGraphic/InfoGraphic'
import InfoGraphicData from '../../InfoGraphic/InfoGraphicData.js'

import IIcon from '../../../assets/images/I-icon.svg'

const Reduction = (props) => {
  const state = useContext(AppContext);
  const {
    setReferences
  } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      setReferences([1, 2, 4, 3]);
      mounted.current = true;
    } else {
      setReferences([1, 2, 4, 3]);
    }
  }, []);

  const { ReductionData1, ReductionData2 } = InfoGraphicData;

  return (
    <div className='reduction-container'>
      <h4 className='mulish purple'>
        KEY SECONDARY ENDPOINT
      </h4>
      <h2 className='blue'>
        Myfembree delivered sustained reductions in menstrual blood loss (MBL) volume<sup>1,2</sup>
      </h2>
      {/* <div className='reduction-skinny-callout-container'>
        <ul className='purple-ul'>
          <li>
            Menstrual blood loss volume assessment at Week 4 through Week 20 was prespecified, but not
            adjusted for multiplicity<sup>2</sup>
          </li>
        </ul>
      </div> */}
      <Row>
        <Col lg={{span: 12, offset: 0}}>
          <div className='graph-container'>
            <InfoGraphic data={ReductionData1} />
          </div>
          <div>
            <h6>
              Menstrual blood loss volume assessment at Week 4 through Week 20 was prespecified, but not
              adjusted for multiplicity.<sup>2</sup>
            </h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='mid-section-container'>
            <h4 className='mulish purple'>
              ADDITIONAL ENDPOINT
            </h4>
            <h2 className='blue'>
              Change in MBL volume at 52 weeks<sup>4</sup>
            </h2>
            <div className='lower-graph-container'>
              <InfoGraphic data={ReductionData2} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 9}}>
          <div className='footnote-container'>
            <h6>
              The <img src={IIcon} alt='' /> indicates standard error of the mean.
            </h6>
            <h6>
              Patients who completed LIBERTY 1 and 2 and met enrollment criteria were eligible for the
              LIBERTY open-label extension study. Data shown are only for patients who continued
              enrollment in the open-label extension study.
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Reduction