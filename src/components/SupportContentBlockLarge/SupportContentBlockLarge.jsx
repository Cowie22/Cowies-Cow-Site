import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import cardImg from '../../assets/images/support-content-block-large-img.webp'
import cardImgFB from '../../assets/images/support-content-block-large-img.png'

const SupportContentBlockLarge = (props) => {
  return (
    <section className='support-content-block-large-container'>
      <Container>
        <Row>
          <Col lg={{span: 10, offset: 1}}>
            <h2 className='blue'>
              Myfembree Copay Assistance Program
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 5, offset: 1}}>
            <div className='support-block-large-img-container'>
              <picture>
                <source srcSet={cardImg} className='expand-story-img' type="image/webp" />
                <img loading='lazy' src={cardImgFB} className='expand-story-img' alt='' />
              </picture>
              {/* <img src={cardImg} /> */}
            </div>
          </Col>
          <Col lg={{span: 5, offset: 0}}>
            <p>
              The Myfembree Copay Assistance Program can provide financial assistance to eligible patients
              with commercial insurance when they get their prescription from their retail or mail-order
              pharmacy during the cost-sharing portion of their insurance benefit.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 10, offset: 1}}>
            <div className='support-block-enroll-card-container'>
              
                {/* <a href='https://portal.trialcard.com/myovant/myfembree/copay/ ' target='_blank'><h3 className='blue text-center'>Enroll Today! </h3></a>
              */}
              <Row>
                {/* <Col lg={{span: 6, offset: 1}}>
                  <p className='extra-bold enroll-btn-text-top' >
                    Enrollment into this copay program is facilitated through the Myfembree website, over the
                    phone, or by scanning a QR code included on select Myfembree Support Program resources
                  </p>
                </Col> */}
                <Col lg={{span: 3, offset: 1}} className='enroll-btn'>
                  <a href='https://portal.trialcard.com/myovant/myfembree/copay/ ' target='_blank'>
                    <button className='cta-btn pink-btn enroll-btn'>
                      Enroll Today!
                    </button>



                  </a>
                
                </Col>
                
              </Row>
              <Row>
                <Col lg={{span: 10, offset: 1}}>
                  <p className='extra-bold enroll-btn-text'>
                    Enrollment into this copay program is facilitated through the Myfembree website, over the
                    phone, or by scanning a QR code included on select Myfembree Support Program resources
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 10, offset: 1}}>
            <h6 className='extra-bold support-content-block-subtitle'>
              Myfembree Copay Assistance Program: Terms and Conditions
            </h6>
            <h6>
              The Myfembree Copay Assistance Program (“Program”) is for eligible patients with commercial
              prescription insurance for Myfembree. With this Program, eligible patients will pay as little
              as $5 per monthly Myfembree prescription or $15 if they received a 90-day prescription; subject
              to a maximum of $2,000 per calendar year. After the annual maximum of $2,000 for Myfembree is
              reached, patient will be responsible for the remaining monthly out-of-pocket costs. Patient
              must enroll in the Program by visiting www.Myfembree.com or by calling 1-833-MYFEMBREE (833-693-3627).
              Card must be activated before use. This Program may not be redeemed more than once every 21 days.
              The Program is not valid for patients whose prescription claims are reimbursed, in whole or in part,
              by any state or federal government program, including, but not limited to, Medicaid, Medicare, Medigap,
              Department of Defense (DoD), Veterans Affairs (VA), TRICARE, Puerto Rico Government Insurance, or
              any state patient or pharmaceutical assistance program. Offer is not valid for cash-paying patients.
              Patient must be a resident of the U.S., Puerto Rico, or U.S. Territories. This Program is void
              where prohibited by state law and on the date an AB rated generic equivalent for Myfembree becomes
              available. Certain rules and restrictions apply. This card is not insurance. This offer cannot be
              combined with any other coupon, free trial, discount, prescription savings card, or other offer.
              This offer is not conditioned on any past or future purchase, including refills. Patient and
              participating pharmacists agree not to seek reimbursement for all, or any part of the benefit
              received by the patient through this Program. Patient and participating pharmacists agree to report
              the receipt of Program benefits to any insurer or other third party who pays for or reimburses any
              part of the prescription filled using the Card, as may be required by such insurer or third party.
              Myovant Sciences reserves the right to revoke, rescind, or amend this offer without notice. The
              Myfembree Copay Assistance Program is good through December 31, 2022.
            </h6>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SupportContentBlockLarge