import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import InfoGraphic from '../../InfoGraphic/InfoGraphic'
import InfoGraphicData from '../../InfoGraphic/InfoGraphicData.js'

import IIcon from '../../../assets/images/I-icon.svg'

const Reduction = (props) => {
  const [hideImg, handleHideImg] = useState(false);
  const state = useContext(AppContext);
  const {
    setReferences
  } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      setReferences([1, 2, 3, 4]);
      mounted.current = true;
    } else {
      setReferences([1, 2, 3, 4]);
    }
  }, []);

  const handleUncover = () => {
    handleHideImg(1);
    setTimeout(() => {
      handleHideImg(2);
    }, 1500)
  }

  const useOnScreen = (refVal) => {
    const [isIntersecting, setIntersecting] = useState(false)
    const [called, handleCalled] = useState(false)
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
    useEffect(() => {
      isIntersecting ? handleUncover : null;
      observer.observe(refVal.current)
      return () => { observer.disconnect() }
    }, [])
    if (isIntersecting && !called) {
      handleCalled(true)
      handleUncover()
    }
    return isIntersecting
  }

  const ref = useRef()
  const isVisible = useOnScreen(ref)

  const { ReductionData1, ReductionData2 } = InfoGraphicData;

  return (
    <div className='reduction-container'>
      <h4 className='mulish purple'>
        KEY SECONDARY ENDPOINT
      </h4>
      <h2 className='blue'>
        Myfembree delivered sustained reductions in menstrual blood loss volume<sup>1,2</sup>
      </h2>
      <Row>
        <Col lg={{span: 12, offset: 0}}>
          <div
            className={
            hideImg > 0 ? 'cover-graph-container uncover d-none d-lg-block' :
            'cover-graph-container d-none d-lg-block'
          }
            id='cover-graph-container'
          >
          </div>
          <div className='graph-container'>
            <InfoGraphic data={ReductionData1} />
          </div>
          <div className='d-none d-lg-block'>
            <p className={hideImg > 1 ? 'graph-footnote' : 'graph-footnote hidden'}>
              menstrual blood loss volume assessment at Week 4 through Week 20 was prespecified, but not
              adjusted for multiplicity.<sup>2</sup>
            </p>
          </div>
          <div className='d-block d-lg-none'>
            <p>
              menstrual blood loss volume assessment at Week 4 through Week 20 was prespecified, but not
              adjusted for multiplicity.<sup>2</sup>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col ref={ref}>
          <div className='mid-section-container'>
            <h4 className='mulish purple'>
              ADDITIONAL ENDPOINT
            </h4>
            <h2 className='blue'>
              Change in menstrual blood loss volume at 52 weeks<sup>3,4</sup>
            </h2>
            <div className='lower-graph-container'>
              <InfoGraphic data={ReductionData2} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 9}}>
          <div className='footnote-container'>
            <h6>
              The <img src={IIcon} alt='' /> indicates standard error of the mean.
            </h6>
            <h6>
              Patients who completed LIBERTY 1 and 2 and met enrollment criteria were eligible for the
              LIBERTY open-label extension study. Data shown are only for patients who continued
              enrollment in the open-label extension study.
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Reduction