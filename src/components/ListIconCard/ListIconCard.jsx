import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ListIconCard = (props) => {
  const { data } = props;
  const { title, content, icon, columns, fixedDesktopHeight, lessFixedDesktopHeight } = data[0];
  return (
    <Col lg={columns}>
      <div
        className={
          fixedDesktopHeight ? 'list-icon-card-container fixed-height' :
          lessFixedDesktopHeight ? 'list-icon-card-container less-fixed-height' :
          'list-icon-card-container'
        }
      >
        <div className='icon-title-container'>
          <img src={icon} alt='' className={icon ? '' : 'no-icon'} loading='lazy' />
          {title}
        </div>
        {content}
      </div>
    </Col>
  )
}

export default ListIconCard