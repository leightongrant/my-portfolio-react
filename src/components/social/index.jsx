import {
	BsLinkedin,
	BsGithub,
	BsPhoneFill,
	BsEnvelopePaperFill,
} from 'react-icons/bs'
import { Link } from 'react-router'

const linkedin = 'https://www.linkedin.com/in/leightongrant/'
const github = 'https://github.com/leightongrant'

function Phone({ className }) {
	return (
		<Link to='tel:+447886028826' className={className}>
			<BsPhoneFill />
		</Link>
	)
}

function Email({ className }) {
	return (
		<Link to='mailto:dev@leightongrant.me' className={className}>
			<BsEnvelopePaperFill />
		</Link>
	)
}
function LinkedIn({ className }) {
	return (
		<Link to={linkedin} target='_blank' className={className} rel='noreferrer'>
			<BsLinkedin />
		</Link>
	)
}
function GitHub({ className }) {
	return (
		<Link to={github} target='_blank' className={className} rel='noreferrer'>
			<BsGithub />
		</Link>
	)
}

export { LinkedIn, GitHub, Phone, Email }
