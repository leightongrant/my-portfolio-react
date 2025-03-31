import { ProjectCard } from './ProjectCard'
import PageBanner from '../../components/pagebanner/PageBanner'
import bg from '../../assets/projects-bg.webp'
import { useOutletContext } from 'react-router'
import { LuServerOff } from 'react-icons/lu'
import Button from 'react-bootstrap/Button'
import { useModalStore } from '../../lib/zustand'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { MdAdd } from 'react-icons/md'
import { useAuthStore } from '../../lib/zustand'
import Breadcrumbs from '../../components/breadcrumb'
import Metadata from '../../metadata'

const Projects = () => {
	const [bootcampProjects] = useOutletContext()
	const session = useAuthStore(state => state.session)
	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)

	const handleAddProject = () => {
		setMode('addProject')
		showModal()
	}

	const { data, error } = bootcampProjects

	if (error !== null) {
		return (
			<div className='py-5'>
				<div className='container h-75 d-flex flex-column align-items-center justify-content-center gap-5'>
					<LuServerOff style={{ fontSize: '4em' }} />
					<h5 style={{ textWrap: 'balance' }} className='text-center'>
						{error === 0
							? 'There was a problem with the server. Please try again later.'
							: error}
					</h5>
				</div>
			</div>
		)
	}

	if (!data) return <h2>Loading...</h2>

	const myProjects = data.map(project => {
		return (
			<ProjectCard
				title={project.title}
				img={project.img}
				about={project.about}
				desc={project.description}
				app_url={project.app_url}
				repo_url={project.repo_url}
				key={project.id}
				id={project.id}
			/>
		)
	})

	return (
		<>
			<Metadata
				title='Projects'
				description='Explore my portfolio of projects, showcasing my expertise in frontend web development with React.'
				keywords='Frontend Web Development, React, JavaScript, HTML, CSS, Responsive Design, User Experience (UX), Web Applications, Portfolio, Web Developer, Project Showcase'
				canonical='https://leightongrant.me/projects'
			/>
			<PageBanner pageTitle='My Projects' bannerBg={bg} />
			<Breadcrumbs />
			<main id='skills-bootcamp' className='section-padding px-3'>
				<Container>
					<h1 className='title-padding text-center display-5'>
						Skills Bootcamp Projects
					</h1>

					{session && (
						<Button onClick={handleAddProject} className='add-project-btn mb-5'>
							Add a new project <MdAdd />
						</Button>
					)}

					<Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
						{myProjects}
					</Row>
				</Container>
			</main>
		</>
	)
}

export default Projects
