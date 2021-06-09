import React from 'react'

import computerIcon from '../../assets/images/computer-icon.svg'
import paper from '../../assets/images/paper-dog-ear-icon.svg'
import iphone from '../../assets/images/iphone-icon.svg'

import enrollmentPDF from '../../assets/downloadables/myfembree-support-program-enrollment-form.pdf'

const ListIconCardData1 = [
  {
    title: <p className='extra-bold'>Electronic Prescription Platform Enrollment (eRx)</p>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        The electronic enrollment allows the Support Program to start processing the free medication programs
        or benefits investigation*
      </li>
      <li>
        Enrollment forms can be submitted electronically using your designated eRx platform
        <ul className='purple-ul-dashed less-right-padding'>
          <li>
            Free medication supply is fulfilled by TC Script pharmacy, a noncommercial dispensing pharmacy
          </li>
        </ul>
      </li>
    </ul>,
    icon: computerIcon,
  }
]

const ListIconCardData2 = [
  {
    title: <p className='extra-bold'>Fax</p>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        Download a form <a href={enrollmentPDF} target='_blank'>here</a> or have it delivered by a
        Myfembree account manager
      </li>
      <li>
        The completed form is faxed from the office to the Myfembree Support Program
      </li>
      <li>
        Fax completed forms to 1-877-328-0138
      </li>
    </ul>,
    icon: paper,
  }
]

const ListIconCardData3 = [
  {
    title:
    <p className='extra-bold'>
      Phone: <a href='tel:1-833-693-3627'>1-833-MYFEMBREE (1-833-693-3627)</a>, 8 AM–8 PM ET, Monday–Friday
    </p>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        Offices can contact the Myfembree Support Program by phone and provide relevant information for enrollment
      </li>
      <li>
        Once the support team obtains all required information, the enrollment process starts
      </li>
    </ul>,
    icon: iphone,
  }
]


const ListIconCardData = {
  ListIconCardData1,
  ListIconCardData2,
  ListIconCardData3,
}

export default ListIconCardData