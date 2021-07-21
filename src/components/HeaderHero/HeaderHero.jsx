import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

// import HeaderHeroImg from '../../assets/images/header-hero-img.webp'
// import HeaderHeroImgFB from '../../assets/images/header-hero-img.png'

const HeaderHero = (props) => {
  const { title } = props;
  return (
    <section className='header-hero-container'>
      <Container>
        <Row>
          <Col lg={{span: 5}}>
            <div className='header-hero-content-container'>
              <h1 className='gradient-title'>
                {title}
              </h1>
            </div>
          </Col>
          <Col lg={{span: 5, offset: 2}}>
            <div className='header-hero-img-container'>
              {/* <picture>
                <source srcSet={HeaderHeroImg} className='header-hero-img' alt='Coming soon' type="image/webp" />
                <img loading='lazy' src={HeaderHeroImgFB} className='header-hero-img' alt='Coming soon' />
              </picture> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeaderHero