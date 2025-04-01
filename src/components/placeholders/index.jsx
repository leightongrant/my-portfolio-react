import { LuServerOff } from 'react-icons/lu'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
export const ServerError = () => {
	return (
		<div className='py-5'>
			<div className='container h-75 d-flex flex-column align-items-center justify-content-center gap-5'>
				<LuServerOff style={{ fontSize: '4em' }} />
				<h5 style={{ textWrap: 'balance' }} className='text-center display-6'>
					There was a problem with the server. Please try again later.
				</h5>
			</div>
		</div>
	)
}

export const Loading = () => {
	return (
		<section className='section-padding h-100'>
			<Container className='align-items-center justify-content-center d-flex h-100'>
				<Spinner animation='border' variant='secondary'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			</Container>
		</section>
	)
}
