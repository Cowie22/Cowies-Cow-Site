import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import closeIcon from '../../assets/images/close.svg'
import closeIconHovered from '../../assets/images/close-hovered.svg'
import logo from '../../assets/images/popup-myfembree-logo.svg'

export default props => {
  const [hovered, handleHovered] = useState(false);
  const [yDirection, handleYDirection] = useState(0);
  const [xDirection, handleXDirection] = useState(0);
  const state = useContext(AppContext);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    let modalContainer = document.getElementById('exit-container');
    if (state.isExitRampOpen === true) {
      document.body.classList.add('modal-hidden');
      modalContainer.classList.add('modal-overflow');
    } else {
      document.body.classList.remove('modal-hidden');
      modalContainer.classList.remove('modal-overflow');
    }
    return function cleanUp() {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleScroll = () => {
    handleYDirection(window.pageYOffset);
    handleXDirection(window.innerWidth);
  }

  return (
    <>
    <section
        id='exit-container'
        style={
          xDirection < 426 ? {top: `${yDirection - 650}px`} :
          xDirection < 769 ? {top: `${yDirection - 450}px`} :
          {top: `${yDirection - 350}px`}
        }
        onClick={() => state.handleIsExitRampOpen()}
      >
    </section>
    <section className={state.isExitRampOpen ? 'exit-popup-overlay' : ''}>
      <Container>
        <Row>
          <Col lg={{span: 4, offset: 4}} md={{span: 6, offset: 3}}>
            <div className={state.isExitRampOpen ? 'exit-popup-col' : 'exit-popup-col-hidden'}>
              <Row>
                <Col lg={{span: 1, offset: 11}}>
                  <div
                    className='close-img-container'
                    onMouseEnter={() => handleHovered(true)}
                    onMouseLeave={() => handleHovered(false)}
                    onClick={() => state.handleIsExitRampOpen()}
                  >
                    <img
                      src={hovered ? closeIconHovered : closeIcon}
                      className='close-img'
                      alt=''
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={{span: 6, offset: 3}}>
                  <div className='popup-logo-container'>
                    <img
                      src={logo}
                      alt='Myfembree® (relugolix, estradiol, and norethindrone acetate) tablets 40 mg, 1 mg, 0.5 mg'
                    />
                  </div>
                </Col>
              </Row>
              <h3 className='blue text-center'>
                You are about to leave MyfembreeHCP.com
              </h3>
              <Row>
                <Col>
                  <div className='cta-btn-container exit-popup-btn-container'>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={state.externalUrl}
                      onClick={() =>
                        state.handleIsExitRampOpen(state.externalUrl)
                      }
                    >
                      <button className='cta-btn pink-btn'>
                        Continue
                      </button>
                    </a>
                  </div>
                  <div className='cta-btn-container exit-popup-btn-container' onClick={() => state.handleIsExitRampOpen()}>
                    <a>
                      <button className='cta-btn transparent-btn-pink'>
                        Stay on MyfembreeHCP.com
                      </button>
                    </a>
                  </div>
                </Col>
              </Row>
              <h6 className='text-center'>
                The website you are linking to is neither owned nor controlled by Myovant Sciences GmbH
                or Pfizer Inc. Myovant and Pfizer are not responsible for the content or services on the site.
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}