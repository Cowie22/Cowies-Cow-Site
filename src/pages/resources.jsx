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
          const { handleActiveHeaderNav, handleTabLink, activeHeaderNav } = context;
          return (
            <ResourcesContent
              handleActiveHeaderNav={handleActiveHeaderNav}
              handleTabLink={handleTabLink}
              activeHeaderNav={activeHeaderNav}
            />
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Resources