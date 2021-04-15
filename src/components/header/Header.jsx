import React from "react"
import PropTypes from "prop-types"
import { Sticky, StickyContainer } from "react-sticky"
import AppProvider, { AppContext } from '../../contexts/state'

import MainNav from "./MainNav"
import NonUSPopUp from '../NonUSPopUp/NonUSPopUp'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xDirection: 0,
      yDirection: 0,
      prevYValue: 0,
      isNavOpen: false,
      popup: false,
    }
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    this.handleScroll();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }

  updateWindowDimensions = () => {
    this.setState({
      xDirection: window.innerWidth,
    })
  }

  handleScroll = (event) => {
    this.setState({
      yDirection: window.pageYOffset,
      prevYValue: this.state.yDirection,
    })
  }

  setNavOpen = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }

  handlePopUp = () => {
    if (document.getElementsByTagName('body')) {
      let modalContainer = document.getElementById('non-us-modal-container-2');
      {
        if (this.state.popup === false) {
          document.body.classList.add('modal-hidden');
          modalContainer.classList.add('modal-overflow');
        } else {
          document.body.classList.remove('modal-hidden');
          modalContainer.classList.remove('modal-overflow');
        }
      }
    }
    this.setState({
      popup: !this.state.popup,
    })
  }

  render() {
    const { xDirection, yDirection, prevYValue, isNavOpen, popup } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => {
          const { isCoronaVisible, activeSite, selectionNav } = context;
          return (
            prevYValue > yDirection || isNavOpen ?
              <div style={{top: 0, zIndex: 9997}} className='sticky-header'>
                <header className="main-header">
                  {/* Modal popup here */}
                  <section
                    id='non-us-modal-container-2'
                    style={
                      xDirection < 426 ? {top: `${0}px`} :
                      xDirection < 769 ? {top: `${0}px`} :
                      {top: `${yDirection - 350}px`}
                    }
                    onClick={() => this.handlePopUp()}
                  >
                  </section>
                  <NonUSPopUp
                    handlePopUp={this.handlePopUp}
                    popup={popup}
                  />
                  <MainNav
                    isNavOpen={isNavOpen}
                    setNavOpen={this.setNavOpen}
                    popup={popup}
                    handlePopUp={this.handlePopUp}
                  />
                </header>
              </div>
            :
              <div style={{position: 'relative', top: 0, zIndex: 9997}}>
                <header className="main-header">
                  <MainNav
                    isNavOpen={isNavOpen}
                    setNavOpen={this.setNavOpen}
                    popup={popup}
                    handlePopUp={this.handlePopUp}
                  />
                </header>
              </div>
          )
        }}
      </AppContext.Consumer>

    )
  }
}

export default Header