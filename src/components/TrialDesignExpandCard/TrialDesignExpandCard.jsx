import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const TrialDesignExpandCard = (props) => {
  const [hovered, handleHovered] = useState(false);
  const [expanded, handleExpanded] = useState(false);

  return (
    <Col lg={{span: 12, offset: 0}}>
      <div className={!expanded ? 'expand-card-container not-expanded-container' : 'expand-card-container'}>
        <div
          className='toggle-content-container'
          onClick={() => {
            handleExpanded(!expanded)
          }}
        >
          <p className='pink extra-bold text-center'>
            {!expanded ? 'View Trial Design' : 'Collapse Trial Design'}
          </p>
          {
            !expanded ?
              <svg
                className={'circle-icon'}
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2ZM1.5 12C1.5 5.92487 6.42487 1 12.5 1C18.5751 1 23.5 5.92487 23.5 12C23.5 18.0751 18.5751 23 12.5 23C6.42487 23 1.5 18.0751 1.5 12ZM12.5 7C12.7761 7 13 7.22386 13 7.5V11.5H17C17.2761 11.5 17.5 11.7239 17.5 12C17.5 12.2761 17.2761 12.5 17 12.5H13V16.5C13 16.7761 12.7761 17 12.5 17C12.2239 17 12 16.7761 12 16.5V12.5H8C7.72386 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.72386 11.5 8 11.5H12V7.5C12 7.22386 12.2239 7 12.5 7Z" />
              </svg>
            :
              <svg
                className={'circle-icon'}
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2ZM1.5 12C1.5 5.92487 6.42487 1 12.5 1C18.5751 1 23.5 5.92487 23.5 12C23.5 18.0751 18.5751 23 12.5 23C6.42487 23 1.5 18.0751 1.5 12ZM7.5 12C7.5 11.7239 7.72386 11.5 8 11.5H17C17.2761 11.5 17.5 11.7239 17.5 12C17.5 12.2761 17.2761 12.5 17 12.5H8C7.72386 12.5 7.5 12.2761 7.5 12Z" />
              </svg>
          }
        </div>
        <div className={!expanded ? 'expand-card-content-container not-expanded' : 'expand-card-content-container'}>
          <Row>
            <Col lg={{span: 10, offset: 1}}>
              <p>
                <strong>LIBERTY 1 and 2:</strong> Two replicate, 24-week, randomized, double-blind,
                placebo-controlled clinical trials that enrolled premenopausal women with heavy menstrual
                bleeding associated with uterine fibroids.<sup>1</sup>
              </p>
              <p>
                <strong>Primary endpoints included:</strong>  The proportion of women in the Myfembree arm who
                achieved menstrual blood loss volume &#60;80 mL per cycle; <stong><em>and</em></stong> ≥50%
                reduction in menstrual bleeding from baseline over the last 35 days of treatment compared
                to placebo.<sup>1</sup>
              </p>
              <p>
                <strong>Key secondary endpoints included:</strong> Mean reduction in menstrual blood loss volume
                to Week 24; proportion of women who achieved amenorrhea over the last 35 days of treatment;
                and proportion of women with anemia who achieved a hemoglobin response 	&#62;2 g/dL from baseline
                at Week 24.<sup>1,2</sup>
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={{span: 4, offset: 1}}>
              <div
                className='cta-btn-container expand-card-btn-container'
                onMouseEnter={() => {
                  handleHovered(true)
                }}
                onMouseLeave={() => {
                  handleHovered(false)
                }}
              >
                <Link to={`/liberty-trials/`}>
                  <button className='cta-btn transparent-btn-pink'>
                    See Trial Design Page for Full Details
                    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        className={hovered ? 'btn-arrow active-arrow' : 'btn-arrow'}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.146446 0.646447C0.341708 0.451184 0.658291 0.451184 0.853553 0.646447L6.35355 6.14645C6.44732 6.24022 6.5 6.36739 6.5 6.5C6.5 6.63261 6.44732 6.75979 6.35355 6.85355L0.853553 12.3536C0.658291 12.5488 0.341708 12.5488 0.146446 12.3536C-0.0488162 12.1583 -0.0488162 11.8417 0.146446 11.6464L5.29289 6.5L0.146446 1.35355C-0.0488162 1.15829 -0.0488162 0.841709 0.146446 0.646447Z"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  )
}

export default TrialDesignExpandCard