// Style
import './ProjectCard.css'

// Icons
import { RiExternalLinkFill } from 'react-icons/ri'

// Routing
import { LinkContainer } from 'react-router-bootstrap'

function ProjectCard(props) {
  return (
    <div className="col mb-4">
      <div className="card shadow">
        <img src={props.img} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.sdesc}</p>
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-secondary">
            App <RiExternalLinkFill />
          </a>
          <a
            href={props.repo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-secondary ms-2">
            Repo <RiExternalLinkFill />
          </a>
          <LinkContainer to={props.title}>
            <a
              href={'projects/' + props.title}
              className="btn btn-sm btn-secondary ms-2">
              Details
            </a>
          </LinkContainer>
        </div>
      </div>
    </div>
  )
}

function Details(props) {
  return (
    <div className="" style={{ maxWidth: '800px', height: 'auto' }}>
      <div>
        <img
          src={props.img}
          className="border p-0 img-fluid shadow rounded"
          alt={props.title}
        />
      </div>
      <div className="">
        <h4 className="my-3">Description</h4>
        <p className="card-text">{props.desc}</p>

        <h4 className="my-3">Links</h4>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-secondary">
          App <RiExternalLinkFill />
        </a>
        <a
          href={props.repo}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-secondary ms-2">
          Repo <RiExternalLinkFill />
        </a>
        <LinkContainer to="/projects">
          <a href="/projects" className="btn btn-sm btn-secondary ms-2">
            Back to Projects
          </a>
        </LinkContainer>
      </div>
    </div>
  )
}

export { ProjectCard, Details }
