import React from "react"
import Layout from "../Layout"
import { Container, Row, Col } from "react-bootstrap"
import AppProvider, { AppContext } from '../../contexts/state'

import PurpleCallout from '../PurpleCallout/PurpleCallout'
import ResourcesDownloadCard from '../ResourcesDownloadCard/ResourcesDownloadCard'
import ResourcesDownloadCardData from '../ResourcesDownloadCard/ResourcesDownloadCardData.js'

class ResourcesContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    const { handleCurrentPage, handleActiveHeaderDropdown } = this.props;
    handleActiveHeaderDropdown('');
    handleCurrentPage('resources');
  }

  render() {
    const {
      ResourceDownloadCardData1,
      ResourceDownloadCardData2,
      ResourceDownloadCardData3,
      ResourceDownloadCardData4,
      ResourceDownloadCardData5,
      ResourceDownloadCardData6,
    } = ResourcesDownloadCardData;
    return (
      <Layout>
        <PurpleCallout
          title={<h1 className='white'>Myfembree<sup>®</sup> Support Program Resources</h1>}
        />
        <section className='resources-content-container'>
          <Container>
            <Row>
              <Col lg={{span: 10, offset: 1}}>
                <p className='resource-sub-title'>
                  A number of helpful resources related to the Myfembree Support Program have been developed
                  for use in your office. Below, you can find downloads for these resources.
                </p>
                <ResourcesDownloadCard data={ResourceDownloadCardData1} />
                <ResourcesDownloadCard data={ResourceDownloadCardData2} />
                <ResourcesDownloadCard data={ResourceDownloadCardData3} />
                <ResourcesDownloadCard data={ResourceDownloadCardData4} />
                <ResourcesDownloadCard data={ResourceDownloadCardData5} />
                <ResourcesDownloadCard data={ResourceDownloadCardData6} />
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}

export default ResourcesContent