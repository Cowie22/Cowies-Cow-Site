import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/Layout"

import SignUpForm from "../components/form/SignUpForm.jsx"

export default () => (
  <Layout>
    <Container>
      <Row>
        <Col className="home">
          <h1>Homepage</h1>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  </Layout>
)
