import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'

import HeaderHero from '../HeaderHero/HeaderHero'
import PillBottleCallout from '../PillBottleCallout/PillBottleCallout'

const OnceDailyDosingContent = (props) => {

  const [width, handleWidth] = useState(0);
  const { currentPage, handleCurrentPage, handleActiveHeaderDropdown } = props;

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
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default OnceDailyDosingContent