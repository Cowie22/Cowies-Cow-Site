import React, { useState, useEffect, useContext, useRef } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
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
import HolderBGImg from '../assets/images/home-bg-img-1X.webp'
import HolderBGImgMobile from '../assets/images/home-bg-img-mobile-1X.webp'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../pages/index.scss'

const Layout = ({ children, title, pageTitle, description, canonicalURL, preLoadImg }) => {
  const [hovered, handleHovered] = useState(false);
  const [yDirection, handleYDirection] = useState(0);
  const [width, handleWidth] = useState(0);
  const state = useContext(AppContext);
  const { references, handleCurrentTopTab, currentTopTab, currentPage } = state;

  const mounted = useRef(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions, { passive: true });
    if (!mounted.current) {
      handleURLTab();
    } else {
      handleURLTab();
    }
    return function cleanUp() {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, [])

  const handleScroll = () => {
    let currentY = window.pageYOffset;
    handleYDirection(currentY);
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth);
  }

  // Below function will handle tabs for the entire site, for when a third party want to drive to a specific tab
  // On the page.  This will be done when a URL has a hashtag at the end.  If the URL contains a hash tag, the nested
  // Function handleHash will determine if currentTopTab (located in /context/state.js or the global state for the site)
  // Should be updated or not.

  const handleURLTab = () => {
    if (typeof window !== "undefined") {
      let path = window.location.href;
      let hash = path.split('#')[1];
      const handleHash = () => {
        hash === 'trial-design' || hash === 'mbl-response'
        || hash === 'adverse-events' || hash === 'overview' ?
        handleCurrentTopTab(1)
        :
        hash === 'demographics' || hash === 'mbl-volume-reduction'
        || hash === 'bone-mineral-density' || hash === 'enrollment' ?
        handleCurrentTopTab(2)
        :
        hash === 'amenorrhea-and-hemoglobin' || hash === 'menses-return'
        || hash === 'copay-program' ?
        handleCurrentTopTab(3)
        :
        null;
      }
      if (hash) {
        setTimeout(() => {
          handleHash()
        }, 500)
      }
    }
  }

  return (
    <div className='layout'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta name='title' content={pageTitle} />
        <meta name='description' content={description} />
        <link rel='canonical' href={canonicalURL} />
        <meta name='url' content={canonicalURL} />
        <html lang='en' />
        <link rel='preload' as='image' href={width > 991 && preLoadImg ? HolderBGImg : width <= 991 && preLoadImg ? HolderBGImgMobile : ''} />
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
        <img src={hovered ? backToTopHovered : backToTop} alt='' loading='lazy' />
      </div>
      <Isi />
      <References references={references} />
      <Footer />
      <ExitRamp />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
