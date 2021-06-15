import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

const RectangleCard = (props) => {
  const { data } = props;
  const { title, content, icon, btnText, btnLink, alt } = data[0];
  return (
    <Col lg={12}>
      <div className='rectangle-card-container'>
        <div className='title-container'>
          <img src={icon} alt={alt} />
          <h3 className='blue'>
            {title}
          </h3>
        </div>
        {content}
        <Row>
          <Col lg={{span: 4}}>
            <div className='cta-btn-container rectangle-card-btn-container'>
              <Link to={`/${btnLink}`}>
                <button className='cta-btn pink-btn'>
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