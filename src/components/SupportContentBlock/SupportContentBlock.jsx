import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import PurpleLineCallout from '../PurpleLineCallout/PurpleLineCallout'

const SupportContentBlock = (props) => {
  const { data } = props;
  const { title, purpleLineTitle, content, subTitle, footnote, bgColor} = data[0];
  return (
    <section style={{background: bgColor}} className='support-content-block-container'>
      <Container>
        <Row>
          <Col lg={{span: 10, offset: 1}}>
            <h2 className='blue'>
              {title}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 5, offset: 1}}>
            <PurpleLineCallout
              title={
                <p className='extra-bold purple large-text'>
                  {purpleLineTitle}
                </p>
              }
            />
          </Col>
          <Col lg={{span: 5, offset: 0}}>
            <p>
              {content}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 10, offset: 1}}>
            <h6 className='extra-bold support-content-block-subtitle'>
              {subTitle}
            </h6>
            <h6>
              {footnote}
            </h6>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SupportContentBlock