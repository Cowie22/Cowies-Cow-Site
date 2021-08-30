import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import HeaderHero from '../HeaderHero/HeaderHero'


const SiteMapContent = (props) => {
  const state = useContext(AppContext);

  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    handleCurrentTopTab,
    setReferences
  } = state;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('sitemap');
    setReferences([]);
  }, []);

  return (
    <Layout>
      <HeaderHero
        title={
          <>
            Site Map
          </>
        }
        columns={{span: 12}}
      />
      {/* <section className='sitemap-container'>
        <Container>
          <Row>
            <Col lg={{span: 12}}>
              <h1 className='white'>
                Site Map
              </h1>
            </Col>
          </Row>
        </Container>
      </section> */}
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
                  <Link to='/once-daily-dosing/'>
                    Once-Daily Dosing
                  </Link>
                </li>
                <li>
                  <Link to='/liberty-trials/'>
                    Efficacy
                  </Link>
                  <ul className='purple-ul-dashed sitemap-ul'>
                    <li>
                      <Link to='/liberty-trials/'>
                        LIBERTY Trials
                      </Link>
                    </li>
                    <li>
                      <Link to='/efficacy-data/'>
                        Efficacy Data
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/safety-profile/'>
                    Safety
                  </Link>
                </li>
                <li>
                  <Link to='/how-it-works/'>
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to='/myfembree-support-program/'>
                    Support & Savings
                  </Link>
                  <ul className='purple-ul-dashed sitemap-ul'>
                    <li>
                      <Link to='/myfembree-support-program/'>
                        Myfembree Support Program
                      </Link>
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

export default SiteMapContent