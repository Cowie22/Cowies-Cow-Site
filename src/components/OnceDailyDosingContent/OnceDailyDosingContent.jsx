import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'

import HeaderHero from '../HeaderHero/HeaderHero'
import PillBottleCallout from '../PillBottleCallout/PillBottleCallout'
import ListIconCard from '../ListIconCard/ListIconCard'
import ListIconCardData from '../ListIconCard/ListIconCardData.js'

const OnceDailyDosingContent = (props) => {

  const [width, handleWidth] = useState(0);

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

  return (
    <Layout
      canonicalURL=''
      title=''
      pageTitle=''
      description=''
    >
      <HeaderHero
        title={<>One small pill. Once a day.<sup>1</sup></>}
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
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default OnceDailyDosingContent