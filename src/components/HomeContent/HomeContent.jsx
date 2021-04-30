import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

import RegisterCard from '../RegisterCard/RegisterCard'
import RectangleCard from '../RectangleCard/RectangleCard'
import RectangleCardData from '../RectangleCard/RectangleCardData.js'
import HCPModal from '../HCPModal/HCPModal'

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    const { handleActiveHeaderNav, HCPModalVisible } = this.props;

    handleActiveHeaderNav('home');

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
        <section className='home-container' title='Woman looking hopeful'>
          <Container>
            <Row>
              <Col lg={{span: 9, offset: 0}} xs={{span: 12, offset: 0}}>
                <h1 className='medium-green top-title'>
                  NOW APPROVED
                </h1>
              </Col>
            </Row>
            <Row>
              <Col lg={{span: 9, offset: 0}} xs={{span: 11, offset: 0}}>
                <h1 className='home-sub-title white'>
                  One small pill, once a day: <br /> Myfembree for heavy menstrual bleeding
                  associated with uterine fibroids
                </h1>
                <h3 className='white'>
                  Set your calendars—available for use June 17, 2021
                </h3>
              </Col>
            </Row>
            <Row>
              <Col xl={3} lg={4} xs={10}>
                <div className='cta-btn-container home-btn-container'>
                  <a>
                    <button className='cta-btn white-btn'>
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
                  To find out more about the Myfembree Support Program, <br /> call {' '}
                  <a href='tel:1-833-693-3627' className='call-now-link'>1-833-MYFEMBREE (1-833-693-3627)</a>
                  {' '} 8 AM-8 PM ET, Monday-Friday.
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