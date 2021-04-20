import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IsiContent from './IsiContent'

import Plus from '../../assets/images/Plus.svg'
import Minus from '../../assets/images/Minus.svg'


class ISI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      yDirection: 0,
      isIsiExpanded: false,
      nonExpandedISI: false,
    }
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    this.handleScroll();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', () => this.toggleIsiHeader())
    window.addEventListener('scroll', () => this.toggleScrollIsi())
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
    })
  }

  handleScroll = (event) => {
    this.setState({
      yDirection: window.pageYOffset
    })
    let element = document.querySelector('.isi-tray');
    if (this.state.yDirection < 1) {
      element.classList.remove('scroll');
    }
  }

  toggleIsiHeader = () => {
    const fadeInEffect = () => {
      let fadeTarget = document.querySelector('.isi-tray');
      let fadeEffect = setInterval(function () {
        if (fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
          fadeTarget.style.zIndex = 100;
        }
        if (fadeTarget.style.opacity < 0) {
          fadeTarget.style.opacity += 0.1;
          fadeTarget.style.zIndex = 100;
        } else {
          clearInterval(fadeEffect);
        }
      }, 50);
      this.setState({
        nonExpandedISI: false,
      })
    }
    const fadeOutEffect = () => {
      let fadeTarget = document.querySelector('.isi-tray');
      let fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
          fadeTarget.style.zIndex = -1;
        } else {
          clearInterval(fadeEffect);
        }
      }, 50);
      this.setState({
        nonExpandedISI: true,
      })
    }
    let pageISI = document.querySelector('.page-isi').getBoundingClientRect();
    let pageWidth = window.innerWidth;
    let isiMobileImg = document.getElementById('isi-mobile-header-img-1');
    let offSetWidth =
      pageWidth > 1024 ? 700 :
      pageWidth > 768 ? 600 :
      500;
    if (pageISI.bottom < (pageISI.height + offSetWidth)) {
      if (isiMobileImg) {
        isiMobileImg.classList.add('hidden-plus')
      }
      fadeOutEffect()
    } else {
      if (isiMobileImg) {
        isiMobileImg.classList.remove('hidden-plus')
      }
      fadeInEffect()
    }
  }

  toggleIsiTray = () => {
    this.setState({
      isIsiExpanded: !this.state.isIsiExpanded
    })
    // setIsiExpanded(!isIsiExpanded)
    let body = document.getElementsByTagName('body')[0];
    this.state.isIsiExpanded
      ? body.classList.remove('isi-expanded')
      : body.classList.add('isi-expanded')
  }

  toggleScrollIsi = () => {
    if (this.state.width < 768) {
      let isiTray = document.getElementsByClassName('isi-tray')[0];
      if (window.pageYOffset !== 0 && !isiTray.classList.contains('scroll')) {
        isiTray.classList.add('scroll')
      }
    }
  }

  render() {
    const { width, yDirection, isIsiExpanded, nonExpandedISI } = this.state
    return (
      <section className='isi' id='isi'>
        <div className={isIsiExpanded ? 'isi-overlay' : ''}>
          <div
            className={isIsiExpanded ? 'isi-tray expanded' : 'isi-tray'}
            onClick={() => typeof window !== 'undefined' && window.innerWidth > 0 ? this.toggleIsiTray() : null}
          >
            <Container>
              <Row>
                <Col lg={{span: 12, offset: 0}}>
                  <div className='isi-tray-container'>
                    <Row>
                      {
                        !isIsiExpanded && width >= 991 ?
                        <>
                          <Col lg={7}>
                            <h4 className='purple'>
                              Important Safety Information
                            </h4>
                          </Col>
                          <Col lg={{span: 4, offset: 0}}>
                            <h4 className='text-left purple'>
                              Use
                            </h4>
                          </Col>
                        </>
                        :
                        !isIsiExpanded && width < 991 ?
                          <Col xs={10}>
                            <h4 className='purple'>
                              Important Safety Information
                            </h4>
                          </Col>
                        :
                          <Col lg={11} xs={10}>

                          </Col>
                      }
                      <Col lg={1} xs={2}>
                        <div className='isi-tray-icon-container'>
                          {isIsiExpanded ? (
                            <img
                              loading='lazy'
                              src={Minus}
                              width='12'
                              height='12'
                            />
                          ) : (
                            <img
                              loading='lazy'
                              src={Plus}
                              width='12'
                              height='12'
                            />
                          )}
                        </div>
                      </Col>
                    </Row>
                    <div className='isi-content'>
                      {
                        isIsiExpanded ?
                        <div className='isi-content-inner-container'>
                          <IsiContent
                            width={width}
                            yDirection={yDirection}
                            Plus={Plus}
                            Minus={Minus}
                            isIsiExpanded={isIsiExpanded}
                            nonExpandedISI={nonExpandedISI}
                          />
                        </div>
                        :
                        <Row>
                          <Col lg={7}>
                            <p>
                              Myfembree (elagolix, estradiol, and norethindrone acetate capsules; elagolix capsules)
                              may increase your chances of heart attack, stroke, or blood clots, especially if you
                              are over 35 years of age and smoke, have uncontrolled high blood pressure, high
                              cholesterol, diabetes, and/or are obese. Stop taking Myfembree and call a
                              doctor right away…
                            </p>
                          </Col>
                          <Col lg={{span: 4, offset: 0}}>
                            <p>
                              Myfembree is a prescription medicine that is used in the treatment of heavy menstrual
                              bleeding associated with uterine fibroids.
                            </p>
                          </Col>
                        </Row>
                      }
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div id='page-isi' />
        <div className='page-isi'>
          <Container>
            <Row>
              <Col>
                <IsiContent
                  width={width}
                  yDirection={yDirection}
                  Plus={Plus}
                  Minus={Minus}
                  isIsiExpanded={isIsiExpanded}
                  nonExpandedISI={nonExpandedISI}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    )
  }
}

export default ISI
