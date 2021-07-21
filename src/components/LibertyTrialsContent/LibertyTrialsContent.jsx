import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'

import HeaderHero from '../HeaderHero/HeaderHero'
import SliderTabNav from '../SliderTabNav/SliderTabNav'

const LibertyTrialsContent = (props) => {
  const [width, handleWidth] = useState(0);
  const { currentPage, handleCurrentPage, handleActiveHeaderDropdown } = props;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('liberty-trials');

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
            The effect of Myfembree was consistent regardless of patient demographics and characteristics<sup>1</sup>
          </>
        }
        columns={{span: 11}}
      />
      <section className='liberty-trials-container'>
        <Container>
          <SliderTabNav
            tab1='Trial Design'
            tab2='Demographics & Criteria'
          />
        </Container>
      </section>
    </Layout>
  )
}

export default LibertyTrialsContent