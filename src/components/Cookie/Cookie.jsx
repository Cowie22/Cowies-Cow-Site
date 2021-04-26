import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppProvider, { AppContext } from '../../contexts/state';

import ExternalLink from "../exitramp/ExternalLink.jsx"

import closeIcon from '../../assets/images/Close.svg';

class Cookie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const { isCookieVisible, handleIsCookieVisible } = context;
          return (
            isCookieVisible ?
            <section className='cookie-container'>
              <Container>
                <Row>
                  <Col lg={9} xs={9}>
                    <p>
                      This website uses cookies to help us give you the best experience when you visit. By using
                      this website, you consent to the use of these cookies. Find out more about how we use
                      cookies and how to manage them by reading our
                      <ExternalLink externalUrl={''} className='cookie-link'> Cookie Policy</ExternalLink>.
                    </p>
                  </Col>
                  <Col lg={2}>
                    <div className='cta-btn-container' onClick={() => handleIsCookieVisible(false)}>
                      <a>
                        <button className='cta-btn transparent-btn-pink'>
                          Accept
                        </button>
                      </a>
                    </div>
                  </Col>
                  <Col lg={1} xs={1}>
                    <div className='close-icon-container'>
                      <img
                        loading='lazy'
                        src={closeIcon}
                        onClick={() => handleIsCookieVisible(false)}
                        className='header-close-icon'
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            :
            <div>

            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Cookie