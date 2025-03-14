import './Hero.css'
import ProfilePhoto from '../../assets/profile_thumb.webp'
import { Helmet } from 'react-helmet-async'

const Hero = () => {
	return (
		<>
			<Helmet>
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, React, Portfolio'
				/>
				<link rel='canonical' href='https://leightongrant.me' />
				<title>Leighton Grant's Portfolio | Home</title>
			</Helmet>
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
					data-aos='zoom-in'
				/>

				<h1 className='fw-bold my-2 text-center' data-aos='zoom-in'>
					Leighton Grant
				</h1>

				<p className='fs-4 fw-light my-2 text-center' data-aos='zoom-in'>
					Frontend Web Developer
				</p>

				<a
					href='/about'
					className='btn btn-about rounded px-5 py-3 my-4 HeroButton'
					data-aos='zoom-in'
				>
					About Me
				</a>
			</main>
		</>
	)
}

export default Hero
