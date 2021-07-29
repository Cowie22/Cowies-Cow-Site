import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import ContentBTNCard from '../../ContentBTNCard/ContentBTNCard'
import ListIconCard from '../../ListIconCard/ListIconCard'
import ListIconCardData from '../../ListIconCard/ListIconCardData.js'
import PurpleLineCallout from '../../PurpleLineCallout/PurpleLineCallout'

import personSupportIcon from '../../../assets/images/man-and-women-support-icon.png'

const Enrollment = (props) => {
  const state = useContext(AppContext);
  const {
    setReferences
  } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      setReferences([]);
      mounted.current = true;
    } else {
      setReferences([]);
    }
  }, []);

  const {
    ListIconCardData1,
    ListIconCardData2,
    ListIconCardData3,
  } = ListIconCardData;

  return (
    <div className='enrollment-container'>
      <ContentBTNCard
        title={
          `If your patient already has a Myfembree prescription, they can provide their e-consent for
          enrollment and sharing protected health information`
        }
        btnText={'Provide e-Consent'}
        link={'https://portal.trialcard.com/myovant/myfembree/consent/'}
      />
      <h2 className='blue'>
        3 ways to enroll patients in the Myfembree Support Program
      </h2>
      <Row>
        <ListIconCard data={ListIconCardData1} />
        <ListIconCard data={ListIconCardData2} />
        <ListIconCard data={ListIconCardData3} />
      </Row>
      <Row>
        <Col lg={{span: 9}}>
          <div className='footnote-container'>
            <h6>
              *See below for full terms and conditions.
            </h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 12}}>
          <PurpleLineCallout
            content={
              <div className='enrolment-purple-line-card-content-container'>
                <Row>
                  <Col lg={{span: 2, offset: 5}}>
                    <img src={personSupportIcon} alt='' />
                  </Col>
                </Row>
                <p className='extra-bold purple'>
                  The office can call <a href='tel:1-833-693-3627'>1-833-MYFEMBREE (1-833-693-3627)</a> to speak
                  to a Support Coordinator or Virtual Reimbursement Manager about access and reimbursement
                  status questions
                </p>
              </div>
            }
          />
        </Col>
      </Row>
    </div>
  )
}

export default Enrollment