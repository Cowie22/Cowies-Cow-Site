import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const IconCalloutCard = (props) => {
  const { data } = props;
  const { title, subTitle, content, icon, btnText, btnLink } = data[0];
  return (
    <Col lg={{span: 4, offset: 0}}>
      <div className='icon-callout-card-container'>
        <div className='icon-title-container'>
          <img src={icon} alt='' loading='lazy' />
          {title}
        </div>
        <p className='purple extra-bold'>
          {subTitle}
        </p>
        {content}
        <div className='cta-btn-container icon-callout-btn-container'>
          <Link
            to={`/${btnLink}`}
          >
            <button className='cta-btn pink-btn'>
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </Col>
  )
}

export default IconCalloutCard