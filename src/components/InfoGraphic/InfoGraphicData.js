import React from 'react'

import TrialDesignGraph from '../../assets/images/trial-design-graph.webp'
import TrialDesignGraphFB from '../../assets/images/trial-design-graph.png'
import TrialDesignGraphMobile from '../../assets/images/trial-design-graph-mobile.webp'
import TrialDesignGraphMobileFB from '../../assets/images/trial-design-graph-mobile.png'

import ResponseRatesGraph from '../../assets/images/response-rates-graph.webp'
import ResponseRatesGraphFB from '../../assets/images/response-rates-graph.png'
import ResponseRatesGraphMobile from '../../assets/images/response-rates-graph-mobile.webp'
import ResponseRatesGraphMobileFB from '../../assets/images/response-rates-graph-mobile.png'

import reductionGraph1 from '../../assets/images/reduction-graph1.webp'
import reductionGraph1FB from '../../assets/images/reduction-graph1.png'
import reductionGraph1Mobile from '../../assets/images/reduction-graph1-mobile.webp'
import reductionGraph1MobileFB from '../../assets/images/reduction-graph1-mobile.png'

import reductionGraph2 from '../../assets/images/reduction-graph2.webp'
import reductionGraph2FB from '../../assets/images/reduction-graph2.png'
import reductionGraph2Mobile from '../../assets/images/reduction-graph2-mobile.webp'
import reductionGraph2MobileFB from '../../assets/images/reduction-graph2-mobile.png'

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

const ReductionData1 = [
  {
    content:
    <h3 className='purple graph-title text-center'>
      Menstrual bleeding reductions from baseline up to Week 24<sup>1</sup>
    </h3>,
    img: reductionGraph1,
    fallBackImg: reductionGraph1FB,
    imgMobile: reductionGraph1Mobile,
    fallBackImgMobile: reductionGraph1MobileFB,
    contentColumns: {span: 9, offset: 0},
    imgColumns: {span: 12, offset: 0}
  }
]

const ReductionData2 = [
  {
    content:
    <h3 className='purple graph-title text-center'>
      Menstrual bleeding reduction up to Week 52: LIBERTY 1 and 2 and LIBERTY open-label extension study
    </h3>,
    img: reductionGraph2,
    fallBackImg: reductionGraph2FB,
    imgMobile: reductionGraph2Mobile,
    fallBackImgMobile: reductionGraph2MobileFB,
    contentColumns: {span: 9, offset: 0},
    imgColumns: {span: 12, offset: 0}
  }
]

const InfoGraphicData = {
  TrialDesignData1,
  ResponseRatesData1,
  ReductionData1,
  ReductionData2,
}

export default InfoGraphicData