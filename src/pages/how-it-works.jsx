import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AppProvider, { AppContext } from '../contexts/state'

import HowItWorksContent from '../components/HowItWorksContent/HowItWorksContent'

class HowItWorks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const {
            currentPage,
            handleCurrentPage,
            handleActiveHeaderDropdown,
            activeHeaderDropdown,
            HCPModalVisible,
            handleHCPModalVisible,
            handleTabLink,
          } = context;
          return (
            <HowItWorksContent
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
              handleActiveHeaderDropdown={handleActiveHeaderDropdown}
              handleTabLink={handleTabLink}
              activeHeaderDropdown={activeHeaderDropdown}
              HCPModalVisible={HCPModalVisible}
              handleHCPModalVisible={handleHCPModalVisible}
            />
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default HowItWorks