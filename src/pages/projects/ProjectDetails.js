// Assets
import projects from '../../assets/projects.json'

// Components
import { Details } from './ProjectCard'

// Hooks
import { useParams } from 'react-router-dom'

function ProjectDetails() {
  function formatURL(title) {
    return title.toLowerCase().split(' ').join('-')
  }
  function formatTitle(title) {
    let detailsTitle = ''
    title.split('-').forEach((word) => {
      detailsTitle += word[0].toUpperCase() + word.substr(1) + ' '
    })

    return detailsTitle
  }

  const { id } = useParams()

  const projectDetail = projects.filter((project, index) => {
    return formatURL(project.title) === id
  })

  const myProjectDetails = projectDetail.map((project, index) => {
    return (
      <Details
        title={formatURL(project.title)}
        img={project.img}
        sdesc={project.sdesc}
        desc={project.desc}
        url={project.url}
        repo={project.repo}
        key={index}
      />
    )
  })

  return (
    <section className="padding-lg" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">{formatTitle(id)} Details</h2>
      </div>
      <div className="container my-5">
        <div className="d-flex justify-content-center">{myProjectDetails}</div>
      </div>
    </section>
  )
}

export default ProjectDetails
