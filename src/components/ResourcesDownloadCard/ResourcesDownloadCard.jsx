import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import downloadIcon from '../../assets/images/download-icon-pink.svg'
import downloadIconHovered from '../../assets/images/download-icon-white.svg'

const ResourcesDownloadCard = (props) => {
  const { data } = props;
  const { title, subTitle, downloadLink, wordDoc } = data[0];
  const [hovered, handleHovered] = useState(false)
  return (
    <Row>
      <Col lg={{span: 12}}>
        <div className='resources-download-card-container'>
          <Row>
            <Col lg={{span: 5, offset: 1}} xs={{span: 10, offset: 1}}>
              <a
                href={downloadLink}
                target='_blank'
                className='text-link'
                download={wordDoc ? wordDoc : false}
              >
                <p className='pink extra-bold'>
                  {title}
                </p>
              </a>
              <p className='resources-download-card-subtitle'>
                {subTitle}
              </p>
            </Col>
            <Col lg={{span: 4, offset: 1}} xs={{span: 10, offset: 1}}>
              <div
                className='cta-btn-container resources-btn-container'
                onMouseEnter={() => handleHovered(true)}
                onMouseLeave={() => handleHovered(false)}
              >
                <a
                  href={downloadLink}
                  target='_blank'
                  className='text-link'
                  download={wordDoc ? wordDoc : false}
                >
                  <button className='cta-btn transparent-btn-pink'>
                    Download
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={hovered ? 'download-svg hovered-svg' : 'download-svg'}
                    >
                      <path d="M21 14V18.6667C21 19.2855 20.7893 19.879 20.4142 20.3166C20.0391 20.7542 19.5304 21 19 21H5C4.46957 21 3.96086 20.7542 3.58579 20.3166C3.21071 19.879 3 19.2855 3 18.6667V14" stroke="#A51890" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 11L12 17L17 11" stroke="#A51890" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 17V3" stroke="#A51890" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default ResourcesDownloadCard