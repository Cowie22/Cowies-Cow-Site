import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ReferencesData from './ReferencesData.js'

const References = props => {
  const [pageReferences, handlePageReferences] = useState([])
  const { references } = props

  useEffect(() => {
    let referencesNeeded = references || []
    let currentReferences = []

    for (let i = 0; i < referencesNeeded.length; i++) {
      let referenceNum = referencesNeeded[i]
      currentReferences.push(ReferencesData[referenceNum])
    }

    if (JSON.stringify(pageReferences) !== JSON.stringify(currentReferences)) {
      handlePageReferences(currentReferences)
    }
  }, [references])

  return (
    <div
      className={
        pageReferences.length > 0
          ? 'reference-container'
          : 'reference-container d-none'
      }
    >
      <Container>
        <Row>
          <Col>
            <div className='references'>
              <h6>
                <span className='extra-bold'>References:</span>
                {pageReferences.map((reference, i) => {
                  return (
                    <span key={i}>
                      <span className='extra-bold'> {i + 1}. </span> {reference}
                    </span>
                  )
                })}
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default References