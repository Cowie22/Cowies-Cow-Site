import React, { memo } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import footerLogo from '../../assets/images/global/footer-logo.svg'
import arrowRight from '../../assets/images/global/right-arrow-yellow.svg'

const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col lg={{ span: 12, offset: 0 }}>
          <Row>
            <Col
              lg={{ span: 9, offset: 0, order: 1 }}
              xs={{ span: 12, offset: 0, order: 2 }}
            >
              <nav className='footer-nav-container'>
                <a
                  href='https://www.coherus.com/contact-us/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={arrowRight} alt='' />
                  <h6 className='white bolder'>Contact Us</h6>
                </a>
                <a
                  href='https://www.coherus.com/privacy-policy/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={arrowRight} alt='' />
                  <h6 className='white bolder'>Privacy Policy</h6>
                </a>
              </nav>
              <div className='footer-text-container'>
                <h6 className='white'>
                  © 2021 Coherus BioSciences, Inc. All rights reserved.
                  1021-IO-P031
                </h6>
              </div>
            </Col>
            <Col
              lg={{ span: 2, offset: 1, order: 2 }}
              xs={{ span: 6, offset: 3, order: 1 }}
            >
              <div className='footer-logo-container'>
                <a
                  href='https://www.coherus.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={footerLogo} alt='Coherus BioSciences' />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default memo(Footer)
