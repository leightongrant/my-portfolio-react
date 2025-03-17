import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
export default function PageBanner({ pageTitle, bannerBg }) {
	const [height, setHeight] = useState(50)

	useEffect(() => {
		const mainNav = document.getElementById('main-nav')
		if (mainNav) {
			setHeight(mainNav.offsetHeight)
		}
	}, [])

	const bgImage = {
		backgroundImage: bannerBg
			? `url(${bannerBg})`
			: `linear-gradient(to left,hsla(240, 10%, 90%, 1), hsla(240, 15%, 19%, 1))`,
		backgroundSize: 'cover',
		backgroundPosition: 'bottom',
	}
	const overlay = {
		backgroundColor: 'hsla(240, 15%, 19%, 0.7)',
	}
	return (
		<section style={{ marginTop: height }}>
			<Stack style={bgImage}>
				<Stack className='banner-padding' style={overlay}>
					<Container>
						<h1 className=' text-light text-capitalize'>
							{pageTitle ? pageTitle : ''}
						</h1>
					</Container>
				</Stack>
			</Stack>
		</section>
	)
}
