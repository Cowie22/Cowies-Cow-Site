import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../footer/Footer'

const { debug, getByAltText, getByText, getByTestId, container } = render( <Footer /> )

const myovantLogo = getByAltText('Myovant Sciences logo')
const pfizerLogo = getByAltText('Pfizer logo')
const contactLink = getByText('Contact Us')
const privacyLink = getByText('Privacy Policy')
const termsLink = getByText('Terms of Use')
const siteMapLink = getByText('Site Map')

test('Footer links exist', () => {
  // debug()
  expect(myovantLogo).toBeTruthy()
  expect(pfizerLogo).toBeTruthy()
  expect(contactLink).toBeTruthy()
  expect(privacyLink).toBeTruthy()
  expect(termsLink).toBeTruthy()
  expect(siteMapLink).toBeTruthy()
})

test('Footer links have appropriate href', () => {
  expect(myovantLogo.parentElement.getAttribute('href')).toBe('https://www.myovant.com')
  expect(pfizerLogo.parentElement.getAttribute('href')).toBe('https://www.pfizer.com')
  expect(contactLink.getAttribute('href')).toBe('https://www.myovant.com/contact-us/')
  expect(privacyLink.getAttribute('href')).toBe('https://www.myovant.com/privacy-policy/')
  expect(termsLink.getAttribute('href')).toBe('https://www.myovant.com/terms-of-use/')
  expect(siteMapLink.getAttribute('href')).toBe('/sitemap/')
})

test('Footer snapshot matches', () => {
  // return
  // once the component is done, use snapshot
  expect(container.firstChild).toMatchSnapshot()
})