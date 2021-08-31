import React from 'react'
import { render } from '@testing-library/react'
import MainNav from '../header/MainNav'

const { debug, getByAltText, getByText, getByTestId, getAllByText, container } = render( <MainNav /> )

const myfembreeLogo = getByAltText('Myfembree® (relugolix, estradiol, and norethindrone acetate) tablets 40 mg, 1 mg, 0.5 mg')
const onceDailyDosing = getByTestId('Once-Daily Dosing')
const onceDailyDosingMobile = getByTestId('Once-Daily Dosing Mobile')
const efficacy = getByTestId('Efficacy')
const safety = getByTestId('Safety')
const safetyMobile = getByTestId('Safety Mobile')
const howItWorks = getByTestId('How It Works')
const howItWorksMobile = getByTestId('How It Works Mobile')
const support = getByTestId('Support & Savings')

test('Header links exist', () => {
  // debug()
  expect(myfembreeLogo).toBeTruthy()
  expect(onceDailyDosing).toBeTruthy()
  expect(onceDailyDosingMobile).toBeTruthy()
  expect(efficacy).toBeTruthy()
  expect(safety).toBeTruthy()
  expect(safetyMobile).toBeTruthy()
  expect(howItWorks).toBeTruthy()
  expect(howItWorksMobile).toBeTruthy()
  expect(support).toBeTruthy()
})

test('Header links have appropriate href', () => {
  expect(myfembreeLogo.parentElement.getAttribute('href')).toBe('/')
  expect(onceDailyDosing.getAttribute('href')).toBe('/once-daily-dosing/')
  expect(onceDailyDosingMobile.getAttribute('href')).toBe('/once-daily-dosing/')
  expect(efficacy.getAttribute('href')).toBe('/liberty-trials/')
  expect(safety.getAttribute('href')).toBe('/safety-profile/')
  expect(safetyMobile.getAttribute('href')).toBe('/safety-profile/')
  expect(howItWorks.getAttribute('href')).toBe('/how-it-works/')
  expect(howItWorksMobile.getAttribute('href')).toBe('/how-it-works/')
  expect(support.getAttribute('href')).toBe('/myfembree-support-program/')
})

// test('Header snapshot matches', () => {
//   return
//   // once the component is done, use snapshot
//   // expect(container.firstChild).toMatchSnapshot()
// })