import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import InfoGraphic from '../../InfoGraphic/InfoGraphic'
import InfoGraphicData from '../../InfoGraphic/InfoGraphicData.js'

import IIcon from '../../../assets/images/I-icon.svg'

const Reduction = (props) => {
  const { BMDData1, BMDData2, BMDData3 } = InfoGraphicData;

  return (
    <div className='reduction-container'>
      <h2 className='blue'>
        Changes in lumbar spine bone mineral density (BMD) with Myfembree over time<sup>1</sup>
      </h2>
      <div className='bmd-skinny-callout-container'>
        <ul className='purple-ul'>
          <li>
            Use of Myfembree should be limited to 24 months due to the risk of continued bone loss which
            may not be reversible
          </li>
          <li>
            Assessment of BMD by dual-energy X-ray absorptiometry (DXA) is recommended when starting
            Myfembree, and periodically thereafter
          </li>
          <li>
            Consider discontinuing Myfembree if the risk associated with bone loss exceeds the potential
            benefit of treatment
          </li>
          <li>
            Myfembree is contraindicated in women with known osteoporosis
          </li>
        </ul>
      </div>
      <Row>
        <Col lg={{span: 12, offset: 0}}>
          <div className='graph-container'>
            <InfoGraphic data={BMDData1} />
          </div>
          <Row>
            <Col lg={{span: 10, offset: 1}}>
              <div className='graph-footnote-container'>
                <p>
                  The treatment difference between Myfembree and placebo arms was −0.42%.
                </p>
                <ul className='purple-ul'>
                  <li>
                    In LIBERTY 1 and 2, and the LIBERTY open-label extension study, 0.6% (4/634) of women
                    treated with Myfembree experienced low trauma fractures (defined as a fall from
                    standing height or less). Two of these women were treated with relugolix monotherapy
                    for 12 weeks prior to Myfembree therapy
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='mid-section-container'>
            <h2 className='blue'>
              BMD changes in women treated with Myfembree can be assessed by observing changes over the
              same time period in untreated women with uterine fibroids<sup>1</sup>
            </h2>
            <div>
              <InfoGraphic data={BMDData2} />
            </div>
            <Row>
              <Col lg={{span: 10, offset: 1}}>
                <div className='mid-footnote-container'>
                  <p>
                    In the LIBERTY open-label extension study, continued bone loss was observed
                    with 12 months of continuous treatment with Myfembree.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='lower-section-container'>
            <div>
              <InfoGraphic data={BMDData3} />
            </div>
            <Row>
              <Col lg={{span: 10, offset: 1}}>
                <div className='lower-footnote-container'>
                  <p>
                    A separate, concurrent, prospective, observational study enrolled 262 women with
                    uterine fibroids who were age matched to participants of LIBERTY 1 and 2. These
                    women did not receive treatment for their fibroids and underwent DXA scans at
                    Month 6 and Month 12 to monitor for changes in BMD.
                  </p>
                  <p>
                    A decline in lumbar spine BMD of &#62;3% was observed in 23% (30/132) of women who had a DXA
                    scan following 12 months of Myfembree treatment in the LIBERTY open-label extension
                    study, and in 17.4% (37/213) of untreated women in the observational cohort. A decline
                    of &#62;8% was seen in 1% (1/132) of women treated with Myfembree who completed a DXA scan
                    at Month 12, and in 0.9% (2/213) of untreated women in the observational cohort.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 9}}>
          <div className='bmd-footnote-container'>
            <h6>
              BMD = bone mineral density; DXA = dual-energy X-ray absorptiometry.
            </h6>
            <h6>
              The <img src={IIcon} alt='' /> indicates 95% confidence intervals.
            </h6>
            <h6>
              *Baseline and Month 6 assessments include only those participants from LIBERTY 1 and 2 who
              participated in the LIBERTY open-label extension study.
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Reduction