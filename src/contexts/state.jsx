import React, { Component } from "react"

// This is the main function that allows contexts to work and is built in to react.
// AppContext will have AppContext.Provider, which is used here and will also have
// AppContext.Consumer, which allows the global state to be used throughout the app.
// Hence why AppContext is exported as well as the class component below.

const defaultState = {
  isExitRampOpen: false,
  handleIsExitRampOpen: () => {},
  externalUrl: '',
  activeHeaderNav: '',
  handleActiveHeaderNav: () => {},
  tabLink: '',
  tabBool: '',
  handleTabLink: () => {},
  siteVisited: '',
  handleSiteVisited: () => {},
  isCookieVisible: true,
  handleIsCookieVisible: () => {},
  HCPModalVisible: true,
  handleHCPModalVisible: () => {},
}

export const AppContext = React.createContext(defaultState)
class AppProvider extends Component {
  constructor(props) {
    super(props)
    // With context, this.state will have the state that needs to be shared amongst multiple
    // Components in the app, but it is important to note that this.state also contains
    // The functions that are responsible for changing the state.  In order to maintain readability,
    // I have seen that many engineers indent the function, directly below the state or states that
    // That particular function is responsible for updating.
    this.state = {
      isExitRampOpen: false,
      handleIsExitRampOpen: url => {
        this.setState({
          isExitRampOpen: !this.state.isExitRampOpen,
          externalUrl: url,
        })
      },
      externalUrl: '',
      activeHeaderNav: '',
      handleActiveHeaderNav: (val) => {
        this.setState({
          activeHeaderNav: val,
        })
      },
      tabLink: '',
      tabBool: '',
      handleTabLink: (val, bool) => {
        this.setState({
          tabLink: val,
          tabBool: bool,
        })
      },
      siteVisited: false,
      handleSiteVisited: () => {
        this.setState({
          siteVisited: true,
        })
      },
      isCookieVisible: true,
      handleIsCookieVisible: (val) => {
        this.setState({
          isCookieVisible: val,
        })
      },
      HCPModalVisible: true,
      handleHCPModalVisible: (val) => {
        this.setState({
          HCPModalVisible: val,
        }, () => {
          if (document.getElementsByTagName('body')) {
            if (this.state.HCPModalVisible) {
              document.body.classList.add('scroll-none');
            } else {
              document.body.classList.remove('scroll-none');
            }
          }
        })
      },
    }
  }
  render() {
    // AppContext.Provider is a built in function for context, it is important that
    // this.props.children is used and to note that this.state is passed in.

    // The class AppProvider will then wrap the outermost component(s) in the app,
    // In our case at the moment, App.jsx
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}


export default AppProvider
