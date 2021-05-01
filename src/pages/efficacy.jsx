import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../contexts/state'

import EfficacyContent from '../components/EfficacyContent/EfficacyContent'

class Efficacy extends React.Component {
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
            <EfficacyContent
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

export default Efficacy