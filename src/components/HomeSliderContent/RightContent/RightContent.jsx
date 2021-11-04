import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import fiftyPercentCircle from '../../../assets/images/pages/home/50-percent-circle.svg'

const RightContent = (props) => {
  return (
    <Col lg={{span: 12, offset: 0}}>
      <div className='home-slider-right-content-container'>
        <Row>
          <Col lg={{span: 9, offset: 0}}>
            <div className='home-slider-inner-container left'>
              <p className='white text-center bolder'>
                NON-HISPANIC WHITE
              </p>
              <h4 className='white text-center bolder'>
                5-YEAR OS: ALL STAGES Of NPC BY HISTOLOGIC SUBTYPE
              </h4>
              <Row>
                <Col lg={{span: 4, offset: 0}}>
                  <div className='home-slider-circle-container'>
                    <p className='white text-center'>
                      Keratinizing Squamous Cell Carcinoma
                    </p>
                    <img src={fiftyPercentCircle} alt='' />
                  </div>
                </Col>
                <Col lg={{span: 4, offset: 0}}>
                  <div className='home-slider-circle-container'>
                    <p className='white text-center'>
                      Non-Keratinzizing Differentiated Carcinoma
                    </p>
                    <img src={fiftyPercentCircle} alt='' />
                  </div>
                </Col>
                <Col lg={{span: 4, offset: 0}}>
                  <div className='home-slider-circle-container'>
                    <p className='white text-center'>
                      Non-Keratinizing Undifferentiated Carcinoma
                    </p>
                    <img src={fiftyPercentCircle} alt='' />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={{span: 3, offset: 0}}>
            <div className='home-slider-inner-container right'>
              <p className='white text-center bolder'>
                NON-HISPANIC WHITE
              </p>
              <h4 className='white text-center bolder'>
                5-YEAR OS: METASTATIC AT DIAGNOSIS
              </h4>
              <Row>
                <Col lg={{span: 12, offset: 0}}>
                  <div className='home-slider-circle-container'>
                    <img src={fiftyPercentCircle} alt='' />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 12, offset: 0}}>
            <div className='home-slider-footnote-container'>
              <h6 className='white'>
                ¶An analysis of NPC patients in the United States reported to the SEER (Surveillance, Epidemiology, and End Results) database between 1973 and 2009. Data included 9,014 patients, of which the majority were non-Hispanic white (n=4,013) and Asian (n=3,381). Other populations included Hispanic white (n=535), Black (n=937), and other (n=148).
              </h6>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default RightContent