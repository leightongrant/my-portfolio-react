// React Router Context
import { useOutletContext } from 'react-router-dom'

// Components
import { Details } from './ProjectCard'

// Hooks
import { useParams } from 'react-router-dom'

//Utilities
import slugify from '../../utils/slugify'

function ProjectDetails() {
  const [bootcampProjects] = useOutletContext()
  const { data, error } = bootcampProjects

  const { id } = useParams()

  const projectDetails = data
    .filter((project) => slugify(project.title) === id)
    .map((project) => (
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
  if (!data) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>
  return (
    <main className="padding-lg" data-aos="fade-in">
      <div className="container">
        <h1 className="section-title text-capitalize title-margin">
          {id.replaceAll('-', ' ')}
        </h1>
      </div>
      <div className="container my-5">
        <div className="d-flex justify-content-center">{projectDetails}</div>
      </div>
    </main>
  )
}

export default ProjectDetails
