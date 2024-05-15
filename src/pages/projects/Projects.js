// Styles
import './Projects.css'

// Assests
import projects from '../../assets/projects.json'

// Components
import { ProjectCard } from './ProjectCard'
import PageBanner from '../../components/pagebanner/PageBanner'

// Banner Background
import bg from '../../assets/projects-bg.jpg'

const Projects = () => {
  function formatTitle(title) {
    return title.toLowerCase().split(' ').join('-')
  }

  const myProjects = projects.map((project, index) => {
    return (
      <ProjectCard
        title={formatTitle(project.title)}
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
    <>
      <PageBanner pageTitle="My Projects" bannerBg={bg} />
      <section id="skills-bootcamp" className="padding-lg">
        <div className="container" data-aos="fade-up">
          <h2 className="section-title">Skills Bootcamp Projects</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {myProjects}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
