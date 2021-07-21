import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import PurpleLineCallout from '../PurpleLineCallout/PurpleLineCallout'

const SupportContentBlock = (props) => {
  const { data } = props;
  const { title, purpleLineTitle, purpleLineTitle2, content, subTitle, footnote, bgColor} = data[0];
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
              content={
                <p className='extra-bold purple large-text'>
                  {purpleLineTitle}<br/>
                  {purpleLineTitle2}
                </p>
              }
            />
          </Col>
          <Col lg={{span: 5, offset: 0}}>
            <p className='content-text'>
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