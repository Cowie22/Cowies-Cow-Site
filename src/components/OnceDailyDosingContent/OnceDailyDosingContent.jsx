import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import HeaderHero from '../HeaderHero/HeaderHero'
import PillBottleCallout from '../PillBottleCallout/PillBottleCallout'
import ListIconCard from '../ListIconCard/ListIconCard'
import ListIconCardData from '../ListIconCard/ListIconCardData.js'
import PurpleLineCallout from '../PurpleLineCallout/PurpleLineCallout'
import NextPageBtn from '../NextPageBtn/NextPageBtn'

const OnceDailyDosingContent = (props) => {
  const state = useContext(AppContext);

  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    setReferences
  } = state;

  const {
    ListIconCardData4,
    ListIconCardData5,
    ListIconCardData6,
  } = ListIconCardData;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('dosing');
    setReferences([1]);
  }, []);

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
            <NextPageBtn
              btnText='See Response Rates With Myfembree'
              btnLink='efficacy-data/'
            />
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default OnceDailyDosingContent