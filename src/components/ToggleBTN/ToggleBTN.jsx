import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

const ToggleBTN = (props) => {
  const state = useContext(AppContext);
  const {
    slider,
    handleSlider,
  } = state;

  return (
    <Col lg={{span: 6, offset: 3}}>
      <div className='toggle-btn-container' onClick={() => handleSlider(!slider)}>
        <div className={slider ? 'slider-btn right' : 'slider-btn left'}>

        </div>
        <Row>
          <Col lg={{span: 6, offset: 0}}>
            <h4 className={!slider ? 'text-center dark-grey' : 'text-center white'}>
              Non-Hispanic White <br /> (n=4,013)
            </h4>
          </Col>
          <Col lg={{span: 6, offset: 0}}>
            <h4 className={slider ? 'text-center dark-grey' : 'text-center white'}>
              Asian <br /> (n=3,381)
            </h4>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default ToggleBTN