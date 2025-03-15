import { useOutletContext } from 'react-router'
import { Details } from './ProjectCard'
import { useParams } from 'react-router'
import slugify from '../../utils/slugify'
// import { Helmet } from 'react-helmet-async'
import PageBanner from '../../components/pagebanner/PageBanner'

function ProjectDetails() {
	const [bootcampProjects] = useOutletContext()
	const { data, error, status } = bootcampProjects
	const { id } = useParams()

	if (!data) return <h2>Loading...</h2>
	if (error) return <h2>{error}</h2>

	const projectDetails = data
		.filter(project => slugify(project.title) === id)
		.map(project => (
			<Details
				title={project.title}
				img={project.img}
				about={project.about}
				description={project.description}
				app_url={project.app_url}
				repo_url={project.repo_url}
				key={project.id}
			/>
		))

	return (
		<>
			{/* <Helmet>
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, React, Portfolio'
				/>
				<title>Leighton Grant's Portfolio | {id.replaceAll('-', ' ')}</title>
			</Helmet> */}
			<PageBanner pageTitle={id.replaceAll('-', ' ')} />
			<main className='padding-lg'>
				<div className='container'></div>
				<div className='container my-5'>
					<div className='d-flex justify-content-center'>{projectDetails}</div>
				</div>
			</main>
		</>
	)
}

export default ProjectDetails
