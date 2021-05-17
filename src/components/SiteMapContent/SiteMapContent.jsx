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
                <ul className='purple-ul'>
                  <li>
                    <Link to='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to='/myfembree-support-program/'>
                      Financial Support
                    </Link>
                    <ul className='purple-ul-dashed'>
                      <li>
                        <Link to='/myfembree-support-program/'>
                          Myfembree Support Program
                        </Link>
                        <ul className='purple-ul-square'>
                          <li>
                            <Link to='/myfembree-support-program/#financial-assistance'>
                              Financial Assistance
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