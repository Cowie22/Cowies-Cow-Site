import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IsiContent from './IsiContent'

import plus from '../../assets/images/Plus.svg'
import minus from '../../assets/images/Minus.svg'
import plusHovered from '../../assets/images/plus-hovered.svg'
import minusHovered from '../../assets/images/minus-hovered.svg'


class ISI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      yDirection: 0,
      isIsiExpanded: false,
      nonExpandedISI: false,
      hovered: false,
    }
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    this.handleScroll();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', () => this.toggleIsiHeader());
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
      yDirection: window.pageYOffset,
    })
    let element = document.querySelector('.isi-tray');
    if (this.state.yDirection < 1) {
      element.classList.remove('scroll');
    }
  }

  toggleIsiHeader = () => {
    let fadeTarget = document.querySelector('.isi-tray');

    const fadeInEffect = () => {
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

    try {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let triggerElement = document.querySelector('.page-isi #trigger-tray').getBoundingClientRect();
      let isiTrayHeight = document.querySelector('.isi-tray').getBoundingClientRect().height;

      let trayHideHeight = triggerElement.top + scrollTop - window.innerHeight + isiTrayHeight;
      let trayShowHeight = triggerElement.top + scrollTop - window.innerHeight + isiTrayHeight;

      if (scrollTop >= trayHideHeight) {
        fadeOutEffect();
      } else if (scrollTop < trayShowHeight) {
        fadeInEffect();
      }
    } catch (e) {
      console.log(e);
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

  handleHovered = (val) => {
    this.setState({
      hovered: val,
    })
  }

  render() {
    const { width, yDirection, isIsiExpanded, nonExpandedISI, hovered } = this.state
    return (
      <>
      <div id='isi' className='drive-to-container'>

      </div>
      <section className='isi'>
        <div className={isIsiExpanded ? 'isi-overlay' : ''} onClick={() => this.toggleIsiTray()}>
          <div
            className={isIsiExpanded ? 'isi-tray expanded' : yDirection > 0 ? 'isi-tray tray-collapsed' : 'isi-tray'}
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
                            <h4 className='purple extra-bold mulish'>
                              IMPORTANT SAFETY INFORMATION
                            </h4>
                          </Col>
                          <Col lg={{span: 4, offset: 0}}>
                            <h4 className='text-left purple extra-bold mulish'>
                              INDICATION
                            </h4>
                          </Col>
                        </>
                        :
                        !isIsiExpanded && width < 991 ?
                          <Col xs={10}>
                            <h4 className='purple extra-bold mulish'>
                              IMPORTANT SAFETY INFORMATION
                            </h4>
                          </Col>
                        :
                          <Col lg={11} xs={10}>

                          </Col>
                      }
                      <Col lg={1} xs={2}>
                        <div
                          className='isi-tray-icon-container'
                          onMouseEnter={() => this.handleHovered(true)}
                          onMouseLeave={() => this.handleHovered(false)}
                        >
                          {
                            width > 991 ? (
                              isIsiExpanded ? (
                                <img
                                  src={hovered ? minusHovered : minus}
                                  width='12'
                                  height='12'
                                  alt=''
                                />
                              ) : (
                                <img
                                  src={hovered ? plusHovered : plus}
                                  width='12'
                                  height='12'
                                  alt=''
                                />
                              )
                            )
                            :
                            (
                              isIsiExpanded ? (
                                <img
                                  src={minus}
                                  width='12'
                                  height='12'
                                  alt=''
                                />
                              ) : (
                                <img
                                  src={plus}
                                  width='12'
                                  height='12'
                                  alt=''
                                />
                              )
                            )
                          }
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
                            plus={plus}
                            minus={minus}
                            isIsiExpanded={isIsiExpanded}
                            nonExpandedISI={nonExpandedISI}
                          />
                        </div>
                        :
                        <Row>
                          <Col lg={7}>
                            {/* <div className='black-box-container'> */}
                              <p className='extra-bold'>
                                <span className='purple'>BOXED WARNING:</span> THROMBOEMBOLIC DISORDERS AND
                                VASCULAR EVENTS
                              </p>
                              <ul className='black-box-ul'>
                                <li>
                                  Estrogen and progestin combination products, including Myfembree, increase the risk
                                  of thrombotic or thromboembolic disorders including pulmonary embolism, deep vein
                                  thrombosis, stroke and myocardial infarction, especially in women at increased
                                  risk for these events.
                                </li>
                                <li>
                                  Myfembree is contraindicated in women with current or a history of thrombotic
                                  or thromboembolic disorders and in women at increased risk for these events,
                                  including women over 35 years of age who smoke or women with uncontrolled hypertension.
                                </li>
                              </ul>
                            {/* </div> */}
                          </Col>
                          <Col lg={{span: 4, offset: 0}}>
                            <p>
                              Myfembree is indicated for the management of heavy menstrual bleeding associated
                              with uterine leiomyomas (fibroids) in premenopausal women.&nbsp;&nbsp; <u>Limitations of
                              Use</u>: Use of Myfembree should be limited to 24 months due to the risk of continued
                              bone loss which may not be reversible.
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
                  plus={plus}
                  minus={minus}
                  isIsiExpanded={isIsiExpanded}
                  nonExpandedISI={nonExpandedISI}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      </>
    )
  }
}

export default ISI
