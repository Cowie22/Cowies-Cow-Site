import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../contexts/state'

import ResourcesContent from '../components/ResourcesContent/ResourcesContent'

class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const { handleActiveHeaderDropdown, handleTabLink, activeHeaderDropdown } = context;
          return (
            <ResourcesContent
              handleActiveHeaderDropdown={handleActiveHeaderDropdown}
              handleTabLink={handleTabLink}
              activeHeaderDropdown={activeHeaderDropdown}
            />
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Resources