import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

const FourOhFourContent = props => {
  const state = useContext(AppContext)

  const { currentPage, handleCurrentPage, setReferences } = state

  useEffect(() => {
    handleCurrentPage('error')
    setReferences([])
  }, [])

  return (
    <Layout canonicalURL='' title='' pageTitle='' description=''>
      <section className='error-container'>
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 0 }}>
              <h2>Error 404</h2>
              <h3>The page may have been removed or updated.</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 3, offset: 0 }}>
              <div className='cta-btn-container'>
                <Link to={'/'}>
                  <button className='cta-btn dark-grey-btn'>
                    Go to homepage
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default FourOhFourContent
