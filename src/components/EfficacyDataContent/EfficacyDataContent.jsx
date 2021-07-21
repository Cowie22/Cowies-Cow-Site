import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import HeaderHero from '../HeaderHero/HeaderHero'
import SliderTabNav from '../SliderTabNav/SliderTabNav'

const EfficacyDataContent = (props) => {
  const [width, handleWidth] = useState(0);
  const state = useContext(AppContext);
  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    currentTopTab,
    handleCurrentTopTab
  } = state;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('efficacy-data');
    handleCurrentTopTab(1);

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
        title={
          <>
            Myfembree delivered clinically significant response rates and sustained reductions in
            menstrual bleeding<sup>1,2</sup>
          </>
        }
        columns={{span: 12}}
      />
      <section className='liberty-trials-container'>
        <Container>
          <SliderTabNav
            tab1='Response Rates'
            tab2='Reductions in Menstrual Bleeding'
            tab3='Amenorrhea & Hemoglobin'
          />
        </Container>
      </section>
    </Layout>
  )
}

export default EfficacyDataContent