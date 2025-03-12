// Components
import { ProjectCard } from './ProjectCard'
import PageBanner from '../../components/pagebanner/PageBanner'
// Banner Background
import bg from '../../assets/projects-bg.jpg'

// React Router Context
import { useOutletContext } from 'react-router-dom'

import { Helmet } from 'react-helmet-async'

const Projects = () => {
	const [bootcampProjects, setBootcampProjects] = useOutletContext()

	async function handleAddPorject() {
		setBootcampProjects(obj => ({ ...obj, mode: 'add' }))
	}

	const { data, error } = bootcampProjects

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
			<Helmet>
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, React, Portfolio'
				/>
				<link rel='canonical' href='https://leightongrant.me/projects' />
				<title>Leighton Grant's Portfolio | Projects</title>
			</Helmet>
			<PageBanner pageTitle='My Projects' bannerBg={bg} />
			<main id='skills-bootcamp' className='padding-lg'>
				<div className='container' data-aos='fade-in'>
					<h1 className='section-title'>Skills Bootcamp Projects</h1>

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
