import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'


const SiteMapContent = (props) => {

  const { currentPage, handleCurrentPage, handleActiveHeaderDropdown } = props;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('sitemap');
  }, []);

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
                    Safety Profile
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
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://portal.trialcard.com/myovant/myfembree/consent/'
                          >
                            Patient e-Consent
                          </a>
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

export default SiteMapContent