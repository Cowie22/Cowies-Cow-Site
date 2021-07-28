import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ContentBTNCard = (props) => {
  const { title, btnText, link } = props;
  return (
    <div className='content-btn-card-container'>
      <Row>
        <Col lg={{span: 6, offset: 1}}>
          <p className='purple extra-bold'>
            {title}
          </p>
        </Col>
        <Col lg={{span: 4}}>
          <div className='content-btn-card-btn-container'>
            <div className='cta-btn-container inner-btn-container'>
              <a href={link} target='_blank'>
                <button className='cta-btn pink-btn'>
                  {btnText}
                </button>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ContentBTNCard