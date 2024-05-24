// Components
import { ProjectCard } from './ProjectCard'
import PageBanner from '../../components/pagebanner/PageBanner'

// Banner Background
import bg from '../../assets/projects-bg.jpg'

// React Router Context
import { useOutletContext } from 'react-router-dom'

const Projects = () => {
  const [bootcampProjects, setBootcampProjects] = useOutletContext()

  const { data, error, status } = bootcampProjects

  async function handleAdd() {
    setBootcampProjects((obj) => ({ ...obj, mode: 'add' }))
  }

  if (error) return <h2>{error}</h2>
  if (!data) return <h2>Loading...</h2>

  const myProjects = data.map((project) => {
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
      <PageBanner pageTitle="My Projects" bannerBg={bg} />
      <section id="skills-bootcamp" className="padding-lg">
        <div className="container" data-aos="fade-up">
          <h2 className="section-title">Skills Bootcamp Projects</h2>

          {bootcampProjects.session && (
            <button
              className="btn btn-primary mb-5"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#AddProject"
              onClick={handleAdd}>
              Add new project
            </button>
          )}

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {myProjects}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
