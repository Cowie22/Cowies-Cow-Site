import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import InfoGraphic from '../../InfoGraphic/InfoGraphic'
import InfoGraphicData from '../../InfoGraphic/InfoGraphicData.js'


const Amenorrhea = (props) => {
  const { AmenorrheaData1, AmenorrheaData2 } = InfoGraphicData;

  return (
    <div className='amenorrhea-container'>
      <h4 className='mulish purple'>
        KEY SECONDARY ENDPOINTS
      </h4>
      <h2 className='blue'>
        50% of women achieved amenorrhea with Myfembree<sup>1</sup>
      </h2>
      <Row>
        <Col lg={{span: 12, offset: 0}}>
          <div className='graph-container'>
            <InfoGraphic data={AmenorrheaData1} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='mid-section-container'>
            <h2 className='blue'>
              Myfembree improved hemoglobin (Hgb) response in women with anemia<sup>1,*</sup>
            </h2>
            <div className='lower-graph-container'>
              <InfoGraphic data={AmenorrheaData2} />
            </div>
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

export default Amenorrhea