import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'


const SliderTabNav = (props) => {
  const [width, handleWidth] = useState(0);
  const [hovered, handleHovered] = useState(0);
  const { tab1, tab2, tab3 } = props;
  const state = useContext(AppContext);
  const { currentPage, currentTopTab, handleCurrentTopTab } = state;

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, []);

  const updateWindowDimensions = () => {
    handleWidth(window.innerWidth);
  }

  return (
    <Row>
      <Col
        xs={!tab3 ? 6 : 4}
        className='tab-column'
        onClick={() => {
          handleCurrentTopTab(1);
        }}
        onMouseEnter={() => {
          handleHovered(1)
        }}
        onMouseLeave={() => {
          handleHovered(0)
        }}
      >
        <div
          className={
            currentTopTab === 1 ? 'bottom-tab-border-left' :
            currentTopTab === 2 ? 'bottom-tab-border-center' :
            currentTopTab === 3 ? 'bottom-tab-border-right' :
            'bottom-tab-border-left'
          }
        >
        </div>
        <div
          className={
            hovered === 1 ? 'hovered-tab-border-left' :
            hovered === 2 ? 'hovered-tab-border-center' :
            hovered === 3 ? 'hovered-tab-border-right' :
            currentTopTab === 1 ? 'hovered-tab-border-left' :
            currentTopTab === 2 ? 'hovered-tab-border-center' :
            currentTopTab === 3 ? 'hovered-tab-border-right' :
            ''
          }
        >
        </div>
        <h6
          className='text-center tab-btn'
          style={
            currentTopTab === 1 || hovered === 1 ? {color: '#5C068C'} : {color: '#5C5C5C'}
          }
        >
          {tab1}
        </h6>
        <div className='inactive-border'>

        </div>
      </Col>
      <Col
        xs={!tab3 ? 6 : 4}
        className='tab-column'
        onClick={() => {
          handleCurrentTopTab(2);
        }}
        onMouseEnter={() => {
          handleHovered(2)
        }}
        onMouseLeave={() => {
          handleHovered(0)
        }}
      >
        <h6
          className='text-center tab-btn'
          style={
            currentTopTab === 2 || hovered === 2 ? {color: '#5C068C'} : {color: '#5C5C5C'}
          }
        >
          {tab2}
        </h6>
        <div className='inactive-border'>

        </div>
      </Col>
      {tab3 ?
        <Col
          xs={4}
          className='tab-column'
          onClick={() => {
            handleCurrentTopTab(3);
          }}
          onMouseEnter={() => {
            handleHovered(3)
          }}
          onMouseLeave={() => {
            handleHovered(0)
          }}
        >
          <h6
            className='text-center tab-btn'
            style={
              currentTopTab === 3 || hovered === 3 ? {color: '#5C068C'} : {color: '#5C5C5C'}
            }
          >
            {tab3}
          </h6>
          <div className='inactive-border'>

          </div>
        </Col>
        :
        <div>

        </div>
      }
    </Row>
  )
}


export default SliderTabNav