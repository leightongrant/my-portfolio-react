import {
	BsLinkedin,
	BsGithub,
	BsPhoneFill,
	BsEnvelopePaperFill,
} from 'react-icons/bs'

const linkedin = 'https://www.linkedin.com/in/leightongrant/'
const github = 'https://github.com/leightongrant'

function Social() {
	return (
		<div className=''>
			<div className='d-flex gap-3 align-items-center justify-content-center'>
				<a href={github} target='_blank' rel='noreferrer'>
					<BsGithub className='fs-4' target='_blank' href={github} />
				</a>
				<a href={linkedin} target='_blank' rel='noreferrer'>
					<BsLinkedin className='fs-4' />
				</a>
				<a href='mailto:dev@leightongrant.me'>
					<BsEnvelopePaperFill className='fs-4' />
				</a>
				<a href='tel:+447886028826'>
					<BsPhoneFill className='fs-4' />
				</a>
			</div>
		</div>
	)
}

function Phone() {
	return (
		<a href='tel:+447886028826' className='social-button'>
			<BsPhoneFill />
		</a>
	)
}

function Email() {
	return (
		<a href='mailto:dev@leightongrant.me' className='social-button'>
			<BsEnvelopePaperFill />
		</a>
	)
}
function LinkedIn() {
	return (
		<a
			href={linkedin}
			target='_blank'
			className='social-button'
			rel='noreferrer'
		>
			<BsLinkedin />
		</a>
	)
}
function GitHub() {
	return (
		<a href={github} target='_blank' className='social-button' rel='noreferrer'>
			<BsGithub />
		</a>
	)
}

export { Social, LinkedIn, GitHub, Phone, Email }
