import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

class ResourcesContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    const { handleCurrentPage, handleActiveHeaderDropdown } = this.props;
    // handleActiveHeaderDropdown('');
    handleCurrentPage('resources');
  }

  render() {
    return (
      <Layout>
        <section className='resources-container'>
          <Container>
            <Row>
              <Col>
                <h1 className='white'>
                  Access & Resources
                </h1>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='resources-content-container'>
          <Container>
            <Row>
              <Col lg={11}>
                <h2 className='blue' id='resource-access-content'>
                  Access information
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus purus eu nibh gravida,
                  sit amet ultrices lacus malesuada. Fusce nulla libero, sagittis eu quam vitae, fringilla egestas
                  mi. Nam ac risus ac neque elementum eleifend. Ut viverra ornare magna vitae consequat. Nullam
                  elementum aliquet quam ac consequat. Praesent mi ligula, consectetur vitae mi vitae, ultricies
                  eleifend nisi. Vestibulum suscipit eros eget erat porta, ac dapibus massa convallis. Suspendisse
                  potenti. Cras vitae ligula at libero auctor porta ac id urna.
                </p>
                <h2 className='blue' id='resource-patient-content'>
                  Patient Support Program
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus purus eu nibh gravida,
                  sit amet ultrices lacus malesuada. Fusce nulla libero, sagittis eu quam vitae, fringilla egestas
                  mi. Nam ac risus ac neque elementum eleifend. Ut viverra ornare magna vitae consequat. Nullam
                  elementum aliquet quam ac consequat. Praesent mi ligula, consectetur vitae mi vitae, ultricies
                  eleifend nisi. Vestibulum suscipit eros eget erat porta, ac dapibus massa convallis. Suspendisse
                  potenti. Cras vitae ligula at libero auctor porta ac id urna.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default ResourcesContent