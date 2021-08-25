import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

const ResponseRates = (props) => {
  const state = useContext(AppContext);
  const {
    setReferences
  } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      setReferences([1, 4]);
      mounted.current = true;
    } else {
      setReferences([1, 4]);
    }
  }, []);

  return (
    <div className='return-rates-container'>
      <h2 className='blue'>
        97% of evaluated women returned to menses within a mean of 33.7 days following
        treatment discontinuation<sup>1,2</sup>
      </h2>
      <Row>
        <Col lg={{span: 10, offset: 1}}>
          <table className='return-rates-table'>
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
                In LIBERTY 1 and 2, the mean time of return to menses was 33.7 days, with longer occurrence for women
                who achieved amenorrhea (40.8 days) compared with women without amenorrhea (29.8 days) in the last 35
                days of treatment 
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