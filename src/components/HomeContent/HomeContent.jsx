import React, { useState, useEffect, useContext, useRef, useCallback } from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'
import { useInView } from 'react-intersection-observer'

import CircleRectangleCard from '../../components/CircleRectangleCard/CircleRectangleCard'
import ToggleBTN from '../../components/ToggleBTN/ToggleBTN'
import HomeSliderRightContent from '../../components/HomeSliderContent/RightContent/RightContent'
import HomeSlideLeftContent from '../../components/HomeSliderContent/LeftContent/LeftContent'

import BGImg from '../../assets/images/pages/home/home-bg-img-2X.webp'
import BGImgFB from '../../assets/images/pages/home/home-bg-img-2X.png'
import BGImgMobile from '../../assets/images/pages/home/home-bg-img-2X-mobile.webp'
import BGImgMobileFB from '../../assets/images/pages/home/home-bg-img-2X-mobile.png'
import TreatmentBGImg from '../../assets/images/pages/home/treatment-bg-img-2X.webp'
import TreatmentBGImgFB from '../../assets/images/pages/home/treatment-bg-img-2X.png'
import TreatmentBGImgMobile from '../../assets/images/pages/home/treatment-bg-img-2X-mobile.webp'
import TreatmentBGImgMobileFB from '../../assets/images/pages/home/treatment-bg-img-2X-mobile.png'
import downArrow from '../../assets/images/global/down-arrow-yellow.svg'
import boxArrowIcon from '../../assets/images/pages/home/box-arrow-icon.svg'

