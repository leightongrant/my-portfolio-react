import './Hero.css'
// Routing
import { LinkContainer } from 'react-router-bootstrap'

// Assets
import ProfilePhoto from '../../assets/leightongrant_profile.jpg'

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center"
      style={{ paddingTop: '80px' }}>
      <div
        className="container d-flex flex-column align-items-center hero-info rounded"
        data-aos="zoom-in">
        <img
          src={ProfilePhoto}
          alt="Leighton Grant"
          className="img-fluid rounded-circle img-thumbnail"
          style={{ width: '120px', backgroundColor: '#22223B' }}
        />
        <h1 className="fw-bold my-2 text-center">Leighton Grant</h1>
        <p className="fs-4 fw-light my-2 text-center">Frontend Web Developer</p>
        <LinkContainer to="/about">
          <a
            href="/about"
            className="btn btn-about rounded px-5 py-3 my-4 HeroButton">
            About Me
          </a>
        </LinkContainer>
      </div>
    </section>
  )
}

export default Hero
