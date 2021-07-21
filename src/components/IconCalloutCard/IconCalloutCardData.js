import React from 'react'

import circleAndNikeIcon from '../../assets/images/circle-and-nike-icon.svg'
import bloodDropDownArrowIcon from '../../assets/images/blood-drop-down-arrow-icon.svg'
import shieldAndCrossIcon from '../../assets/images/shield-and-cross-icon.svg'
import pillBottleWithText from '../../assets/images/pill-bottle-with-text.svg'

const IconCalloutCardData1 = [
  {
    title: <h3 className='blue'>Convenience of once-daily dosing<sup>1</sup></h3>,
    content:
    <div className='pill-img-container'>
      <img src={pillBottleWithText} className='pill-img' alt='' />
    </div>,
    btnText: 'See Dosing Considerations',
    btnLink: 'once-daily-dosing/',
    icon: circleAndNikeIcon,
  }
]

const IconCalloutCardData2 = [
  {
    title: <h3 className='blue'>Clinically significant efficacy<sup>1,2</sup></h3>,
    subTitle: 'Myfembree was studied across multiple endpoints, including:',
    content:
    <ul className='purple-ul-nike'>
      <li>
        Response to treatment
      </li>
      <li>
        Change in menstrual bleeding from baseline
      </li>
      <li>
        Amenorrhea response
      </li>
      <li>
        Hemoglobin response in women with anemia
      </li>
    </ul>,
    btnText: 'See Efficacy Data',
    btnLink: 'efficacy-data/',
    icon: bloodDropDownArrowIcon,
  }
]

const IconCalloutCardData3 = [
  {
    title: <h3 className='blue'>Myfembree safety profile<sup>1,2</sup></h3>,
    subTitle: 'The safety and tolerability of Myfembree were assessed across:',
    content:
    <div className='icon-callout-purple-line-container'>
      <h4 className='gradient-title text-center'>
        768 WOMEN IN PHASE 3 CLINICAL TRIALS
      </h4>
    </div>,
    btnText: 'See Safety Profile',
    btnLink: 'safety-profile/',
    icon: shieldAndCrossIcon,
  }
]

const IconCalloutCardData = {
  IconCalloutCardData1,
  IconCalloutCardData2,
  IconCalloutCardData3,
}

export default IconCalloutCardData