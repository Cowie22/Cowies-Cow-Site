import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../contexts/state'

import DosingContent from '../components/DosingContent/DosingContent'

class Dosing extends React.Component {
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
            <DosingContent
              currentPage={currentPage}
              handleCurrentPage={handleCurrentPage}
              handleActiveHeaderDropdown={handleActiveHeaderDropdown}
              activeHeaderDropdown={activeHeaderDropdown}
              HCPModalVisible={HCPModalVisible}
              handleHCPModalVisible={handleHCPModalVisible}
              handleTabLink={handleTabLink}
            />
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Dosing