import React from 'react'

import circle31Icon from '../../assets/images/circle-3.1-percent-icon.svg'
import circle23Icon from '../../assets/images/circle-2.3-percent-icon.svg'
import circle39Icon from '../../assets/images/circle-3.9-percent-icon.svg'
import circle43Icon from '../../assets/images/circle-4.3-percent-icon.svg'

const CircleGraphCalloutData1 = [
  {
    title:
    <h2 className='blue'>
      3.1% of women taking Myfembree reported serious adverse events vs 2.3% on placebo<sup>1</sup>
    </h2>,
    subTitle:
    <h3 className='purple'>
      Proportion of women in which serious adverse events were reported
    </h3>,
    circleIconOne: circle31Icon,
    circleIconTwo: circle23Icon,
    content:
    <p>
      Serious adverse events included uterine fibroid expulsion and menorrhagia experienced by 1 woman;
      uterine fibroid prolapse, cholecystitis, and pelvic pain reported for 1 woman each.
    </p>,
  }
]

const CircleGraphCalloutData2 = [
  {
    title:
    <h2 className='blue'>
      Women taking Myfembree discontinued treatment due to adverse events at a rate similar to placebo<sup>1</sup>
    </h2>,
    subTitle:
    <h3 className='purple'>
      Proportion of women who discontinued treatment due to adverse events
    </h3>,
    circleIconOne: circle39Icon,
    circleIconTwo: circle43Icon,
    content:
    <p>
      Discontinuations with Myfembree were most commonly due to uterine bleeding events (1.2%), with onset
      usually reported within the first 3 months of therapy.
    </p>,
  }
]

const CircleGraphCalloutData = {
  CircleGraphCalloutData1,
  CircleGraphCalloutData2,
}

export default CircleGraphCalloutData