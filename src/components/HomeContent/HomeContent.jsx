import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import IconCalloutCard from '../IconCalloutCard/IconCalloutCard'
import IconCalloutCardData from '../IconCalloutCard/IconCalloutCardData.js'
import RectangleCard from '../RectangleCard/RectangleCard'
import RectangleCardData from '../RectangleCard/RectangleCardData.js'
import HCPModal from '../HCPModal/HCPModal'

import HolderBGImg from '../../assets/images/home-bg-img-1X.webp'
import HolderBGImgFB from '../../assets/images/home-bg-img-1X.png'
import HolderBGImgMobile from '../../assets/images/home-bg-img-mobile-1X.webp'
import HolderBGImgMobileFB from '../../assets/images/home-bg-img-mobile-1X.png'
import BGImg from '../../assets/images/home-bg-img-2X-test.webp'
import BGImgFB from '../../assets/images/home-bg-img-2X-test.png'
import BGImgMobile from '../../assets/images/home-bg-img-mobile-2X-test.webp'
import BGImgMobileFB from '../../assets/images/home-bg-img-mobile-2X-test.png'



const HomeContent = (props) => {
  const [width, handleWidth] = useState(0);
  const state = useContext(AppContext);

  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    HCPModalVisible,
    handleHCPModalVisible,
    setReferences
  } = state;

  const {
    HomeRectangleCardData2
  } = RectangleCardData;

  const {
    IconCalloutCardData1,
    IconCalloutCardData2,
    IconCalloutCardData3
  } = IconCalloutCardData;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('home');
    setReferences([1, 2]);

    if (document.getElementsByTagName('body')) {
      if (HCPModalVisible) {
        document.body.classList.add('scroll-none');
      } else {
        document.body.classList.remove('scroll-none');
      }
    }

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
        id='hcp-modal-container'
        onClick={() => this.handleHCPModalVisible()}
      >
      </section>
      <HCPModal
        handleHCPModalVisible={handleHCPModalVisible}
        HCPModalVisible={HCPModalVisible}
      />
      {/* 
        Do to the fact that there is a popup when the site starts, I'm using a 1X image, at the lowest possible quality to show when the popup
        is present and then showing the real image when the popup is not present.  This hacks around ghe LCP factor, in order to achieve
        better optimization for the site.  Increases performance score by 4-8 percent.
      */}
      <section
        className='home-container'
        style={
          width > 991 && !HCPModalVisible ?
          {backgroundImage: `url(${BGImg}), url(${BGImgFB})`} :
          width < 991 && !HCPModalVisible ?
          {backgroundImage: `url(${BGImgMobile}), url(${BGImgMobileFB})`} :
          width > 991 && HCPModalVisible ?
          {backgroundImage: `url(${HolderBGImg}), url(${HolderBGImgFB})`} :
          {backgroundImage: `url(${HolderBGImgMobile}), url(${HolderBGImgMobileFB})`}
        }
        title='Myfembree® logo watermark'
      >
        {/* 
          This image, with a style of display: none, helps to optimize the very taxing background image for the home page.  Background images
          have a low priority when loading, so this image hacks around the issue, making sure the image is already loaded, before the background
          image loading is taken into consideration.  Furthermore, if you check the Gatsby Helmet Component, within ../Layout.jsx, you can see
          there is a preload link for this image as well.  Ensuring that the image is preloaded, but only if we are currently on the homepage.
          No need to preload this image on any other page, as it is not used and would slow down the site.
        */}
        {/* <img src={width > 991 ? BGImg : BGImgMobile} style={{display: 'none'}} /> */}
        <img src={width > 991 ? HolderBGImg : HolderBGImgFB} style={{display: 'none'}} />
        <Container>
          <Row>
            <Col lg={{span: 6, offset: 1}} xs={{span: 9, offset: 0}}>
              <h2 className='gradient-title'>
                The only FDA-approved once-daily pill to reduce heavy menstrual bleeding associated with
                uterine fibroids in premenopausal women
              </h2>
              <p className='home-lower-title'>
                The recommended total duration of treatment is 24 months.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 3, offset: 1}} xs={{span: 10, offset: 0}}>
              <div className='cta-btn-container'>
                <Link
                  to='/efficacy-data/'
                >
                  <button className='cta-btn pink-btn'>
                    See Efficacy Data
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='home-callout-container'>
        <Container>
          <Row>
            <Col>
              <h2 className='blue'>
                3 reasons to consider Myfembree
              </h2>
            </Col>
          </Row>
          <Row>
            <IconCalloutCard data={IconCalloutCardData1} />
            <IconCalloutCard data={IconCalloutCardData2} />
            <IconCalloutCard data={IconCalloutCardData3} />
          </Row>
          <Row>
            <Col>
              <h6>
                *A response was defined as menstrual blood loss volume &#60;80 mL <strong><em>and</em></strong>&nbsp; ≥50%
                reduction in menstrual blood loss volume from baseline over the last 35 days of treatment.
              </h6>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='home-green-card-container'>
        <Container>
          <Row>
            <RectangleCard data={HomeRectangleCardData2} />
          </Row>
        </Container>
      </section>
      <section className='home-purple-card-container'>
        <Container>
          <Row>
            <Col lg={{span: 10, offset: 1}}>
              <h2 className='white'>
                Myfembree is a combination therapy that includes relugolix (a gonadotropin-releasing
                hormone receptor antagonist), estradiol, and norethindrone acetate, and is the first
                of its class to be approved in a single, once-daily pill.<sup>1</sup>
              </h2>
              <Link to='/once-daily-dosing/'>
                <h3 className='white'>
                  Discover the convenience of once-daily dosing with Myfembree
                </h3>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='home-footnote-container'>
        <Container>
          <Row>
            <Col>
              <div>
                <h6>
                  FDA = US Food and Drug Administration.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default HomeContent