import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

class MyfembreeSupportProgramContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    this.props.handleActiveHeaderDropdown('support');
  }

  render() {
    return (
      <Layout>
        <section className='support-container'>
          <Container>
            <Row>
              <Col lg={{span: 9, offset: 0}} xs={{span: 12, offset: 0}}>
                <h1 className='top-title'>
                  NOW AVAILABLE
                </h1>
                <p className='white'>
                  Myfembree® is now available at retail or mail-order pharmacies.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={{span: 7, offset: 0}}>
                <div className='support-header-card-callout'>
                  <h1>
                    The Myfembree<sup>®</sup> Support Program
                  </h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={{span: 8, offset: 0}} xs={{span: 11, offset: 0}}>
                <h2 className='support-sub-title white'>
                  For your patients who have been prescribed Myfembree, support starts with enrollment into
                  the Myfembree Support Program
                </h2>
                <p className='white'>
                  The Myfembree Support Program is designed to help your patients throughout their treatment
                  journey. We offer financial assistance options, dedicated support staff, and other helpful
                  resources once patients have been prescribed Myfembree.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default MyfembreeSupportProgramContent