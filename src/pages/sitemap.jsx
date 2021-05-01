import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../contexts/state'

import SiteMapContent from '../components/SiteMapContent/SiteMapContent'

class Sitemap extends React.Component {
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
            <SiteMapContent
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

export default Sitemap