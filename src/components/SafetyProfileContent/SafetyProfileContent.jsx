import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'

const SafetyProfileContent = (props) => {

  const [width, handleWidth] = useState(0);
  const { currentPage, handleCurrentPage, handleActiveHeaderDropdown } = props;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('safety');

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, []);

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth);
  }

  return (
    <Layout
      canonicalURL=''
      title=''
      pageTitle=''
      description=''
    >
      <section className='safety-container'>
        <Container>
          <Row>
            <Col lg={{span: 9, offset: 0}} xs={{span: 12, offset: 0}}>
              <h1 className='top-title'>
                NOW AVAILABLE
              </h1>
              <p>
                Myfembree® is now available at retail or mail-order pharmacies.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xl={{span: 7, offset: 0}} lg={{span: 8, offset: 0}}>
              <div>
                <h1>
                  The Myfembree<sup>®</sup> Support Program
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 8, offset: 0}} xs={{span: 11, offset: 0}}>
              <h2>
                For your patients who have been prescribed Myfembree, support starts with enrollment into
                the Myfembree Support Program
              </h2>
              <p>
                The Myfembree Support Program is designed to help your eligible patients throughout their treatment
                journey. We offer financial assistance options, dedicated support staff, and other helpful
                resources once eligible patients have been prescribed Myfembree.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default SafetyProfileContent