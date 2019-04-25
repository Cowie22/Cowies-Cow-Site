import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
export default () => (
  <section className="main-nav">
    <Container>
      <Row>
        <Col md={3}>
          <Link to="/">
            <img alt="" src={require("../../assets/images/header-logo.svg")} />
          </Link>
        </Col>
        <Col>
          <nav className="right">
            <ul>
              <li>
                <Link to="/efficacy">Efficacy</Link>
              </li>
              <li>
                <Link to="/safety">Safety</Link>
              </li>
              <li>
                <Link to="/dosing">Dosing</Link>
              </li>
              <li>
                <Link to="mechanism-of-action">Mechanism of Action</Link>
              </li>
              <li>
                <Link to="support-and-resources">Support &amp; Resources</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  </section>
)
