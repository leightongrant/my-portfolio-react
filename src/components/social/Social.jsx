import {
	BsLinkedin,
	BsGithub,
	BsPhoneFill,
	BsEnvelopeFill,
} from 'react-icons/bs'
import { BiLogInCircle, BiLogOutCircle } from 'react-icons/bi'
import { useEffect } from 'react'
import { IconContext } from 'react-icons'
import supabaseClient from '../../lib/supabase'

const linkedin = 'https://www.linkedin.com/in/leightongrant/'
const github = 'https://github.com/leightongrant'

function Social({ bootcampProjects, setBootcampProjects }) {
	useEffect(() => {
		const authBtn = document.querySelector('.supabase-auth-ui_ui-button')
		authBtn.setAttribute('data-bs-dismiss', 'modal')
	}, [])

	async function signOut() {
		try {
			const { error } = await supabaseClient.auth.signOut()
			if (error) console.log(error)
		} catch (error) {
			console.log(error)
		}
	}

	function handleClick() {
		const authBtn = document.querySelector('.supabase-auth-ui_ui-button')
		authBtn.setAttribute('data-bs-dismiss', 'modal')
	}

	return (
		<div className=''>
			<div className='social-links  d-inline-flex gap-2 align-items-center'>
				<a href={github} target='_blank' rel='noreferrer'>
					<BsGithub className='fs-3' />
				</a>
				<a href={linkedin} target='_blank' rel='noreferrer'>
					<BsLinkedin className='fs-3' />
				</a>
				<a href='mailto:dev@leightongrant.me'>
					<BsEnvelopeFill className='fs-3' />
				</a>
				<a href='tel:+447886028826'>
					<BsPhoneFill className='fs-3' />
				</a>
				{!bootcampProjects.session ? (
					<IconContext.Provider value={{ className: 'text-success loginBtn' }}>
						<BiLogInCircle
							data-bs-toggle='modal'
							data-bs-target='#loginModal'
							onClick={handleClick}
						/>
					</IconContext.Provider>
				) : (
					<IconContext.Provider value={{ className: 'text-warning logoutBtn' }}>
						<BiLogOutCircle onClick={signOut} />
					</IconContext.Provider>
				)}
			</div>
		</div>
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

export { Social, LinkedIn, GitHub }
