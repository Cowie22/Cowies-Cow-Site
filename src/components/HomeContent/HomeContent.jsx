import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import BGImg from '../../assets/images/pages/home/home-bg-img-2X.webp'
import BGImgFB from '../../assets/images/pages/home/home-bg-img-2X.png'
import BGImgMobile from '../../assets/images/pages/home/home-bg-img-2X-mobile.webp'
import BGImgMobileFB from '../../assets/images/pages/home/home-bg-img-2X-mobile.png'

const HomeContent = (props) => {
  const [width, handleWidth] = useState(0);
  const state = useContext(AppContext);

  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    setReferences
  } = state;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('home');
    setReferences([1, 2]);

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
      canonicalURL='https://www.myfembreehcp.com/'
      title='Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets HCP Site'
      pageTitle='Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets HCP Site'
      description='Visit the HCP website for more information about Myfembree® tablets for oral use. See benefits & risks, including BOXED WARNING.'
      preLoadImg={true}
    >
      <section
        className='home-container'
        style={
          width > 991 ?
          {backgroundImage: `url(${BGImg}), url(${BGImgFB})`} :
          {backgroundImage: `url(${BGImgMobile}), url(${BGImgMobileFB})`}
        }
        title=''
      >
        <Container>
          <Row>
            <Col lg={{span: 4, offset: 0}}>
              <h3 className='white'>
                NASOPHARYNGEAL CARCINOMA:
              </h3>
              <h1 className='white'>
                FACING THE SURVIVAL FACTS
              </h1>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 4, offset: 0}}>
              <p className='white'>
                Nasopharyngeal carcinoma (NPC) is a distinct cancer with a unique etiology and prognosis. Key data highlight the poor outcomes of patients with recurrent/metastatic nasopharyngeal carcinoma (R/M NPC).
              </p>
              <p className='white home-lower-text'>
                Explore the facts below.
              </p>
            </Col>
            <Col lg={{span: 7, offset: 1}}>
              <div className='home-box-section'>
                <div className='home-box-section-title-container'>
                  <div className='home-box-title-border'>

                  </div>
                  <p className='white'>
                    HEAD AND NECK CANCER
                  </p>
                  <h4 className='gold'>
                    1-YEAR PROGRESSION-FREE SURVIVAL
                  </h4>
                  <div className='home-box-title-border'>

                  </div>
                </div>
                <div className='home-box-container'>
                  <div className='home-box-left-container'>
                    <div className='home-box gold-box'>
                      <h1 className='text-center white large-percent'>
                        20%
                      </h1>
                      <p className='text-center white'>
                        R/m Nasopharyngeal<sup>1*</sup>
                      </p>
                    </div>
                    <div className='home-box'>
                      <div className='home-box-percent-container'>
                        <h2 className='white'>
                          43%
                        </h2>
                        <p className='white'>
                          Metastatic Oral cavity<sup>3‡</sup>
                        </p>
                      </div>
                    </div>
                    <div className='home-box'>
                      <div className='home-box-percent-container'>
                        <h2 className='white'>
                          91%
                        </h2>
                        <p className='white'>
                          STAGE IV laryngeal<sup>4§</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='home-box-right-container'>
                    <div className='home-box'>
                      <p className='white'>
                        METASTATIC OROPHARYNGEAL<sup>2†</sup>
                      </p>
                      <div className='home-box-percent-container'>
                        <h2 className='white'>
                          76%
                        </h2>
                        <p className='white'>
                          HPV+
                        </p>
                      </div>
                      <div className='home-box-percent-container'>
                        <h2 className='white'>
                          39%
                        </h2>
                        <p className='white'>
                          HPV-
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default HomeContent