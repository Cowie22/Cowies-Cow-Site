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
    const { references } = this.props;
    const { pageReferences } = this.state;
    let referencesNeeded = references || [];
    let currentReferences = [];

    for (let i = 0; i < referencesNeeded.length; i++) {
      let referenceNum = referencesNeeded[i];
      currentReferences.push(ReferencesData[referenceNum]);
    }

    if (JSON.stringify(pageReferences) !== JSON.stringify(currentReferences)) {
      this.setState({
        pageReferences: currentReferences,
      })
    }
  }

  render() {
    const { pageReferences } = this.state;
    return (
      <div className='reference-container'>
        <Container>
          <Row>
            <Col>
              <div className='references'>
                <p className='extra-bold reference-header'>
                  References
                </p>
                <ol className='reference-ordered-list'>
                  {
                    pageReferences.map((reference, i) => {
                      return (
                        <li key={i}>
                          {reference}
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default References