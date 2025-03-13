import './Header.css'
import { Social } from '../social/Social'
import { IconContext } from 'react-icons'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import logo from '../../assets/lg-logo.png'
import { LinkContainer } from 'react-router-bootstrap'
import { useState } from 'react'
import clsx from 'clsx'
import { useResolvedPath } from 'react-router'

const Header = ({ bootcampProjects, setBootcampProjects }) => {
	const [menu, setMenu] = useState(true)
	const path = useResolvedPath().pathname

	return (
		<header
			className={clsx(
				'header fixed-top py-3 px-2 shadow w-100',
				`bg-${path === '/' ? 'transparent' : 'light'}`
			)}
		>
			<nav className='navbar navbar-expand-lg'>
				<div className='container-fluid d-flex justify-content-between align-items-center'>
					<div>
						<LinkContainer to='/'>
							<a className='navbar-brand' href='/'>
								<img
									src={logo}
									alt='leighton grant logo'
									width={53}
									height={35}
								/>
							</a>
						</LinkContainer>
					</div>

					<div className='collapse navbar-collapse flex-grow-0' id='main-nav'>
						<div className='navbar-nav gap-lg-4 NavLinks'>
							<LinkContainer to='/'>
								<a className='nav-link' aria-current='page' href='/'>
									Home
								</a>
							</LinkContainer>
							<LinkContainer to='/about'>
								<a className='nav-link' href='/about'>
									About
								</a>
							</LinkContainer>
							<LinkContainer to='/projects' data-bs-toggle='show'>
								<a className='nav-link' href='/projects'>
									Projects
								</a>
							</LinkContainer>

							<LinkContainer to='/contact'>
								<a className='nav-link' href='/contact'>
									Contact
								</a>
							</LinkContainer>
						</div>
					</div>

					<Social
						bootcampProjects={bootcampProjects}
						setBootcampProjects={setBootcampProjects}
					/>

					<IconContext.Provider
						value={{
							color: '#292b3a',
							size: '1.7em',
						}}
					>
						<div
							className='d-lg-none'
							typeof='button'
							data-bs-toggle='collapse'
							data-bs-target='#main-nav'
							aria-controls='main-nav'
							aria-expanded='false'
							aria-label='Toggle navigation'
							onClick={() => setMenu(!menu)}
						>
							{menu ? <HiMenu /> : <HiOutlineX />}
						</div>
					</IconContext.Provider>
				</div>
			</nav>
		</header>
	)
}

export default Header
