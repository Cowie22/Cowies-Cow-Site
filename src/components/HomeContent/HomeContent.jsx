import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from 'react'
import { Link } from 'gatsby'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'
import { useInView } from 'react-intersection-observer'

import CircleRectangleCard from '../../components/CircleRectangleCard/CircleRectangleCard'
import ToggleBTN from '../../components/ToggleBTN/ToggleBTN'
import HomeSliderRightContent from '../../components/HomeSliderContent/RightContent/RightContent'
import HomeSlideLeftContent from '../../components/HomeSliderContent/LeftContent/LeftContent'

import downArrow from '../../assets/images/global/down-arrow-yellow.svg'

const HomeContent = props => {
  const [width, handleWidth] = useState(0)
  const [landed, handleLanded] = useState(false)
  const state = useContext(AppContext)
  const {
    currentPage,
    handleCurrentPage,
    setReferences,
    slider,
    handleSlider,
  } = state

  const circleRefHome = useRef()
  const [circleViewHome, circleInViewHome] = useInView({ triggerOnce: true })
  const setRefs = useCallback(
    node => {
      circleRefHome.current = node
      circleViewHome(node)
    },
    [circleViewHome]
  )

  const circleRefHome2 = useRef()
  const [circleViewHome2, circleInViewHome2] = useInView({ triggerOnce: true })
  const setRefs2 = useCallback(
    node => {
      circleRefHome2.current = node
      circleViewHome2(node)
    },
    [circleViewHome2]
  )

  const boxRef = useRef()
  const [boxView, boxInView] = useInView({ triggerOnce: true })
  const setBoxRef = useCallback(
    node => {
      boxRef.current = node
      boxView(node)
    },
    [boxView]
  )

  const boxRef2 = useRef()
  const [boxView2, boxInView2] = useInView({ triggerOnce: true })
  const setBoxRef2 = useCallback(
    node => {
      boxRef2.current = node
      boxView2(node)
    },
    [boxView2]
  )

  const handleDriveToId = () => {
    let path = window.location.href.split('#')[1]
    let hashID = document.getElementById(path)
    window.scrollTo({
      top: hashID.offsetTop - 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let path = window.location.href
      if (!path.includes('#')) {
        window.scrollTo(0, 0)
        setTimeout(() => {
          handleLanded(true)
        }, 500)
      } else {
        handleLanded(true)
        setTimeout(() => {
          handleDriveToId()
        }, 200)
      }
    }

    handleCurrentPage('home')
    setReferences([1, 2, 4, 5, 6, 7])

    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions, { passive: true })
    return function cleanUp() {
      window.removeEventListener('resize', updateWindowDimensions)
    }
  }, [])

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth)
  }

  return (
    <Layout
      canonicalURL='https://www.npcfacts.com/'
      title='Get the facts about nasopharyngeal carcinoma (NPC)'
      pageTitle='Get the facts about nasopharyngeal carcinoma (NPC)'
      description='Outcomes are poor with current treatment options in metastatic NPC. Face the facts about this distinct cancer.'
      keyWords='Nasopharyngeal carcinoma; NPC treatments; NPC outcomes'
    >
      <section className='home-outer-background-container'>
        <section
          className='home-container'
          title='Low progression-free survival for NPC patients'
        >
          <Container>
            <Row>
              <Col lg={{ span: 4, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                <h3 className='white'>Nasopharyngeal carcinoma (NPC):</h3>
                <h1 className='white'>FACING THE SURVIVAL FACTS</h1>
              </Col>
            </Row>
            <Row>
              <Col
                lg={{ span: 4, offset: 0, order: 1 }}
                xs={{ span: 12, offset: 0, order: 2 }}
              >
                <div className='home-hero-lower-content-container'>
                  <p className='white'>
                    Nasopharyngeal carcinoma (NPC) is a distinct cancer with a
                    unique etiology and prognosis. Key data, including progression-free survival and overall survival, highlight the poor
                    outcomes of patients with recurrent/metastatic
                    nasopharyngeal carcinoma (R/M NPC).
                  </p>
                  <p className='white home-lower-text'>
                    Explore the facts below.
                  </p>
                  <div className='home-arrow-icon-container'>
                    <img src={downArrow} alt='' />
                  </div>
                </div>
              </Col>
              <Col
                xl={{ span: 7, offset: 1, order: 2 }}
                lg={{ span: 8, offset: 0, order: 2 }}
                md={{ span: 8, offset: 3, order: 1 }}
                xs={{ span: 9, offset: 3, order: 1 }}
                className='home-box-col'
              >
                <div
                  ref={setBoxRef}
                  className={
                    boxInView
                      ? 'home-box-section active-box'
                      : 'home-box-section'
                  }
                >
                  <div className='home-box-section-title-container'>
                    <div className='home-box-title-border'></div>
                    <p className='white bolder'>HEAD AND NECK CANCERS</p>
                    <h4 className='gold'>
                      1&#8209;YEAR <br /> PROGRESSION&#8209;FREE <br /> SURVIVAL
                    </h4>
                    <div className='home-box-title-border'></div>
                  </div>
                  <div className='home-box-container'>
                    <div className='home-box-left-container'>
                      <div className='home-box gold-box'>
                        <h1 className='text-center white large-percent'>
                          20<small>%</small>
                        </h1>
                        <p className='text-center white'>
                          R/M NASOPHARYNGEAL<sup>1</sup>*
                        </p>
                      </div>
                      <div className='home-box home-box-stacked'>
                        <p className='white bolder'>
                          METASTATIC OROPHARYNGEAL<sup>2†</sup>
                        </p>
                        <div className='home-box-right-inner-container'>
                          <div className='home-box-percent-container'>
                            <h2 className='white'>
                              76<small>%</small>
                            </h2>
                            <p className='white'>HPV+</p>
                          </div>
                          <div className='home-box-percent-container'>
                            <h2 className='white'>
                              39<small>%</small>
                            </h2>
                            <p className='white'>HPV-</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className='home-box'>
                        <div className='home-box-percent-container'>
                          <h2 className='white'>
                            43<small>%</small>
                          </h2>
                          <p className='white'>
                            Metastatic Oral cavity<sup>3‡</sup>
                          </p>
                        </div>
                      </div> */}
                      <div className='home-box bottom-box'>
                        <div className='home-box-percent-container'>
                          <h2 className='white'>
                            91<small>%</small>
                          </h2>
                          <p className='white'>
                            STAGE IV laryngeal<sup>3‡</sup>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className='home-box-right-container'>
                      <div className='home-box'>
                        <p className='white bolder'>
                          METASTATIC OROPHARYNGEAL<sup>2†</sup>
                        </p>
                        <div className='home-box-right-inner-container'>
                          <div className='home-box-percent-container'>
                            <h2 className='white'>
                              76<small>%</small>
                            </h2>
                            <p className='white'>HPV+</p>
                          </div>
                          <div className='home-box-percent-container'>
                            <h2 className='white'>
                              39<small>%</small>
                            </h2>
                            <p className='white'>HPV-</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      {landed ? (
        <>
          <section className='home-cancer-section'>
            <Container>
              <Row>
                <Col lg={{ span: 12, offset: 0 }}>
                  <div className='footnote-container'>
                    <h6 className='dark-grey'>
                      *Results from a multicenter, randomized, open-label phase
                      3 trial of patients with recurrent or metastatic
                      nasopharyngeal carcinoma (N=362).
                    </h6>
                    <h6 className='dark-grey'>
                      †Results from a retrospective analysis of patients with
                      HPV-positive and HPV-negative recurrent locoregional and
                      distant metastatic oropharyngeal cancer (N=108).
                    </h6>
                    <h6 className='dark-grey'>
                      ‡Results from a retrospective study of patients with
                      laryngeal squamous cell carcinoma (N=211).
                    </h6>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={{ span: 12, offset: 0 }}>
                  <p className='dark-grey bolder'>
                    NASOPHARYNGEAL CARCINOMA (NPC):
                  </p>
                  <h2 className='dark-grey'>
                    A rare and distinct cancer with high propensity for
                    metastasis
                    <sup>4</sup>
                  </h2>
                  <p>
                    Nasopharyngeal carcinoma is considered within the context of
                    head and neck cancers because of its anatomical location.
                    But NPC is a distinct cancer because of its unique etiology,
                    demographics, treatment, and prognosis. For patients with
                    recurrent/metastatic NPC, the outcomes tell a troubling
                    story.
                  </p>
                </Col>
              </Row>
              <div className='home-cancer-card-section'>
                <Row>
                  <CircleRectangleCard
                    title={'HIGH LIKELIHOOD OF METASTASIS'}
                    content={
                      <>
                        While chemoradiotherapy can achieve good locoregional
                        control, 18%-50% of NPC patients will develop distant
                        metastasis during their disease course.<sup>5</sup>
                      </>
                    }
                    delayClass=''
                    circleDelayClass=''
                    image={
                      <svg
                        width='188'
                        height='188'
                        viewBox='0 0 188 188'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        ref={setRefs}
                      >
                        <circle
                          cx='94'
                          cy='94'
                          r='90'
                          stroke='#997F8A'
                          strokeWidth='2'
                        />
                        <path
                          d='M94 4C143.706 4 184 44.2944 184 94C184 143.706 143.706 184 94 184'
                          stroke=''
                          strokeWidth='8'
                          strokeLinecap='round'
                          className={circleInViewHome ? 'yellow-line' : ''}
                        />
                        <path
                          d='M71.7204 95.36C72.043 96.6507 72.2044 97.9853 72.2044 99.364C72.2044 100.743 72.0284 102.019 71.6764 103.192C71.119 105.069 70.0484 106.565 68.4644 107.68C66.9097 108.765 65.047 109.308 62.8764 109.308C60.735 109.308 58.9017 108.78 57.3764 107.724C55.851 106.668 54.7804 105.231 54.1644 103.412C53.871 102.591 53.7097 101.872 53.6804 101.256V101.168C53.6804 100.933 53.8124 100.816 54.0764 100.816H57.5524C57.8164 100.816 57.963 100.948 57.9924 101.212C58.0217 101.417 58.095 101.725 58.2124 102.136C58.535 103.221 59.0924 104.087 59.8844 104.732C60.7057 105.348 61.6884 105.656 62.8324 105.656C64.035 105.656 65.047 105.333 65.8684 104.688C66.719 104.013 67.291 103.089 67.5844 101.916C67.7897 101.3 67.8924 100.449 67.8924 99.364C67.8924 98.396 67.8044 97.5013 67.6284 96.68C67.423 95.5653 66.895 94.7147 66.0444 94.128C65.223 93.512 64.1964 93.204 62.9644 93.204C61.8204 93.204 60.7937 93.468 59.8844 93.996C58.975 94.4947 58.3884 95.1693 58.1244 96.02C58.0364 96.284 57.875 96.416 57.6404 96.416H54.1204C53.827 96.416 53.6804 96.2693 53.6804 95.976V78.64C53.6804 78.3467 53.827 78.2 54.1204 78.2H70.5764C70.8697 78.2 71.0164 78.3467 71.0164 78.64V81.412C71.0164 81.7053 70.8697 81.852 70.5764 81.852H58.0804C57.963 81.852 57.9044 81.9107 57.9044 82.028L57.8604 91.224C57.8604 91.4 57.9337 91.444 58.0804 91.356C58.7844 90.74 59.591 90.2853 60.5004 89.992C61.439 89.6693 62.4217 89.508 63.4484 89.508C65.5017 89.508 67.2617 90.0213 68.7284 91.048C70.2244 92.0747 71.2217 93.512 71.7204 95.36ZM87.0076 109.44C84.0449 109.44 81.6836 108.604 79.9236 106.932C78.1929 105.231 77.3276 102.957 77.3276 100.112V87.088C77.3276 84.2427 78.1929 81.984 79.9236 80.312C81.6836 78.64 84.0449 77.804 87.0076 77.804C89.9703 77.804 92.3316 78.64 94.0916 80.312C95.8809 81.984 96.7756 84.2427 96.7756 87.088V100.112C96.7756 102.957 95.8809 105.231 94.0916 106.932C92.3316 108.604 89.9703 109.44 87.0076 109.44ZM87.0076 105.788C88.7089 105.788 90.0583 105.304 91.0556 104.336C92.0529 103.339 92.5516 102.019 92.5516 100.376V86.912C92.5516 85.2693 92.0529 83.964 91.0556 82.996C90.0583 81.9987 88.7089 81.5 87.0076 81.5C85.3649 81.5 84.0449 81.9987 83.0476 82.996C82.0503 83.964 81.5516 85.2693 81.5516 86.912V100.376C81.5516 102.019 82.0503 103.339 83.0476 104.336C84.0449 105.304 85.3649 105.788 87.0076 105.788ZM110.169 90.828C108.967 90.828 107.852 90.5347 106.825 89.948C105.828 89.3613 105.036 88.5693 104.449 87.572C103.863 86.5747 103.569 85.4747 103.569 84.272C103.569 83.0987 103.863 82.0133 104.449 81.016C105.036 80.0187 105.828 79.2413 106.825 78.684C107.852 78.0973 108.967 77.804 110.169 77.804C111.343 77.804 112.428 78.0973 113.425 78.684C114.423 79.2707 115.215 80.0627 115.801 81.06C116.388 82.028 116.681 83.0987 116.681 84.272C116.681 85.4747 116.388 86.5747 115.801 87.572C115.215 88.5693 114.423 89.3613 113.425 89.948C112.428 90.5347 111.343 90.828 110.169 90.828ZM108.893 109C108.717 109 108.6 108.956 108.541 108.868C108.483 108.751 108.497 108.619 108.585 108.472L125.217 78.508C125.335 78.3027 125.511 78.2 125.745 78.2H127.901C128.077 78.2 128.195 78.2587 128.253 78.376C128.312 78.464 128.297 78.5813 128.209 78.728L111.577 108.692C111.489 108.897 111.313 109 111.049 109H108.893ZM110.169 88.232C111.255 88.232 112.164 87.8507 112.897 87.088C113.631 86.3253 113.997 85.3867 113.997 84.272C113.997 83.1867 113.616 82.2773 112.853 81.544C112.12 80.7813 111.225 80.4 110.169 80.4C109.084 80.4 108.16 80.7813 107.397 81.544C106.635 82.2773 106.253 83.1867 106.253 84.272C106.253 85.3867 106.635 86.3253 107.397 87.088C108.16 87.8507 109.084 88.232 110.169 88.232ZM126.933 109.396C125.731 109.396 124.616 109.103 123.589 108.516C122.592 107.929 121.8 107.137 121.213 106.14C120.627 105.143 120.333 104.057 120.333 102.884C120.333 101.711 120.627 100.625 121.213 99.628C121.8 98.6307 122.592 97.8387 123.589 97.252C124.616 96.6653 125.731 96.372 126.933 96.372C128.107 96.372 129.192 96.6653 130.189 97.252C131.187 97.8387 131.979 98.6307 132.565 99.628C133.152 100.625 133.445 101.711 133.445 102.884C133.445 104.057 133.152 105.143 132.565 106.14C131.979 107.137 131.187 107.929 130.189 108.516C129.192 109.103 128.107 109.396 126.933 109.396ZM126.933 106.8C128.019 106.8 128.928 106.419 129.661 105.656C130.395 104.893 130.761 103.969 130.761 102.884C130.761 101.799 130.38 100.875 129.617 100.112C128.884 99.3493 127.989 98.968 126.933 98.968C125.848 98.968 124.924 99.3493 124.161 100.112C123.399 100.875 123.017 101.799 123.017 102.884C123.017 103.969 123.399 104.893 124.161 105.656C124.924 106.419 125.848 106.8 126.933 106.8Z'
                          fill='white'
                        />
                        <path
                          d='M75.724 59.144C74.836 59.144 74.05 58.97 73.366 58.622C72.682 58.274 72.148 57.782 71.764 57.146C71.392 56.498 71.206 55.754 71.206 54.914V46.616C71.206 46.556 71.224 46.508 71.26 46.472C71.308 46.424 71.362 46.4 71.422 46.4H73.078C73.138 46.4 73.186 46.424 73.222 46.472C73.27 46.508 73.294 46.556 73.294 46.616V54.95C73.294 55.658 73.516 56.234 73.96 56.678C74.404 57.122 74.992 57.344 75.724 57.344C76.456 57.344 77.044 57.122 77.488 56.678C77.932 56.234 78.154 55.658 78.154 54.95V46.616C78.154 46.556 78.172 46.508 78.208 46.472C78.256 46.424 78.31 46.4 78.37 46.4H80.026C80.086 46.4 80.134 46.424 80.17 46.472C80.218 46.508 80.242 46.556 80.242 46.616V54.914C80.242 55.754 80.056 56.498 79.684 57.146C79.312 57.782 78.784 58.274 78.1 58.622C77.416 58.97 76.624 59.144 75.724 59.144ZM87.9954 46.382C88.7514 46.382 89.4174 46.538 89.9934 46.85C90.5694 47.162 91.0134 47.606 91.3254 48.182C91.6494 48.746 91.8114 49.4 91.8114 50.144C91.8114 50.876 91.6494 51.524 91.3254 52.088C91.0014 52.652 90.5394 53.09 89.9394 53.402C89.3514 53.702 88.6674 53.852 87.8874 53.852H85.0074C84.9474 53.852 84.9174 53.882 84.9174 53.942V58.784C84.9174 58.844 84.8934 58.898 84.8454 58.946C84.8094 58.982 84.7614 59 84.7014 59H83.0454C82.9854 59 82.9314 58.982 82.8834 58.946C82.8474 58.898 82.8294 58.844 82.8294 58.784V46.598C82.8294 46.538 82.8474 46.49 82.8834 46.454C82.9314 46.406 82.9854 46.382 83.0454 46.382H87.9954ZM87.6894 52.16C88.3014 52.16 88.7934 51.98 89.1654 51.62C89.5374 51.26 89.7234 50.786 89.7234 50.198C89.7234 49.598 89.5374 49.112 89.1654 48.74C88.7934 48.368 88.3014 48.182 87.6894 48.182H85.0074C84.9474 48.182 84.9174 48.212 84.9174 48.272V52.07C84.9174 52.13 84.9474 52.16 85.0074 52.16H87.6894ZM105.886 46.4C105.946 46.4 105.994 46.424 106.03 46.472C106.078 46.508 106.102 46.556 106.102 46.616V48.002C106.102 48.062 106.078 48.116 106.03 48.164C105.994 48.2 105.946 48.218 105.886 48.218H102.574C102.514 48.218 102.484 48.248 102.484 48.308V58.784C102.484 58.844 102.46 58.898 102.412 58.946C102.376 58.982 102.328 59 102.268 59H100.612C100.552 59 100.498 58.982 100.45 58.946C100.414 58.898 100.396 58.844 100.396 58.784V48.308C100.396 48.248 100.366 48.218 100.306 48.218H97.12C97.06 48.218 97.006 48.2 96.958 48.164C96.922 48.116 96.904 48.062 96.904 48.002V46.616C96.904 46.556 96.922 46.508 96.958 46.472C97.006 46.424 97.06 46.4 97.12 46.4H105.886ZM111.843 59.18C110.943 59.18 110.145 59 109.449 58.64C108.753 58.268 108.213 57.746 107.829 57.074C107.457 56.402 107.271 55.628 107.271 54.752V50.648C107.271 49.784 107.463 49.022 107.847 48.362C108.231 47.69 108.765 47.174 109.449 46.814C110.145 46.442 110.943 46.256 111.843 46.256C112.755 46.256 113.553 46.442 114.237 46.814C114.933 47.174 115.473 47.69 115.857 48.362C116.241 49.022 116.433 49.784 116.433 50.648V54.752C116.433 55.628 116.241 56.402 115.857 57.074C115.473 57.746 114.933 58.268 114.237 58.64C113.553 59 112.755 59.18 111.843 59.18ZM111.843 57.38C112.599 57.38 113.205 57.146 113.661 56.678C114.117 56.21 114.345 55.592 114.345 54.824V50.63C114.345 49.85 114.117 49.226 113.661 48.758C113.205 48.29 112.599 48.056 111.843 48.056C111.099 48.056 110.499 48.29 110.043 48.758C109.587 49.226 109.359 49.85 109.359 50.63V54.824C109.359 55.592 109.587 56.21 110.043 56.678C110.499 57.146 111.099 57.38 111.843 57.38Z'
                          fill='white'
                        />
                      </svg>
                    }
                  />
                  <CircleRectangleCard
                    title={'LOW PROGRESSION-FREE SURVIVAL (PFS) in R/M NPC'}
                    content={
                      <>
                        A key study showed a 1-year PFS rate of 20% for patients
                        whose R/M NPC was treated with standard of care
                        chemotherapy.<sup>1</sup>*
                      </>
                    }
                    delayClass='animation-start-2'
                    circleDelayClass=''
                    image={
                      <svg
                        width='188'
                        height='188'
                        viewBox='0 0 188 188'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        ref={setRefs2}
                      >
                        <circle
                          cx='94'
                          cy='94'
                          r='90'
                          stroke='#997F8A'
                          strokeWidth='2'
                        />
                        <path
                          d='M94 4C133.93 4 167.786 30.0035 179.559 66'
                          stroke=''
                          strokeWidth='8'
                          strokeLinecap='round'
                          fill=''
                          className={circleInViewHome2 ? 'yellow-line' : ''}
                        />
                        <path
                          d='M59.0532 105.128C59.0239 105.187 59.0239 105.245 59.0532 105.304C59.0825 105.333 59.1265 105.348 59.1852 105.348H72.4292C72.7225 105.348 72.8692 105.495 72.8692 105.788V108.56C72.8692 108.853 72.7225 109 72.4292 109H53.9932C53.6999 109 53.5532 108.853 53.5532 108.56V105.876C53.5532 105.671 53.6265 105.495 53.7732 105.348C54.7705 104.204 57.0585 101.52 60.6372 97.296L63.6732 93.644C66.4012 90.388 67.7652 87.8653 67.7652 86.076C67.7652 84.6973 67.2959 83.5973 66.3572 82.776C65.4479 81.9253 64.2305 81.5 62.7052 81.5C61.1799 81.5 59.9625 81.9253 59.0532 82.776C58.1439 83.6267 57.7039 84.7413 57.7332 86.12V87.44C57.7332 87.7333 57.5865 87.88 57.2932 87.88H53.9052C53.6119 87.88 53.4652 87.7333 53.4652 87.44V85.548C53.5239 84.0227 53.9492 82.6733 54.7412 81.5C55.5625 80.3267 56.6625 79.432 58.0412 78.816C59.4199 78.1707 60.9745 77.848 62.7052 77.848C64.5825 77.848 66.2252 78.2 67.6332 78.904C69.0412 79.608 70.1265 80.576 70.8892 81.808C71.6519 83.04 72.0332 84.4333 72.0332 85.988C72.0332 88.4227 70.7132 91.2973 68.0732 94.612C66.8999 96.108 65.5065 97.7947 63.8932 99.672C62.2799 101.52 60.6665 103.339 59.0532 105.128ZM87.9588 109.44C84.9961 109.44 82.6348 108.604 80.8748 106.932C79.1441 105.231 78.2788 102.957 78.2788 100.112V87.088C78.2788 84.2427 79.1441 81.984 80.8748 80.312C82.6348 78.64 84.9961 77.804 87.9588 77.804C90.9215 77.804 93.2828 78.64 95.0428 80.312C96.8321 81.984 97.7268 84.2427 97.7268 87.088V100.112C97.7268 102.957 96.8321 105.231 95.0428 106.932C93.2828 108.604 90.9215 109.44 87.9588 109.44ZM87.9588 105.788C89.6601 105.788 91.0095 105.304 92.0068 104.336C93.0041 103.339 93.5028 102.019 93.5028 100.376V86.912C93.5028 85.2693 93.0041 83.964 92.0068 82.996C91.0095 81.9987 89.6601 81.5 87.9588 81.5C86.3161 81.5 84.9961 81.9987 83.9988 82.996C83.0015 83.964 82.5028 85.2693 82.5028 86.912V100.376C82.5028 102.019 83.0015 103.339 83.9988 104.336C84.9961 105.304 86.3161 105.788 87.9588 105.788ZM111.121 90.828C109.918 90.828 108.803 90.5347 107.777 89.948C106.779 89.3613 105.987 88.5693 105.401 87.572C104.814 86.5747 104.521 85.4747 104.521 84.272C104.521 83.0987 104.814 82.0133 105.401 81.016C105.987 80.0187 106.779 79.2413 107.777 78.684C108.803 78.0973 109.918 77.804 111.121 77.804C112.294 77.804 113.379 78.0973 114.377 78.684C115.374 79.2707 116.166 80.0627 116.753 81.06C117.339 82.028 117.633 83.0987 117.633 84.272C117.633 85.4747 117.339 86.5747 116.753 87.572C116.166 88.5693 115.374 89.3613 114.377 89.948C113.379 90.5347 112.294 90.828 111.121 90.828ZM109.845 109C109.669 109 109.551 108.956 109.493 108.868C109.434 108.751 109.449 108.619 109.537 108.472L126.169 78.508C126.286 78.3027 126.462 78.2 126.697 78.2H128.853C129.029 78.2 129.146 78.2587 129.205 78.376C129.263 78.464 129.249 78.5813 129.161 78.728L112.529 108.692C112.441 108.897 112.265 109 112.001 109H109.845ZM111.121 88.232C112.206 88.232 113.115 87.8507 113.849 87.088C114.582 86.3253 114.949 85.3867 114.949 84.272C114.949 83.1867 114.567 82.2773 113.805 81.544C113.071 80.7813 112.177 80.4 111.121 80.4C110.035 80.4 109.111 80.7813 108.349 81.544C107.586 82.2773 107.205 83.1867 107.205 84.272C107.205 85.3867 107.586 86.3253 108.349 87.088C109.111 87.8507 110.035 88.232 111.121 88.232ZM127.885 109.396C126.682 109.396 125.567 109.103 124.541 108.516C123.543 107.929 122.751 107.137 122.165 106.14C121.578 105.143 121.285 104.057 121.285 102.884C121.285 101.711 121.578 100.625 122.165 99.628C122.751 98.6307 123.543 97.8387 124.541 97.252C125.567 96.6653 126.682 96.372 127.885 96.372C129.058 96.372 130.143 96.6653 131.141 97.252C132.138 97.8387 132.93 98.6307 133.517 99.628C134.103 100.625 134.397 101.711 134.397 102.884C134.397 104.057 134.103 105.143 133.517 106.14C132.93 107.137 132.138 107.929 131.141 108.516C130.143 109.103 129.058 109.396 127.885 109.396ZM127.885 106.8C128.97 106.8 129.879 106.419 130.613 105.656C131.346 104.893 131.713 103.969 131.713 102.884C131.713 101.799 131.331 100.875 130.569 100.112C129.835 99.3493 128.941 98.968 127.885 98.968C126.799 98.968 125.875 99.3493 125.113 100.112C124.35 100.875 123.969 101.799 123.969 102.884C123.969 103.969 124.35 104.893 125.113 105.656C125.875 106.419 126.799 106.8 127.885 106.8Z'
                          fill='white'
                        />
                      </svg>
                    }
                  />
                </Row>
              </div>
            </Container>
          </section>

          <section className='home-outcomes-section'>
            <Container>
              <Row>
                <Col lg={{ span: 12 }}>
                  <h2 className='white text-center'>
                    5-year overall survival (OS) for NPC (ALL STAGES) varies
                    across histologies
                  </h2>
                  <h2 className='white text-center'>
                    Rates are low in R/M disease for common patient types
                    <sup>6§</sup>
                  </h2>
                  <p className='white text-center bolder'>
                    Click the buttons below to see OS rates by race.
                  </p>
                </Col>
              </Row>
              <div className='slider-component-outer-container'>
                <div className='slider-component-outer-toggle-container'>
                  <Row>
                    <ToggleBTN />
                  </Row>
                </div>
                <div className='slider-component-outer-content-container'>
                  <Row>
                    {!slider ? (
                      <HomeSlideLeftContent />
                    ) : (
                      <HomeSliderRightContent />
                    )}
                  </Row>
                </div>
              </div>
              <Row>
                <Col lg={{ span: 12, offset: 0 }}>
                  <div>
                    <h6 className='white'>
                      §An analysis of NPC patients in the United States reported
                      to the SEER (Surveillance, Epidemiology, and End Results)
                      database between 1973 and 2009. Data included 9,014
                      patients, of which the majority were non-Hispanic white
                      (n=4,013) and Asian (n=3,381). Other populations included
                      Hispanic white (n=535), Black (n=937), and other (n=148).
                    </h6>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section
            className='home-treatment-container'
            title='Caucasian female NPC patient'
          >
            <Container>
              <Row>
                <Col lg={{ span: 12, offset: 0 }}>
                  <Row>
                    <Col lg={{ span: 5, offset: 0 }}>
                      <h2>Effective treatment options are limited.</h2>
                      <h3>
                        Despite the standard of care with gemcitabine/cisplatin,
                        there still remains an unmet need in this area.
                      </h3>
                      <div
                        className={
                          boxInView2
                            ? `cta-btn-container active-card`
                            : `cta-btn-container`
                        }
                        ref={setBoxRef2}
                      >
                        <Link to={'/aboutnpc/#about-npc-demographics'}>
                          <button className='cta-btn dark-grey-btn'>
                            Learn more about this distinct cancer
                          </button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      ) : (
        <div></div>
      )}
    </Layout>
  )
}

export default HomeContent
