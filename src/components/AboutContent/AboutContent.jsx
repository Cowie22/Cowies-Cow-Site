import React, { useState, useEffect, useContext, useRef, useCallback  } from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'
import { useInView } from 'react-intersection-observer'

import CircleTypeCard from '../CircleTypeCard/CircleTypeCard'
import CircleTypeCardData from '../CircleTypeCard/CircleTypeCardData.js'
import DemographicsCards from '../DemographicsCards/DemographicsCards'
import RiskIconCard from '../RiskIconCard/RiskIconCard'
import RiskIconCardData from '../RiskIconCard/RiskIconCardData.js'

import BGImg from '../../assets/images/pages/about/about-bg-img-2X.webp'
import BGImgFB from '../../assets/images/pages/about/about-bg-img-2X.png'
import BGImgMobile from '../../assets/images/pages/about/about-bg-img-2X-mobile.webp'
import BGImgMobileFB from '../../assets/images/pages/about/about-bg-img-2X-mobile.png'
import DiagnosisBGImg from '../../assets/images/pages/about/diagnosis-bg-img-2X.webp'
import DiagnosisBGImgFB from '../../assets/images/pages/about/diagnosis-bg-img-2X.png'
import DiagnosisBGImgMobile from '../../assets/images/pages/about/diagnosis-bg-img-2X-mobile.webp'
import DiagnosisBGImgMobileFB from '../../assets/images/pages/about/diagnosis-bg-img-2X-mobile.png'
import downArrow from '../../assets/images/global/down-arrow-yellow.svg'


