import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import InfoGraphic from '../../InfoGraphic/InfoGraphic'
import InfoGraphicData from '../../InfoGraphic/InfoGraphicData.js'

const TrialDesign = (props) => {
  const { TrialDesignData1 } = InfoGraphicData;

  return (
    <div className='trial-design-container'>
      <h2 className='blue'>
        LIBERTY 1 and 2 studied 768 women with heavy menstrual bleeding due to uterine fibroids<sup>2</sup>
      </h2>
      <div className='upper-card-container'>
        <p className='upper-card-header'>
          <strong>LIBERTY 1 and 2:</strong> Two replicate, 24-week, randomized, double-blind,
          placebo-controlled clinical trials that enrolled premenopausal women with heavy menstrual
          bleeding* associated with uterine fibroids.<sup>2</sup>
        </p>
        <p className='purple extra-bold list-header'>
          Primary endpoint <sup>2</sup>:
        </p>
        <p className='extra-bold'>
          The proportion of women in the Myfembree arm who achieved:
        </p>
        <ul className='purple-ul'>
          <li>
            Menstrual blood loss volume &#60;80 mL per cycle; <strong><em>and</em></strong>
          </li>
          <li>
            ≥50% reduction in menstrual bleeding from baseline over the last 35 days of treatment
            compared to placebo
          </li>
        </ul>
        <p className='purple extra-bold second-list-header'>
          Key secondary endpoints <sup>2</sup>:
        </p>
        <ul className='purple-ul'>
          <li>
            Mean reduction in menstrual bleeding from baseline to Week 24
          </li>
          <li>
            Proportion of women who achieved amenorrhea over the last 35 days of treatment
          </li>
          <li>
            Proportion of women with anemia who achieved a hemoglobin response &#60;2 g/dL from baseline at Week 24
          </li>
        </ul>
      </div>
      <div className='skinny-callout-container'>
        <p>
          <strong>LIBERTY open-label extension study:</strong> 28-week, open-label extension study that enrolled
          476 women from LIBERTY 1 and 2.<sup>2,†</sup>
        </p>
      </div>
      <div className='graph-container'>
        <InfoGraphic data={TrialDesignData1} />
      </div>
    </div>
  )
}

export default TrialDesign