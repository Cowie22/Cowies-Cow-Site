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

import BGImg from '../../assets/images/home-bg-img.webp'
import BGImgFB from '../../assets/images/home-bg-img.png'
import BGImgMobile from '../../assets/images/home-bg-img-mobile.webp'
import BGImgMobileFB from '../../assets/images/home-bg-img-mobile.png'


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
    HomeRectangleCardData1,
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
                3 reasons to explore Myfembree
              </h2>
            </Col>
          </Row>
          <Row>
            <IconCalloutCard data={IconCalloutCardData1} />
            <IconCalloutCard data={IconCalloutCardData2} />
            <IconCalloutCard data={IconCalloutCardData3} />
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
                Myfembree is a combination therapy that includes a gonadotropin-releasing hormone receptor
                antagonist, estradiol, and norethindrone acetate, and is the first of its class to be
                approved in a single, once-daily pill.<sup>1</sup>
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
    </Layout>
  )
}

export default HomeContent