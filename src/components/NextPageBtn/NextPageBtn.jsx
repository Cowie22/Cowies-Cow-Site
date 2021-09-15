import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

const NextPageBtn = (props) => {
  const { btnText, btnLink, handleBtnTabOver, handleBtnTabOverTwo } = props;
  const [hovered, handleHovered] = useState(false);

  return (
    <Col lg={{span: 4, offset: 8}}>
      <div
        className='cta-btn-container next-page-btn-container'
        onMouseEnter={() => {
          handleHovered(true)
        }}
        onMouseLeave={() => {
          handleHovered(false)
        }}
        onClick={() => {
          handleBtnTabOver ? handleBtnTabOver()
          :
          handleBtnTabOverTwo ? handleBtnTabOverTwo()
          :
          null
        }}
      >
        <Link to={`/${btnLink}`}>
          <button className='cta-btn pink-btn'>
            <div className='btn-content-container'>
              <p>
                {btnText}
              </p>
              <div className='btn-arrow-container'>
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className={hovered ? 'btn-arrow active-arrow' : 'btn-arrow'}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.146446 0.646447C0.341708 0.451184 0.658291 0.451184 0.853553 0.646447L6.35355 6.14645C6.44732 6.24022 6.5 6.36739 6.5 6.5C6.5 6.63261 6.44732 6.75979 6.35355 6.85355L0.853553 12.3536C0.658291 12.5488 0.341708 12.5488 0.146446 12.3536C-0.0488162 12.1583 -0.0488162 11.8417 0.146446 11.6464L5.29289 6.5L0.146446 1.35355C-0.0488162 1.15829 -0.0488162 0.841709 0.146446 0.646447Z"
                  />
                </svg>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </Col>
  )
}

export default NextPageBtn