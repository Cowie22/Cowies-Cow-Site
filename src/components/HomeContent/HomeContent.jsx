import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

import RegisterCard from '../RegisterCard/RegisterCard'

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    this.props.handleActiveHeaderNav('home');
  }

  render() {
    return (
      <Layout>
        <section className='home-container' title='Woman looking hopeful'>
          <Container>
            <Row>
              <Col lg={{span: 9, offset: 0}} xs={{span: 11, offset: 1}}>
                <h1 className='medium-green'>
                  NOW APPROVED
                </h1>
                <h2 className='home-sub-title white'>
                  One small pill, once a day: <br /> Myfembree for heavy menstrual bleeding
                  associated with uterine fibroids
                </h2>
                <h3 className='white'>
                  Set your calendars—available for use June 17, 2021
                </h3>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <div className='cta-btn-container home-btn-container'>
                  <a>
                    <button className='cta-btn white-btn'>
                      View Prescribing Information
                    </button>
                  </a>
                </div>
              </Col>
              <Col lg={3}>
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
              <Col>
                <h3 className='white'>
                  To find out more about the Myfembree Support Program, <br /> call 1-833-MYFEMBREE (1-833-693-3627),
                  8 AM-8 PM ET, Monday-Friday.
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
      </Layout>
    )
  }
}

export default HomeContent