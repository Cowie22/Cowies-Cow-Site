import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
// import BackToTop from "./backToTop"

import footerLogo from "../../assets/images/footer-logo.svg"

export default () => (
  <footer>
    <Container>
      <Row>
        <Col className="top-footer" lg={{ span: 9, order: 1}} xs={{ span: 12, order: 2}}>
          <nav className="text-white">
            <ul>
              <li>
                <Link to="#">Sitemap</Link>
              </li>
              <li>
                <Link to="#">Privacy Statement</Link>
              </li>
              <li>
                <Link to="#">Terms of Use</Link>
              </li>
            </ul>
          </nav>
        </Col>
        <Col lg={{ span: 3, order: 2}} xs={{ span: 12, order: 1}}>
          <img alt="Evoke Giant alt logo" src={footerLogo} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="bottom-footer">
          <span>
            © 2018 Evoke Giant Inc. All rights reserved. USA-XXX-XXXXXX(X) 11-18
            <br />
            This website is intended for US residents only.
          </span>
        </Col>
      </Row>
    </Container>
  </footer>
)
