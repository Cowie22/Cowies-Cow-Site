import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

import RegisterCard from '../RegisterCard/RegisterCard'
import RectangleCard from '../RectangleCard/RectangleCard'
import RectangleCardData from '../RectangleCard/RectangleCardData.js'
import HCPModal from '../HCPModal/HCPModal'

import pill from '../../assets/images/pill-icon.svg'

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    const { handleCurrentPage, HCPModalVisible } = this.props;

    handleCurrentPage('home');

    if (document.getElementsByTagName('body')) {
      if (HCPModalVisible) {
        document.body.classList.add('scroll-none');
      } else {
        document.body.classList.remove('scroll-none');
      }
    }
  }

  render() {
    const { HomeRectangleCardData1, HomeRectangleCardData2 } = RectangleCardData;
    const { HCPModalVisible, handleHCPModalVisible } = this.props;
    return (
      <Layout>
        <section
          id='hcp-modal-container'
          onClick={() => this.handleHCPModalVisible()}
        >
        </section>
        <HCPModal
          handleHCPModalVisible={handleHCPModalVisible}
          HCPModalVisible={HCPModalVisible}
        />
        <section className='home-container'>
          <Container>
            <Row>
              <Col lg={{span: 9, offset: 0}} xs={{span: 12, offset: 0}}>
                <h1 className='top-title'>
                  NOW AVAILABLE
                </h1>
              </Col>
            </Row>
            <Row>
              <Col lg={{span: 9, offset: 0}} xs={{span: 12, offset: 0}}>
                <div className='title-pill-container'>
                  <img src={pill} />
                  <h1 className='white'>
                    One small pill, once a day:
                  </h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={{span: 8, offset: 0}} xs={{span: 9, offset: 0}}>
                <h1 className='home-sub-title white'>
                  Myfembree for heavy menstrual bleeding associated with uterine fibroids in premenopausal women
                </h1>
              </Col>
            </Row>
            <Row>
              <Col xl={3} lg={4} xs={10}>
                <div className='cta-btn-container home-btn-container'>
                  <a>
                    <button className='cta-btn white-btn-hover-clear'>
                      View Prescribing Information
                    </button>
                  </a>
                </div>
              </Col>
              <Col xl={3} lg={4} xs={10}>
                <div className='cta-btn-container home-btn-container'>
                  <a>
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
              <RectangleCard data={HomeRectangleCardData1} />
              <RectangleCard data={HomeRectangleCardData2} />
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default HomeContent