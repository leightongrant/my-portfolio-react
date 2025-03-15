import ProfilePhoto from '../../assets/profile_thumb.webp'
import { Link } from 'react-router'

const Hero = () => {
	return (
		<>
			<main
				id='hero'
				className='d-flex flex-column align-items-center justify-content-center hero-info'
			>
				<img
					id='heroImage'
					src={ProfilePhoto}
					alt='Leighton Grant'
					className='img-fluid rounded-circle'
					width={150}
					height={150}
					data-aos='fade-in'
				/>

				<h1 className='fw-bold my-2 text-center' data-aos='fade-in'>
					Leighton Grant
				</h1>

				<p className='fs-4 fw-light my-2 text-center' data-aos='fade-in'>
					Frontend Web Developer
				</p>

				<Link
					to='/about'
					className='btn btn-about rounded px-5 py-3 my-4 HeroButton'
					data-aos='fade-in'
				>
					About Me
				</Link>
			</main>
		</>
	)
}

export default Hero
