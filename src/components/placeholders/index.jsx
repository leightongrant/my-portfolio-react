import { LuServerOff } from 'react-icons/lu'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
export const ServerError = () => {
	return (
		<section className='section-padding'>
			<Container>
				<Row className='h-75 flex-column align-items-center justify-content-center gap-5'>
					<LuServerOff style={{ fontSize: '4em' }} />
					<h6
						style={{ textWrap: 'balance' }}
						className='text-center display-6 fs-6'
					>
						There was a problem with the server. Please try again later.
					</h6>
				</Row>
			</Container>
		</section>
	)
}

export const Loading = () => {
	return (
		<section className='section-padding'>
			<Container>
				<Row className='align-items-center justify-content-center'>
					<Spinner animation='border' variant='secondary' />
				</Row>
			</Container>
		</section>
	)
}
