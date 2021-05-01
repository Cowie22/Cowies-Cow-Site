import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import AppProvider, { AppContext } from '../../contexts/state'

class HeaderDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: {list: ['placeholder']},
    }
  }

  componentDidMount = () => {
    const { HeaderDropdownData, activeHeaderDropdown } = this.props;
    let dropdownContainer = document.getElementById('header-dropdown-container');
    HeaderDropdownData.filter((data, i) => {
      if (data.name === activeHeaderDropdown) {
        dropdownContainer.classList = `header-dropdown-container ${data.name}`;
        this.setState({
          currentData: data,
        })
      }
    })
  }

  shouldComponentUpdate = () => {
    const { HeaderDropdownData, activeHeaderDropdown } = this.props;
    let dropdownContainer = document.getElementById('header-dropdown-container');
    HeaderDropdownData.filter((data, i) => {
      if (data.name === activeHeaderDropdown) {
        dropdownContainer.classList = `header-dropdown-container ${data.name}`;
        this.setState({
          currentData: data,
        })
      }
    })
    return true;
  }

  render() {
    const { currentData } = this.state;
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