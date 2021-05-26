import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

import RegisterCard from '../RegisterCard/RegisterCard'
import RectangleCard from '../RectangleCard/RectangleCard'
import RectangleCardData from '../RectangleCard/RectangleCardData.js'
import HCPModal from '../HCPModal/HCPModal'

import BGImg from '../../assets/images/home-bg-img.webp'
import BGImgFB from '../../assets/images/home-bg-img.png'
import BGImgMobile from '../../assets/images/home-bg-img-mobile.webp'
import BGImgMobileFB from '../../assets/images/home-bg-img-mobile.png'
import pill from '../../assets/images/pill-icon.svg'

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    }
  }

  componentDidMount = () => {
    const { handleCurrentPage, HCPModalVisible } = this.props;

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    handleCurrentPage('home');

    if (document.getElementsByTagName('body')) {
      if (HCPModalVisible) {
        document.body.classList.add('scroll-none');
      } else {
        document.body.classList.remove('scroll-none');
      }
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
    })
  }

  render() {
    const { HomeRectangleCardData1, HomeRectangleCardData2 } = RectangleCardData;
    const { HCPModalVisible, handleHCPModalVisible } = this.props;
    const { width } = this.state;
    return (
      <Layout
        canonicalURL='https://www.MyfembreeHCP.com'
        title='Safety Info | Myfembree® (relugolix, estradiol, and norethindrone acetate) tablets | HCP Website'
        pageTitle='Myfembree® Now Approved Homepage for US HCPs'
        description='Myfembree® (relugolix, estradiol, and norethindrone acetate) tablets for oral use: Safety Information, full Prescribing Information including BOXED WARNING.'
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
              <Col lg={{span: 9, offset: 0}} xs={{span: 12, offset: 0}}>
                <h1 className='top-title'>
                  NOW AVAILABLE
                </h1>
              </Col>
            </Row>
            <Row>
              <Col lg={{span: 8, offset: 0}} xs={{span: 11, offset: 0}}>
                <h1 className='home-sub-title white'>
                  One small pill, once a day: Myfembree for heavy menstrual bleeding
                  associated with uterine fibroids in premenopausal women
                </h1>
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
                  <a href='https://www.google.com/' target='_blank'>
                    <button className='cta-btn white-btn-hover-clear'>
                      View Prescribing Information
                    </button>
                  </a>
                </div>
              </Col>
              <Col xl={3} lg={4} xs={10}>
                <div className='cta-btn-container home-btn-container'>
                  <a href='https://www.google.com/' target='_blank'>
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
}

export default HomeContent