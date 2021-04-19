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
        <section class='home-container'>
          <Container>
            <Row>
              <Col>
                <h1>Home Page</h1>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default HomeContent