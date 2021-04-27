import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
// import BackToTop from './backToTop'

import footerLogo from '../../assets/images/footer-logo.svg'

export default () => (
  <footer>
    <Container>
      <Row>
        <Col lg={{ span: 5, offset: 0}} xs={{span: 6, offset: 3}}>
          <h6 className='footer-top-title'>
            For US Residents Only
          </h6>
          <nav className='footer-nav-container'>
            <ul>
              <li>
                <Link to=''>Contact Us</Link>
              </li>
              <li>
                <Link to=''>Privacy Policy</Link>
              </li>
              <li>
                <Link to=''>Terms of Use</Link>
              </li>
              <li>
                <Link to='/sitemap/'>Site Map</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 6, offset: 0, order: 1}} xs={{span: 10, offset: 1, order: 2}}>
          <h6 className='footer-text'>
            Myfembree® and its associated logo are trademarks of Myovant Sciences GmbH. All other
            trademarks are the property of their respective owners.
          </h6>
          <h6>
            ©2021 Myovant Sciences GmbH and Pfizer Inc. All rights reserved. PP-US-REL-CT-2100061 06/21
          </h6>
        </Col>
        <Col lg={{span: 4, offset: 2, order: 2}} xs={{span: 10, offset: 1, order: 1}}>
          <div className='footer-logo-container'>
            <img src={footerLogo} />
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)
