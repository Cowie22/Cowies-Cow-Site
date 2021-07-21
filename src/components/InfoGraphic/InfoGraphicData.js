import React from 'react'

import TrialDesignGraph from '../../assets/images/trial-design-graph.webp'
import TrialDesignGraphFB from '../../assets/images/trial-design-graph.png'
import TrialDesignGraphMobile from '../../assets/images/trial-design-graph-mobile.webp'
import TrialDesignGraphMobileFB from '../../assets/images/trial-design-graph-mobile.png'

import ResponseRatesGraph from '../../assets/images/response-rates-graph.webp'
import ResponseRatesGraphFB from '../../assets/images/response-rates-graph.png'
import ResponseRatesGraphMobile from '../../assets/images/response-rates-graph-mobile.webp'
import ResponseRatesGraphMobileFB from '../../assets/images/response-rates-graph-mobile.png'

const TrialDesignData1 = [
  {
    content: '',
    img: TrialDesignGraph,
    fallBackImg: TrialDesignGraphFB,
    imgMobile: TrialDesignGraphMobile,
    fallBackImgMobile: TrialDesignGraphMobileFB,
    contentColumns: {},
    imgColumns: {span: 12}
  }
]

const ResponseRatesData1 = [
  {
    content:
    <h3 className='purple graph-title'>
      Proportion of women who achieved a clinically significant bleeding reduction
    </h3>,
    img: ResponseRatesGraph,
    fallBackImg: ResponseRatesGraphFB,
    imgMobile: ResponseRatesGraphMobile,
    fallBackImgMobile: ResponseRatesGraphMobileFB,
    contentColumns: {span: 12, offset: 0},
    imgColumns: {span: 12, offset: 0}
  }
]

const InfoGraphicData = {
  TrialDesignData1,
  ResponseRatesData1,
}

export default InfoGraphicData