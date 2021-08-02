import React from 'react'

import computerIcon from '../../assets/images/computer-icon.svg'
import paper from '../../assets/images/paper-dog-ear-icon.svg'
import iphone from '../../assets/images/iphone-icon.svg'
import circleAndPowerBtnIcon from '../../assets/images/circle-and-power-btn-icon.svg'
import circleAndCircleArrowIcon from '../../assets/images/circle-and-circle-arrow-icon.svg'
import circleAndCloseIcon from '../../assets/images/circle-and-close-icon.svg'

import enrollmentPDF from '../../assets/downloadables/myfembree-support-program-enrollment-form.pdf'

// First three are for the myfembree-support-program page

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
    columns: {span: 12, offset: 0},
  }
]

const ListIconCardData2 = [
  {
    title: <p className='extra-bold'>Fax</p>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        Download a form <a href={enrollmentPDF} target='_blank' rel='noopener noreferrer'>here</a> or have
        it delivered by a Myfembree account manager
      </li>
      <li>
        The completed form is faxed from the office to the Myfembree Support Program
      </li>
      <li>
        Fax completed forms to 1-877-328-0138
      </li>
    </ul>,
    icon: paper,
    columns: {span: 12, offset: 0},
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
    columns: {span: 12, offset: 0},
  }
]

// Next three are for the dosing page

const ListIconCardData4 = [
  {
    title: <h3 className='extra-bold blue'>Starting treatment<sup>1</sup></h3>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        Start Myfembree as early as possible after the onset of menses, but no later than 7 days after
        menses has started
        <ul className='purple-ul-dashed less-right-padding'>
          <li>
            If begun later than 7 days after menses, irregular and/or heavy bleeding may initially occur
          </li>
        </ul>
      </li>
      <li>
        Exclude pregnancy
      </li>
      <li>
        Discontinue hormonal contraceptives; use nonhormonal contraceptives if needed
      </li>
      <li>
        Take around the same time daily, with or without food
      </li>
    </ul>,
    icon: circleAndPowerBtnIcon,
    columns: {span: 4, offset: 0},
    fixedDesktopHeight: true,
  }
]

const ListIconCardData5 = [
  {
    title: <h3 className='extra-bold blue'>Treatment duration<sup>1</sup></h3>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        The recommended total duration of treatment is 24 months
      </li>
    </ul>,
    icon: circleAndCircleArrowIcon,
    columns: {span: 4, offset: 0},
    fixedDesktopHeight: true,
  }
]

const ListIconCardData6 = [
  {
    title: <h3 className='extra-bold blue'>For missed doses<sup>1</sup></h3>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        In cases of a missed dose, Myfembree should be taken as soon as possible on the same day, and
        then resume regular dosing the next day at the usual time
      </li>
      <li>
        Two doses of Myfembree should not be taken at once to make up for a missed dose
      </li>
    </ul>,
    icon: circleAndCloseIcon,
    columns: {span: 4, offset: 0},
    fixedDesktopHeight: true,
  }
]

// Next 2 are for the liberty trials page, both have no icon, so I use a boolean to change styles depending
// On if the icon exists or not

const ListIconCardData7 = [
  {
    title: <h3 className='extra-bold blue no-icon-title'>Key inclusion criteria<sup>1</sup></h3>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        Premenopausal women aged 18 to 50 years old
      </li>
      <li>
        Regularly occurring menstrual periods of ≤14 days’ duration with a cycle of 21 to 38 days
      </li>
      <li>
        Menstrual blood loss volume of ≥80 mL per cycle for 2 menstrual cycles, or ≥160 mL during 1 cycle
      </li>
      <li>
        Ultrasound-confirmed diagnosis of uterine fibroids in which at least 1 fibroid met at least 1 of
        the following criteria:
        <ul className='purple-ul-dashed less-right-padding'>
          <li>
            Subserosal, intramural, or	&#60;50% intracavitary submucosal fibroid with a diameter ≥2 cm; or
          </li>
          <li>
            Multiple small fibroids with a total uterine volume of ≥130 cm<sup>3</sup>
          </li>
        </ul>
      </li>
    </ul>,
    columns: {span: 6, offset: 0},
    fixedDesktopHeight: true,
  }
]

const ListIconCardData8 = [
  {
    title: <h3 className='extra-bold blue no-icon-title'>Key exclusion criteria<sup>1</sup></h3>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        Abnormal endometrial biopsies, osteoporosis, another metabolic bone disease, or another cause of
        heavy menstrual bleeding
      </li>
      <li>
        Contraindication to treatment with estradiol and norethindrone acetate; or use of certain
        hormone therapies
      </li>
      <li>
        Hemoglobin &#60;8.0 g/dL
      </li>
    </ul>,
    columns: {span: 6, offset: 0},
    fixedDesktopHeight: true,
  }
]

// Next 2 are for the how it works page

const ListIconCardData9 = [
  {
    title: <h3 className='extra-bold blue no-icon-title'>Relugolix 40 mg<sup>1</sup></h3>,
    content:
    <ul className='purple-ul less-right-padding'>
      <li>
        The GnRH component of Myfembree <strong>reduces the release of luteinizing hormone and
        follicle-stimulating hormone.</strong> As a result, serum concentrations of <strong>estradiol
        and progesterone decrease, thereby reducing bleeding</strong> associated with uterine fibroids
      </li>
    </ul>,
    columns: {span: 4, offset: 0},
    lessFixedDesktopHeight: true,
  }
]

const ListIconCardData10 = [
  {
    title: <h3 className='extra-bold blue no-icon-title'>Estradiol (E2) 1 mg<sup>1</sup></h3>,
    content:
    <>
      <ul className='purple-ul less-right-padding'>
        <li>
          As a component of Myfembree, E2 <strong>may reduce the bone loss</strong> that can occur due to
          GnRH receptor antagonism alone
        </li>
      </ul>
      <h3 className='extra-bold blue no-icon-title second-title'>
        Norethindrone acetate (NETA) 0.5 mg<sup>1</sup>
      </h3>
      <ul className='purple-ul less-right-padding'>
        <li>
          As a component of Myfembree, NETA <strong>may protect the uterus from the potential adverse
          endometrial effects</strong> of unopposed estrogen
        </li>
      </ul>
    </>,
    columns: {span: 4, offset: 0},
    lessFixedDesktopHeight: true,
  }
]

// Next 2 are for the how it works page, both have no icon, so I use a boolean to change styles depending
// On if the icon exists or not


const ListIconCardData = {
  ListIconCardData1,
  ListIconCardData2,
  ListIconCardData3,
  ListIconCardData4,
  ListIconCardData5,
  ListIconCardData6,
  ListIconCardData7,
  ListIconCardData8,
  ListIconCardData9,
  ListIconCardData10
}

export default ListIconCardData