import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

class SafetyContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    this.props.handleActiveHeaderNav('safety');
  }

  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <h1>Safety Page</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default SafetyContent