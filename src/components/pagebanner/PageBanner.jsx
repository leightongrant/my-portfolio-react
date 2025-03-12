export default function PageBanner({ pageTitle, bannerBg }) {
	const bgStyles = {
		backgroundImage: `url(${bannerBg})`,
		backgroundSize: 'cover',
		backgroundPosition: 'bottom',
	}
	const overlay = {
		backgroundColor: 'rgba(0,0,0,0.7)',
	}
	return (
		<section className='page-banner'>
			<div className='' style={bgStyles}>
				<div className='padding-lg banner-padding' style={overlay}>
					<h2 className='text-center text-light'>{pageTitle}</h2>
				</div>
			</div>
		</section>
	)
}
