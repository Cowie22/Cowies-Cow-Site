import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
export default () => (
  <section className="utility-nav">
    <Container>
      <Row>
        <Col>
          <nav className="right text-white">
            <ul>
              <li>
                <Link to="#">Prescribing Information</Link>
              </li>
              <li>
                <Link to="#">Important Safety Information</Link>
              </li>
              <li>
                <Link to="#">References</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Visit Patient Site</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  </section>
)
