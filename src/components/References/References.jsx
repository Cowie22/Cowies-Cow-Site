import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ReferencesData from './ReferencesData.js'

class References extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageReferences: [],
    }
  }

  componentDidUpdate() {
    const { references } = this.props
    const { pageReferences } = this.state
    let referencesNeeded = references || []
    let currentReferences = []

    for (let i = 0; i < referencesNeeded.length; i++) {
      let referenceNum = referencesNeeded[i]
      currentReferences.push(ReferencesData[referenceNum])
    }

    if (JSON.stringify(pageReferences) !== JSON.stringify(currentReferences)) {
      this.setState({
        pageReferences: currentReferences,
      })
    }
  }

  render() {
    const { pageReferences } = this.state
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
                        <span className='extra-bold'> {i + 1}. </span>{' '}
                        {reference}
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
}

export default References
