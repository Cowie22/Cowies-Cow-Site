import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
// import BackToTop from './backToTop'

import pfizerLogo from "../../assets/images/pfizer-footer-logo.svg"
import myovantLogo from "../../assets/images/myovant-footer-logo.svg"

export default () => (
  <footer>
    <Container>
      <Row>
        <Col lg={{ span: 5, offset: 0 }} xs={{ span: 8, offset: 2 }}>
          <h6 className="footer-top-title">
            For US Healthcare Professionals Only
          </h6>
          <nav className="footer-nav-container">
            <ul>
              <li>
                <a
                  href="https://www.myovant.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.myovant.com/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.myovant.com/terms-of-use/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <Link to="/sitemap/">Site Map</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
      <Row>
        <Col
          lg={{ span: 7, offset: 0, order: 1 }}
          xs={{ span: 10, offset: 1, order: 2 }}
        >
          <h6 className="footer-text">
            Myfembree® and its associated logo are trademarks of Myovant
            Sciences GmbH. All other trademarks are the property of their
            respective owners.
          </h6>
          <h6>
            ©2021 Myovant Sciences GmbH and Pfizer Inc. All rights reserved.
            PP-US-REL-CT-2100142 08/21
          </h6>
        </Col>
        <Col
          lg={{ span: 4, offset: 1, order: 2 }}
          xs={{ span: 12, offset: 0, order: 1 }}
        >
          <div className="footer-logo-container">
            <a href="https://www.myovant.com" target="_blank" rel='noopener noreferrer'>
              <img
                src={myovantLogo}
                alt="Myovant Sciences logo"
                className="footer-logo"
                loading='lazy'
              />
            </a>
            <a href="https://www.pfizer.com" target="_blank" rel='noopener noreferrer'>
              <img
                src={pfizerLogo}
                alt="Pfizer logo"
                className="footer-logo footer-logo-left"
                loading='lazy'
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)
