import React, { useState, useEffect, useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { AppContext } from "../../contexts/state"

import Logo from "../../assets/images/header-logo.svg"
import arrowRightWhite from "../../assets/images/arrowRightWhite.svg"
import arrowRightGreen from "../../assets/images/arrowRightGreen.svg"
import externalLinkWhite from "../../assets/images/externalLinkWhite.svg"
import externalLinkGreen from "../../assets/images/externalLinkGreen.svg"

export default props => {
  const [hovered, handleHovered] = useState()
  const state = useContext(AppContext)

  useEffect(() => {
    if (state.isExitRampOpen) {
      document.querySelector("body").classList.add("exit-ramp-opened")
    } else {
      document.querySelector("body").classList.remove("exit-ramp-opened")
    }
  })

  return (
    <section className={state.isExitRampOpen ? "overlay" : "overlay hidden"}>
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="exit-ramp text-center">
              <img src={Logo} width={170} />
              <p>
                <strong>You are now leaving evokegiant.com.</strong>
              </p>
              <Row>
                <Col
                  lg={{ span: 6, order: 1 }}
                  xs={{ span: 12, order: 12 }}
                  className="link-wrapper"
                >
                  <button
                    className="link text-center"
                    onClick={() => state.handleIsExitRampOpen()}
                    onMouseEnter={() => handleHovered(1)}
                    onMouseLeave={() => handleHovered(0)}
                  >
                    <span>Return to evokegiant.com</span>
                    <div>
                      <img
                        src={hovered === 1 ? arrowRightWhite : arrowRightGreen}
                        style={{ height: "13px", marginBottom: "1px" }}
                      />
                    </div>
                  </button>
                </Col>
                <Col
                  lg={{ span: 6, order: 12 }}
                  xs={{ span: 12, order: 1 }}
                  className="link-wrapper"
                >
                  <a
                    className="link text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={state.externalUrl}
                    onClick={() =>
                      state.handleIsExitRampOpen(state.externalUrl)
                    }
                    onMouseEnter={() => handleHovered(2)}
                    onMouseLeave={() => handleHovered(0)}
                  >
                    <span style={{ paddingTop: "1px" }}>Continue to site</span>
                    <div>
                      <img
                        src={
                          hovered === 2 ? externalLinkGreen : externalLinkWhite
                        }
                        style={{ height: "13px", marginBottom: "1px" }}
                      />
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
