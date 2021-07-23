import React, { useState, useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import InfoGraphic from '../../InfoGraphic/InfoGraphic'
import InfoGraphicData from '../../InfoGraphic/InfoGraphicData.js'

const ResponseRates = (props) => {
  const { ResponseRatesData1 } = InfoGraphicData;

  return (
    <div className='return-rates-container'>
      <h2 className='blue'>
        97% of evaluated women returned to menses within a mean of 36 days following
        treatment discontinuation<sup>1</sup>
      </h2>
      <Row>
        <Col lg={{span: 10, offset: 1}}>
          <table class='return-rates-table'>
            <tbody>
              <tr>
                <th>

                </th>
                <th>
                  Returned to menses % (n/N)
                </th>
                <th>
                  Mean time from last dose (days)
                </th>
              </tr>
              <tr>
                <td>
                  <p>
                    LIBERTY 1
                  </p>
                </td>
                <td>
                  <p>
                    100% (35/35)
                  </p>
                </td>
                <td>
                  <p>
                    36
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    LIBERTY 2
                  </p>
                </td>
                <td>
                  <p>
                    93.3% (28/30)
                  </p>
                </td>
                <td>
                  <p>
                    30.7
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='chart-footnote-container'>
            <ul className='purple-ul'>
              <li>
                Return-to-menses discontinuation data pertain to women treated with Myfembree who
                prematurely discontinued the trial or did not continue into the open-label extension study
              </li>
              <li>
                Mean time of return to menses was &#60;40 days, with longer occurrence for women who
                achieved amenorrhea (40.6 days and 41.1 days in LIBERTY 1 and 2, respectively) compared
                with women without amenorrhea (33.0 days and 26.6 days in LIBERTY 1 and 2, respectively) in
                the last 35 days of treatment
              </li>
              <li>
                Women who did not have a return to menses included those who had surgery, used alternative
                medications associated with amenorrhea, entered menopause, and for whom the cause was unknown
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ResponseRates