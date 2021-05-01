import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../contexts/state'

import HomeContent from '../components/HomeContent/HomeContent'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const { handleActiveHeaderDropdown, handleTabLink, activeHeaderDropdown, HCPModalVisible, handleHCPModalVisible } = context;
          return (
            <HomeContent
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

export default Home