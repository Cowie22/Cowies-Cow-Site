import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import AppProvider, { AppContext } from '../../contexts/state'

class HeaderDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { currentData } = this.props;
    console.log('CHILD DATA', currentData)
    return (
      <Row>
        <Col lg={12}>
          <div className='header-dropdown-container' id='header-dropdown-container'>
            <ul>
              {
                currentData.list.map((listData, i) => {
                  return (
                    <li>
                      {listData.listName}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </Col>
      </Row>
    )
  }
}

export default HeaderDropdown