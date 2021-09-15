import React from 'react'

import enrollmentPDF from '../../assets/downloadables/myfembree-support-program-enrollment-form.pdf'
import consentPDF from '../../assets/downloadables/myfembree-support-program-patient-consent-form.pdf'
import considerationsPDF from '../../assets/downloadables/myfembree-medical-necessity-and-exception-considerations.pdf'
import coveragePDF from '../../assets/downloadables/myfembree-coverage-denial-appeal-considerations.pdf'
// import coverageDoc from '../../assets/docs/sample-letter-of-coverage-denial-appeal.docx'
// import necessityTemplateDoc from '../../assets/docs/sample-letter-of-medical-exception-and-necessity-template.docx'

const ResourceDownloadCardData1 = [
  {
    title: 'Myfembree Support Program Enrollment Form',
    subTitle: 'PDF',
    downloadLink: enrollmentPDF,
    wordDoc: false,
  }
]

const ResourceDownloadCardData2 = [
  {
    title: 'Myfembree Support Program Patient Consent Form',
    subTitle: 'PDF',
    downloadLink: consentPDF,
    wordDoc: false,
  }
]

const ResourceDownloadCardData3 = [
  {
    title: 'Medical Necessity/Exception Considerations',
    subTitle: 'PDF',
    downloadLink: considerationsPDF,
    wordDoc: false,
  }
]

const ResourceDownloadCardData4 = [
  {
    title: 'Medical Necessity/Exception Sample Letter',
    subTitle: 'Word Document',
    downloadLink: '/sample-letter-of-medical-exception-and-necessity-template.docx',
    wordDoc: true,
    download: '/sample-letter-of-medical-exception-and-necessity-template.docx',
  }
]

const ResourceDownloadCardData5 = [
  {
    title: 'PA Denial Appeal Considerations',
    subTitle: 'PDF',
    downloadLink: coveragePDF,
    wordDoc: false,
  }
]

const ResourceDownloadCardData6 = [
  {
    title: 'PA Denial Appeal Sample Letter',
    subTitle: 'Word Document',
    downloadLink: '/sample-letter-of-coverage-denial-appeal.docx',
    wordDoc: true,
    download: '/sample-letter-of-coverage-denial-appeal.docx',
  }
]

const ResourceDownloadCardData = {
  ResourceDownloadCardData1,
  ResourceDownloadCardData2,
  ResourceDownloadCardData3,
  ResourceDownloadCardData4,
  ResourceDownloadCardData5,
  ResourceDownloadCardData6,
}

export default ResourceDownloadCardData