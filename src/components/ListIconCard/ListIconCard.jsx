import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ListIconCard = (props) => {
  const { data } = props;
  const { title, content, icon, columns, fixedDesktopHeight } = data[0];
  return (
    <Col lg={columns}>
      <div className={fixedDesktopHeight ? 'list-icon-card-container fixed-height' : 'list-icon-card-container'}>
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