import React, { useState, useEffect, useContext, useRef } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'

import AppProvider, { AppContext } from '../contexts/state'

import Header from './header/Header'
import References from './References/References'
import Footer from './footer/Footer'
import ExitRamp from '../components/exitramp/ExitRamp'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../pages/index.scss'

const Layout = ({ children, title, pageTitle, description, canonicalURL, preLoadImg }) => {
  const [hovered, handleHovered] = useState(false);
  const [yDirection, handleYDirection] = useState(0);
  const [width, handleWidth] = useState(0);
  const state = useContext(AppContext);
  const { references, currentPage } = state;

  const mounted = useRef(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions, { passive: true });

    return function cleanUp() {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, [])

  const handleScroll = () => {
    let currentY = window.pageYOffset;
    handleYDirection(currentY);
  }

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth);
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
      </Helmet>

      <Header />
      <div className='main'>{children}</div>
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
