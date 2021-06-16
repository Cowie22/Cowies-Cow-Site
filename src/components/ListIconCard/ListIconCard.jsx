import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ListIconCard = (props) => {
  const { data } = props;
  const { title, content, icon } = data[0];
  return (
    <Col lg={{span: 10, offset: 1}}>
      <div className='list-icon-card-container'>
        <div className='icon-title-container'>
          <img src={icon} alt='' />
          {title}
        </div>
        {content}
      </div>
    </Col>
  )
}

export default ListIconCard