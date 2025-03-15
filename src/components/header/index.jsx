import logo from '../../assets/lg-logo.png'
import SignIn from '../signin'
import { useResolvedPath } from 'react-router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { HiMenu, HiOutlineX } from 'react-icons/hi'
import { useState } from 'react'

const Header = ({ bootcampProjects }) => {
	const path = useResolvedPath().pathname
	const [isOpen, setIsOpen] = useState(false)

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
				/>
				<Navbar.Collapse
					id='navbar-nav'
					className='justify-content-center text-uppercase fs-6'
				>
					<Nav>
						<Nav.Link href='/' active={path === '/'}>
							Home
						</Nav.Link>
						<Nav.Link href='about' active={path === '/about'}>
							About
						</Nav.Link>
						<Nav.Link href='projects' active={path === '/projects'}>
							Projects
						</Nav.Link>
						<Nav.Link href='contact' active={path === '/contact'}>
							Contact
						</Nav.Link>
					</Nav>
					<div className='d-md-none'>
						<hr />
						{bootcampProjects && <SignIn bootcampProjects={bootcampProjects} />}
					</div>
				</Navbar.Collapse>
				<div className='d-none d-md-block'>
					{bootcampProjects && <SignIn bootcampProjects={bootcampProjects} />}
				</div>
			</Container>
		</Navbar>
	)
}

export default Header