const HomeContent = (props) => {
  const [width, handleWidth] = useState(0);
  const state = useContext(AppContext);
  const {
    currentPage,
    handleCurrentPage,
    setReferences,
    slider,
    handleSlider,
  } = state;

  const circleRefHome = useRef()
  const [circleViewHome, circleInViewHome] = useInView();
  const setRefs = useCallback(
    (node) => {
      circleRefHome.current = node;
      circleViewHome(node);
    },
    [circleViewHome],
  );

  useEffect(() => {
    handleCurrentPage('home');
    setReferences([1, 2, 3, 4, 5, 6, 7]);

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions, { passive: true });
    return function cleanUp() {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, []);

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth);
  }

  return (
    <Layout
      canonicalURL='https://www.myfembreehcp.com/'
      title='Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets HCP Site'
      pageTitle='Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets HCP Site'
      description='Visit the HCP website for more information about Myfembree® tablets for oral use. See benefits & risks, including BOXED WARNING.'
      preLoadImg={true}
    >
      <section
        className='home-container'
        style={
          width > 991 ?
          {backgroundImage: `url(${BGImg}), url(${BGImgFB})`} :
          {backgroundImage: `url(${BGImgMobile}), url(${BGImgMobileFB})`}
        }
        title=''
      >
        <Container>
          <Row>
            <Col lg={{span: 4, offset: 0}}>
              <h3 className='white'>
                NASOPHARYNGEAL CARCINOMA:
              </h3>
              <h1 className='white'>
                FACING THE SURVIVAL FACTS
              </h1>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 4, offset: 0}}>
              <p className='white'>
                Nasopharyngeal carcinoma (NPC) is a distinct cancer with a unique etiology and prognosis. Key data highlight the poor outcomes of patients with recurrent/metastatic nasopharyngeal carcinoma (R/M NPC).
              </p>
              <p className='white home-lower-text'>
                Explore the facts below.
              </p>
              <img src={downArrow} alt=''  />
            </Col>
            <Col lg={{span: 7, offset: 1}}>
              <div className='home-box-section'>
                <div className='home-box-section-title-container'>
                  <div className='home-box-title-border'>

                  </div>
                  <p className='white bolder'>
                    HEAD AND NECK CANCER
                  </p>
                  <h4 className='gold'>
                    1-YEAR PROGRESSION-FREE SURVIVAL
                  </h4>
                  <div className='home-box-title-border'>

                  </div>
                </div>
                <div className='home-box-container'>
                  <div className='home-box-left-container'>
                    <div className='home-box gold-box'>
                      <h1 className='text-center white large-percent'>
                        20%
                      </h1>
                      <p className='text-center white'>
                        R/m Nasopharyngeal<sup>1*</sup>
                      </p>
                    </div>
                    <div className='home-box'>
                      <div className='home-box-percent-container'>
                        <h2 className='white'>
                          43%
                        </h2>
                        <p className='white'>
                          Metastatic Oral cavity<sup>3‡</sup>
                        </p>
                      </div>
                    </div>
                    <div className='home-box'>
                      <div className='home-box-percent-container'>
                        <h2 className='white'>
                          91%
                        </h2>
                        <p className='white'>
                          STAGE IV laryngeal<sup>4§</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='home-box-right-container'>
                    <div className='home-box'>
                      <p className='white bolder'>
                        METASTATIC OROPHARYNGEAL<sup>2†</sup>
                      </p>
                      <div className='home-box-percent-container'>
                        <h2 className='white'>
                          76%
                        </h2>
                        <p className='white'>
                          HPV+
                        </p>
                      </div>
                      <div className='home-box-percent-container'>
                        <h2 className='white'>
                          39%
                        </h2>
                        <p className='white'>
                          HPV-
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='home-cancer-section'>
        <Container>
          <Row>
            <Col lg={{span: 12, offset: 0}}>
              <p className='dark-grey bolder'>
                NASOPHARYNGEAL CARCINOMA (NPC):
              </p>
              <h2 className='dark-grey'>
                A rare and distinct cancer with high propensity for metastasis<sup>5</sup>
              </h2>
              <p>
                Nasopharyngeal carcinoma is considered within the context of head and neck cancers  because of its anatomical location.  But NPC is a distinct cancer with a unique etiology and prognosis. For patients with recurrent/metastatic NPC, the outcomes tell a troubling story. 
              </p>
            </Col>
          </Row>
          <div className='home-cancer-card-section'>
            <Row>
              <CircleRectangleCard
                title={'HIGH LIKELIHOOD OF METASTASIS'}
                content={
                  <>
                    While chemoradiotherapy can achieve good locoregional control, up to 50% of NPC patients will develop distant metastasis during their disease course.<sup>6</sup>
                  </>
                }
                image={
                  <svg width="189" height="190" viewBox="0 0 189 190" fill="none" xmlns="http://www.w3.org/2000/svg" ref={setRefs}>
                  <circle cx="94" cy="95" r="90" stroke="" stroke-width="2" className={circleInViewHome ? 'full-circle-line' : ''} />
                  <mask id="path-2-outside-1_31:1022" maskUnits="userSpaceOnUse" x="93" y="0" width="96" height="190" fill="black">
                  <rect fill="white" x="93" width="96" height="190"/>
                  <path d="M94 4.995C94 2.78862 95.7895 0.991139 97.9939 1.08488C108.975 1.55184 119.799 3.9415 129.972 8.15533C141.377 12.8793 151.739 19.8033 160.468 28.532C169.197 37.2607 176.121 47.6232 180.845 59.0278C185.569 70.4324 188 82.6558 188 95C188 107.344 185.569 119.568 180.845 130.972C176.121 142.377 169.197 152.739 160.468 161.468C151.739 170.197 141.377 177.121 129.972 181.845C119.799 186.059 108.975 188.448 97.9939 188.915C95.7895 189.009 94 187.211 94 185.005C94 182.799 95.7896 181.02 97.9936 180.917C107.925 180.456 117.711 178.275 126.915 174.463C137.35 170.14 146.831 163.805 154.818 155.818C162.805 147.832 169.14 138.35 173.463 127.915C177.785 117.479 180.01 106.295 180.01 95C180.01 83.705 177.785 72.5206 173.463 62.0854C169.14 51.6502 162.805 42.1685 154.818 34.1818C146.831 26.195 137.35 19.8595 126.915 15.5371C117.711 11.7249 107.925 9.54437 97.9936 9.08276C95.7896 8.98032 94 7.20138 94 4.995Z" />
                  </mask>
                  <path d="M94 4.995C94 2.78862 95.7895 0.991139 97.9939 1.08488C108.975 1.55184 119.799 3.9415 129.972 8.15533C141.377 12.8793 151.739 19.8033 160.468 28.532C169.197 37.2607 176.121 47.6232 180.845 59.0278C185.569 70.4324 188 82.6558 188 95C188 107.344 185.569 119.568 180.845 130.972C176.121 142.377 169.197 152.739 160.468 161.468C151.739 170.197 141.377 177.121 129.972 181.845C119.799 186.059 108.975 188.448 97.9939 188.915C95.7895 189.009 94 187.211 94 185.005C94 182.799 95.7896 181.02 97.9936 180.917C107.925 180.456 117.711 178.275 126.915 174.463C137.35 170.14 146.831 163.805 154.818 155.818C162.805 147.832 169.14 138.35 173.463 127.915C177.785 117.479 180.01 106.295 180.01 95C180.01 83.705 177.785 72.5206 173.463 62.0854C169.14 51.6502 162.805 42.1685 154.818 34.1818C146.831 26.195 137.35 19.8595 126.915 15.5371C117.711 11.7249 107.925 9.54437 97.9936 9.08276C95.7896 8.98032 94 7.20138 94 4.995Z" fill="" className={circleInViewHome ? 'yellow-line' : ''} />
                  {/* <path d="M94 4.995C94 2.78862 95.7895 0.991139 97.9939 1.08488C108.975 1.55184 119.799 3.9415 129.972 8.15533C141.377 12.8793 151.739 19.8033 160.468 28.532C169.197 37.2607 176.121 47.6232 180.845 59.0278C185.569 70.4324 188 82.6558 188 95C188 107.344 185.569 119.568 180.845 130.972C176.121 142.377 169.197 152.739 160.468 161.468C151.739 170.197 141.377 177.121 129.972 181.845C119.799 186.059 108.975 188.448 97.9939 188.915C95.7895 189.009 94 187.211 94 185.005C94 182.799 95.7896 181.02 97.9936 180.917C107.925 180.456 117.711 178.275 126.915 174.463C137.35 170.14 146.831 163.805 154.818 155.818C162.805 147.832 169.14 138.35 173.463 127.915C177.785 117.479 180.01 106.295 180.01 95C180.01 83.705 177.785 72.5206 173.463 62.0854C169.14 51.6502 162.805 42.1685 154.818 34.1818C146.831 26.195 137.35 19.8595 126.915 15.5371C117.711 11.7249 107.925 9.54437 97.9936 9.08276C95.7896 8.98032 94 7.20138 94 4.995Z" stroke="#3E404C" stroke-width="2" mask="url(#path-2-outside-1_31:1022)"/> */}
                  <path d="M71.7204 96.4369C72.043 97.7276 72.2044 99.0622 72.2044 100.441C72.2044 101.82 72.0284 103.096 71.6764 104.269C71.119 106.146 70.0484 107.642 68.4644 108.757C66.9097 109.842 65.047 110.385 62.8764 110.385C60.735 110.385 58.9017 109.857 57.3764 108.801C55.851 107.745 54.7804 106.308 54.1644 104.489C53.871 103.668 53.7097 102.949 53.6804 102.333V102.245C53.6804 102.01 53.8124 101.893 54.0764 101.893H57.5524C57.8164 101.893 57.963 102.025 57.9924 102.289C58.0217 102.494 58.095 102.802 58.2124 103.213C58.535 104.298 59.0924 105.164 59.8844 105.809C60.7057 106.425 61.6884 106.733 62.8324 106.733C64.035 106.733 65.047 106.41 65.8684 105.765C66.719 105.09 67.291 104.166 67.5844 102.993C67.7897 102.377 67.8924 101.526 67.8924 100.441C67.8924 99.4729 67.8044 98.5782 67.6284 97.7569C67.423 96.6422 66.895 95.7916 66.0444 95.2049C65.223 94.5889 64.1964 94.2809 62.9644 94.2809C61.8204 94.2809 60.7937 94.5449 59.8844 95.0729C58.975 95.5716 58.3884 96.2462 58.1244 97.0969C58.0364 97.3609 57.875 97.4929 57.6404 97.4929H54.1204C53.827 97.4929 53.6804 97.3462 53.6804 97.0529V79.7169C53.6804 79.4236 53.827 79.2769 54.1204 79.2769H70.5764C70.8697 79.2769 71.0164 79.4236 71.0164 79.7169V82.4889C71.0164 82.7822 70.8697 82.9289 70.5764 82.9289H58.0804C57.963 82.9289 57.9044 82.9876 57.9044 83.1049L57.8604 92.3009C57.8604 92.4769 57.9337 92.5209 58.0804 92.4329C58.7844 91.8169 59.591 91.3622 60.5004 91.0689C61.439 90.7462 62.4217 90.5849 63.4484 90.5849C65.5017 90.5849 67.2617 91.0982 68.7284 92.1249C70.2244 93.1516 71.2217 94.5889 71.7204 96.4369ZM87.0076 110.517C84.0449 110.517 81.6836 109.681 79.9236 108.009C78.1929 106.308 77.3276 104.034 77.3276 101.189V88.1649C77.3276 85.3196 78.1929 83.0609 79.9236 81.3889C81.6836 79.7169 84.0449 78.8809 87.0076 78.8809C89.9703 78.8809 92.3316 79.7169 94.0916 81.3889C95.8809 83.0609 96.7756 85.3196 96.7756 88.1649V101.189C96.7756 104.034 95.8809 106.308 94.0916 108.009C92.3316 109.681 89.9703 110.517 87.0076 110.517ZM87.0076 106.865C88.7089 106.865 90.0583 106.381 91.0556 105.413C92.0529 104.416 92.5516 103.096 92.5516 101.453V87.9889C92.5516 86.3462 92.0529 85.0409 91.0556 84.0729C90.0583 83.0756 88.7089 82.5769 87.0076 82.5769C85.3649 82.5769 84.0449 83.0756 83.0476 84.0729C82.0503 85.0409 81.5516 86.3462 81.5516 87.9889V101.453C81.5516 103.096 82.0503 104.416 83.0476 105.413C84.0449 106.381 85.3649 106.865 87.0076 106.865ZM110.169 91.9049C108.967 91.9049 107.852 91.6116 106.825 91.0249C105.828 90.4382 105.036 89.6462 104.449 88.6489C103.863 87.6516 103.569 86.5516 103.569 85.3489C103.569 84.1756 103.863 83.0902 104.449 82.0929C105.036 81.0956 105.828 80.3182 106.825 79.7609C107.852 79.1742 108.967 78.8809 110.169 78.8809C111.343 78.8809 112.428 79.1742 113.425 79.7609C114.423 80.3476 115.215 81.1396 115.801 82.1369C116.388 83.1049 116.681 84.1756 116.681 85.3489C116.681 86.5516 116.388 87.6516 115.801 88.6489C115.215 89.6462 114.423 90.4382 113.425 91.0249C112.428 91.6116 111.343 91.9049 110.169 91.9049ZM108.893 110.077C108.717 110.077 108.6 110.033 108.541 109.945C108.483 109.828 108.497 109.696 108.585 109.549L125.217 79.5849C125.335 79.3796 125.511 79.2769 125.745 79.2769H127.901C128.077 79.2769 128.195 79.3356 128.253 79.4529C128.312 79.5409 128.297 79.6582 128.209 79.8049L111.577 109.769C111.489 109.974 111.313 110.077 111.049 110.077H108.893ZM110.169 89.3089C111.255 89.3089 112.164 88.9276 112.897 88.1649C113.631 87.4022 113.997 86.4636 113.997 85.3489C113.997 84.2636 113.616 83.3542 112.853 82.6209C112.12 81.8582 111.225 81.4769 110.169 81.4769C109.084 81.4769 108.16 81.8582 107.397 82.6209C106.635 83.3542 106.253 84.2636 106.253 85.3489C106.253 86.4636 106.635 87.4022 107.397 88.1649C108.16 88.9276 109.084 89.3089 110.169 89.3089ZM126.933 110.473C125.731 110.473 124.616 110.18 123.589 109.593C122.592 109.006 121.8 108.214 121.213 107.217C120.627 106.22 120.333 105.134 120.333 103.961C120.333 102.788 120.627 101.702 121.213 100.705C121.8 99.7076 122.592 98.9156 123.589 98.3289C124.616 97.7422 125.731 97.4489 126.933 97.4489C128.107 97.4489 129.192 97.7422 130.189 98.3289C131.187 98.9156 131.979 99.7076 132.565 100.705C133.152 101.702 133.445 102.788 133.445 103.961C133.445 105.134 133.152 106.22 132.565 107.217C131.979 108.214 131.187 109.006 130.189 109.593C129.192 110.18 128.107 110.473 126.933 110.473ZM126.933 107.877C128.019 107.877 128.928 107.496 129.661 106.733C130.395 105.97 130.761 105.046 130.761 103.961C130.761 102.876 130.38 101.952 129.617 101.189C128.884 100.426 127.989 100.045 126.933 100.045C125.848 100.045 124.924 100.426 124.161 101.189C123.399 101.952 123.017 102.876 123.017 103.961C123.017 105.046 123.399 105.97 124.161 106.733C124.924 107.496 125.848 107.877 126.933 107.877Z" fill="white"/>
                  </svg>
                }
              />
              <CircleRectangleCard
                title={'LOW PROGRESSION-FREE SURVIVAL (PFS) in r/m NPC'}
                content={
                  <>
                    A key study showed a 1-year PFS rate of 20% for patients whose R/M NPC was treated with standard of care chemotherapy.<sup>1*</sup>
                  </>
                }
                image={
                  <svg width="188" height="189" viewBox="0 0 188 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="94" cy="95" r="90" stroke="" stroke-width="2" className={circleInViewHome ? 'full-circle-line' : ''} />
                  <mask id="path-2-outside-1_31:1038" maskUnits="userSpaceOnUse" x="93" y="0" width="91" height="69" fill="black">
                  <rect fill="white" x="93" width="91" height="69"/>
                  <path d="M94 4.995C94 2.78862 95.7896 0.991138 97.994 1.08486C116.435 1.86889 134.271 8.06843 149.252 18.9524C164.232 29.8364 175.64 44.8836 182.084 62.1801C182.855 64.2476 181.698 66.5051 179.6 67.1869C177.501 67.8687 175.256 66.7162 174.478 64.6517C168.561 48.959 158.171 35.3085 144.555 25.4164C130.94 15.5244 114.747 9.8613 97.9939 9.08274C95.7899 8.98032 94 7.20138 94 4.995Z"/>
                  </mask>
                  <path d="M94 4.995C94 2.78862 95.7896 0.991138 97.994 1.08486C116.435 1.86889 134.271 8.06843 149.252 18.9524C164.232 29.8364 175.64 44.8836 182.084 62.1801C182.855 64.2476 181.698 66.5051 179.6 67.1869C177.501 67.8687 175.256 66.7162 174.478 64.6517C168.561 48.959 158.171 35.3085 144.555 25.4164C130.94 15.5244 114.747 9.8613 97.9939 9.08274C95.7899 8.98032 94 7.20138 94 4.995Z" fill="" className={circleInViewHome ? 'yellow-line' : ''} />
                  {/* <path d="M94 4.995C94 2.78862 95.7896 0.991138 97.994 1.08486C116.435 1.86889 134.271 8.06843 149.252 18.9524C164.232 29.8364 175.64 44.8836 182.084 62.1801C182.855 64.2476 181.698 66.5051 179.6 67.1869C177.501 67.8687 175.256 66.7162 174.478 64.6517C168.561 48.959 158.171 35.3085 144.555 25.4164C130.94 15.5244 114.747 9.8613 97.9939 9.08274C95.7899 8.98032 94 7.20138 94 4.995Z" stroke="#3E404C" stroke-width="2" mask="url(#path-2-outside-1_31:1038)"/> */}
                  <path d="M59.0532 106.205C59.0239 106.264 59.0239 106.322 59.0532 106.381C59.0825 106.41 59.1265 106.425 59.1852 106.425H72.4292C72.7225 106.425 72.8692 106.572 72.8692 106.865V109.637C72.8692 109.93 72.7225 110.077 72.4292 110.077H53.9932C53.6999 110.077 53.5532 109.93 53.5532 109.637V106.953C53.5532 106.748 53.6265 106.572 53.7732 106.425C54.7705 105.281 57.0585 102.597 60.6372 98.3729L63.6732 94.7209C66.4012 91.4649 67.7652 88.9422 67.7652 87.1529C67.7652 85.7742 67.2959 84.6742 66.3572 83.8529C65.4479 83.0022 64.2305 82.5769 62.7052 82.5769C61.1799 82.5769 59.9625 83.0022 59.0532 83.8529C58.1439 84.7036 57.7039 85.8182 57.7332 87.1969V88.5169C57.7332 88.8102 57.5865 88.9569 57.2932 88.9569H53.9052C53.6119 88.9569 53.4652 88.8102 53.4652 88.5169V86.6249C53.5239 85.0996 53.9492 83.7502 54.7412 82.5769C55.5625 81.4036 56.6625 80.5089 58.0412 79.8929C59.4199 79.2476 60.9745 78.9249 62.7052 78.9249C64.5825 78.9249 66.2252 79.2769 67.6332 79.9809C69.0412 80.6849 70.1265 81.6529 70.8892 82.8849C71.6519 84.1169 72.0332 85.5102 72.0332 87.0649C72.0332 89.4996 70.7132 92.3742 68.0732 95.6889C66.8999 97.1849 65.5065 98.8716 63.8932 100.749C62.2799 102.597 60.6665 104.416 59.0532 106.205ZM87.9588 110.517C84.9961 110.517 82.6348 109.681 80.8748 108.009C79.1441 106.308 78.2788 104.034 78.2788 101.189V88.1649C78.2788 85.3196 79.1441 83.0609 80.8748 81.3889C82.6348 79.7169 84.9961 78.8809 87.9588 78.8809C90.9215 78.8809 93.2828 79.7169 95.0428 81.3889C96.8321 83.0609 97.7268 85.3196 97.7268 88.1649V101.189C97.7268 104.034 96.8321 106.308 95.0428 108.009C93.2828 109.681 90.9215 110.517 87.9588 110.517ZM87.9588 106.865C89.6601 106.865 91.0095 106.381 92.0068 105.413C93.0041 104.416 93.5028 103.096 93.5028 101.453V87.9889C93.5028 86.3462 93.0041 85.0409 92.0068 84.0729C91.0095 83.0756 89.6601 82.5769 87.9588 82.5769C86.3161 82.5769 84.9961 83.0756 83.9988 84.0729C83.0015 85.0409 82.5028 86.3462 82.5028 87.9889V101.453C82.5028 103.096 83.0015 104.416 83.9988 105.413C84.9961 106.381 86.3161 106.865 87.9588 106.865ZM111.121 91.9049C109.918 91.9049 108.803 91.6116 107.777 91.0249C106.779 90.4382 105.987 89.6462 105.401 88.6489C104.814 87.6516 104.521 86.5516 104.521 85.3489C104.521 84.1756 104.814 83.0902 105.401 82.0929C105.987 81.0956 106.779 80.3182 107.777 79.7609C108.803 79.1742 109.918 78.8809 111.121 78.8809C112.294 78.8809 113.379 79.1742 114.377 79.7609C115.374 80.3476 116.166 81.1396 116.753 82.1369C117.339 83.1049 117.633 84.1756 117.633 85.3489C117.633 86.5516 117.339 87.6516 116.753 88.6489C116.166 89.6462 115.374 90.4382 114.377 91.0249C113.379 91.6116 112.294 91.9049 111.121 91.9049ZM109.845 110.077C109.669 110.077 109.551 110.033 109.493 109.945C109.434 109.828 109.449 109.696 109.537 109.549L126.169 79.5849C126.286 79.3796 126.462 79.2769 126.697 79.2769H128.853C129.029 79.2769 129.146 79.3356 129.205 79.4529C129.263 79.5409 129.249 79.6582 129.161 79.8049L112.529 109.769C112.441 109.974 112.265 110.077 112.001 110.077H109.845ZM111.121 89.3089C112.206 89.3089 113.115 88.9276 113.849 88.1649C114.582 87.4022 114.949 86.4636 114.949 85.3489C114.949 84.2636 114.567 83.3542 113.805 82.6209C113.071 81.8582 112.177 81.4769 111.121 81.4769C110.035 81.4769 109.111 81.8582 108.349 82.6209C107.586 83.3542 107.205 84.2636 107.205 85.3489C107.205 86.4636 107.586 87.4022 108.349 88.1649C109.111 88.9276 110.035 89.3089 111.121 89.3089ZM127.885 110.473C126.682 110.473 125.567 110.18 124.541 109.593C123.543 109.006 122.751 108.214 122.165 107.217C121.578 106.22 121.285 105.134 121.285 103.961C121.285 102.788 121.578 101.702 122.165 100.705C122.751 99.7076 123.543 98.9156 124.541 98.3289C125.567 97.7422 126.682 97.4489 127.885 97.4489C129.058 97.4489 130.143 97.7422 131.141 98.3289C132.138 98.9156 132.93 99.7076 133.517 100.705C134.103 101.702 134.397 102.788 134.397 103.961C134.397 105.134 134.103 106.22 133.517 107.217C132.93 108.214 132.138 109.006 131.141 109.593C130.143 110.18 129.058 110.473 127.885 110.473ZM127.885 107.877C128.97 107.877 129.879 107.496 130.613 106.733C131.346 105.97 131.713 105.046 131.713 103.961C131.713 102.876 131.331 101.952 130.569 101.189C129.835 100.426 128.941 100.045 127.885 100.045C126.799 100.045 125.875 100.426 125.113 101.189C124.35 101.952 123.969 102.876 123.969 103.961C123.969 105.046 124.35 105.97 125.113 106.733C125.875 107.496 126.799 107.877 127.885 107.877Z" fill="white"/>
                  </svg>
                }
              />
            </Row>
          </div>
          <Row>
            <Col>
              <div className='footnote-container'>
                <h6 className='dark-grey'>
                  *Results from a multicenter, randomized, open-label phase 3 trial of patients with recurrent or metastatic nasopharyngeal carcinoma (N=362).
                </h6>
                <h6 className='dark-grey'>
                  †Results from a retrospective analysis of patients with HPV-positive and HPV-negative recurrent locoregional and distant metastatic oropharyngeal cancer (N=108).
                </h6>
                <h6 className='dark-grey'>
                  ‡Results from a retrospective study of patients with locally advanced and recurrent/metastatic oral cancer treated with cetuximab therapy (N=21).
                </h6>
                <h6 className='dark-grey'>
                  §Results from a retrospective study of patients with laryngeal squamous cell carcinoma (N=211).
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='home-outcomes-section' id='outcomes'>
        <Container>
          <Row>
            <Col lg={{span: 12}}>
              <h2 className='white text-center'>
                5-year overall survival (OS) for NPC (ALL STAGES) varies greatly across histologies
              </h2>
              <h2 className='white text-center'>
                Rates are low in R/M disease for common patient types<sup>7¶</sup>
              </h2>
              <p className='white text-center bolder'>
                Click the buttons below to see OS rates by race.
              </p>
            </Col>
          </Row>
          <Row>
            <ToggleBTN />
          </Row>
          <Row>
            {
              !slider ?
              <HomeSlideLeftContent />
              :
              <HomeSliderRightContent />
            }
          </Row>
        </Container>
      </section>

      <section
        className='home-treatment-container'
        id='treatment'
        style={
          width > 991 ?
          {backgroundImage: `url(${TreatmentBGImg}), url(${TreatmentBGImgFB})`} :
          {backgroundImage: `url(${TreatmentBGImgMobile}), url(${TreatmentBGImgMobileFB})`}
        }
        title=''
      >
        <Container>
          <Row>
            <Col lg={{span: 12, offset: 0}}>
              <Row>
                <Col lg={{span: 6, offset: 0}}>
                  <h2 className='dark-grey'>
                    Current treatment options in R/M NPC are limited.
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col lg={{span: 2, offset: 0}}>
                  <div className='treatment-box-image-container'>
                    <img src={boxArrowIcon} alt='' />
                  </div>
                </Col>
                <Col lg={{span: 5, offset: 0}}>
                  <div className='treatment-box-content-container'>
                    <p>
                      Standard of care chemotherapy (gemcitabine/cisplatin) is unique to NPC and was established <span className='extra-bold'>in a single phase 3 trial in 2016</span><sup>1,5</sup>
                    </p>
                    <p>
                      <span className='extra-bold'>Still no FDA-approved treatments</span>, including I/O agents <br />
                      <span className='extra-bold'>Still no PREFERRED I/O treatments</span> in NCCN® Guidelines
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={{span: 6, offset: 0}}>
                  <div className='home-treatment-lower-container'>
                    <p className='bolder'>
                      Current NCCN Guidelines only recommend 2 PD-1 inhibitors for 2nd line R/M NPC based on Category 2B evidence<sup>5</sup>
                    </p>
                    <div className='cta-btn-container'>
                      <Link
                        to={'/about/'}
                      >
                        <button className='cta-btn dark-grey-btn'>
                          Learn more about this distinct cancer
                        </button>
                      </Link>
                    </div>
                    <h6>
                      NCCN = National Comprehensive Cancer Network.
                    </h6>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

    </Layout>
  )
}

export default HomeContent