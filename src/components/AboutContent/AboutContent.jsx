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
  const [circleViewAbout, circleInViewAbout] = useInView();
  const setRefs = useCallback(
    (node) => {
      circleRefAbout.current = node;
      circleViewAbout(node);
    },
    [circleViewAbout],
  );

  const circleRefAbout2 = useRef()
  const [circleViewAbout2, circleInViewAbout2] = useInView();
  const setRefs2 = useCallback(
    (node) => {
      circleRefAbout2.current = node;
      circleViewAbout2(node);
    },
    [circleViewAbout2],
  );

  const circleRefAbout3 = useRef()
  const [circleViewAbout3, circleInViewAbout3] = useInView();
  const setRefs3 = useCallback(
    (node) => {
      circleRefAbout3.current = node;
      circleViewAbout3(node);
    },
    [circleViewAbout3],
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
      canonicalURL='https://www.myfembreehcp.com/resources/'
      title='HCP Resources | Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets'
      pageTitle='HCP Resources | Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets'
      description='Find downloadable resources for the Myfembree® Support Program including a program enrollment form and a patient consent form. See benefits&risks&BOXED WARNING.'
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
              <img src={downArrow} alt='' className='d-none d-lg-block' />
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
                <div ref={setRefs}></div>
                <CircleTypeCard
                  data={CircleTypeCardData1}
                  image={
                    <svg width="189" height="189" viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="94" cy="95" r="90" stroke="" stroke-width="2" className={circleInViewAbout ? 'full-circle-line' : ''} />
                    <mask id="path-2-outside-1_31:1963" maskUnits="userSpaceOnUse" x="93" y="0" width="96" height="96" fill="black">
                    <rect fill="white" x="93" width="96" height="96"/>
                    <path d="M94 5.98798C94 3.2332 96.2348 0.986199 98.9857 1.13231C109.626 1.69746 120.106 4.06843 129.972 8.15533C141.377 12.8793 151.739 19.8033 160.468 28.532C169.197 37.2607 176.121 47.6232 180.845 59.0278C184.932 68.8944 187.303 79.3739 187.868 90.0143C188.014 92.7652 185.767 95 183.012 95C180.257 95 178.039 92.7648 177.876 90.0149C177.322 80.6853 175.214 71.5015 171.628 62.8454C167.405 52.6511 161.216 43.3884 153.414 35.586C145.612 27.7837 136.349 21.5945 126.155 17.3719C117.498 13.7864 108.315 11.6785 98.9851 11.124C96.2352 10.9605 94 8.74276 94 5.98798Z"/>
                    </mask>
                    <path d="M94 5.98798C94 3.2332 96.2348 0.986199 98.9857 1.13231C109.626 1.69746 120.106 4.06843 129.972 8.15533C141.377 12.8793 151.739 19.8033 160.468 28.532C169.197 37.2607 176.121 47.6232 180.845 59.0278C184.932 68.8944 187.303 79.3739 187.868 90.0143C188.014 92.7652 185.767 95 183.012 95C180.257 95 178.039 92.7648 177.876 90.0149C177.322 80.6853 175.214 71.5015 171.628 62.8454C167.405 52.6511 161.216 43.3884 153.414 35.586C145.612 27.7837 136.349 21.5945 126.155 17.3719C117.498 13.7864 108.315 11.6785 98.9851 11.124C96.2352 10.9605 94 8.74276 94 5.98798Z" fill="" className={circleInViewAbout ? 'yellow-line' : ''} />
                    {/* <path d="M94 5.98798C94 3.2332 96.2348 0.986199 98.9857 1.13231C109.626 1.69746 120.106 4.06843 129.972 8.15533C141.377 12.8793 151.739 19.8033 160.468 28.532C169.197 37.2607 176.121 47.6232 180.845 59.0278C184.932 68.8944 187.303 79.3739 187.868 90.0143C188.014 92.7652 185.767 95 183.012 95C180.257 95 178.039 92.7648 177.876 90.0149C177.322 80.6853 175.214 71.5015 171.628 62.8454C167.405 52.6511 161.216 43.3884 153.414 35.586C145.612 27.7837 136.349 21.5945 126.155 17.3719C117.498 13.7864 108.315 11.6785 98.9851 11.124C96.2352 10.9605 94 8.74276 94 5.98798Z" stroke="#3E404C" stroke-width="2" mask="url(#path-2-outside-1_31:1963)"/> */}
                    <path d="M59.9985 106.205C59.9692 106.264 59.9692 106.322 59.9985 106.381C60.0278 106.41 60.0718 106.425 60.1305 106.425H73.3745C73.6678 106.425 73.8145 106.572 73.8145 106.865V109.637C73.8145 109.93 73.6678 110.077 73.3745 110.077H54.9385C54.6452 110.077 54.4985 109.93 54.4985 109.637V106.953C54.4985 106.748 54.5718 106.572 54.7185 106.425C55.7158 105.281 58.0038 102.597 61.5825 98.3729L64.6185 94.7209C67.3465 91.4649 68.7105 88.9422 68.7105 87.1529C68.7105 85.7742 68.2412 84.6742 67.3025 83.8529C66.3932 83.0022 65.1758 82.5769 63.6505 82.5769C62.1252 82.5769 60.9078 83.0022 59.9985 83.8529C59.0892 84.7036 58.6492 85.8182 58.6785 87.1969V88.5169C58.6785 88.8102 58.5318 88.9569 58.2385 88.9569H54.8505C54.5572 88.9569 54.4105 88.8102 54.4105 88.5169V86.6249C54.4692 85.0996 54.8945 83.7502 55.6865 82.5769C56.5078 81.4036 57.6078 80.5089 58.9865 79.8929C60.3652 79.2476 61.9198 78.9249 63.6505 78.9249C65.5278 78.9249 67.1705 79.2769 68.5785 79.9809C69.9865 80.6849 71.0718 81.6529 71.8345 82.8849C72.5972 84.1169 72.9785 85.5102 72.9785 87.0649C72.9785 89.4996 71.6585 92.3742 69.0185 95.6889C67.8452 97.1849 66.4518 98.8716 64.8385 100.749C63.2252 102.597 61.6118 104.416 59.9985 106.205ZM97.0881 96.4369C97.4108 97.7276 97.5721 99.0622 97.5721 100.441C97.5721 101.82 97.3961 103.096 97.0441 104.269C96.4868 106.146 95.4161 107.642 93.8321 108.757C92.2774 109.842 90.4148 110.385 88.2441 110.385C86.1028 110.385 84.2694 109.857 82.7441 108.801C81.2188 107.745 80.1481 106.308 79.5321 104.489C79.2388 103.668 79.0774 102.949 79.0481 102.333V102.245C79.0481 102.01 79.1801 101.893 79.4441 101.893H82.9201C83.1841 101.893 83.3308 102.025 83.3601 102.289C83.3894 102.494 83.4628 102.802 83.5801 103.213C83.9028 104.298 84.4601 105.164 85.2521 105.809C86.0734 106.425 87.0561 106.733 88.2001 106.733C89.4028 106.733 90.4148 106.41 91.2361 105.765C92.0868 105.09 92.6588 104.166 92.9521 102.993C93.1574 102.377 93.2601 101.526 93.2601 100.441C93.2601 99.4729 93.1721 98.5782 92.9961 97.7569C92.7908 96.6422 92.2628 95.7916 91.4121 95.2049C90.5908 94.5889 89.5641 94.2809 88.3321 94.2809C87.1881 94.2809 86.1614 94.5449 85.2521 95.0729C84.3428 95.5716 83.7561 96.2462 83.4921 97.0969C83.4041 97.3609 83.2428 97.4929 83.0081 97.4929H79.4881C79.1948 97.4929 79.0481 97.3462 79.0481 97.0529V79.7169C79.0481 79.4236 79.1948 79.2769 79.4881 79.2769H95.9441C96.2374 79.2769 96.3841 79.4236 96.3841 79.7169V82.4889C96.3841 82.7822 96.2374 82.9289 95.9441 82.9289H83.4481C83.3308 82.9289 83.2721 82.9876 83.2721 83.1049L83.2281 92.3009C83.2281 92.4769 83.3014 92.5209 83.4481 92.4329C84.1521 91.8169 84.9588 91.3622 85.8681 91.0689C86.8068 90.7462 87.7894 90.5849 88.8161 90.5849C90.8694 90.5849 92.6294 91.0982 94.0961 92.1249C95.5921 93.1516 96.5894 94.5889 97.0881 96.4369ZM110.175 91.9049C108.973 91.9049 107.858 91.6116 106.831 91.0249C105.834 90.4382 105.042 89.6462 104.455 88.6489C103.869 87.6516 103.575 86.5516 103.575 85.3489C103.575 84.1756 103.869 83.0902 104.455 82.0929C105.042 81.0956 105.834 80.3182 106.831 79.7609C107.858 79.1742 108.973 78.8809 110.175 78.8809C111.349 78.8809 112.434 79.1742 113.431 79.7609C114.429 80.3476 115.221 81.1396 115.807 82.1369C116.394 83.1049 116.687 84.1756 116.687 85.3489C116.687 86.5516 116.394 87.6516 115.807 88.6489C115.221 89.6462 114.429 90.4382 113.431 91.0249C112.434 91.6116 111.349 91.9049 110.175 91.9049ZM108.899 110.077C108.723 110.077 108.606 110.033 108.547 109.945C108.489 109.828 108.503 109.696 108.591 109.549L125.223 79.5849C125.341 79.3796 125.517 79.2769 125.751 79.2769H127.907C128.083 79.2769 128.201 79.3356 128.259 79.4529C128.318 79.5409 128.303 79.6582 128.215 79.8049L111.583 109.769C111.495 109.974 111.319 110.077 111.055 110.077H108.899ZM110.175 89.3089C111.261 89.3089 112.17 88.9276 112.903 88.1649C113.637 87.4022 114.003 86.4636 114.003 85.3489C114.003 84.2636 113.622 83.3542 112.859 82.6209C112.126 81.8582 111.231 81.4769 110.175 81.4769C109.09 81.4769 108.166 81.8582 107.403 82.6209C106.641 83.3542 106.259 84.2636 106.259 85.3489C106.259 86.4636 106.641 87.4022 107.403 88.1649C108.166 88.9276 109.09 89.3089 110.175 89.3089ZM126.939 110.473C125.737 110.473 124.622 110.18 123.595 109.593C122.598 109.006 121.806 108.214 121.219 107.217C120.633 106.22 120.339 105.134 120.339 103.961C120.339 102.788 120.633 101.702 121.219 100.705C121.806 99.7076 122.598 98.9156 123.595 98.3289C124.622 97.7422 125.737 97.4489 126.939 97.4489C128.113 97.4489 129.198 97.7422 130.195 98.3289C131.193 98.9156 131.985 99.7076 132.571 100.705C133.158 101.702 133.451 102.788 133.451 103.961C133.451 105.134 133.158 106.22 132.571 107.217C131.985 108.214 131.193 109.006 130.195 109.593C129.198 110.18 128.113 110.473 126.939 110.473ZM126.939 107.877C128.025 107.877 128.934 107.496 129.667 106.733C130.401 105.97 130.767 105.046 130.767 103.961C130.767 102.876 130.386 101.952 129.623 101.189C128.89 100.426 127.995 100.045 126.939 100.045C125.854 100.045 124.93 100.426 124.167 101.189C123.405 101.952 123.023 102.876 123.023 103.961C123.023 105.046 123.405 105.97 124.167 106.733C124.93 107.496 125.854 107.877 126.939 107.877Z" fill="white"/>
                    </svg>
                  }
                />
                <div ref={setRefs2}></div>
                <CircleTypeCard
                  data={CircleTypeCardData2}
                  image={
                    <svg width="189" height="189" viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="94.3334" cy="95" r="90" stroke="" stroke-width="2" className={circleInViewAbout2 ? 'full-circle-line' : ''} />
                    <mask id="path-2-outside-1_31:1982" maskUnits="userSpaceOnUse" x="93.3334" y="0" width="65" height="33" fill="black">
                    <rect fill="white" x="93.3334" width="65" height="33"/>
                    <path d="M94.3334 5.98798C94.3334 3.2332 96.5686 0.986194 99.3195 1.13223C119.767 2.21771 139.307 9.95421 154.956 23.1601C157.061 24.9368 157.152 28.1049 155.266 30.113C153.381 32.1212 150.233 32.2074 148.116 30.444C134.333 18.96 117.228 12.1878 99.319 11.1239C96.5691 10.9605 94.3334 8.74276 94.3334 5.98798Z"/>
                    </mask>
                    <path d="M94.3334 5.98798C94.3334 3.2332 96.5686 0.986194 99.3195 1.13223C119.767 2.21771 139.307 9.95421 154.956 23.1601C157.061 24.9368 157.152 28.1049 155.266 30.113C153.381 32.1212 150.233 32.2074 148.116 30.444C134.333 18.96 117.228 12.1878 99.319 11.1239C96.5691 10.9605 94.3334 8.74276 94.3334 5.98798Z" fill="" className={circleInViewAbout2 ? 'yellow-line' : ''} />
                    {/* <path d="M94.3334 5.98798C94.3334 3.2332 96.5686 0.986194 99.3195 1.13223C119.767 2.21771 139.307 9.95421 154.956 23.1601C157.061 24.9368 157.152 28.1049 155.266 30.113C153.381 32.1212 150.233 32.2074 148.116 30.444C134.333 18.96 117.228 12.1878 99.319 11.1239C96.5691 10.9605 94.3334 8.74276 94.3334 5.98798Z" stroke="#3E404C" stroke-width="2" mask="url(#path-2-outside-1_31:1982)"/> */}
                    <path d="M63.2171 79.4089C63.3931 79.3209 63.5838 79.2769 63.7891 79.2769H67.2651C67.5585 79.2769 67.7051 79.4236 67.7051 79.7169V109.637C67.7051 109.93 67.5585 110.077 67.2651 110.077H63.9211C63.6278 110.077 63.4811 109.93 63.4811 109.637V83.8089C63.4811 83.7502 63.4518 83.7062 63.3931 83.6769C63.3638 83.6476 63.3198 83.6476 63.2611 83.6769L58.6411 85.2609C58.5825 85.2902 58.5091 85.3049 58.4211 85.3049C58.2451 85.3049 58.1425 85.1876 58.1131 84.9529L57.9371 82.4449C57.9371 82.1516 58.0251 81.9756 58.2011 81.9169L63.2171 79.4089ZM79.5219 106.205C79.4925 106.264 79.4925 106.322 79.5219 106.381C79.5512 106.41 79.5952 106.425 79.6539 106.425H92.8979C93.1912 106.425 93.3379 106.572 93.3379 106.865V109.637C93.3379 109.93 93.1912 110.077 92.8979 110.077H74.4619C74.1685 110.077 74.0219 109.93 74.0219 109.637V106.953C74.0219 106.748 74.0952 106.572 74.2419 106.425C75.2392 105.281 77.5272 102.597 81.1059 98.3729L84.1419 94.7209C86.8699 91.4649 88.2339 88.9422 88.2339 87.1529C88.2339 85.7742 87.7645 84.6742 86.8259 83.8529C85.9165 83.0022 84.6992 82.5769 83.1739 82.5769C81.6485 82.5769 80.4312 83.0022 79.5219 83.8529C78.6125 84.7036 78.1725 85.8182 78.2019 87.1969V88.5169C78.2019 88.8102 78.0552 88.9569 77.7619 88.9569H74.3739C74.0805 88.9569 73.9339 88.8102 73.9339 88.5169V86.6249C73.9925 85.0996 74.4179 83.7502 75.2099 82.5769C76.0312 81.4036 77.1312 80.5089 78.5099 79.8929C79.8885 79.2476 81.4432 78.9249 83.1739 78.9249C85.0512 78.9249 86.6939 79.2769 88.1019 79.9809C89.5099 80.6849 90.5952 81.6529 91.3579 82.8849C92.1205 84.1169 92.5019 85.5102 92.5019 87.0649C92.5019 89.4996 91.1819 92.3742 88.5419 95.6889C87.3685 97.1849 85.9752 98.8716 84.3619 100.749C82.7485 102.597 81.1352 104.416 79.5219 106.205ZM106.227 91.9049C105.025 91.9049 103.91 91.6116 102.883 91.0249C101.886 90.4382 101.094 89.6462 100.507 88.6489C99.9208 87.6516 99.6275 86.5516 99.6275 85.3489C99.6275 84.1756 99.9208 83.0902 100.507 82.0929C101.094 81.0956 101.886 80.3182 102.883 79.7609C103.91 79.1742 105.025 78.8809 106.227 78.8809C107.401 78.8809 108.486 79.1742 109.483 79.7609C110.481 80.3476 111.273 81.1396 111.859 82.1369C112.446 83.1049 112.739 84.1756 112.739 85.3489C112.739 86.5516 112.446 87.6516 111.859 88.6489C111.273 89.6462 110.481 90.4382 109.483 91.0249C108.486 91.6116 107.401 91.9049 106.227 91.9049ZM104.951 110.077C104.775 110.077 104.658 110.033 104.599 109.945C104.541 109.828 104.555 109.696 104.643 109.549L121.275 79.5849C121.393 79.3796 121.569 79.2769 121.803 79.2769H123.959C124.135 79.2769 124.253 79.3356 124.311 79.4529C124.37 79.5409 124.355 79.6582 124.267 79.8049L107.635 109.769C107.547 109.974 107.371 110.077 107.107 110.077H104.951ZM106.227 89.3089C107.313 89.3089 108.222 88.9276 108.955 88.1649C109.689 87.4022 110.055 86.4636 110.055 85.3489C110.055 84.2636 109.674 83.3542 108.911 82.6209C108.178 81.8582 107.283 81.4769 106.227 81.4769C105.142 81.4769 104.218 81.8582 103.455 82.6209C102.693 83.3542 102.311 84.2636 102.311 85.3489C102.311 86.4636 102.693 87.4022 103.455 88.1649C104.218 88.9276 105.142 89.3089 106.227 89.3089ZM122.991 110.473C121.789 110.473 120.674 110.18 119.647 109.593C118.65 109.006 117.858 108.214 117.271 107.217C116.685 106.22 116.391 105.134 116.391 103.961C116.391 102.788 116.685 101.702 117.271 100.705C117.858 99.7076 118.65 98.9156 119.647 98.3289C120.674 97.7422 121.789 97.4489 122.991 97.4489C124.165 97.4489 125.25 97.7422 126.247 98.3289C127.245 98.9156 128.037 99.7076 128.623 100.705C129.21 101.702 129.503 102.788 129.503 103.961C129.503 105.134 129.21 106.22 128.623 107.217C128.037 108.214 127.245 109.006 126.247 109.593C125.25 110.18 124.165 110.473 122.991 110.473ZM122.991 107.877C124.077 107.877 124.986 107.496 125.719 106.733C126.453 105.97 126.819 105.046 126.819 103.961C126.819 102.876 126.438 101.952 125.675 101.189C124.942 100.426 124.047 100.045 122.991 100.045C121.906 100.045 120.982 100.426 120.219 101.189C119.457 101.952 119.075 102.876 119.075 103.961C119.075 105.046 119.457 105.97 120.219 106.733C120.982 107.496 121.906 107.877 122.991 107.877Z" fill="white"/>
                    </svg>
                  }
                />
                <div ref={setRefs3}></div>
                <CircleTypeCard
                  data={CircleTypeCardData3}
                  image={
                    <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="94.6667" cy="95" r="90" stroke="" stroke-width="2" className={circleInViewAbout3 ? 'full-circle-line' : ''} />
                    <mask id="path-2-outside-1_31:2001" maskUnits="userSpaceOnUse" x="26.6667" y="0" width="163" height="190" fill="black">
                    <rect fill="white" x="26.6667" width="163" height="190"/>
                    <path d="M94.6667 5.98798C94.6667 3.2332 96.9017 0.986198 99.6526 1.1323C113.51 1.86829 127.054 5.66498 139.303 12.274C153.018 19.6739 164.677 30.3672 173.233 43.3918C181.788 56.4165 186.972 71.3639 188.316 86.8891C189.661 102.414 187.125 118.03 180.936 132.332C174.747 146.634 165.099 159.172 152.862 168.82C140.624 178.467 126.179 184.921 110.828 187.6C95.4768 190.28 79.7003 189.1 64.9179 184.168C51.7153 179.764 39.6757 172.489 29.6532 162.891C27.6636 160.986 27.7716 157.819 29.7798 155.933C31.7879 154.047 34.9347 154.158 36.9363 156.051C45.8181 164.45 56.4415 170.824 68.0751 174.705C81.2886 179.114 95.3909 180.168 109.113 177.773C122.835 175.378 135.746 169.609 146.686 160.985C157.625 152.362 166.248 141.154 171.78 128.37C177.312 115.586 179.579 101.627 178.377 87.7499C177.175 73.8723 172.542 60.5113 164.895 48.8689C157.247 37.2265 146.825 27.668 134.566 21.0535C123.773 15.2299 111.854 11.8492 99.6519 11.124C96.902 10.9605 94.6667 8.74276 94.6667 5.98798Z"/>
                    </mask>
                    <path d="M94.6667 5.98798C94.6667 3.2332 96.9017 0.986198 99.6526 1.1323C113.51 1.86829 127.054 5.66498 139.303 12.274C153.018 19.6739 164.677 30.3672 173.233 43.3918C181.788 56.4165 186.972 71.3639 188.316 86.8891C189.661 102.414 187.125 118.03 180.936 132.332C174.747 146.634 165.099 159.172 152.862 168.82C140.624 178.467 126.179 184.921 110.828 187.6C95.4768 190.28 79.7003 189.1 64.9179 184.168C51.7153 179.764 39.6757 172.489 29.6532 162.891C27.6636 160.986 27.7716 157.819 29.7798 155.933C31.7879 154.047 34.9347 154.158 36.9363 156.051C45.8181 164.45 56.4415 170.824 68.0751 174.705C81.2886 179.114 95.3909 180.168 109.113 177.773C122.835 175.378 135.746 169.609 146.686 160.985C157.625 152.362 166.248 141.154 171.78 128.37C177.312 115.586 179.579 101.627 178.377 87.7499C177.175 73.8723 172.542 60.5113 164.895 48.8689C157.247 37.2265 146.825 27.668 134.566 21.0535C123.773 15.2299 111.854 11.8492 99.6519 11.124C96.902 10.9605 94.6667 8.74276 94.6667 5.98798Z" fill="" className={circleInViewAbout3 ? 'yellow-line' : ''} />
                    {/* <path d="M94.6667 5.98798C94.6667 3.2332 96.9017 0.986198 99.6526 1.1323C113.51 1.86829 127.054 5.66498 139.303 12.274C153.018 19.6739 164.677 30.3672 173.233 43.3918C181.788 56.4165 186.972 71.3639 188.316 86.8891C189.661 102.414 187.125 118.03 180.936 132.332C174.747 146.634 165.099 159.172 152.862 168.82C140.624 178.467 126.179 184.921 110.828 187.6C95.4768 190.28 79.7003 189.1 64.9179 184.168C51.7153 179.764 39.6757 172.489 29.6532 162.891C27.6636 160.986 27.7716 157.819 29.7798 155.933C31.7879 154.047 34.9347 154.158 36.9363 156.051C45.8181 164.45 56.4415 170.824 68.0751 174.705C81.2886 179.114 95.3909 180.168 109.113 177.773C122.835 175.378 135.746 169.609 146.686 160.985C157.625 152.362 166.248 141.154 171.78 128.37C177.312 115.586 179.579 101.627 178.377 87.7499C177.175 73.8723 172.542 60.5113 164.895 48.8689C157.247 37.2265 146.825 27.668 134.566 21.0535C123.773 15.2299 111.854 11.8492 99.6519 11.124C96.902 10.9605 94.6667 8.74276 94.6667 5.98798Z" stroke="#3E404C" stroke-width="2" mask="url(#path-2-outside-1_31:2001)"/> */}
                    <path d="M72.5629 94.8969C73.3843 96.4516 73.7949 98.3142 73.7949 100.485C73.7949 102.274 73.5016 103.844 72.9149 105.193C72.2403 106.865 71.1843 108.156 69.7469 109.065C68.3389 109.945 66.6229 110.385 64.5989 110.385C62.4283 110.385 60.5803 109.886 59.0549 108.889C57.5589 107.892 56.5029 106.484 55.8869 104.665C55.4469 103.433 55.2269 102.01 55.2269 100.397V86.8449C55.2269 84.4396 56.0629 82.5182 57.7349 81.0809C59.4069 79.6436 61.5923 78.9249 64.2909 78.9249C66.0216 78.9249 67.5469 79.2476 68.8669 79.8929C70.2163 80.5382 71.2576 81.4476 71.9909 82.6209C72.7243 83.7649 73.0909 85.0849 73.0909 86.5809V87.4609C73.0909 87.7542 72.9443 87.9009 72.6509 87.9009H69.3069C69.0136 87.9009 68.8669 87.7542 68.8669 87.4609V87.0649C68.8669 85.7449 68.4416 84.6742 67.5909 83.8529C66.7403 83.0316 65.6403 82.6209 64.2909 82.6209C62.8536 82.6209 61.6803 83.0462 60.7709 83.8969C59.8909 84.7476 59.4509 85.8769 59.4509 87.2849V92.8289C59.4509 92.8876 59.4656 92.9316 59.4949 92.9609C59.5536 92.9609 59.6123 92.9316 59.6709 92.8729C60.9323 91.4649 62.7656 90.7609 65.1709 90.7609C68.6323 90.7609 71.0963 92.1396 72.5629 94.8969ZM68.9109 103.873C69.3509 102.934 69.5709 101.805 69.5709 100.485C69.5709 98.9889 69.3069 97.7862 68.7789 96.8769C67.9283 95.1756 66.4909 94.3249 64.4669 94.3249C63.4403 94.3249 62.5603 94.5596 61.8269 95.0289C61.0936 95.4689 60.5363 96.1142 60.1549 96.9649C59.6856 97.9329 59.4509 99.1796 59.4509 100.705C59.4509 101.937 59.6416 102.978 60.0229 103.829C60.4043 104.768 60.9763 105.486 61.7389 105.985C62.5016 106.454 63.4256 106.689 64.5109 106.689C66.6523 106.689 68.1189 105.75 68.9109 103.873ZM95.8582 95.4689C96.4449 96.9062 96.7382 98.5636 96.7382 100.441C96.7382 101.996 96.5035 103.433 96.0342 104.753C95.3889 106.572 94.3182 107.98 92.8222 108.977C91.3262 109.945 89.5222 110.429 87.4102 110.429C85.2982 110.429 83.4649 109.886 81.9102 108.801C80.3849 107.716 79.3142 106.249 78.6982 104.401C78.3755 103.58 78.1849 102.406 78.1262 100.881C78.1262 100.588 78.2729 100.441 78.5662 100.441H81.9542C82.2475 100.441 82.3942 100.588 82.3942 100.881C82.4529 101.937 82.5702 102.714 82.7462 103.213C83.0395 104.298 83.5822 105.164 84.3742 105.809C85.1955 106.454 86.2075 106.777 87.4102 106.777C89.6395 106.777 91.1355 105.765 91.8982 103.741C92.2795 102.861 92.4702 101.717 92.4702 100.309C92.4702 98.8129 92.2355 97.4782 91.7662 96.3049C90.9449 94.4862 89.4782 93.5769 87.3662 93.5769C86.8675 93.5769 86.2369 93.7969 85.4742 94.2369C85.3569 94.2956 85.2689 94.3249 85.2102 94.3249C85.0635 94.3249 84.9462 94.2516 84.8582 94.1049L83.1862 91.8169C83.1275 91.6996 83.0982 91.5969 83.0982 91.5089C83.0982 91.4209 83.1422 91.3182 83.2302 91.2009L90.7542 83.1489C90.8422 83.0022 90.8129 82.9289 90.6662 82.9289H78.9622C78.6689 82.9289 78.5222 82.7822 78.5222 82.4889V79.7169C78.5222 79.4236 78.6689 79.2769 78.9622 79.2769H96.0342C96.3275 79.2769 96.4742 79.4236 96.4742 79.7169V82.8849C96.4742 83.0316 96.4009 83.2076 96.2542 83.4129L89.5662 90.7169C89.5075 90.7756 89.4929 90.8342 89.5222 90.8929C89.5515 90.9222 89.6102 90.9516 89.6982 90.9809C91.1942 91.1276 92.4555 91.5969 93.4822 92.3889C94.5089 93.1516 95.3009 94.1782 95.8582 95.4689ZM109.912 91.9049C108.71 91.9049 107.595 91.6116 106.568 91.0249C105.571 90.4382 104.779 89.6462 104.192 88.6489C103.606 87.6516 103.312 86.5516 103.312 85.3489C103.312 84.1756 103.606 83.0902 104.192 82.0929C104.779 81.0956 105.571 80.3182 106.568 79.7609C107.595 79.1742 108.71 78.8809 109.912 78.8809C111.086 78.8809 112.171 79.1742 113.168 79.7609C114.166 80.3476 114.958 81.1396 115.544 82.1369C116.131 83.1049 116.424 84.1756 116.424 85.3489C116.424 86.5516 116.131 87.6516 115.544 88.6489C114.958 89.6462 114.166 90.4382 113.168 91.0249C112.171 91.6116 111.086 91.9049 109.912 91.9049ZM108.636 110.077C108.46 110.077 108.343 110.033 108.284 109.945C108.226 109.828 108.24 109.696 108.328 109.549L124.96 79.5849C125.078 79.3796 125.254 79.2769 125.488 79.2769H127.644C127.82 79.2769 127.938 79.3356 127.996 79.4529C128.055 79.5409 128.04 79.6582 127.952 79.8049L111.32 109.769C111.232 109.974 111.056 110.077 110.792 110.077H108.636ZM109.912 89.3089C110.998 89.3089 111.907 88.9276 112.64 88.1649C113.374 87.4022 113.74 86.4636 113.74 85.3489C113.74 84.2636 113.359 83.3542 112.596 82.6209C111.863 81.8582 110.968 81.4769 109.912 81.4769C108.827 81.4769 107.903 81.8582 107.14 82.6209C106.378 83.3542 105.996 84.2636 105.996 85.3489C105.996 86.4636 106.378 87.4022 107.14 88.1649C107.903 88.9276 108.827 89.3089 109.912 89.3089ZM126.676 110.473C125.474 110.473 124.359 110.18 123.332 109.593C122.335 109.006 121.543 108.214 120.956 107.217C120.37 106.22 120.076 105.134 120.076 103.961C120.076 102.788 120.37 101.702 120.956 100.705C121.543 99.7076 122.335 98.9156 123.332 98.3289C124.359 97.7422 125.474 97.4489 126.676 97.4489C127.85 97.4489 128.935 97.7422 129.932 98.3289C130.93 98.9156 131.722 99.7076 132.308 100.705C132.895 101.702 133.188 102.788 133.188 103.961C133.188 105.134 132.895 106.22 132.308 107.217C131.722 108.214 130.93 109.006 129.932 109.593C128.935 110.18 127.85 110.473 126.676 110.473ZM126.676 107.877C127.762 107.877 128.671 107.496 129.404 106.733C130.138 105.97 130.504 105.046 130.504 103.961C130.504 102.876 130.123 101.952 129.36 101.189C128.627 100.426 127.732 100.045 126.676 100.045C125.591 100.045 124.667 100.426 123.904 101.189C123.142 101.952 122.76 102.876 122.76 103.961C122.76 105.046 123.142 105.97 123.904 106.733C124.667 107.496 125.591 107.877 126.676 107.877Z" fill="white"/>
                    </svg>
                  }
                />
              </Row>
              <Row>
                <Col lg={{span: 10, offset: 1}} xs={{span: 12, offset: 0}}>
                  <div className='about-circle-rectangle-callout'>
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
              <div className='demographic-race-card-container'>
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
                <Col lg={{span: 6, offset: 0}}>
                  <div className='about-diagnosis-card-container'>
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
            <Col lg={{span: 10, offset: 1}}>
              <div className='about-risk-rectangle-callout'>
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