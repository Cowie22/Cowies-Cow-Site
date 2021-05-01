import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const RectangleCard = (props) => {
  const { data } = props;
  const { title, content, icon, btnText } = data[0];
  return (
    <Col lg={6}>
      <div className='rectangle-card-container'>
        <div className='title-container'>
          <img src={icon} />
          <h3 className='blue'>
            {title}
          </h3>
        </div>
        <p>
          {content}
        </p>
        <div className='cta-btn-container rectangle-card-btn-container'>
          <a>
            <button className='cta-btn pink-btn'>
              {btnText}
            </button>
          </a>
        </div>
      </div>
    </Col>
  )
}

export default RectangleCard