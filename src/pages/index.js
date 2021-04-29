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
          const { handleActiveHeaderNav, handleTabLink, activeHeaderNav, HCPModalVisible, handleHCPModalVisible } = context;
          return (
            <HomeContent
              handleActiveHeaderNav={handleActiveHeaderNav}
              handleTabLink={handleTabLink}
              activeHeaderNav={activeHeaderNav}
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