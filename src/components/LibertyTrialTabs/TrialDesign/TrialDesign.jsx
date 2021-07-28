import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import InfoGraphic from '../../InfoGraphic/InfoGraphic'
import InfoGraphicData from '../../InfoGraphic/InfoGraphicData.js'

const TrialDesign = (props) => {
  const state = useContext(AppContext);
  const {
    setReferences
  } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      setReferences([2, 1, 3]);
      mounted.current = true;
    } else {
      setReferences([2, 1, 3]);
    }
  }, []);

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
            Menstrual blood loss volume &#60;80 mL; <strong><em>and</em></strong>
          </li>
          <li>
            ≥50% reduction in menstrual blood loss volume from baseline over the last 35 days of treatment
            compared to placebo
          </li>
        </ul>
        <p className='purple extra-bold second-list-header'>
          Key secondary endpoints <sup>1,2</sup>:
        </p>
        <ul className='purple-ul'>
          <li>
            Mean reduction in menstrual blood loss volume from baseline to Week 24
          </li>
          <li>
            Proportion of women who achieved amenorrhea over the last 35 days of treatment
          </li>
          <li>
            Proportion of women with anemia who achieved a hemoglobin response &#62;2 g/dL from baseline at Week 24
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
      <div className='footnote-container'>
        <h6>
          *Heavy menstrual bleeding defined as menstrual blood loss volume of ≥80 mL per cycle for 2
          menstrual cycles, or ≥160 mL during 1 cycle.<sup>2</sup>
        </h6>
        <h6>
          †The open-label extension study evaluated efficacy and safety of Myfembree for a total
          treatment duration of 12 months in eligible women from all 3 arms of the trials.<sup>2</sup>
        </h6>
        <h6>
          ‡Evaluation of relugolix monotherapy was requested by the FDA, but is not approved in
          the United States for heavy menstrual bleeding associated with uterine fibroids.
        </h6>
      </div>
    </div>
  )
}

export default TrialDesign