import React from 'react'

const CircleTypeCardData1 = [
  {
    title: `Type 1:`,
    text: `Keratinizing Squamous Cell Carcinoma`,
    columns: {span: 3, offset: 0},
    list: [
      `Associated with tobacco and alcohol use`,
      `Potential link to HPV`,
      `More common in Caucasians`,
      `Worse prognosis vs types 2 & 3`,
    ],
    delayClass: '',
  }
]

const CircleTypeCardData2 = [
  {
    title: `Type 2:`,
    text: `Non-Keratinizing Differentiated Carcinoma`,
    columns: {span: 3, offset: 1},
    list: [
      `Associated with EBV`,
      `More common in East Asia`,
      <>Better prognosis than type <sup>1</sup></>,
    ],
    delayClass: 'animation-start-2',
  }
]

const CircleTypeCardData3 = [
  {
    title: `Type 3:`,
    text: `Non-Keratinizing Undifferentiated Carcinoma`,
    columns: {span: 3, offset: 1},
    list: [
      `Associated with EBV`,
      `More common in East Asia`,
      <>Better prognosis than type <sup>1</sup></>,
      `Most common worldwide`,
    ],
    delayClass: 'animation-start-3',
  }
]

const CircleTypeCardData = {
  CircleTypeCardData1,
  CircleTypeCardData2,
  CircleTypeCardData3,
}

export default CircleTypeCardData