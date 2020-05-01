import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import IsiContent from "./IsiContent"
import $ from "jquery"

import Plus from "../../assets/images/Plus.svg"
import Minus from "../../assets/images/Minus.svg"

export default () => {
  const [isIsiExpanded, setIsiExpanded] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => toggleIsiHeader())
    window.addEventListener("scroll", () => toggleScrollIsi())
  })

  function toggleIsiHeader() {
    var windowHeight = $(window).height()
    var isiHeaderHeight = 66
    var isiTop =
      $(".page-isi").offset().top - $(window).scrollTop() + isiHeaderHeight
    if (isiTop < windowHeight) {
      $(".isi-tray").fadeOut("fast")
    } else {
      $(".isi-tray").fadeIn("fast")
    }
  }

  function toggleIsiTray() {
    setIsiExpanded(!isIsiExpanded)
    isIsiExpanded
      ? $("body").removeClass("isi-expanded")
      : $("body").addClass("isi-expanded")
  }

  function toggleScrollIsi() {
    if ($(window).scrollTop() !== 0 && !$(".isi-tray").hasClass("scroll")) {
      $(".isi-tray").addClass("scroll")
    }
  }

  return (
    <section className="isi">
      <div className={isIsiExpanded ? "isi-overlay" : ""}>
        <div
          className={isIsiExpanded ? "isi-tray expanded" : "isi-tray"}
          onClick={() => toggleIsiTray()}
        >
          <div className="isi-tray-header">
            <Container>
              <Row>
                <Col>
                  <div className="isi-header-text">INDICATION AND IMPORTANT SAFETY INFORMATION</div>
                  <div className="header-right">
                    {typeof window !== "undefined" &&
                    window.innerWidth > 425 ? (
                      <div>{isIsiExpanded ? "SEE LESS" : "SEE MORE"}</div>
                    ) : (
                      ""
                    )}
                    <div>
                      {isIsiExpanded ? (
                        <img
                          src={Minus}
                          width="28"
                          height="28"
                        />
                      ) : (
                        <img
                          src={Plus}
                          width="28"
                          height="28"
                        />
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="isi-content">
            <IsiContent />
          </div>
        </div>
      </div>
      <div id="page-isi" />
      <div className="page-isi">
        <IsiContent />
      </div>
    </section>
  )
}
