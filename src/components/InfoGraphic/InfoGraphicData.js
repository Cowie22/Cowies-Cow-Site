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

import amenorrheaGraph1 from '../../assets/images/amenorrhea-graph1.webp'
import amenorrheaGraph1FB from '../../assets/images/amenorrhea-graph1.png'
import amenorrheaGraph1Mobile from '../../assets/images/amenorrhea-graph1-mobile.webp'
import amenorrheaGraph1MobileFB from '../../assets/images/amenorrhea-graph1-mobile.png'

import amenorrheaGraph2 from '../../assets/images/amenorrhea-graph2.webp'
import amenorrheaGraph2FB from '../../assets/images/amenorrhea-graph2.png'
import amenorrheaGraph2Mobile from '../../assets/images/amenorrhea-graph2-mobile.webp'
import amenorrheaGraph2MobileFB from '../../assets/images/amenorrhea-graph2-mobile.png'

import BMDGraph1 from '../../assets/images/BMD-graph1.webp'
import BMDGraph1FB from '../../assets/images/BMD-graph1.png'
import BMDGraph1Mobile from '../../assets/images/BMD-graph1-mobile.webp'
import BMDGraph1MobileFB from '../../assets/images/BMD-graph1-mobile.png'

import BMDGraph2 from '../../assets/images/BMD-graph2.webp'
import BMDGraph2FB from '../../assets/images/BMD-graph2.png'
import BMDGraph2Mobile from '../../assets/images/BMD-graph2-mobile.webp'
import BMDGraph2MobileFB from '../../assets/images/BMD-graph2-mobile.png'

import BMDGraph3 from '../../assets/images/BMD-graph3.webp'
import BMDGraph3FB from '../../assets/images/BMD-graph3.png'
import BMDGraph3Mobile from '../../assets/images/BMD-graph3-mobile.webp'
import BMDGraph3MobileFB from '../../assets/images/BMD-graph3-mobile.png'

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
    <h3 className='purple graph-title text-center'>
      Menstrual blood loss response rate
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
      Key secondary endpoint: reduction in MBL volume from baseline up to Week 24<sup>1</sup>
    </h3>,
    img: reductionGraph1,
    fallBackImg: reductionGraph1FB,
    imgMobile: reductionGraph1Mobile,
    fallBackImgMobile: reductionGraph1MobileFB,
    contentColumns: {span: 11, offset: 0},
    imgColumns: {span: 12, offset: 0}
  }
]

const ReductionData2 = [
  {
    content:
    <h3 className='purple graph-title text-center'>
      LIBERTY 1 and 2 and LIBERTY open-label extension study results
    </h3>,
    img: reductionGraph2,
    fallBackImg: reductionGraph2FB,
    imgMobile: reductionGraph2Mobile,
    fallBackImgMobile: reductionGraph2MobileFB,
    contentColumns: {span: 9, offset: 0},
    imgColumns: {span: 12, offset: 0}
  }
]

const AmenorrheaData1 = [
  {
    content:
    <h3 className='purple graph-title text-center'>
      Proportion of women who attained amenorrhea in the last 35 days of treatment
    </h3>,
    img: amenorrheaGraph1,
    fallBackImg: amenorrheaGraph1FB,
    imgMobile: amenorrheaGraph1Mobile,
    fallBackImgMobile: amenorrheaGraph1MobileFB,
    contentColumns: {span: 8, offset: 2},
    imgColumns: {span: 9, offset: 1}
  }
]

const AmenorrheaData2 = [
  {
    content:
    <h3 className='purple graph-title text-center'>
      Proportion of women who had baseline Hgb ≤10.5 g/dL and had a &#62;2 g/dL improvement in Hgb levels from
      baseline at Week 24
    </h3>,
    img: amenorrheaGraph2,
    fallBackImg: amenorrheaGraph2FB,
    imgMobile: amenorrheaGraph2Mobile,
    fallBackImgMobile: amenorrheaGraph2MobileFB,
    contentColumns: {span: 8, offset: 2},
    imgColumns: {span: 9, offset: 1}
  }
]

const BMDData1 = [
  {
    content:
    <h3 className='purple graph-title text-center'>
      Pooled data from LIBERTY 1 and 2 at Month 6
    </h3>,
    img: BMDGraph1,
    fallBackImg: BMDGraph1FB,
    imgMobile: BMDGraph1Mobile,
    fallBackImgMobile: BMDGraph1MobileFB,
    contentColumns: {span: 10, offset: 1},
    imgColumns: {span: 10, offset: 1}
  }
]

const BMDData2 = [
  {
    content:
    <h3 className='purple graph-title text-center'>
      LIBERTY open-label extension study: change in BMD at Month 6 and 12 (N = 163)
    </h3>,
    img: BMDGraph2,
    fallBackImg: BMDGraph2FB,
    imgMobile: BMDGraph2Mobile,
    fallBackImgMobile: BMDGraph2MobileFB,
    contentColumns: {span: 12, offset: 0},
    imgColumns: {span: 10, offset: 1}
  }
]

const BMDData3 = [
  {
    content:
    <h3 className='purple graph-title text-center'>
      Natural history observational study: change in BMD at Month 6 and 12 in untreated women with uterine
      fibroids (N = 262)
    </h3>,
    img: BMDGraph3,
    fallBackImg: BMDGraph3FB,
    imgMobile: BMDGraph3Mobile,
    fallBackImgMobile: BMDGraph3MobileFB,
    contentColumns: {span: 10, offset: 1},
    imgColumns: {span: 10, offset: 1}
  }
]

const InfoGraphicData = {
  TrialDesignData1,
  ResponseRatesData1,
  ReductionData1,
  ReductionData2,
  AmenorrheaData1,
  AmenorrheaData2,
  BMDData1,
  BMDData2,
  BMDData3
}

export default InfoGraphicData