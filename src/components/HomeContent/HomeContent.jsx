import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

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
        <section className='home-container'>
          <Container>
            <Row>
              <Col lg={{span: 5, offset: 1}}>
                <h2 className='home-title'>
                  COMING SOON
                </h2>
              </Col>
              <Col lg={{span: 6, offset: 0}}>
                <h1 className='white'>
                  Myfembree–a new treatment for symptoms of uterine fibroids
                </h1>
                <div className='cta-btn-container'>
                  <a>
                    <button className='cta-btn transparent-btn'>
                      Learn More
                    </button>
                  </a>
                </div>
                <h3 className='home-sub-title white'>
                  Talk to your doctor today to learn more
                </h3>
                <p className='white'>
                  Myfembree is a prescription medicine that is used in the treatment of heavy menstrual
                  bleeding associated with uterine fibroids.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default HomeContent