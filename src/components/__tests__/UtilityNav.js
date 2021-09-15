import React from 'react'
import { render } from '@testing-library/react'
import UtilityNav from '../header/UtilityNav'

const { debug, getByAltText, getByText, getByTestId, getAllByText, container } = render( <UtilityNav /> )

const importantSafetyInformation = getByText('Important Safety Information')
const prescribingInformation = getByTestId('Prescribing Information')
const patientSite = getByText('Visit Patient Site')

test('Utility Nav links exist', () => {
  // debug()
  expect(importantSafetyInformation).toBeTruthy()
  expect(prescribingInformation).toBeTruthy()
  expect(patientSite).toBeTruthy()
})

test('Utility Nav links have appropriate href', () => {
  expect(importantSafetyInformation.getAttribute('href')).toBe('#isi')
  expect(prescribingInformation.getAttribute('href')).toBe('https://www.myovant.com/myfembree-prescribing-information.pdf')
  expect(patientSite.getAttribute('href')).toBe('https://www.Myfembree.com/')
})

test('Utility Nav snapshot matches', () => {
//   return
  // once the component is done, use snapshot
  expect(container.firstChild).toMatchSnapshot()
})