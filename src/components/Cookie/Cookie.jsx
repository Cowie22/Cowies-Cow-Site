import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppProvider, { AppContext } from '../../contexts/state';

import ExternalLink from "../exitramp/ExternalLink.jsx"

import closeIcon from '../../assets/images/close.svg';
import closeIconHovered from '../../assets/images/close-hovered.svg';

class Cookie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
  }

  handleHovered = (val) => {
    this.setState({
      hovered: val,
    })
  }

  render() {
    const { hovered } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => {
          const { isCookieVisible, handleIsCookieVisible } = context;
          return (
            isCookieVisible ?
            <section className='cookie-container' data-testid='Cookie Visible'>
              <Container>
                <Row>
                  <Col lg={9} xs={{span: 8}}>
                    <p>
                      This website uses cookies to help us give you the best experience when you visit.
                      By using this website, you consent to the use of these cookies. Find out more about
                      how we use cookies and how to manage them by reading our
                      <ExternalLink
                        externalUrl={'https://www.myovant.com/cookie-policy/'}
                        className='cookie-link extra-bold'
                      >
                        {' '} Cookie Policy
                      </ExternalLink>.
                    </p>
                  </Col>
                  <Col lg={3} xs={{span: 4}}>
                    <div className='cookie-btn-container'>
                      <Row>
                        <Col lg={{span: 9, order: 1}} md={{order: 1}} xs={{order: 2}}>
                          <div className='cta-btn-container cookie-cta-container' onClick={() => handleIsCookieVisible(false)}>
                            <button className='cta-btn transparent-btn-pink cookie-cta-btn'>
                              Accept
                            </button>
                          </div>
                        </Col>
                        <Col lg={{span: 3, order: 2}}  md={{order: 2}} xs={{order: 1}}>
                          <div
                            className='close-icon-container'
                            onMouseEnter={() => this.handleHovered(true)}
                            onMouseLeave={() => this.handleHovered(false)}
                          >
                            <img
                              loading='lazy'
                              src={hovered ? closeIconHovered : closeIcon}
                              onClick={() => handleIsCookieVisible(false)}
                              className='header-close-icon'
                              alt=''
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            :
            <div data-testid='Cookie Hidden'>

            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Cookie