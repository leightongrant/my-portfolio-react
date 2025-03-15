import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import PageBanner from '../components/pagebanner/PageBanner'

describe('PageBanner component', () => {
	it('renders with default height when main-nav is not found', () => {
		const { getByText } = render(<PageBanner />)
		expect(getByText('')).toHaveStyle({ marginTop: '50px' })
	})

	it('updates height when main-nav is found', () => {
		const mainNav = document.createElement('div')
		mainNav.id = 'main-nav'
		mainNav.style.height = '100px'
		document.body.appendChild(mainNav)

		const { getByText } = render(<PageBanner />)
		expect(getByText('')).toHaveStyle({ marginTop: '100px' })

		document.body.removeChild(mainNav)
	})

	it('renders with default background image when bannerBg is not provided', () => {
		const { getByText } = render(<PageBanner />)
		expect(getByText('')).toHaveStyle({
			backgroundImage:
				'linear-gradient(to left,hsla(240, 10%, 90%, 1), hsla(240, 15%, 19%, 1))',
		})
	})

	it('renders with custom background image when bannerBg is provided', () => {
		const bannerBg = 'https://example.com/image.jpg'
		const { getByText } = render(<PageBanner bannerBg={bannerBg} />)
		expect(getByText('')).toHaveStyle({
			backgroundImage: `url(${bannerBg})`,
		})
	})

	it('renders with page title when pageTitle is provided', () => {
		const pageTitle = 'Hello World'
		const { getByText } = render(<PageBanner pageTitle={pageTitle} />)
		expect(getByText(pageTitle)).toBeInTheDocument()
	})

	it('renders without page title when pageTitle is not provided', () => {
		const { queryByText } = render(<PageBanner />)
		expect(queryByText('')).not.toBeInTheDocument()
	})
})
