import './Hero.css'
// Routing
import { LinkContainer } from 'react-router-bootstrap'

// Assets
import ProfilePhoto from '../../assets/leightongrant_profile.jpg'

const Hero = () => {
  return (
    <main
      id="hero"
      className="d-flex flex-column align-items-center justify-content-center hero-info">
      <img
        id="heroImage"
        src={ProfilePhoto}
        alt="Leighton Grant"
        className="img-fluid rounded-circle"
        width={140}
        data-aos="zoom-in"
      />

      <h1 className="fw-bold my-2 text-center" data-aos="zoom-in">
        Leighton Grant
      </h1>

      <p className="fs-4 fw-light my-2 text-center" data-aos="zoom-in">
        Frontend Web Developer
      </p>

      <LinkContainer to="/about">
        <a
          href="/about"
          className="btn btn-about rounded px-5 py-3 my-4 HeroButton"
          data-aos="zoom-in">
          About Me
        </a>
      </LinkContainer>

      {/* </div> */}
    </main>
  )
}

export default Hero
