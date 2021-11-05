import React from 'react'
import AppProvider, { AppContext } from '../../contexts/state'

import MainNav from './MainNav'
// import NonUSPopUp from '../NonUSPopUp/NonUSPopUp'

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
    window.addEventListener('resize', this.updateWindowDimensions, { passive: true });
    window.addEventListener('scroll', this.handleScroll, { passive: true });
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
          const {
            currentPage,
            handleCurrentPage,
          } = context;
          return (
            <header>
              <MainNav
                isNavOpen={isNavOpen}
                setNavOpen={this.setNavOpen}
                popup={popup}
                handlePopUp={this.handlePopUp}
                currentPage={currentPage}
                handleCurrentPage={handleCurrentPage}
              />
            </header>
          )
        }}
      </AppContext.Consumer>

    )
  }
}

export default Header