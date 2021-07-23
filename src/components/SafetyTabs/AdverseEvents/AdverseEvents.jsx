import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import CircleGraphCallout from '../../CircleGraphCallout/CircleGraphCallout'
import CircleGraphCalloutData from '../../CircleGraphCallout/CircleGraphCalloutData.js'


const AdverseEvents = (props) => {
  const { CircleGraphCalloutData1, CircleGraphCalloutData2 } = CircleGraphCalloutData;

  return (
    <div className='adverse-events-container'>
      <Row>
        <Col lg={{span: 12, offset: 0}}>
          <div className='circle-graph-container'>
            <CircleGraphCallout data={CircleGraphCalloutData1} />
            <CircleGraphCallout data={CircleGraphCalloutData2} />
          </div>
          <h2 className='blue'>
            Most common adverse events seen in Phase 3 clinical trials
          </h2>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 10, offset: 1}}>
          <table class='interior-table'>
            <tbody>
              <tr>
                <th>

                </th>
                <th>
                  Myfembree (n = 254) %
                </th>
                <th>
                  Placebo (n = 256) %
                </th>
              </tr>
              <tr>
                <td>
                  <p>
                    Hot flush, hyperhidrosis, or night sweats
                  </p>
                </td>
                <td>
                  <p>
                    10.6
                  </p>
                </td>
                <td>
                  <p>
                    6.6
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Abnormal uterine bleeding*
                  </p>
                </td>
                <td>
                  <p>
                    6.3
                  </p>
                </td>
                <td>
                  <p>
                    1.2
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Alopecia<sup>†</sup>
                  </p>
                </td>
                <td>
                  <p>
                    3.5
                  </p>
                </td>
                <td>
                  <p>
                    0.8
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Libido decreased<sup>‡</sup>
                  </p>
                </td>
                <td>
                  <p>
                    3.1
                  </p>
                </td>
                <td>
                  <p>
                    0.4
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 10, offset: 1}}>
          <div className='lower-content-container'>
            <p>
              Adverse events occurring in ≥3% of women treated with Myfembree and at a greater
              incidence than placebo.
            </p>
            <div className='footnote-container'>
              <h6>
                *Includes menorrhagia, metrorrhagia, vaginal hemorrhage, polymenorrhea, and irregular menstruation.
              </h6>
              <h6>
                †Alopecia includes alopecia, hair loss, and hair thinning, in no specific pattern.
              </h6>
              <h6>
                ‡Includes decreased libido and loss of libido.
              </h6>
            </div>
            <ul className='purple-ul'>
              <li>
                <strong>Hypertension:</strong> In 1 of the 2 clinical trials (LIBERTY 1), more women
                experienced new or worsening hypertension with Myfembree than with
                placebo (7.0% vs 0.8%, respectively)<sup>1</sup>
              </li>
              <li>
                <strong>Alopecia:</strong> Three of the 11 total affected women treated with Myfembree
                in LIBERTY 1 and 2 and the LIBERTY open-label extension study reported moderate
                alopecia; the other 8 women reported mild alopecia. For 1 patient, who was in
                the extension study, alopecia was a reason for discontinuing treatment<sup>1</sup>
              </li>
              <li>
                <strong>Abnormal uterine bleeding:</strong> The most common adverse reaction leading
                to discontinuation of Myfembree was uterine bleeding (1.2%) with onset usually
                reported within the first 3 months of therapy<sup>1</sup>
              </li>
              <li>
                <strong>Decreased libido:</strong> None of these events were reported as a serious
                adverse event<sup>2</sup>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AdverseEvents