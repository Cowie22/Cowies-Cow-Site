import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

// import HeaderHeroImg from '../../assets/images/header-hero-img.webp'
// import HeaderHeroImgFB from '../../assets/images/header-hero-img.png'

const HeaderHero = (props) => {
  const { title, columns } = props;
  return (
    <section className='header-hero-container'>
      <Container>
        <Row>
          <Col lg={columns}>
            <div className='header-hero-content-container'>
              <h1 className='gradient-title'>
                {title}
              </h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeaderHero