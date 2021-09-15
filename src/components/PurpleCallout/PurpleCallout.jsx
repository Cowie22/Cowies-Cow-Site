import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PurpleCallout = (props) => {
  const { title } = props;
  return (
    <section className='purple-callout-container'>
      <Container>
        <Row>
          <Col lg={{span: 12}}>
            {title}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PurpleCallout