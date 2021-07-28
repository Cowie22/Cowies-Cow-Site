import React, { useState, useEffect, useContext } from 'react'
import Layout from '../Layout'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'

import PurpleCallout from '../PurpleCallout/PurpleCallout'
import ResourcesDownloadCard from '../ResourcesDownloadCard/ResourcesDownloadCard'
import ResourcesDownloadCardData from '../ResourcesDownloadCard/ResourcesDownloadCardData.js'
import NextPageBtn from '../NextPageBtn/NextPageBtn'

const ResourcesContent = (props) => {
  const state = useContext(AppContext);
  const {
    currentPage,
    handleCurrentPage,
    handleActiveHeaderDropdown,
    currentTopTab,
    handleCurrentTopTab,
    handleActiveDropdownLink,
  } = state;

  const {
    ResourceDownloadCardData1,
    ResourceDownloadCardData2,
    ResourceDownloadCardData3,
    ResourceDownloadCardData4,
    ResourceDownloadCardData5,
    ResourceDownloadCardData6,
  } = ResourcesDownloadCardData;

  useEffect(() => {
    handleActiveHeaderDropdown('');
    handleCurrentPage('resources');
    handleActiveDropdownLink(4.5)
  }, []);

  return (
    <Layout
      canonicalURL='https://www.myfembreehcp.com/resources/'
      title='HCP Resources | Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets'
      pageTitle='HCP Resources | Myfembree® (relugolix, estradiol, and norethindrone acetate) Tablets'
      description='Find downloadable resources for the Myfembree® Support Program including a program enrollment form and a patient consent form. See benefits&risks&BOXED WARNING.'
    >
      <PurpleCallout
        title={<h1 className='white'>Myfembree<sup>®</sup> Support Program Resources</h1>}
      />
      <section className='resources-content-container'>
        <Container>
          <Row>
            <Col lg={{span: 10, offset: 1}}>
              <p className='resource-sub-title'>
                A number of helpful resources related to the Myfembree Support Program have
                been developed for use in your office. Below, you can find downloads for
                these resources.
              </p>
              <ResourcesDownloadCard data={ResourceDownloadCardData1} />
              <ResourcesDownloadCard data={ResourceDownloadCardData2} />
              <ResourcesDownloadCard data={ResourceDownloadCardData3} />
              <ResourcesDownloadCard data={ResourceDownloadCardData4} />
              <ResourcesDownloadCard data={ResourceDownloadCardData5} />
              <ResourcesDownloadCard data={ResourceDownloadCardData6} />
            </Col>
          </Row>
          <Row>
            <NextPageBtn
              btnText='Explore Once-Daily Dosing With Myfembree'
              btnLink='once-daily-dosing/'
            />
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default ResourcesContent