import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import SupportIconCard from '../../SupportIconCard/SupportIconCard'
import SupportIconCardData from '../../SupportIconCard/SupportIconCardData.js'

import smallPillBottleIcon from '../../../assets/images/small-green-pill-bottle-icon.svg'


const Overview = (props) => {
  const state = useContext(AppContext);
  const {
    setReferences,
    handleCurrentTopTab,
  } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      setReferences([]);
      handleCurrentTopTab(1);
      mounted.current = true;
    } else {
      setReferences([]);
      handleCurrentTopTab(1);
    }
  }, []);

  const {
    SupportIconCardData1,
    SupportIconCardData2,
    SupportIconCardData3,
    SupportIconCardData4,
  } = SupportIconCardData;

  return (
    <div className='overview-container'>
      <h2 className='blue'>
        Patient support is available throughout the Myfembree treatment journey
      </h2>
      <Row>
        <Col lg={{span: 12}}>
          <Row>
            <SupportIconCard data={SupportIconCardData1} />
            <SupportIconCard data={SupportIconCardData2} />
            <SupportIconCard data={SupportIconCardData3} />
            <SupportIconCard data={SupportIconCardData4} />
          </Row>
          <div className='overview-container-lower-cards'>
            <Row>
              <Col lg={{span: 12}}>
                <div className='overview-container-large-card'>
                  <Row>
                    <Col lg={{span: 4}}>
                      <div className='icon-container'>
                        <img src={smallPillBottleIcon} alt='' />
                        <p className='extra-bold'>
                          Free Medication Programs*
                        </p>
                        <p>
                          Eligible patients with...
                        </p>
                      </div>
                    </Col>
                    <Col lg={{span: 8, offset: 0}} xs={{span: 12, offset: 0}}>
                      <ul className='purple-ul less-right-padding'>
                        <li>
                          Commercial insurance may qualify for up to 4 months of a free supply of Myfembree
                        </li>
                        <li>
                          Federal insurance may qualify for up to 2 months of a free supply of Myfembree
                        </li>
                        <li>
                          No insurance or those with insurance denials may qualify to receive their
                          medication at no cost from the Myovant Sciences Patient Assistance Program
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col>
              <h6>
                *See below for full terms and conditions.
              </h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Overview