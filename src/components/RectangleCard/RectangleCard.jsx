import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

const RectangleCard = (props) => {
  const { data } = props;
  const { title, content, icon, btnText, btnLink, alt } = data[0];
  return (
    <Col lg={12}>
      <div className='rectangle-card-container'>
        <Row>
          <Col lg={{span: 1}} xs={{span: 2}}>
            <div className='icon-container'>
              <img src={icon} alt={alt} loading='lazy' />
            </div>
          </Col>
          <Col lg={{span: 10}} xs={{span: 10}}>
            <div className='title-container'>
              <h3 className='blue'>
                {title}
              </h3>
            </div>
            {content}
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 3, offset: 1}} xs={{span: 10, offset: 0}}>
            <div className='cta-btn-container rectangle-card-btn-container'>
              <Link to={`/${btnLink}`}>
                <button className='cta-btn transparent-btn-pink'>
                  {btnText}
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default RectangleCard