import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import HeaderHero from '../HeaderHero/HeaderHero'
import PurpleLineCallout from '../PurpleLineCallout/PurpleLineCallout'
import ListIconCard from '../ListIconCard/ListIconCard'
import ListIconCardData from '../ListIconCard/ListIconCardData.js'
import NextPageBtn from '../NextPageBtn/NextPageBtn'

import pillIcon from '../../assets/images/pill-icon.svg'
import womenOutlineIcon from '../../assets/images/women-outline-icon.svg'

const HowItWorksContent = (props) => {
  const state = useContext(AppContext);

  const {
    ListIconCardData9,
    ListIconCardData10,
  } = ListIconCardData;

  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    setReferences
  } = state;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('how-it-works');
    setReferences([1]);
    return function cleanUp() {
      handleActiveHeaderDropdown;
      handleCurrentPage;
      setReferences;
    }
  }, []);

  return (
    <Layout
      canonicalURL=''
      title=''
      pageTitle=''
      description=''
    >
      <HeaderHero
        title={
        <>
          Myfembree is a combination tablet consisting of relugolix, estradiol, and norethindrone acetate<sup>1</sup>
        </>
        }
        columns={{span: 12}}
      />
      <section className='how-it-works-container'>
        <Container>
          <Row>
            <Col lg={{span: 12}}>
              <PurpleLineCallout
                content={
                  <Row>
                    <Col lg={{span: 6, offset: 3}}>
                      <div className='purple-line-pill-content-container'>
                        <div className='pill-content-left-container'>
                          <h3 className='purple text-right'>
                            Relugolix
                          </h3>
                          <p className='text-right'>
                            Gonadotropin-releasing hormone (GnRH) receptor antagonism in the pituitary
                          </p>
                        </div>
                        <div className='pill-icon-container'>
                          <img src={pillIcon} alt='' loading='lazy' />
                        </div>
                        <div className='pill-content-right-container'>
                          <h3 className='purple text-left'>
                            E2/NETA
                          </h3>
                          <p className='text-left'>
                            Systemic absorption
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                }
              />
            </Col>
            <Col>
              <div className='footnote-container'>
                <h6 className='text-right'>
                  Pill not shown at actual size. Actual pill size: 7.94 mm in diameter.
                </h6>
              </div>
            </Col>
          </Row>
          <Row>
            <ListIconCard data={ListIconCardData9} />
            <Col lg={{span: 4}} className='d-none d-lg-block'>
              <div className='how-it-works-img-container'>
                <img src={womenOutlineIcon} alt='' loading='lazy' />
              </div>
            </Col>
            <ListIconCard data={ListIconCardData10} />
          </Row>
          <Row>
            <Col>
              <div className='lower-footnote-container'>
                <h6>
                  E2 = estradiol; GnRH = gonadotropin-releasing hormone; NETA = norethindrone acetate.
                </h6>
              </div>
            </Col>
          </Row>
          <Row>
            <NextPageBtn
              btnText='Explore Once-Daily Dosing With Myfembree'
              btnLink='once-daily-dosing/'
            />
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default HowItWorksContent