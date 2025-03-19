import ProfilePhoto from '../../assets/profile_thumb.webp'
import { Link } from 'react-router'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import heroBackground from '../../assets/hero-1.webp'

const Hero = () => {
	return (
		<main
			className='section-padding h-100'
			style={{
				backgroundImage: `url(${heroBackground})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<Container className='h-100'>
				<Stack
					className='h-100 justify-content-center align-items-center'
					gap={3}
				>
					<Image
						id='heroImage'
						src={ProfilePhoto}
						alt='Leighton Grant'
						className='img-fluid rounded-circle'
						width={250}
						height={250}
						data-aos='fade-in'
						style={{
							borderColor: 'var(--lg-dark',
							borderWidth: '5px',
							borderStyle: 'solid',
						}}
					/>

					<h1 className='fw-bold my-2 text-center' data-aos='fade-in'>
						Leighton Grant
					</h1>

					<p className='fs-4 fw-normal my-2 text-center' data-aos='fade-in'>
						Frontend Web Developer
					</p>

					<Link
						to='/about'
						data-aos='fade-in'
						style={{
							backgroundColor: 'var(--lg-dark)',
							color: 'var(--lg-light)',
						}}
						className='btn btn-about rounded text-uppercase p-3'
					>
						About Me
					</Link>
				</Stack>
			</Container>
		</main>
	)
}

export default Hero
