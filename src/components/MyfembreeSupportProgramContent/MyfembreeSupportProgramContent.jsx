import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import Overview from '../MyfembreeSupportProgramTabs/Overview/Overview'
import Enrollment from '../MyfembreeSupportProgramTabs/Enrollment/Enrollment'
import Copay from '../MyfembreeSupportProgramTabs/Copay/Copay'
import NextPageBtn from '../NextPageBtn/NextPageBtn'
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions'
import SliderTabNav from '../SliderTabNav/SliderTabNav'
import PurpleCallout from '../PurpleCallout/PurpleCallout'

import BGImg from '../../assets/images/support-bg-img.webp'
import BGImgFB from '../../assets/images/support-bg-img.png'
import BGImgMobile from '../../assets/images/support-bg-img-mobile.webp'
import BGImgMobileFB from '../../assets/images/support-bg-img-mobile.png'


const MyfembreeSupportProgramContent = (props) => {
  const [hovered, handleHovered] = useState(0);
  const [width, handleWidth] = useState(0);
  const state = useContext(AppContext);
  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    currentTopTab,
    handleCurrentTopTab,
    activeDropdownLink,
    handleActiveDropdownLink,
    setReferences
  } = state;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('support');
    handleCurrentTopTab(1);
    handleActiveDropdownLink(4.1);
    setReferences([]);

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions, { passive: true });
    return function cleanUp() {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, []);

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth);
  }

  const handleArrowLeft = () => {
    if (currentTopTab === 1) {
      handleCurrentTopTab(1)
    } else {
      handleCurrentTopTab(currentTopTab - 1)
    }
  }

  const handleArrowRight = () => {
    if (currentTopTab === 3) {
      handleCurrentTopTab(3)
    } else {
      handleCurrentTopTab(currentTopTab + 1)
    }
  }

  const handleBtnTabOver = () => {
    setTimeout(() => {
      handleCurrentTopTab(2)
    }, 500)
  }

  const handleBtnTabOverTwo = () => {
    setTimeout(() => {
      handleCurrentTopTab(3)
    }, 500)
  }

  return (
    <Layout
      canonicalURL='https://www.myfembreehcp.com/myfembree-support-program/'
      title='Support Program | Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets'
      pageTitle='Support Program | Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets'
      description='Learn about the Myfembree® Support Program to help your patients prescribed Myfembree®. See benefits & risks, including BOXED WARNING.'
    >
      <section
        className='support-container'
        style={
          width > 991 ?
          {backgroundImage: `url(${BGImg}), url(${BGImgFB})`} :
          {backgroundImage: `url(${BGImgMobile}), url(${BGImgMobileFB})`}
        }
      >
        <Container>
          <Row>
            <Col lg={{span: 9, offset: 0}} xs={{span: 12, offset: 0}}>
              <p className='white extra-bold'>
                Myfembree is available at retail or mail-order pharmacies.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xl={{span: 7, offset: 0}} lg={{span: 8, offset: 0}}>
              <div className='support-header-card-callout'>
                <h1>
                  The Myfembree<sup>®</sup> Support Program
                </h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 8, offset: 0}} xs={{span: 11, offset: 0}}>
              <h2 className='support-sub-title white'>
                For your patients who have been prescribed Myfembree, support starts with enrollment
                into the Myfembree Support Program
              </h2>
              <p className='white'>
                The Myfembree Support Program is designed to help your eligible patients throughout their
                treatment journey. We offer financial assistance options, dedicated support staff,
                and other helpful resources once eligible patients have been prescribed Myfembree.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='support-mid-container'>
        <Container>
          <SliderTabNav
            tab1='Overview'
            tab2='Enrollment & e-Consent'
            tab3='Copay & Savings Programs'
          />
          <Row>
            <Col lg={{span: 1}} className='d-none d-lg-block'>
              <div
                className='tab-arrow-container arrow-left-container'
                onClick={() => {
                  handleArrowLeft()
                }}
                onMouseEnter={() =>{
                  handleHovered(1)
                }}
                onMouseLeave={() =>{
                  handleHovered(0)
                }}
              >
                <svg
                  className={
                    hovered === 1 ? 'purple-arrow' :
                    currentTopTab === 1 ? 'grey-arrow' :
                    'pink-arrow'
                  }
                  width="27"
                  height="59"
                  viewBox="0 0 27 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.0873 1.74013e-06L16 1.9009L3.8255 14L16 26.0991L14.0873 28L5.99229e-06 14L14.0873 1.74013e-06Z" />
                  <path d="M0.996 44V35.456H4.536C5.44 35.456 6.14 35.672 6.636 36.104C7.14 36.536 7.392 37.132 7.392 37.892C7.392 38.636 7.14 39.228 6.636 39.668C6.132 40.108 5.432 40.328 4.536 40.328H2.232V44H0.996ZM2.232 39.344H4.416C5.008 39.344 5.452 39.22 5.748 38.972C6.044 38.716 6.192 38.356 6.192 37.892C6.192 37.428 6.044 37.072 5.748 36.824C5.452 36.576 5.008 36.452 4.416 36.452H2.232V39.344ZM8.65725 44V39.656C8.65725 39.376 8.64925 39.092 8.63325 38.804C8.62525 38.516 8.60125 38.232 8.56125 37.952H9.71325L9.85725 39.476L9.71325 39.416C9.81725 38.888 10.0533 38.488 10.4213 38.216C10.7973 37.944 11.2173 37.808 11.6813 37.808C11.7933 37.808 11.8973 37.816 11.9933 37.832C12.0893 37.848 12.1773 37.868 12.2573 37.892L12.2333 38.996C12.0173 38.916 11.7813 38.876 11.5253 38.876C11.1333 38.876 10.8173 38.96 10.5773 39.128C10.3373 39.288 10.1573 39.504 10.0373 39.776C9.92525 40.04 9.86925 40.324 9.86925 40.628V44H8.65725ZM13.169 44V37.952H14.381V44H13.169ZM13.085 35.312H14.489V36.584H13.085V35.312ZM18.7615 44.084C18.1615 44.084 17.6375 43.956 17.1895 43.7C16.7495 43.444 16.4095 43.084 16.1695 42.62C15.9295 42.148 15.8095 41.588 15.8095 40.94C15.8095 40.308 15.9295 39.756 16.1695 39.284C16.4095 38.812 16.7495 38.448 17.1895 38.192C17.6375 37.936 18.1615 37.808 18.7615 37.808C19.3535 37.808 19.8695 37.936 20.3095 38.192C20.7575 38.448 21.1015 38.812 21.3415 39.284C21.5895 39.756 21.7135 40.308 21.7135 40.94C21.7135 41.588 21.5895 42.148 21.3415 42.62C21.1015 43.084 20.7575 43.444 20.3095 43.7C19.8695 43.956 19.3535 44.084 18.7615 44.084ZM18.7615 43.124C19.3055 43.124 19.7255 42.94 20.0215 42.572C20.3255 42.204 20.4775 41.66 20.4775 40.94C20.4775 40.244 20.3255 39.712 20.0215 39.344C19.7255 38.968 19.3055 38.78 18.7615 38.78C18.2175 38.78 17.7895 38.968 17.4775 39.344C17.1735 39.712 17.0215 40.244 17.0215 40.94C17.0215 41.66 17.1695 42.204 17.4655 42.572C17.7695 42.94 18.2015 43.124 18.7615 43.124ZM23.1182 44V39.656C23.1182 39.376 23.1102 39.092 23.0942 38.804C23.0862 38.516 23.0622 38.232 23.0222 37.952H24.1742L24.3182 39.476L24.1742 39.416C24.2782 38.888 24.5142 38.488 24.8822 38.216C25.2582 37.944 25.6782 37.808 26.1422 37.808C26.2542 37.808 26.3582 37.816 26.4542 37.832C26.5502 37.848 26.6382 37.868 26.7182 37.892L26.6942 38.996C26.4782 38.916 26.2422 38.876 25.9862 38.876C25.5942 38.876 25.2782 38.96 25.0382 39.128C24.7982 39.288 24.6182 39.504 24.4982 39.776C24.3862 40.04 24.3302 40.324 24.3302 40.628V44H23.1182ZM3.036 58V50.488H0.144V49.456H7.176V50.488H4.284V58H3.036ZM9.60272 58.084C9.06672 58.084 8.59472 57.96 8.18672 57.712C7.78672 57.456 7.47472 57.096 7.25072 56.632C7.03472 56.16 6.92672 55.608 6.92672 54.976C6.92672 54.344 7.03872 53.792 7.26272 53.32C7.48672 52.84 7.79872 52.468 8.19872 52.204C8.60672 51.94 9.07472 51.808 9.60272 51.808C10.1387 51.808 10.5947 51.94 10.9707 52.204C11.3547 52.46 11.6147 52.828 11.7507 53.308L11.6067 53.404V51.952H12.8067V58H11.6067V56.524L11.7507 56.584C11.6147 57.064 11.3547 57.436 10.9707 57.7C10.5947 57.956 10.1387 58.084 9.60272 58.084ZM9.89072 57.124C10.4347 57.124 10.8547 56.936 11.1507 56.56C11.4547 56.184 11.6067 55.648 11.6067 54.952C11.6067 54.256 11.4547 53.72 11.1507 53.344C10.8547 52.968 10.4347 52.78 9.89072 52.78C9.33872 52.78 8.90672 52.976 8.59472 53.368C8.29072 53.752 8.13872 54.288 8.13872 54.976C8.13872 55.664 8.29072 56.196 8.59472 56.572C8.90672 56.94 9.33872 57.124 9.89072 57.124ZM14.5752 58V49.168H15.7872V53.452L15.6552 53.308C15.7912 52.836 16.0472 52.468 16.4232 52.204C16.8072 51.94 17.2632 51.808 17.7912 51.808C18.3272 51.808 18.7952 51.936 19.1952 52.192C19.5952 52.448 19.9072 52.808 20.1312 53.272C20.3632 53.736 20.4792 54.284 20.4792 54.916C20.4792 55.556 20.3632 56.116 20.1312 56.596C19.9072 57.068 19.5912 57.436 19.1832 57.7C18.7832 57.956 18.3192 58.084 17.7912 58.084C17.2632 58.084 16.8072 57.956 16.4232 57.7C16.0472 57.436 15.7912 57.064 15.6552 56.584L15.7872 56.416V58H14.5752ZM17.5152 57.124C18.0592 57.124 18.4832 56.932 18.7872 56.548C19.0912 56.164 19.2432 55.62 19.2432 54.916C19.2432 54.236 19.0912 53.712 18.7872 53.344C18.4832 52.968 18.0592 52.78 17.5152 52.78C16.9552 52.78 16.5272 52.972 16.2312 53.356C15.9352 53.732 15.7872 54.26 15.7872 54.94C15.7872 55.644 15.9352 56.184 16.2312 56.56C16.5272 56.936 16.9552 57.124 17.5152 57.124Z" />
                </svg>
              </div>
            </Col>
            <Col lg={{span: 10}}>
              {
                currentTopTab === 1 ?
                <Overview />
                : currentTopTab === 2 ?
                <Enrollment />
                : currentTopTab === 3 ?
                <Copay />
                :
                <Overview />
              }
            </Col>
            <Col lg={{span: 1}} className='d-none d-lg-block'>
              <div
                className='tab-arrow-container arrow-right-container'
                onClick={() => {
                  handleArrowRight()
                }}
                onMouseEnter={() =>{
                  handleHovered(2)
                }}
                onMouseLeave={() =>{
                  handleHovered(0)
                }}
              >
                <svg
                  className={
                    hovered === 2 ? 'purple-arrow' :
                    currentTopTab === 3 ? 'grey-arrow' :
                    'pink-arrow'
                  }
                  width="26"
                  height="59"
                  viewBox="0 0 26 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.9127 28L10 26.0991L22.1745 14L10 1.9009L11.9127 3.34436e-07L26 14L11.9127 28Z" />
                  <path d="M0.65225 44V35.456H1.58825L6.79625 42.32L6.49625 42.44V35.456H7.66025V44H6.71225L1.52825 37.148L1.81625 37.016V44H0.65225ZM14.5963 43.304C14.3243 43.544 13.9803 43.736 13.5643 43.88C13.1483 44.016 12.7243 44.084 12.2923 44.084C11.6523 44.084 11.1003 43.96 10.6363 43.712C10.1723 43.464 9.81625 43.104 9.56825 42.632C9.32025 42.16 9.19625 41.6 9.19625 40.952C9.19625 40.328 9.31625 39.78 9.55625 39.308C9.80425 38.836 10.1443 38.468 10.5763 38.204C11.0083 37.94 11.5083 37.808 12.0763 37.808C12.6203 37.808 13.0883 37.928 13.4803 38.168C13.8723 38.408 14.1723 38.752 14.3803 39.2C14.5963 39.64 14.7043 40.172 14.7043 40.796V41H10.2523L10.2643 40.28H13.9963L13.6483 40.712C13.6563 40.064 13.5283 39.568 13.2643 39.224C13.0003 38.88 12.6123 38.708 12.1003 38.708C11.5643 38.708 11.1443 38.9 10.8403 39.284C10.5363 39.66 10.3843 40.188 10.3843 40.868C10.3843 41.628 10.5483 42.196 10.8763 42.572C11.2043 42.94 11.6843 43.124 12.3163 43.124C12.6603 43.124 12.9923 43.068 13.3123 42.956C13.6323 42.844 13.9363 42.672 14.2243 42.44L14.5963 43.304ZM20.1764 44L18.3884 41.768L17.6924 40.88L15.3164 37.952H16.7684L18.3884 40.016L19.1084 40.88L21.6164 44H20.1764ZM16.6244 44H15.1724L17.6924 40.88L18.3884 40.016L20.0204 37.952H21.4844L19.1084 40.88L18.3884 41.768L16.6244 44ZM21.7126 38.888V37.952H25.7686V38.888H21.7126ZM25.7566 42.968V43.952C25.6126 44 25.4686 44.032 25.3246 44.048C25.1806 44.072 25.0246 44.084 24.8566 44.084C24.2406 44.084 23.7566 43.912 23.4046 43.568C23.0606 43.216 22.8886 42.7 22.8886 42.02V36.44L24.1006 36.02V41.924C24.1006 42.22 24.1446 42.452 24.2326 42.62C24.3206 42.78 24.4406 42.896 24.5926 42.968C24.7526 43.032 24.9286 43.064 25.1206 43.064C25.2326 43.064 25.3366 43.056 25.4326 43.04C25.5286 43.024 25.6366 43 25.7566 42.968ZM8.02428 58V50.488H5.13228V49.456H12.1643V50.488H9.27228V58H8.02428ZM14.591 58.084C14.055 58.084 13.583 57.96 13.175 57.712C12.775 57.456 12.463 57.096 12.239 56.632C12.023 56.16 11.915 55.608 11.915 54.976C11.915 54.344 12.027 53.792 12.251 53.32C12.475 52.84 12.787 52.468 13.187 52.204C13.595 51.94 14.063 51.808 14.591 51.808C15.127 51.808 15.583 51.94 15.959 52.204C16.343 52.46 16.603 52.828 16.739 53.308L16.595 53.404V51.952H17.795V58H16.595V56.524L16.739 56.584C16.603 57.064 16.343 57.436 15.959 57.7C15.583 57.956 15.127 58.084 14.591 58.084ZM14.879 57.124C15.423 57.124 15.843 56.936 16.139 56.56C16.443 56.184 16.595 55.648 16.595 54.952C16.595 54.256 16.443 53.72 16.139 53.344C15.843 52.968 15.423 52.78 14.879 52.78C14.327 52.78 13.895 52.976 13.583 53.368C13.279 53.752 13.127 54.288 13.127 54.976C13.127 55.664 13.279 56.196 13.583 56.572C13.895 56.94 14.327 57.124 14.879 57.124ZM19.5635 58V49.168H20.7755V53.452L20.6435 53.308C20.7795 52.836 21.0355 52.468 21.4115 52.204C21.7955 51.94 22.2515 51.808 22.7795 51.808C23.3155 51.808 23.7835 51.936 24.1835 52.192C24.5835 52.448 24.8955 52.808 25.1195 53.272C25.3515 53.736 25.4675 54.284 25.4675 54.916C25.4675 55.556 25.3515 56.116 25.1195 56.596C24.8955 57.068 24.5795 57.436 24.1715 57.7C23.7715 57.956 23.3075 58.084 22.7795 58.084C22.2515 58.084 21.7955 57.956 21.4115 57.7C21.0355 57.436 20.7795 57.064 20.6435 56.584L20.7755 56.416V58H19.5635ZM22.5035 57.124C23.0475 57.124 23.4715 56.932 23.7755 56.548C24.0795 56.164 24.2315 55.62 24.2315 54.916C24.2315 54.236 24.0795 53.712 23.7755 53.344C23.4715 52.968 23.0475 52.78 22.5035 52.78C21.9435 52.78 21.5155 52.972 21.2195 53.356C20.9235 53.732 20.7755 54.26 20.7755 54.94C20.7755 55.644 20.9235 56.184 21.2195 56.56C21.5155 56.936 21.9435 57.124 22.5035 57.124Z" />
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {
        currentTopTab === 1 ?
          <PurpleCallout
            title={
              <h2 className='white'>
                If assistance is required during the enrollment process, call the Myfembree
                Support Program at <a href='tel:1-833-693-3627' rel='noopener noreferrer'><u>1-833-MYFEMBREE</u> (<u>1-833-693-3627</u>)</a>,
                8 <sub>AM</sub>–8 <sub>PM</sub> ET, Monday–Friday
              </h2>
            }
          />
        : currentTopTab === 2 ?
          <div className='extra-top-padding'>
            <PurpleCallout
              title={
                <h2 className='white'>
                  The prescriber may submit Myfembree prescriptions directly to the patient’s retail or
                  mail-order pharmacy
                </h2>
              }
            />
          </div>
        : currentTopTab === 3 ?
          <>
          </>
        :
        <PurpleCallout
          title={
            <h2 className='white'>
              If assistance is required during the enrollment process, call the Myfembree
              Support Program at <a href='tel:1-833-693-3627' rel='noopener noreferrer'><u>1-833-MYFEMBREE</u> (<u>1-833-693-3627</u>)</a>,
              8 <sub>AM</sub>–8 <sub>PM</sub> ET, Monday–Friday
            </h2>
          }
        />
      }
      <section>
        <Container>
          <Row>
            {
              currentTopTab === 1 ?
                <NextPageBtn
                  btnText='Get Enrollment & e-Consent Information'
                  btnLink='myfembree-support-program/'
                  handleBtnTabOver={handleBtnTabOver}
                />
              : currentTopTab === 2 ?
                <NextPageBtn
                  btnText='Explore Our Support Programs'
                  btnLink='myfembree-support-program/'
                  handleBtnTabOverTwo={handleBtnTabOverTwo}
                />
              :
                <NextPageBtn
                  btnText='Explore Myfembree Support Program Resources'
                  btnLink='resources/'
                />
            }
          </Row>
          {
            currentTopTab === 1 || currentTopTab === 2 ?
            <Row>
              <TermsAndConditions />
            </Row>
            :
            <>
            </>
          }
        </Container>
      </section>
    </Layout>
  )
}

export default MyfembreeSupportProgramContent