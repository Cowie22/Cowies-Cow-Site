import React from 'react'

import DNAIcon from '../../assets/images/components/RiskIconCard/DNA-icon.svg'
import leafInHouseIcon from '../../assets/images/components/RiskIconCard/leaf-in-house-icon.svg'
import virusIcon from '../../assets/images/components/RiskIconCard/virus-icon.svg'

const RiskIconCardData1 = [
  {
    icon: DNAIcon,
    title: <>GENETICS<sup>2,10</sup></>,
    columns: {span: 3, offset: 1},
    list: [
      `More likely to occur in patients of Southeast Asian descent`,
      `Specific genes, including HLA A2, HLA B46, and HLA B17`,
    ],
    paddingClass: '',
    delayClass: '',
  }
]

const RiskIconCardData2 = [
  {
    icon: leafInHouseIcon,
    title: <>ENVIRONMENTAL<sup>2,10</sup></>,
    columns: {span: 4, offset: 0},
    list: [
      `Alcohol and tobacco use`,
      `Eating preserved meats and fish containing nitrosamines`,
      `Occupational exposure to dust, smoke, and formaldehyde`,
    ],
    paddingClass: 'extra-card-padding',
    delayClass: 'animation-start-2',
  }
]

const RiskIconCardData3 = [
  {
    icon: virusIcon,
    title: <>VIRAL<sup>3,9</sup></>,
    columns: {span: 3, offset: 0},
    list: [
      `HPV is a possible factor in WHO type 1`,
      `EBV is strongly associated with WHO types 2 and 3`,
    ],
    paddingClass: '',
    delayClass: 'animation-start-3',
  }
]

const RiskIconCardData = {
  RiskIconCardData1,
  RiskIconCardData2,
  RiskIconCardData3,
}

export default RiskIconCardData