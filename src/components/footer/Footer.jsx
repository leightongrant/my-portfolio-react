const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer id='footer' className='py-3'>
			<div className='container d-flex justify-content-center align-items-center'>
				<div className='copyright fs-5'>
					<small className='fw-normal'>Leighton Grant</small>
					<small> © Copyright {year}</small>
				</div>
			</div>
		</footer>
	)
}

export default Footer
