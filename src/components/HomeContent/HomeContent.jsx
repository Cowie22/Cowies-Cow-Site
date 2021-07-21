import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'

import RegisterCard from '../RegisterCard/RegisterCard'
import RectangleCard from '../RectangleCard/RectangleCard'
import RectangleCardData from '../RectangleCard/RectangleCardData.js'
import HCPModal from '../HCPModal/HCPModal'

import BGImg from '../../assets/images/home-bg-img.webp'
import BGImgFB from '../../assets/images/home-bg-img.png'
import BGImgMobile from '../../assets/images/home-bg-img-mobile.webp'
import BGImgMobileFB from '../../assets/images/home-bg-img-mobile.png'


const HomeContent = (props) => {

  const [width, handleWidth] = useState(0);

  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    HCPModalVisible,
    handleHCPModalVisible
  } = props;

  const { HomeRectangleCardData1, HomeRectangleCardData2 } = RectangleCardData;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('home');

    if (document.getElementsByTagName('body')) {
      if (HCPModalVisible) {
        document.body.classList.add('scroll-none');
      } else {
        document.body.classList.remove('scroll-none');
      }
    }

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions)
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
    >
      <section
        id='hcp-modal-container'
        onClick={() => this.handleHCPModalVisible()}
      >
      </section>
      <HCPModal
        handleHCPModalVisible={handleHCPModalVisible}
        HCPModalVisible={HCPModalVisible}
      />
      <section
        className='home-container'
        style={
          width > 991 ?
          {backgroundImage: `url(${BGImg}), url(${BGImgFB})`} :
          {backgroundImage: `url(${BGImgMobile}), url(${BGImgMobileFB})`}
        }
        title='Myfembree® logo watermark'
      >
        <Container>
          <Row>
            <Col lg={{span: 6, offset: 1}} xs={{span: 11, offset: 0}}>
              <h2 className='home-title'>
                The only FDA-approved once-daily pill to reduce heavy menstrual bleeding associated with
                uterine fibroids in premenopausal women
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 9, offset: 0}} xs={{span: 11, offset: 0}}>
              <h4 className='white home-lower-title'>
                The recommended total duration of treatment is 24 months.
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xl={3} lg={4} xs={10}>
              <div className='cta-btn-container home-btn-container'>
                <a
                  href='https://www.myovant.com/myfembree-prescribing-information.pdf'
                  target='_blank'
                >
                  <button className='cta-btn white-btn-hover-clear'>
                    View Prescribing Information
                  </button>
                </a>
              </div>
            </Col>
            <Col xl={3} lg={4} xs={10}>
              <div className='cta-btn-container home-btn-container'>
                <a
                  href='https://investors.myovant.com/news-releases/news-release-details/myovant-sciences-and-pfizer-receive-fda-approval-myfembreer'
                  target='_blank'
                >
                  <button className='cta-btn transparent-btn'>
                    View the Press Release
                  </button>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} xs={11}>
              <h3 className='white home-card-lower-content'>
                To find out more about the Myfembree<sup>®</sup> Support Program, <br /> call {' '}
                <a href='tel:1-833-693-3627' className='call-now-link'><u>1-833-MYFEMBREE</u> (<u>1-833-693-3627</u>)</a>,
                {' '} 8 <sub>AM</sub>–8 <sub>PM</sub> ET, Monday–Friday.
              </h3>
              <h6 className='white home-page-footnote'>
                Actual pill size: 7.94 mm in diameter.
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='home-callout-container'>
        <Container>
          <RegisterCard />
        </Container>
      </section>
      <section className='home-card-container'>
        <Container>
          <Row>
            {/* <RectangleCard data={HomeRectangleCardData1} /> */}
            <RectangleCard data={HomeRectangleCardData2} />
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default HomeContent