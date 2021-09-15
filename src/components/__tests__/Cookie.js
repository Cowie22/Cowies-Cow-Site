import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import Cookie from '../Cookie/Cookie'

const { debug, getByAltText, getByText, getByTestId, getAllByText, container } = render( <Cookie /> )

const cookiePolicy = getByText('Cookie Policy')
const acceptBTN = getByText('Accept')
const cookieVisible = getByTestId('Cookie Visible')

test('Cookie links exist', () => {
  // debug()
  expect(cookiePolicy).toBeTruthy()
  expect(cookieVisible).toBeTruthy()
})

test('Cookie links have appropriate href', () => {
  expect(cookiePolicy.getAttribute('href')).toBe('https://www.myovant.com/cookie-policy/')
})

test('Cookie accept link closes cookie statement', async () => {
	const clickBTN = () => {
		fireEvent.click(acceptBTN.parentElement)
	}

	await waitFor(() => clickBTN())

	setTimeout(() => {
		expect(getByTestId('Cookie Hidden')).toBeTruthy()
	}, 2000)
})

test('Cookie snapshot matches', () => {
//   return
  // once the component is done, use snapshot
  expect(container.firstChild).toMatchSnapshot()
})