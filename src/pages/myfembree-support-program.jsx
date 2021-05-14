import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../contexts/state'

import MyfembreeSupportProgramContent from '../components/MyfembreeSupportProgramContent/MyfembreeSupportProgramContent'

class MyfembreeSupportProgram extends React.Component {
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
            <MyfembreeSupportProgramContent
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

export default MyfembreeSupportProgram