const AboutContent = (props) => {
  const [width, handleWidth] = useState(0);
  const state = useContext(AppContext);

  const {
    currentPage,
    handleCurrentPage,
    setReferences
  } = state;

  const circleRefAbout = useRef()
  const [circleViewAbout, circleInViewAbout] = useInView({triggerOnce: true});
  const setRefs = useCallback(
    (node) => {
      circleRefAbout.current = node;
      circleViewAbout(node);
    },
    [circleViewAbout],
  );

  const circleRefAbout2 = useRef()
  const [circleViewAbout2, circleInViewAbout2] = useInView({triggerOnce: true});
  const setRefs2 = useCallback(
    (node) => {
      circleRefAbout2.current = node;
      circleViewAbout2(node);
    },
    [circleViewAbout2],
  );

  const circleRefAbout3 = useRef()
  const [circleViewAbout3, circleInViewAbout3] = useInView({triggerOnce: true});
  const setRefs3 = useCallback(
    (node) => {
      circleRefAbout3.current = node;
      circleViewAbout3(node);
    },
    [circleViewAbout3],
  );

  const raceCardRef = useRef()
  const [raceCardView, raceCardInView] = useInView({triggerOnce: true});
  const setRaceCardRef = useCallback(
    (node) => {
      raceCardRef.current = node;
      raceCardView(node);
    },
    [raceCardView],
  );

  const boxRef = useRef()
  const [boxView, boxInView] = useInView({triggerOnce: true});
  const setBoxRef = useCallback(
    (node) => {
      boxRef.current = node;
      boxView(node);
    },
    [boxView],
  );

  const boxRef2 = useRef()
  const [boxView2, boxInView2] = useInView({triggerOnce: true});
  const setBoxRef2 = useCallback(
    (node) => {
      boxRef2.current = node;
      boxView2(node);
    },
    [boxView2],
  );

  const boxRef3 = useRef()
  const [boxView3, boxInView3] = useInView({triggerOnce: true});
  const setBoxRef3 = useCallback(
    (node) => {
      boxRef3.current = node;
      boxView3(node);
    },
    [boxView3],
  );

  useEffect(() => {
    handleCurrentPage('about');
    setReferences([8, 9, 10, 11, 12, 13, 14, 15, 5, 16]);

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions, { passive: true });
    return function cleanUp() {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, []);

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth);
  }

  const {
    CircleTypeCardData1,
    CircleTypeCardData2,
    CircleTypeCardData3,
  } = CircleTypeCardData;

  const {
    RiskIconCardData1,
    RiskIconCardData2,
    RiskIconCardData3,
  } = RiskIconCardData;

  return (
    <Layout
      canonicalURL=''
      title=''
      pageTitle=''
      description=''
    >
      <section
        className='about-container'
        style={
          width > 991 ?
          {backgroundImage: `url(${BGImg}), url(${BGImgFB})`} :
          {backgroundImage: `url(${BGImgMobile}), url(${BGImgMobileFB})`}
        }
        title=''
      >
        <Container>
          <Row>
            <Col lg={{span: 6, offset: 0}}>
              <h3 className='white'>
                Nasopharyngeal carcinoma (NPC):
              </h3>
              <h1 className='white'>
                A RARE TUMOR ORIGINATING IN THE NASOPHARYNX<sup>1</sup>
              </h1>
              <p className='white'>
                The most common presenting symptoms of NPC are neck mass/swelling and enlarged lymph nodes.<sup>1</sup>
              </p>
              <p className='white home-lower-text'>
                Other common symptoms include headaches, bleeding in the mouth and nose, difficulty breathing through the nose, hearing difficulty, and vision problems.<sup>1</sup>
              </p>
              <img src={downArrow} alt='' />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about-circle-container'>
        <Container>
          <Row>
            <Col lg={{span: 12, offset: 0}}>
              <div className='about-circle-title-container'>
                <h2 className='white'>
                  Histological classifications of nasopharyngeal carcinoma
                </h2>
                <p className='white'>
                  The World Health Organization (WHO) categorizes NPC into three different histological subtypes.<sup>2</sup>
                </p>
              </div>
              <h3 className='white'>
                US incidence by WHO Type
              </h3>
              <Row>
                <CircleTypeCard
                  data={CircleTypeCardData1}
                  circleDelayClass='less-animation-delay-mobile'
                  image={
                    <svg width="188" height="188" viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg" ref={setRefs}>
                    <circle cx="94" cy="94" r="90" stroke="#997F8A" strokeWidth="2"/>
                    <path d="M94 4C143.706 4 184 44.2944 184 94" stroke="" strokeWidth="8" strokeLinecap="round" className={circleInViewAbout ? 'yellow-line' : ''} />
                    <path d="M59.9985 105.128C59.9692 105.187 59.9692 105.245 59.9985 105.304C60.0278 105.333 60.0718 105.348 60.1305 105.348H73.3745C73.6678 105.348 73.8145 105.495 73.8145 105.788V108.56C73.8145 108.853 73.6678 109 73.3745 109H54.9385C54.6452 109 54.4985 108.853 54.4985 108.56V105.876C54.4985 105.671 54.5718 105.495 54.7185 105.348C55.7158 104.204 58.0038 101.52 61.5825 97.296L64.6185 93.644C67.3465 90.388 68.7105 87.8653 68.7105 86.076C68.7105 84.6973 68.2412 83.5973 67.3025 82.776C66.3932 81.9253 65.1758 81.5 63.6505 81.5C62.1252 81.5 60.9078 81.9253 59.9985 82.776C59.0892 83.6267 58.6492 84.7413 58.6785 86.12V87.44C58.6785 87.7333 58.5318 87.88 58.2385 87.88H54.8505C54.5572 87.88 54.4105 87.7333 54.4105 87.44V85.548C54.4692 84.0227 54.8945 82.6733 55.6865 81.5C56.5078 80.3267 57.6078 79.432 58.9865 78.816C60.3652 78.1707 61.9198 77.848 63.6505 77.848C65.5278 77.848 67.1705 78.2 68.5785 78.904C69.9865 79.608 71.0718 80.576 71.8345 81.808C72.5972 83.04 72.9785 84.4333 72.9785 85.988C72.9785 88.4227 71.6585 91.2973 69.0185 94.612C67.8452 96.108 66.4518 97.7947 64.8385 99.672C63.2252 101.52 61.6118 103.339 59.9985 105.128ZM97.0881 95.36C97.4108 96.6507 97.5721 97.9853 97.5721 99.364C97.5721 100.743 97.3961 102.019 97.0441 103.192C96.4868 105.069 95.4161 106.565 93.8321 107.68C92.2774 108.765 90.4148 109.308 88.2441 109.308C86.1028 109.308 84.2694 108.78 82.7441 107.724C81.2188 106.668 80.1481 105.231 79.5321 103.412C79.2388 102.591 79.0774 101.872 79.0481 101.256V101.168C79.0481 100.933 79.1801 100.816 79.4441 100.816H82.9201C83.1841 100.816 83.3308 100.948 83.3601 101.212C83.3894 101.417 83.4628 101.725 83.5801 102.136C83.9028 103.221 84.4601 104.087 85.2521 104.732C86.0734 105.348 87.0561 105.656 88.2001 105.656C89.4028 105.656 90.4148 105.333 91.2361 104.688C92.0868 104.013 92.6588 103.089 92.9521 101.916C93.1574 101.3 93.2601 100.449 93.2601 99.364C93.2601 98.396 93.1721 97.5013 92.9961 96.68C92.7908 95.5653 92.2628 94.7147 91.4121 94.128C90.5908 93.512 89.5641 93.204 88.3321 93.204C87.1881 93.204 86.1614 93.468 85.2521 93.996C84.3428 94.4947 83.7561 95.1693 83.4921 96.02C83.4041 96.284 83.2428 96.416 83.0081 96.416H79.4881C79.1948 96.416 79.0481 96.2693 79.0481 95.976V78.64C79.0481 78.3467 79.1948 78.2 79.4881 78.2H95.9441C96.2374 78.2 96.3841 78.3467 96.3841 78.64V81.412C96.3841 81.7053 96.2374 81.852 95.9441 81.852H83.4481C83.3308 81.852 83.2721 81.9107 83.2721 82.028L83.2281 91.224C83.2281 91.4 83.3014 91.444 83.4481 91.356C84.1521 90.74 84.9588 90.2853 85.8681 89.992C86.8068 89.6693 87.7894 89.508 88.8161 89.508C90.8694 89.508 92.6294 90.0213 94.0961 91.048C95.5921 92.0747 96.5894 93.512 97.0881 95.36ZM110.175 90.828C108.973 90.828 107.858 90.5347 106.831 89.948C105.834 89.3613 105.042 88.5693 104.455 87.572C103.869 86.5747 103.575 85.4747 103.575 84.272C103.575 83.0987 103.869 82.0133 104.455 81.016C105.042 80.0187 105.834 79.2413 106.831 78.684C107.858 78.0973 108.973 77.804 110.175 77.804C111.349 77.804 112.434 78.0973 113.431 78.684C114.429 79.2707 115.221 80.0627 115.807 81.06C116.394 82.028 116.687 83.0987 116.687 84.272C116.687 85.4747 116.394 86.5747 115.807 87.572C115.221 88.5693 114.429 89.3613 113.431 89.948C112.434 90.5347 111.349 90.828 110.175 90.828ZM108.899 109C108.723 109 108.606 108.956 108.547 108.868C108.489 108.751 108.503 108.619 108.591 108.472L125.223 78.508C125.341 78.3027 125.517 78.2 125.751 78.2H127.907C128.083 78.2 128.201 78.2587 128.259 78.376C128.318 78.464 128.303 78.5813 128.215 78.728L111.583 108.692C111.495 108.897 111.319 109 111.055 109H108.899ZM110.175 88.232C111.261 88.232 112.17 87.8507 112.903 87.088C113.637 86.3253 114.003 85.3867 114.003 84.272C114.003 83.1867 113.622 82.2773 112.859 81.544C112.126 80.7813 111.231 80.4 110.175 80.4C109.09 80.4 108.166 80.7813 107.403 81.544C106.641 82.2773 106.259 83.1867 106.259 84.272C106.259 85.3867 106.641 86.3253 107.403 87.088C108.166 87.8507 109.09 88.232 110.175 88.232ZM126.939 109.396C125.737 109.396 124.622 109.103 123.595 108.516C122.598 107.929 121.806 107.137 121.219 106.14C120.633 105.143 120.339 104.057 120.339 102.884C120.339 101.711 120.633 100.625 121.219 99.628C121.806 98.6307 122.598 97.8387 123.595 97.252C124.622 96.6653 125.737 96.372 126.939 96.372C128.113 96.372 129.198 96.6653 130.195 97.252C131.193 97.8387 131.985 98.6307 132.571 99.628C133.158 100.625 133.451 101.711 133.451 102.884C133.451 104.057 133.158 105.143 132.571 106.14C131.985 107.137 131.193 107.929 130.195 108.516C129.198 109.103 128.113 109.396 126.939 109.396ZM126.939 106.8C128.025 106.8 128.934 106.419 129.667 105.656C130.401 104.893 130.767 103.969 130.767 102.884C130.767 101.799 130.386 100.875 129.623 100.112C128.89 99.3493 127.995 98.968 126.939 98.968C125.854 98.968 124.93 99.3493 124.167 100.112C123.405 100.875 123.023 101.799 123.023 102.884C123.023 103.969 123.405 104.893 124.167 105.656C124.93 106.419 125.854 106.8 126.939 106.8Z" fill="white"/>
                    </svg>
                  }
                />
                <CircleTypeCard
                  data={CircleTypeCardData2}
                  circleDelayClass='less-animation-delay-mobile'
                  image={
                    <svg width="188" height="188" viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg" ref={setRefs2}>
                    <circle cx="94" cy="94" r="90" stroke="#997F8A" strokeWidth="2"/>
                    <path d="M94 4C117.782 4 139.409 13.2242 155.5 28.29" stroke="#E3FF39" strokeWidth="8" strokeLinecap="round" className={circleInViewAbout2 ? 'yellow-line' : ''} />
                    <path d="M62.8838 78.332C63.0598 78.244 63.2504 78.2 63.4558 78.2H66.9318C67.2251 78.2 67.3718 78.3467 67.3718 78.64V108.56C67.3718 108.853 67.2251 109 66.9318 109H63.5878C63.2944 109 63.1478 108.853 63.1478 108.56V82.732C63.1478 82.6733 63.1184 82.6293 63.0598 82.6C63.0304 82.5707 62.9864 82.5707 62.9278 82.6L58.3078 84.184C58.2491 84.2133 58.1758 84.228 58.0878 84.228C57.9118 84.228 57.8091 84.1107 57.7798 83.876L57.6038 81.368C57.6038 81.0747 57.6918 80.8987 57.8678 80.84L62.8838 78.332ZM79.1885 105.128C79.1592 105.187 79.1592 105.245 79.1885 105.304C79.2178 105.333 79.2618 105.348 79.3205 105.348H92.5645C92.8578 105.348 93.0045 105.495 93.0045 105.788V108.56C93.0045 108.853 92.8578 109 92.5645 109H74.1285C73.8352 109 73.6885 108.853 73.6885 108.56V105.876C73.6885 105.671 73.7618 105.495 73.9085 105.348C74.9058 104.204 77.1938 101.52 80.7725 97.296L83.8085 93.644C86.5365 90.388 87.9005 87.8653 87.9005 86.076C87.9005 84.6973 87.4312 83.5973 86.4925 82.776C85.5832 81.9253 84.3658 81.5 82.8405 81.5C81.3152 81.5 80.0978 81.9253 79.1885 82.776C78.2792 83.6267 77.8392 84.7413 77.8685 86.12V87.44C77.8685 87.7333 77.7218 87.88 77.4285 87.88H74.0405C73.7472 87.88 73.6005 87.7333 73.6005 87.44V85.548C73.6592 84.0227 74.0845 82.6733 74.8765 81.5C75.6978 80.3267 76.7978 79.432 78.1765 78.816C79.5552 78.1707 81.1098 77.848 82.8405 77.848C84.7178 77.848 86.3605 78.2 87.7685 78.904C89.1765 79.608 90.2618 80.576 91.0245 81.808C91.7872 83.04 92.1685 84.4333 92.1685 85.988C92.1685 88.4227 90.8485 91.2973 88.2085 94.612C87.0352 96.108 85.6418 97.7947 84.0285 99.672C82.4152 101.52 80.8018 103.339 79.1885 105.128ZM105.894 90.828C104.691 90.828 103.577 90.5347 102.55 89.948C101.553 89.3613 100.761 88.5693 100.174 87.572C99.5874 86.5747 99.2941 85.4747 99.2941 84.272C99.2941 83.0987 99.5874 82.0133 100.174 81.016C100.761 80.0187 101.553 79.2413 102.55 78.684C103.577 78.0973 104.691 77.804 105.894 77.804C107.067 77.804 108.153 78.0973 109.15 78.684C110.147 79.2707 110.939 80.0627 111.526 81.06C112.113 82.028 112.406 83.0987 112.406 84.272C112.406 85.4747 112.113 86.5747 111.526 87.572C110.939 88.5693 110.147 89.3613 109.15 89.948C108.153 90.5347 107.067 90.828 105.894 90.828ZM104.618 109C104.442 109 104.325 108.956 104.266 108.868C104.207 108.751 104.222 108.619 104.31 108.472L120.942 78.508C121.059 78.3027 121.235 78.2 121.47 78.2H123.626C123.802 78.2 123.919 78.2587 123.978 78.376C124.037 78.464 124.022 78.5813 123.934 78.728L107.302 108.692C107.214 108.897 107.038 109 106.774 109H104.618ZM105.894 88.232C106.979 88.232 107.889 87.8507 108.622 87.088C109.355 86.3253 109.722 85.3867 109.722 84.272C109.722 83.1867 109.341 82.2773 108.578 81.544C107.845 80.7813 106.95 80.4 105.894 80.4C104.809 80.4 103.885 80.7813 103.122 81.544C102.359 82.2773 101.978 83.1867 101.978 84.272C101.978 85.3867 102.359 86.3253 103.122 87.088C103.885 87.8507 104.809 88.232 105.894 88.232ZM122.658 109.396C121.455 109.396 120.341 109.103 119.314 108.516C118.317 107.929 117.525 107.137 116.938 106.14C116.351 105.143 116.058 104.057 116.058 102.884C116.058 101.711 116.351 100.625 116.938 99.628C117.525 98.6307 118.317 97.8387 119.314 97.252C120.341 96.6653 121.455 96.372 122.658 96.372C123.831 96.372 124.917 96.6653 125.914 97.252C126.911 97.8387 127.703 98.6307 128.29 99.628C128.877 100.625 129.17 101.711 129.17 102.884C129.17 104.057 128.877 105.143 128.29 106.14C127.703 107.137 126.911 107.929 125.914 108.516C124.917 109.103 123.831 109.396 122.658 109.396ZM122.658 106.8C123.743 106.8 124.653 106.419 125.386 105.656C126.119 104.893 126.486 103.969 126.486 102.884C126.486 101.799 126.105 100.875 125.342 100.112C124.609 99.3493 123.714 98.968 122.658 98.968C121.573 98.968 120.649 99.3493 119.886 100.112C119.123 100.875 118.742 101.799 118.742 102.884C118.742 103.969 119.123 104.893 119.886 105.656C120.649 106.419 121.573 106.8 122.658 106.8Z" fill="white"/>
                    </svg>
                  }
                />
                <CircleTypeCard
                  data={CircleTypeCardData3}
                  circleDelayClass='less-animation-delay-mobile'
                  image={
                    <svg width="188" height="188" viewBox="0 0 188 188" fill="none" xmlns="http://www.w3.org/2000/svg" ref={setRefs3}>
                    <circle cx="94" cy="94" r="90" stroke="#997F8A" strokeWidth="2"/>
                    <path d="M94 4C143.706 4 184 44.2944 184 94C184 143.706 143.706 184 94 184C68.1866 184 44.9114 173.133 28.5 155.724" stroke="" strokeWidth="8" strokeLinecap="round" className={circleInViewAbout3 ? 'yellow-line' : ''} />
                    <path d="M71.8962 93.82C72.7175 95.3747 73.1282 97.2373 73.1282 99.408C73.1282 101.197 72.8349 102.767 72.2482 104.116C71.5735 105.788 70.5175 107.079 69.0802 107.988C67.6722 108.868 65.9562 109.308 63.9322 109.308C61.7615 109.308 59.9135 108.809 58.3882 107.812C56.8922 106.815 55.8362 105.407 55.2202 103.588C54.7802 102.356 54.5602 100.933 54.5602 99.32V85.768C54.5602 83.3627 55.3962 81.4413 57.0682 80.004C58.7402 78.5667 60.9255 77.848 63.6242 77.848C65.3549 77.848 66.8802 78.1707 68.2002 78.816C69.5495 79.4613 70.5909 80.3707 71.3242 81.544C72.0575 82.688 72.4242 84.008 72.4242 85.504V86.384C72.4242 86.6773 72.2775 86.824 71.9842 86.824H68.6402C68.3469 86.824 68.2002 86.6773 68.2002 86.384V85.988C68.2002 84.668 67.7749 83.5973 66.9242 82.776C66.0735 81.9547 64.9735 81.544 63.6242 81.544C62.1869 81.544 61.0135 81.9693 60.1042 82.82C59.2242 83.6707 58.7842 84.8 58.7842 86.208V91.752C58.7842 91.8107 58.7989 91.8547 58.8282 91.884C58.8869 91.884 58.9455 91.8547 59.0042 91.796C60.2655 90.388 62.0989 89.684 64.5042 89.684C67.9655 89.684 70.4295 91.0627 71.8962 93.82ZM68.2442 102.796C68.6842 101.857 68.9042 100.728 68.9042 99.408C68.9042 97.912 68.6402 96.7093 68.1122 95.8C67.2615 94.0987 65.8242 93.248 63.8002 93.248C62.7735 93.248 61.8935 93.4827 61.1602 93.952C60.4269 94.392 59.8695 95.0373 59.4882 95.888C59.0189 96.856 58.7842 98.1027 58.7842 99.628C58.7842 100.86 58.9749 101.901 59.3562 102.752C59.7375 103.691 60.3095 104.409 61.0722 104.908C61.8349 105.377 62.7589 105.612 63.8442 105.612C65.9855 105.612 67.4522 104.673 68.2442 102.796ZM95.1914 94.392C95.7781 95.8293 96.0714 97.4867 96.0714 99.364C96.0714 100.919 95.8368 102.356 95.3674 103.676C94.7221 105.495 93.6514 106.903 92.1554 107.9C90.6594 108.868 88.8554 109.352 86.7434 109.352C84.6314 109.352 82.7981 108.809 81.2434 107.724C79.7181 106.639 78.6474 105.172 78.0314 103.324C77.7088 102.503 77.5181 101.329 77.4594 99.804C77.4594 99.5107 77.6061 99.364 77.8994 99.364H81.2874C81.5808 99.364 81.7274 99.5107 81.7274 99.804C81.7861 100.86 81.9034 101.637 82.0794 102.136C82.3728 103.221 82.9154 104.087 83.7074 104.732C84.5288 105.377 85.5408 105.7 86.7434 105.7C88.9728 105.7 90.4688 104.688 91.2314 102.664C91.6128 101.784 91.8034 100.64 91.8034 99.232C91.8034 97.736 91.5688 96.4013 91.0994 95.228C90.2781 93.4093 88.8114 92.5 86.6994 92.5C86.2008 92.5 85.5701 92.72 84.8074 93.16C84.6901 93.2187 84.6021 93.248 84.5434 93.248C84.3968 93.248 84.2794 93.1747 84.1914 93.028L82.5194 90.74C82.4608 90.6227 82.4314 90.52 82.4314 90.432C82.4314 90.344 82.4754 90.2413 82.5634 90.124L90.0874 82.072C90.1754 81.9253 90.1461 81.852 89.9994 81.852H78.2954C78.0021 81.852 77.8554 81.7053 77.8554 81.412V78.64C77.8554 78.3467 78.0021 78.2 78.2954 78.2H95.3674C95.6608 78.2 95.8074 78.3467 95.8074 78.64V81.808C95.8074 81.9547 95.7341 82.1307 95.5874 82.336L88.8994 89.64C88.8408 89.6987 88.8261 89.7573 88.8554 89.816C88.8848 89.8453 88.9434 89.8747 89.0314 89.904C90.5274 90.0507 91.7888 90.52 92.8154 91.312C93.8421 92.0747 94.6341 93.1013 95.1914 94.392ZM109.246 90.828C108.043 90.828 106.928 90.5347 105.902 89.948C104.904 89.3613 104.112 88.5693 103.526 87.572C102.939 86.5747 102.646 85.4747 102.646 84.272C102.646 83.0987 102.939 82.0133 103.526 81.016C104.112 80.0187 104.904 79.2413 105.902 78.684C106.928 78.0973 108.043 77.804 109.246 77.804C110.419 77.804 111.504 78.0973 112.502 78.684C113.499 79.2707 114.291 80.0627 114.878 81.06C115.464 82.028 115.758 83.0987 115.758 84.272C115.758 85.4747 115.464 86.5747 114.878 87.572C114.291 88.5693 113.499 89.3613 112.502 89.948C111.504 90.5347 110.419 90.828 109.246 90.828ZM107.97 109C107.794 109 107.676 108.956 107.618 108.868C107.559 108.751 107.574 108.619 107.662 108.472L124.294 78.508C124.411 78.3027 124.587 78.2 124.822 78.2H126.978C127.154 78.2 127.271 78.2587 127.33 78.376C127.388 78.464 127.374 78.5813 127.286 78.728L110.654 108.692C110.566 108.897 110.39 109 110.126 109H107.97ZM109.246 88.232C110.331 88.232 111.24 87.8507 111.974 87.088C112.707 86.3253 113.074 85.3867 113.074 84.272C113.074 83.1867 112.692 82.2773 111.93 81.544C111.196 80.7813 110.302 80.4 109.246 80.4C108.16 80.4 107.236 80.7813 106.474 81.544C105.711 82.2773 105.33 83.1867 105.33 84.272C105.33 85.3867 105.711 86.3253 106.474 87.088C107.236 87.8507 108.16 88.232 109.246 88.232ZM126.01 109.396C124.807 109.396 123.692 109.103 122.666 108.516C121.668 107.929 120.876 107.137 120.29 106.14C119.703 105.143 119.41 104.057 119.41 102.884C119.41 101.711 119.703 100.625 120.29 99.628C120.876 98.6307 121.668 97.8387 122.666 97.252C123.692 96.6653 124.807 96.372 126.01 96.372C127.183 96.372 128.268 96.6653 129.266 97.252C130.263 97.8387 131.055 98.6307 131.642 99.628C132.228 100.625 132.522 101.711 132.522 102.884C132.522 104.057 132.228 105.143 131.642 106.14C131.055 107.137 130.263 107.929 129.266 108.516C128.268 109.103 127.183 109.396 126.01 109.396ZM126.01 106.8C127.095 106.8 128.004 106.419 128.738 105.656C129.471 104.893 129.838 103.969 129.838 102.884C129.838 101.799 129.456 100.875 128.694 100.112C127.96 99.3493 127.066 98.968 126.01 98.968C124.924 98.968 124 99.3493 123.238 100.112C122.475 100.875 122.094 101.799 122.094 102.884C122.094 103.969 122.475 104.893 123.238 105.656C124 106.419 124.924 106.8 126.01 106.8Z" fill="white"/>
                    </svg>
                  }
                />
              </Row>
              <Row>
                <Col lg={{span: 10, offset: 1}} xs={{span: 12, offset: 0}} ref={setBoxRef}>
                  <div
                    // className='about-circle-rectangle-callout'
                    className={boxInView ? `about-circle-rectangle-callout active-card` : `about-circle-rectangle-callout`}
                  >
                    <Row>
                      <Col lg={{span: 10, offset: 1}} xs={{span: 10, offset: 1}}>
                        <h3 className='text-center'>
                          The incidence of NPC type 2 has been increasing by approximately 3% annually in the US.<sup>5</sup>
                        </h3>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <h6 className='white'>
                HPV = human papillomavirus; EBV = Epstein-Barr virus.
              </h6>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about-demographics-container'>
        <Container>
          <Row>
            <Col lg={{span: 10, offset: 1}}>
              <div className='about-demographics-content-container'>
                <h2 className='text-center'>
                  The demographics of nasopharyngeal carcinoma (NPC)
                </h2>
                <p className='text-center'>
                  NPC is more common in people from Southeast Asia, Northern Africa, and the Middle East. That increased risk remains for them and their descendants, even if they move to lower-risk areas such as the US.<sup>1-2</sup>
                </p>
                <h3 className='text-center'>
                  NPC by the numbers
                </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 12, offset: 0}}>
              <DemographicsCards
                demographic={`GENDER`}
                title={`Men are 2-3 times more likely than women`}
                text={<>to be diagnosed with NPC worldwide<sup>2</sup></>}
              />
              <DemographicsCards
                demographic={`AGE`}
                title={`The median age at NPC diagnosis is 55,`}
                text={<>although it can be diagnosed at any age<sup>1</sup></>}
              />
              <DemographicsCards
                demographic={`FREQUENCY`}
                title={`<1 case per 100,000 patients`}
                text={<>is diagnosed per year in the US<sup>1</sup></>}
              />
              <div
                // className='demographic-race-card-container'
                ref={setRaceCardRef}
                className={raceCardInView ? `demographic-race-card-container active-race-card` : `demographic-race-card-container`}
              >
                <Row>
                  <Col lg={{span: 2, offset: 1}} className='demographic-left-card-col'>
                    <div className='demographic-left-card-container'>
                      <h3 className='white text-center'>
                        RACE
                      </h3>
                    </div>
                  </Col>
                  <Col lg={{span: 4, offset: 0}} className=''>
                    <div className='demographic-right-card-container center-card'>
                      <h4 className='text-center'>
                        Caucasian males make up 33%
                      </h4>
                      <h4 className='text-center bold'>
                        of NPC patients in the US<sup>6</sup>
                      </h4>
                    </div>
                  </Col>
                  <Col lg={{span: 4, offset: 0}}>
                    <div className='demographic-right-card-container'>
                      <h4 className='text-center'>
                        Males of Asian descent make up 
                      </h4>
                      <h4 className='text-center bold'>
                        <span className='extra-bold'>23%</span> of NPC patients in the US<sup>6</sup>
                      </h4>
                    </div>
                  </Col>
                </Row>
              </div>
              <DemographicsCards
                demographic={`WHO TYPE`}
                title={`Types 1 and 3 are the most common histologies`}
                text={<>in the US, but type 2 is increasing<sup>2</sup></>}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className='about-diagnosis-container'
        style={
          width > 991 ?
          {backgroundImage: `url(${DiagnosisBGImg}), url(${DiagnosisBGImgFB})`} :
          {backgroundImage: `url(${DiagnosisBGImgMobile}), url(${DiagnosisBGImgMobileFB})`}
        }
        title=''
      >
        <Container>
          <Row>
            <Col lg={{span: 12, offset: 0}}>
              <Row>
                <Col lg={{span: 6, offset: 0}}>
                  <div className='about-diagnosis-content-container'>
                    <h2 className='white'>
                      Diagnosing nasopharyngeal carcinoma
                    </h2>
                    <p className='white'>
                      NPC is a rare cancer, and presenting symptoms are highly variable, ranging from neck mass/swelling to headaches. As a result, NPC is frequently missed on initial presentation.<sup>1,7</sup>
                    </p>
                    <p className='white'>
                      This, combined with the inaccessible location and high likelihood of metastasis, may lead to patients being at more advanced stages when diagnosed.<sup>7-9</sup>
                    </p>
                  </div>
                </Col>
                <Col lg={{span: 6, offset: 0}} ref={setBoxRef2}>
                  <div
                    // className='about-diagnosis-card-container'
                    className={boxInView2 ? `about-diagnosis-card-container active-card` : `about-diagnosis-card-container`}
                  >
                    <p className='white bolder'>
                      HOW IS NPC DIAGNOSED?
                    </p>
                    <p className='white'>
                      Evaluation for NPC can include<sup>9</sup>:
                    </p>
                    <ul className='white-ul about-diagnosis-card-ul'>
                      <li>
                        Medical history and physical exam
                      </li>
                      <li>
                        Endoscopy/nasopharyngoscopy
                      </li>
                      <li>
                        Biopsy
                      </li>
                      <li>
                        Radiologic study (PET scan, CT scan, MRI, ultrasound)
                      </li>
                      <li>
                        Neurologic exam
                      </li>
                      <li>
                        Hearing test
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about-risk-container'>
        <Container>
          <Row>
            <Col lg={{span: 10, offset: 1}}>
              <div className='about-risk-title-container'>
                <h2>
                  Risk factors for nasopharyngeal carcinoma
                </h2>
                <p>
                  NPC is distinct from other cancers, in part due to its etiology and risk factors.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 12, offset: 0}}>
              <Row>
                <RiskIconCard data={RiskIconCardData1} />
                <RiskIconCard data={RiskIconCardData2} />
                <RiskIconCard data={RiskIconCardData3} />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 10, offset: 1}} ref={setBoxRef3}>
              <div
                // className='about-risk-rectangle-callout'
                className={boxInView3 ? `about-risk-rectangle-callout active-card` : `about-risk-rectangle-callout`}
              >
                <h3 className='text-center'>
                  NPC has a very distinct profile based on diverse etiology and risk factors.
                </h3>
                <Row>
                  <Col lg={{span: 6, offset: 3}}>
                    <div className='cta-btn-container'>
                      <Link
                        to={'/'}
                      >
                        <button className='cta-btn dark-grey-btn'>
                          Learn more about the unmet need in NPC
                        </button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </Layout>
  )
}

export default AboutContent