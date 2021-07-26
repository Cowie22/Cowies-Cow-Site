import React, { useState, useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StickyContainer } from 'react-sticky'
import { Container, Row, Col } from 'react-bootstrap'

import AppProvider, { AppContext } from '../contexts/state'

import Header from './header/Header'
import UtilityNav from './header/UtilityNav'
import Isi from './isi/Isi'
import References from './References/References'
import Footer from './footer/Footer'
import ExitRamp from '../components/exitramp/ExitRamp'
import Cookie from '../components/Cookie/Cookie'

import backToTop from '../assets/images/back-to-top.svg'
import backToTopHovered from '../assets/images/back-to-top-hovered.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../pages/index.scss'

const Layout = ({ children, title, pageTitle, description, canonicalURL }) => {
  const [hovered, handleHovered] = useState(false);
  const [yDirection, handleYDirection] = useState(0);
  const state = useContext(AppContext);
  const { references } = state;

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      let currentY = window.pageYOffset;
      handleYDirection(currentY);
    })
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    handleScroll();
  })

  return (
    <div className='layout'>
      <StickyContainer>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{title}</title>
          <meta name='title' content={pageTitle} />
          <meta name='description' content={description} />
          <link rel='canonical' href={canonicalURL} />
          <meta name='url' content={canonicalURL} />
          <html lang='en' />
        </Helmet>
        <Cookie />
        <UtilityNav />

        <Header />
        <div className='main'>{children}</div>
        <div
          className='back-to-top-container'
          style={yDirection > 0 ? {display: 'inline'} : {display: 'none'}}
          onMouseEnter={() => handleHovered(true)}
          onMouseLeave={() => handleHovered(false)}
          onClick={() => scrollToTop()}
        >
          <img src={hovered ? backToTopHovered : backToTop} alt='' />
        </div>
        <Isi />
        <References references={references} />
        <Footer />
      </StickyContainer>
      <ExitRamp />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
