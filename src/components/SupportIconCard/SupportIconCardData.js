import React from 'react'

import paperIcon from '../../assets/images/paper-and-plus-icon.svg'
import circleNikeIcon from '../../assets/images/circle-and-nike-transparent-icon.svg'
import plusInHandIcon from '../../assets/images/plus-in-hand-icon.svg'
import paperMoneyIcon from '../../assets/images/paper-money-icon.svg'

const SupportIconCardData1 = [
  {
    title: 'Benefits Investigation',
    content: `Support Program staff can help verify the type of medication coverage the patient has,
    including formulary status and cost-sharing information`,
    icon: paperIcon,
  }
]

const SupportIconCardData2 = [
  {
    title: 'Prior Authorization',
    content: `Electronic prior authorization or assistance with standard fax submissions is available`,
    icon: circleNikeIcon,
  }
]

const SupportIconCardData3 = [
  {
    title: 'Appeals',
    content: `Support is available in cases of coverage requirements or denials`,
    icon: plusInHandIcon,
  }
]

const SupportIconCardData4 = [
  {
    title: 'Copay Assistance Program*',
    content:
    `Eligible patients with commercial insurance may pay as little as $5 per each monthly
    prescription or $15 for a 90-day prescription, with a $2,000 annual cap`,
    icon: paperMoneyIcon,
  }
]

const SupportIconCardData = {
  SupportIconCardData1,
  SupportIconCardData2,
  SupportIconCardData3,
  SupportIconCardData4,
}

export default SupportIconCardData