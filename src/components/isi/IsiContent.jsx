import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default () => (
  <Container>
    <Row>
      <Col md={{ span: 6 }} xs={{ span: 12 }}>
        <span>Indication</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
          eget duis at tellus at urna. Nulla facilisi nullam vehicula ipsum a
          arcu. Quis hendrerit dolor magna eget est.
        </p>
      </Col>
      <Col md={{ span: 6 }} xs={{ span: 12 }} className="black-box-warning">
        <span>Important Safety Information</span>
        <p>
          <strong>Black Box Warning</strong>
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            eget duis at tellus at urna.
          </li>
          <li>
            Nulla facilisi nullam vehicula ipsum a arcu. Quis hendrerit dolor
            magna eget est.
          </li>
          <li>
            Turpis nunc eget lorem dolor sed viverra. At elementum eu facilisis
            sed. Eget nullam non nisi est.
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col>
        <span>CONTRAINDICATIONS</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
          eget duis at tellus at urna. Nulla facilisi nullam vehicula ipsum a
          arcu. Quis hendrerit dolor magna eget est. Est ullamcorper eget nulla
          facilisi etiam dignissim diam. Tristique magna sit amet purus gravida
          quis blandit turpis cursus. Velit aliquet sagittis id consectetur
          purus ut. Sagittis nisl rhoncus mattis rhoncus urna neque viverra
          justo nec.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <span>Warnings and Precautions</span>
        <p>
          <strong>Lorem ipsum dolor</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
          eget duis at tellus at urna. Nulla facilisi nullam vehicula ipsum a
          arcu. Quis hendrerit dolor magna eget est.
        </p>
        <p>
          <strong>Lorem ipsum dolor</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
          eget duis at tellus at urna. Nulla facilisi nullam vehicula ipsum a
          arcu. Quis hendrerit dolor magna eget est. Est ullamcorper eget nulla
          facilisi etiam dignissim diam.{" "}
        </p>

        <p>
          Please see full{" "}
          <a href="" id="isi-pi">
            Prescribing Information
          </a>
          , including Boxed Warning, and Medication Guide .
        </p>
      </Col>
    </Row>
  </Container>
)
