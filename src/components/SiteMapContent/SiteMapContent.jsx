import React from 'react'
import Layout from '../Layout'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import AppProvider, { AppContext } from '../../contexts/state'

class SiteMapContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    const { handleCurrentPage, handleActiveHeaderDropdown } = this.props;
    handleActiveHeaderDropdown('');
    handleCurrentPage('sitemap');
  }

  render() {
    return (
      <Layout>
        <section className='sitemap-container'>
          <Container>
            <Row>
              <Col lg={{span: 12}}>
                <h1 className='white'>
                  Site Map
                </h1>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='sitemap-list-container'>
          <Container>
            <Row>
              <Col lg={{span: 12}}>
                <ul className='purple-ul sitemap-ul'>
                  <li>
                    <Link to='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/myfembree-support-program/'>
                      Financial Support
                    </Link>
                    <ul className='purple-ul-dashed sitemap-ul'>
                      <li>
                        <Link to='/myfembree-support-program/'>
                          Myfembree Support Program
                        </Link>
                        <ul className='purple-ul-square sitemap-ul'>
                          <li>
                            <Link to='/myfembree-support-program/#financial-assistance'>
                              Financial Assistance
                            </Link>
                          </li>
                          <li>
                            <Link to='/myfembree-support-program/#bridge-program'>
                              Bridge Program
                            </Link>
                          </li>
                          <li>
                            <Link to='/myfembree-support-program/#quick-start-program'>
                              Quick Start Program
                            </Link>
                          </li>
                          <li>
                            <Link to='/myfembree-support-program/#patient-assistance-program'>
                              Patient Assistance Program
                            </Link>
                          </li>
                          <li>
                            <Link to='/myfembree-support-program/'>
                              Patient e-Consent
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to='/resources/'>
                          Resources
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default SiteMapContent