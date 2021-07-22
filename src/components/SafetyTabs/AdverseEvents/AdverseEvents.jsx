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
        <Col lg={{span: 9, offset: 1}}>
          {/* <div className='footnote-container'>
            <h6>
              *Iron therapy was required for women with Hgb ≥8 g/dL and ≤10 g/dL.
            </h6>
          </div> */}
        </Col>
      </Row>
    </div>
  )
}

export default AdverseEvents