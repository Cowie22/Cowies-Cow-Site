import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import BGImg from '../../assets/images/pages/about/about-bg-img-2X.webp'
import BGImgFB from '../../assets/images/pages/about/about-bg-img-2X.png'
import BGImgMobile from '../../assets/images/pages/about/about-bg-img-2X-mobile.webp'
import BGImgMobileFB from '../../assets/images/pages/about/about-bg-img-2X-mobile.png'
import downArrow from '../../assets/images/global/down-arrow-yellow.svg'


const AboutContent = (props) => {
  const [width, handleWidth] = useState(0);
  const state = useContext(AppContext);

  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    currentTopTab,
    handleCurrentTopTab,
    handleActiveDropdownLink,
    setReferences
  } = state;

  useEffect(() => {
    handleCurrentPage('about');
    setReferences([8, 9, 10, 11, 12, 13, 14, 15, 5, 16]);

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
    <Layout
      canonicalURL='https://www.myfembreehcp.com/resources/'
      title='HCP Resources | Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets'
      pageTitle='HCP Resources | Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets'
      description='Find downloadable resources for the Myfembree® Support Program including a program enrollment form and a patient consent form. See benefits&risks&BOXED WARNING.'
    >
      <section
        className='about-container'
        style={
          width > 991 ?
          {backgroundImage: `url(${BGImg}), url(${BGImgFB})`} :
          {backgroundImage: `url(${BGImgMobile}), url(${BGImgMobileFB})`}
        }
        title=''
      >
        <Container>
          <Row>
            <Col lg={{span: 6, offset: 0}}>
              <h3 className='white'>
                Nasopharyngeal carcinoma (NPC):
              </h3>
              <h1 className='white'>
                A RARE TUMOR ORIGINATING IN THE NASOPHARYNX<sup>1</sup>
              </h1>
              <p className='white'>
                The most common presenting symptoms of NPC are neck mass/swelling and enlarged lymph nodes.<sup>1</sup>
              </p>
              <p className='white home-lower-text'>
                Other common symptoms include headaches, bleeding in the mouth and nose, difficulty breathing through the nose, hearing difficulty, and vision problems.<sup>1</sup>
              </p>
              <img src={downArrow} alt=''  />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default AboutContent