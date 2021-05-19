import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const FourOhFour = (props) => {
  return (
    <Layout>
      <section className='four-oh-four-container'>
        <Container>
          <Row>
            <Col lg={{span: 6, offset: 3}}>
              <h2 className='blue text-center'>
                Page not found
              </h2>
              <p className='text-center'>
                The page you are looking for either doesn’t exist, or some other error occurred. Please
                check the URL or go to the <Link to='/'>homepage</Link>.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default FourOhFour