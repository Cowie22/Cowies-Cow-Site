import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

class DosingContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    this.props.handleActiveHeaderNav('dosing');
  }

  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <h1>Dosing Page</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default DosingContent