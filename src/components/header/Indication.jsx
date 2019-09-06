import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle, faAngleRight } from "@fortawesome/pro-light-svg-icons"

import { useStateValue } from "../../contexts/state"

const Indication = () => {
  const [, dispatch] = useStateValue()
  return (
    <article className="indication">
      <Container>
        <Row>
          <Col lg={10} className="indication-col">
            <section>
              <h5>Indication</h5>
              <p>
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero.
                <Link to="#indication">
                  READ MORE <FontAwesomeIcon icon={faAngleRight} size="2x" />
                </Link>
              </p>
            </section>
          </Col>
          <Col className="indication-close-col">
            <section
              onClick={() =>
                dispatch({
                  type: "hideIndication",
                })
              }
            >
              <FontAwesomeIcon icon={faTimesCircle} size="2x" />
            </section>
          </Col>
        </Row>
      </Container>
    </article>
  )
}

export default Indication
