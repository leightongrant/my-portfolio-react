import { ProjectCard } from './ProjectCard'
import PageBanner from '../../components/pagebanner/PageBanner'
import bg from '../../assets/projects-bg.webp'
import { useOutletContext } from 'react-router'
import Button from 'react-bootstrap/Button'
import { useModalStore } from '../../lib/zustand'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { MdAdd } from 'react-icons/md'
import { useAuthStore } from '../../lib/zustand'
import Breadcrumbs from '../../components/breadcrumb'
import Metadata from '../../metadata'
import { ServerError, Loading } from '../../components/placeholders'

const Projects = () => {
	const [bootcampProjects] = useOutletContext()
	const session = useAuthStore(state => state.session)
	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)

	const handleAddProject = () => {
		setMode('addProject')
		showModal()
	}

	let { data, error } = bootcampProjects

	if (!data) return <Loading />

	return (
		<>
			<Metadata
				title='Projects'
				description='Explore my portfolio of projects, showcasing my expertise in frontend web development with React.'
				keywords='Frontend Web Development, React, JavaScript, HTML, CSS, Responsive Design, User Experience (UX), Web Applications, Portfolio, Web Developer, Project Showcase'
				canonical='https://leightongrant.me/projects'
				image='https://leightongrant.me/og-image.webp'
				imageAlt='Leighton Grant Portfolio'
			/>
			<PageBanner pageTitle='My Projects' bannerBg={bg} />
			<Breadcrumbs />
			<main id='skills-bootcamp' className='section-padding px-3'>
				<Container>
					{error ? (
						<ServerError />
					) : (
						<>
							<h1 className='title-padding text-center display-5'>
								Skills Bootcamp Projects
							</h1>

							{session && (
								<Button
									onClick={handleAddProject}
									className='add-project-btn mb-5'
								>
									Add a new project <MdAdd />
								</Button>
							)}

							<Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
								{data.map(project => {
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
								})}
							</Row>
						</>
					)}
				</Container>
			</main>
		</>
	)
}

export default Projects
