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
      </Layout>
    )
  }
}

export default ResourcesContent