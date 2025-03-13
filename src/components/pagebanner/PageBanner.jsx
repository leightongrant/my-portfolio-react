export default function PageBanner({ pageTitle, bannerBg }) {
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
		<section className='banner-margin-top'>
			<div style={bgImage}>
				<div className='banner-padding ' style={overlay}>
					<div className='container'>
						<h1 className=' text-light text-capitalize'>{pageTitle}</h1>
					</div>
				</div>
			</div>
		</section>
	)
}
