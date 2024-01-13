import './Hero.css'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
// Routing
import { LinkContainer } from 'react-router-bootstrap'

// Assets
import ProfilePhoto from '../../assets/leightongrant_profile.jpg'

const Hero = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <section
      id="hero"
      className="d-flex align-items-center"
      style={{ paddingTop: '80px' }}>
      <div
        className="container d-flex flex-column align-items-center hero-info"
        data-aos="zoom-in"
        data-aos-delay="200">
        <img
          src={ProfilePhoto}
          alt="Leighton Grant"
          className="img-fluid rounded-circle img-thumbnail"
          style={{ width: '120px', backgroundColor: '#22223B' }}
        />
        <h1 className="fw-bold my-2 fs-1 text-center">Leighton Grant</h1>
        <h2 className="fs-4 fw-light my-2 text-center">
          Front-End Web Developer
        </h2>
        <LinkContainer to="/about">
          <a
            href="/about"
            className="btn btn-about rounded-pill px-5 my-4 HeroButton">
            About Me
          </a>
        </LinkContainer>
      </div>
    </section>
  )
}

export default Hero
