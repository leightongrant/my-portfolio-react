import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { GitHub, LinkedIn, Email, Phone } from '../social'
const Footer = () => {
	const year = new Date().getFullYear()
	return (
		<footer
			id='footer'
			className='py-3'
			style={{ backgroundColor: 'var(--lg-dark)' }}
		>
			<Container>
				<Stack
					direction='horizontal'
					className='justify-content-center'
					style={{ color: 'var(--lg-accent)' }}
				>
					<Stack className='copyright fs-6' direction='horizontal' gap={2}>
						<small className='fw-thin'>Leighton Grant</small>
						<small> © Copyright {year}</small>
					</Stack>
					<Stack
						direction='horizontal'
						className='flex-grow-1 justify-content-end'
						gap={2}
					>
						<GitHub className={'footer-icon'} />
						<LinkedIn className={'footer-icon'} />
						<Email className={'footer-icon'} />
						<Phone className={'footer-icon'} />
					</Stack>
				</Stack>
			</Container>
		</footer>
	)
}

export default Footer
