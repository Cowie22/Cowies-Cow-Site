import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const InfoGraphic = (props) => {
  const [width, handleWidth] = useState(0);

  const { data } = props;

  const {
    content,
    img,
    fallBackImg,
    imgMobile,
    fallBackImgMobile,
    contentColumns,
    imgColumns
  } = data[0];

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions, { passive: true });
    return function cleanUp() {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, []);

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth);
  }

  return (
    <div className='info-graphic-container'>
      <Row>
        <Col lg={contentColumns}>
          {content}
        </Col>
        <Col lg={imgColumns}>
          <div className='graph-img-container'>
            <picture>
              <source srcSet={img} media='(min-width: 991px)' alt='' type="image/webp" />
              <source srcSet={fallBackImg} media='(min-width: 991px)' alt='' type="image/png" />
              <source srcSet={imgMobile} media='(max-width: 991px)' alt='' type="image/webp" />
              <source srcSet={fallBackImgMobile} media='(max-width: 991px)' alt='' type="image/png" />
              <img
                loading='lazy'
                src={width < 991 ? fallBackImgMobile : fallBackImg}
                alt=''
              />
            </picture>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default InfoGraphic