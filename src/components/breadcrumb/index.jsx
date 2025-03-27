import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'
import { useResolvedPath } from 'react-router'
import { GoHomeFill } from 'react-icons/go'
import { Link } from 'react-router'

const BreadcrumbItem = ({ children, href, active }) => {
	return (
		<li className='breadcrumb-item'>
			<Link
				to={active ? '#' : href}
				className={active ? 'active-breadcrumb' : ''}
			>
				{children}
			</Link>
		</li>
	)
}

function Breadcrumbs() {
	const path = useResolvedPath().pathname
	const paths = path.split('/').filter(pth => pth)

	const crumbs = paths.map((pth, i) => {
		return (
			<BreadcrumbItem key={i} href={`/${pth}`} active={i === paths.length - 1}>
				{pth}
			</BreadcrumbItem>
		)
	})

	return (
		<section className='bg-light p-1'>
			<Container>
				<Breadcrumb>
					<BreadcrumbItem href={'/'}>
						<GoHomeFill />
					</BreadcrumbItem>
					{crumbs}
				</Breadcrumb>
			</Container>
		</section>
	)
}

export default Breadcrumbs
