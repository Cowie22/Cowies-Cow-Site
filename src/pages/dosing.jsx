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
          const { handleActiveHeaderNav, handleTabLink, activeHeaderNav } = context;
          return (
            <DosingContent
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

export default Dosing