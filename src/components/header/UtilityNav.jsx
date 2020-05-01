import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import ExternalLink from "../exitramp/ExternalLink.jsx"

export default props => (
  <section className="utility-nav">
    <Container>
      <Row>
        <Col>
          <nav className="right text-white">
            <ul>
              <li>
                <Link to="#">Prescribing Information</Link>
              </li>
              <li onClick={() => props.openIndication()}>Indication</li>
              <li>
                <Link to="#page-isi">Important Safety Information</Link>
              </li>
              <li>
                <Link to="#">References</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <ExternalLink externalUrl="#">
                  Visit Patient Site
                </ExternalLink>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  </section>
)
