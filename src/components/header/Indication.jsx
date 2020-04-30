import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import close from "../../assets/images/close.svg"
import closeHovered from "../../assets/images/closeHovered.svg"
import arrowRightGreen from "../../assets/images/arrowRightGreen.svg"
import arrowRightWhite from "../../assets/images/arrowRightWhite.svg"
import $ from "jquery"

const Indication = props => {
  useEffect(() => {
    $(window).scroll(() => {
      if ($(window).scrollTop() > 150) {
        props.closeIndication()
      }
    })

    var indication = getCookie("indication")
    var indicationClicked = getCookie("indicationClicked")

    if (indication === "") {
      props.openIndication()
    }

    if (indicationClicked) {
      setIndicationIsExpanded(true)
    }
  })

  const [hovered, handleHovered] = useState()
  const [indicationIsExpanded, setIndicationIsExpanded] = useState(false)

  function getCookie(cname) {
    var name = cname + "="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(";")
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == " ") {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ""
  }

  return (
    <>
      {props.indicationIsOpen ? (
        <article className="indication">
          <Container>
            <Row>
              <Col
                lg={11}
                xs={10}
                style={{ paddingRight: 0 }}
                className="indication-col"
              >
                <h5>Indication</h5>
              </Col>
              <Col lg={{ span: 1 }} xs={2} align="right">
                <img
                  src={hovered === 2 ? close : closeHovered}
                  className="close-icon"
                  width="25"
                  onClick={() => {
                    props.closeIndication()
                    handleHovered(0)
                  }}
                  onMouseEnter={() => handleHovered(2)}
                  onMouseLeave={() => handleHovered(0)}
                ></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, sem quam semper libero.{" "}
                  <span
                    className="read-more-span"
                    onMouseEnter={() => handleHovered(1)}
                    onMouseLeave={() => handleHovered(0)}
                  >
                    <span onClick={() => setIndicationIsExpanded(true)}>
                      READ MORE
                    </span>
                    <span>
                      <img
                        src={hovered === 1 ? arrowRightWhite : arrowRightGreen}
                        className="read-more-arrow"
                      />
                    </span>
                  </span>
                </p>
              </Col>
            </Row>
          </Container>
        </article>
      ) : (
        ""
      )}
    </>
  )
}

export default Indication
