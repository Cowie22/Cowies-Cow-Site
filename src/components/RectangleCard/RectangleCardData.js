import React from 'react'

import paperMoney from '../../assets/images/paper-money-icon.svg'
import iphone from '../../assets/images/iphone-icon.svg'

const HomeRectangleCardData1 = [
  {
    title: 'Coming soon',
    content: 'Myfembree will be available at retail and mail-order pharmacies in June 2021.',
    icon: paperMoney,
    btnText: 'Access Information',
    btnLink: 'myfembree-support-program/#financial-assistance',
    alt: 'Prescription card',
  }
]

const HomeRectangleCardData2 = [
  {
    title: <>Myfembree<sup>®</sup> Support Program</>,
    content:
    <p>The Myfembree® Support Program is designed to help your eligible patients throughout their
    treatment journey. The Support Program will offer insurance coverage support, a copay assistance
    program, other financial assistance options, and additional resources once eligible patients have been
    prescribed Myfembree.</p>,
    icon: iphone,
    btnText: 'Myfembree Support Program',
    btnLink: 'myfembree-support-program/',
    alt: 'Cell phone',
  }
]

const RectangleCardData = {
  HomeRectangleCardData1,
  HomeRectangleCardData2,
}

export default RectangleCardData