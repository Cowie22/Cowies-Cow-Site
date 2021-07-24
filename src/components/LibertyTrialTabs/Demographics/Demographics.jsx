import React, { useState, useEffect, useContext, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import ListIconCard from '../../ListIconCard/ListIconCard'
import ListIconCardData from '../../ListIconCard/ListIconCardData.js'

const Demographics = (props) => {
  const {
    ListIconCardData7,
    ListIconCardData8,
  } = ListIconCardData;

  const state = useContext(AppContext);
  const {
    setReferences
  } = state;

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      setReferences([2, 1, 4]);
      mounted.current = true;
    } else {
      setReferences([2, 1, 4]);
    }
  }, []);

  return (
    <div className='demographics-container'>
      <h2 className='blue'>
        Demographics and fibroid-related characteristics were generally balanced between Myfembree
        and placebo arms<sup>2</sup>
      </h2>
      <Row>
        <Col lg={{span: 10, offset: 1}}>
          <table className='interior-table'>
            <tbody>
              <tr>
                <th colSpan='2'>
                  Patient demographics
                </th>
              </tr>
              <tr>
                <td>
                  <p>
                    Median age, years
                  </p>
                  <hr />
                </td>
                <td>
                  <p>
                    43 (range: 19-51)
                  </p>
                  <hr />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Black patients, %
                  </p>
                  <hr />
                </td>
                <td>
                  <p>
                    53
                  </p>
                  <hr />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    White patients, %
                  </p>
                  <hr />
                </td>
                <td>
                  <p>
                    41
                  </p>
                  <hr />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Mean BMI, kg/m<sup>2</sup>
                  </p>
                </td>
                <td>
                  <p>
                    31.6 (range: 16.0-62.8<sup>3</sup>)
                  </p>
                </td>
              </tr>
              <tr>
                <th colSpan='2'>
                  Baseline fibroid-related characteristics
                </th>
              </tr>
              <tr>
                <td>
                  <p>
                    Mean menstrual blood loss volume mL (± SD)
                  </p>
                  <hr />
                </td>
                <td>
                  <p>
                    231 (± 156) (range: 82.8-1365.1<sup>3</sup>)
                  </p>
                  <hr />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Mean hemoglobin, g/dL
                  </p>
                </td>
                <td>
                  <p>
                    11.2 (range: 6.1-15.4)<sup>3</sup>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <div className='liberty-trials-card-container'>
        <Row>
          <ListIconCard data={ListIconCardData7} />
          <ListIconCard data={ListIconCardData8} />
        </Row>
      </div>
      <Row>
        <Col>
          <div className='footnote-container'>
            <h6>
              BMI = body mass index; SD = standard deviation.
            </h6>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Demographics