import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'

import HeaderHero from '../HeaderHero/HeaderHero'
import PillBottleCallout from '../PillBottleCallout/PillBottleCallout'
import ListIconCard from '../ListIconCard/ListIconCard'
import ListIconCardData from '../ListIconCard/ListIconCardData.js'
import PurpleLineCallout from '../PurpleLineCallout/PurpleLineCallout'

const OnceDailyDosingContent = (props) => {

  const [width, handleWidth] = useState(0);
  const [hovered, handleHovered] = useState(false);

  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown
  } = props;

  const {
    ListIconCardData4,
    ListIconCardData5,
    ListIconCardData6,
  } = ListIconCardData;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('dosing');

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, []);

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth);
  }

  const updateHovered = (bool) => {
    handleHovered(bool)
  }

  return (
    <Layout
      canonicalURL=''
      title=''
      pageTitle=''
      description=''
    >
      <HeaderHero
        title={<>One small pill. Once a day.<sup>1</sup></>}
        columns={{span: 5}}
      />
      <section className='dosing-container'>
        <Container>
          <Row>
            <PillBottleCallout />
            <div className='dosing-icon-card-container'>
              <ListIconCard data={ListIconCardData4} />
              <ListIconCard data={ListIconCardData5} />
              <ListIconCard data={ListIconCardData6} />
            </div>
            <Col lg={{span: 12}}>
              <PurpleLineCallout
                content={
                  <Row>
                    <Col lg={{span: 6}}>
                      <p className='purple extra-bold text-left'>
                        Drug interactions<sup>1</sup>
                      </p>
                      <ul className='purple-ul text-left'>
                        <li>
                          Avoid use of Myfembree with oral P-gp inhibitors; if concomitant use of oral
                          P-gp inhibitors is unavoidable, take Myfembree at least 6 hours before taking
                          the P-gp inhibitor
                        </li>
                        <li>
                          Avoid use with combined P-gp and strong CYP3A inducers, as the exposure of
                          the components of Myfembree may be decreased
                        </li>
                      </ul>
                    </Col>
                    <Col lg={{span: 6}}>
                      <p className='purple extra-bold text-left'>
                        Lactation<sup>1</sup>
                      </p>
                      <ul className='purple-ul text-left'>
                        <li>
                          Advise women not to breastfeed while taking Myfembree
                        </li>
                      </ul>
                    </Col>
                  </Row>
                }
              />
            </Col>
            <Col>
              <div className='footnote-container'>
                <h6>
                  CYP3A = cytochrome P450 3A4; P-gp = P-glycoprotein.
                </h6>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 4, offset: 8}}>
              <div
                className='cta-btn-container dosing-btn-container'
                onMouseEnter={() => {
                  updateHovered(true)
                }}
                onMouseLeave={() => {
                  updateHovered(false)
                }}
              >
                <Link to='/efficacy-data/'>
                  <button className='cta-btn pink-btn'>
                    See Response Rates With Myfembree
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        className={hovered ? 'btn-arrow active-arrow' : 'btn-arrow'}
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.146446 0.646447C0.341708 0.451184 0.658291 0.451184 0.853553 0.646447L6.35355 6.14645C6.44732 6.24022 6.5 6.36739 6.5 6.5C6.5 6.63261 6.44732 6.75979 6.35355 6.85355L0.853553 12.3536C0.658291 12.5488 0.341708 12.5488 0.146446 12.3536C-0.0488162 12.1583 -0.0488162 11.8417 0.146446 11.6464L5.29289 6.5L0.146446 1.35355C-0.0488162 1.15829 -0.0488162 0.841709 0.146446 0.646447Z"
                      />
                    </svg>
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

export default OnceDailyDosingContent