import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

import SupportIconCard from '../SupportIconCard/SupportIconCard'
import SupportIconCardData from '../SupportIconCard/SupportIconCardData.js'
import PurpleCallout from '../PurpleCallout/PurpleCallout'
import ListIconCard from '../ListIconCard/ListIconCard'
import ListIconCardData from '../ListIconCard/ListIconCardData.js'
import PurpleLineCallout from '../PurpleLineCallout/PurpleLineCallout'
import PersonIconCard from '../PersonIconCard/PersonIconCard'
import ContentBTNCard from '../ContentBTNCard/ContentBTNCard'
import SupportContentBlock from '../SupportContentBlock/SupportContentBlock'
import SupportContentBlockData from '../SupportContentBlock/SupportContentBlockData.js'
import SupportContentBlockLarge from '../SupportContentBlockLarge/SupportContentBlockLarge'

import calendar from '../../assets/images/hanging-calendar-icon.svg'
import telemarketer from '../../assets/images/telemarketer-icon.svg'
import manager from '../../assets/images/manager-icon.svg'

class MyfembreeSupportProgramContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    this.props.handleActiveHeaderDropdown('support');
  }

  render() {
    const {
      SupportIconCardData1,
      SupportIconCardData2,
      SupportIconCardData3,
      SupportIconCardData4,
    } = SupportIconCardData;

    const {
      ListIconCardData1,
      ListIconCardData2,
      ListIconCardData3,
    } = ListIconCardData;

    const {
      SupportContentBlockData1,
      SupportContentBlockData2,
      SupportContentBlockData3,
    } = SupportContentBlockData;
    return (
      <Layout>
        <section className='support-container'>
          <Container>
            <Row>
              <Col lg={{span: 9, offset: 0}} xs={{span: 12, offset: 0}}>
                <h1 className='top-title'>
                  NOW AVAILABLE
                </h1>
                <p className='white'>
                  Myfembree® is now available at retail or mail-order pharmacies.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={{span: 7, offset: 0}}>
                <div className='support-header-card-callout'>
                  <h1>
                    The Myfembree<sup>®</sup> Support Program
                  </h1>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={{span: 8, offset: 0}} xs={{span: 11, offset: 0}}>
                <h2 className='support-sub-title white'>
                  For your patients who have been prescribed Myfembree, support starts with enrollment into
                  the Myfembree Support Program
                </h2>
                <p className='white'>
                  The Myfembree Support Program is designed to help your patients throughout their treatment
                  journey. We offer financial assistance options, dedicated support staff, and other helpful
                  resources once patients have been prescribed Myfembree.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='support-mid-container'>
          <Container>
            <Row>
              <Col lg={{span: 12}} xs={{span: 11}}>
                <h2 className='blue'>
                  Overview of patient support throughout the Myfembree treatment journey
                </h2>
              </Col>
            </Row>
            <Row>
              <Col lg={{span: 12}}>
                <Row>
                  <SupportIconCard data={SupportIconCardData1} />
                  <SupportIconCard data={SupportIconCardData2} />
                  <SupportIconCard data={SupportIconCardData3} />
                </Row>
                <div className='support-mid-container-lower-cards'>
                  <Row>
                    <SupportIconCard data={SupportIconCardData4} />
                    <Col lg={{span: 8}}>
                      <div className='support-mid-container-large-card'>
                        <Row>
                          <Col lg={{span: 6}}>
                            <div className='icon-container'>
                              <img src={calendar} />
                              <p className='extra-bold'>
                                Free Medication Programs*
                              </p>
                              <p>
                                Eligible patients with...
                              </p>
                            </div>
                          </Col>
                          <Col lg={{span: 6}}>
                            <ul className='purple-ul less-right-padding'>
                              <li>
                                Commercial insurance may qualify for up to 4 months of a free supply of Myfembree
                              </li>
                              <li>
                                Federal insurance may qualify for up to 2 months of a free supply of Myfembree
                              </li>
                              <li>
                                No insurance or those with insurance denials may qualify to receive their medication
                                at no cost from the Myovant Sciences Patient Assistance Program
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col>
                    <h6>
                      *See below for full terms and conditions.
                    </h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <PurpleCallout
          title={
            <h2 className='white'>
              The prescriber may submit Myfembree prescriptions directly to the patient's retail or mail-order pharmacy
            </h2>
          }
        />
        <section className='support-lower-container'>
          <Container>
            <Row>
              <Col lg={{span: 10, offset: 1}}>
                <h2 className='blue'>
                  Enrolling patients in the Myfembree Support Program
                </h2>
                <p className='extra-bold support-lower-sub-title'>
                  Enrollment can be accomplished by:
                </p>
              </Col>
            </Row>
            <div className='support-lower-inner-container'>
              <Row>
                <ListIconCard data={ListIconCardData1} />
                <ListIconCard data={ListIconCardData2} />
                <ListIconCard data={ListIconCardData3} />
              </Row>
            </div>
            <Row>
              <Col lg={{span: 10, offset: 1}}>
                <PurpleLineCallout
                  title={
                    <p className='extra-bold purple'>
                      The office can call <a href='tel:1-833-693-3627'>1-833-MYFEMBREE (1-833-693-3627)</a> to speak
                      to a Support Coordinator or Virtual Reimbursement Manager about access and reimbursement
                      status questions
                    </p>
                  }
                />
                <Row className='person-icon-row'>
                  <PersonIconCard
                    title={'Support Coordinators'}
                    icon={telemarketer}
                  />
                  <PersonIconCard
                    title={'Virtual Reimbursement Managers'}
                    icon={manager}
                  />
                </Row>
                <ContentBTNCard
                  title={
                    `If your patient already has a Myfembree prescription, they can provide their e-consent
                    for enrollment and sharing protected health information`
                  }
                  btnText={'Provide e-Consent'}
                  link={''}
                />
                <h6 className='lower-content-footnote'>
                  *See below for full terms and conditions.
                </h6>
              </Col>
            </Row>
          </Container>
        </section>
        <PurpleCallout
          title={
            <h2 className='white'>
              If assistance is required during the enrollment process, call the Myfembree
              Support Program at <a href='tel:1-833-693-3627'><u>1-833-MYFEMBREE</u> (<u>1-833-693-3627</u>)</a>,
              8 AM–8 PM ET, Monday–Friday
            </h2>
          }
        />
        <SupportContentBlockLarge />
        <SupportContentBlock
          data={SupportContentBlockData1}
        />
        <SupportContentBlock
          data={SupportContentBlockData2}
        />
        <SupportContentBlock
          data={SupportContentBlockData3}
        />
      </Layout>
    )
  }
}

export default MyfembreeSupportProgramContent