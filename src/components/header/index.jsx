import logo from '../../assets/lg-logo.png'
import SignIn from '../signin'
import { useResolvedPath } from 'react-router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { useRef, useState } from 'react'
import { Link } from 'react-router'

const Header = ({ bootcampProjects }) => {
	const path = useResolvedPath().pathname
	const [isOpen, setIsOpen] = useState(false)

	const navRef = useRef(null)
	const buttonRef = useRef(null)

	//TODO: fix this - close menu when link is clicked
	// const handleCollapse = () => {
	// 	buttonRef.current.classList.add('collapsed')
	// 	navRef.current.classList.remove('show')
	// 	setIsOpen(false)
	// }

	const navBarToggleStyle = {
		backgroundColor: 'transparent',
		border: 'none',
		color: '#292b3a',
		fontSize: '2em',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<Navbar
			id='main-nav'
			as={'header'}
			fixed='top'
			expand='md'
			className='shadow-sm'
			bg={path === '/' ? 'transparent' : 'light'}
			style={{
				backdropFilter: 'blur(10px)',
			}}
		>
			<Container fluid>
				<Navbar.Brand href='/'>
					<Image
						src={logo}
						width={53}
						height={35}
						alt='leightongrant.me logo'
					/>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='navbar-nav'
					children={isOpen ? <HiOutlineX /> : <HiMenu />}
					onClick={handleOpen}
					bsPrefix='navbar-toggler-custom'
					className='d-md-none'
					style={navBarToggleStyle}
					ref={buttonRef}
				/>
				<Navbar.Collapse
					id='navbar-nav'
					className='justify-content-center text-uppercase fs-6'
					ref={navRef}
				>
					<Nav className='gap-3'>
						<Link to='/' className={`nav-link ${path === '/' && 'active'}`}>
							Home
						</Link>
						<Link
							to='/about'
							className={`nav-link ${/about/.test(path) && 'active'}`}
						>
							About
						</Link>

						<Link
							to='/projects'
							className={`nav-link ${/projects/.test(path) && 'active'}`}
						>
							Projects
						</Link>

						<Link
							to='/contact'
							className={`nav-link ${/contact/.test(path) && 'active'}`}
						>
							Contact
						</Link>
					</Nav>
					<div className='d-md-none'>
						<hr />
						{bootcampProjects && <SignIn />}
					</div>
				</Navbar.Collapse>
				<div className='d-none d-md-block'>
					{bootcampProjects && <SignIn />}
				</div>
			</Container>
		</Navbar>
	)
}

export default Header
