import { ProjectCard } from './ProjectCard'
import PageBanner from '../../components/pagebanner/PageBanner'
import bg from '../../assets/projects-bg.webp'
import { useOutletContext } from 'react-router'
// import { Helmet } from 'react-helmet-async'
import { LuServerOff } from 'react-icons/lu'
import Button from 'react-bootstrap/Button'
import { useModalStore } from '../../lib/zustand'
import { useToastStore } from '../../lib/zustand'

const Projects = () => {
	const [bootcampProjects, setBootcampProjects] = useOutletContext()
	async function handleAddPorject() {
		setBootcampProjects(obj => ({ ...obj, mode: 'add' }))
	}

	const { showModal, setMode } = useModalStore()
	const { result } = useToastStore()

	const handleAddProject = () => {
		setMode('addProject')
		showModal()
	}

	const { data, error } = bootcampProjects

	if (error !== null) {
		return (
			<div style={{ marginTop: '88px' }}>
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
			{/* <Helmet>
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, React, Portfolio'
				/>
				<link rel='canonical' href='https://leightongrant.me/projects' />
				<title>Leighton Grant's Portfolio | Projects</title>
			</Helmet> */}
			<PageBanner pageTitle='My Projects' bannerBg={bg} />
			<main id='skills-bootcamp' className='padding-lg'>
				<div className='container'>
					<h2 className='section-title'>Skills Bootcamp Projects</h2>
					<Button onClick={handleAddProject} className='add-project-btn'>
						Add a new project
					</Button>
					<p>{result.message}</p>

					{bootcampProjects.session && (
						<button
							className='btn btn-primary mb-5'
							type='button'
							data-bs-toggle='modal'
							data-bs-target='#AddProject'
							onClick={handleAddPorject}
						>
							Add new project
						</button>
					)}

					<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
						{myProjects}
					</div>
				</div>
			</main>
		</>
	)
}

export default Projects
