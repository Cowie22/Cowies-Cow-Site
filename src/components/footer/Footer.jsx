import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import footerLogo from '../../assets/images/global/footer-logo.svg'
import arrowRight from '../../assets/images/global/right-arrow-yellow.svg'

export default () => (
  <footer>
    <Container>
      <Row>
        <Col lg={{ span: 12, offset: 0 }}>
          <Row>
            <Col lg={{ span: 9, offset: 0 }}>
              <nav className='footer-nav-container'>
                <a
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={arrowRight} alt='' />
                  <h6 className='white bolder'>
                    Contact Us
                  </h6>
                </a>
                <a
                  href=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={arrowRight} alt='' />
                  <h6 className='white bolder'>
                    Privacy Policy
                  </h6>
                </a>
              </nav>
              <div className='footer-text-container'>
                <h6 className='white'>
                  © 2021 Coherus BioSciences, Inc. All rights reserved. 1021-IO-P031
                </h6>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
)
