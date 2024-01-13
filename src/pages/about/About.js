// Styles
import './About.css'

// Hooks
import { useEffect } from 'react'

// Libraries
import AOS from 'aos'
import 'aos/dist/aos.css'

// Assets
import profile from '../../assets/leightongrant_profile.jpg'

function About() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section className="about-page pb-3 py-md-3 px-2">
      <div className="about-inner" data-aos="fade-up" data-aos-delay="200">
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h2 className="title about-title text-center my-5">About</h2>
              <p className="intro about-intro text-center">
                Hi, my name is Leighton Grant and I am a qualified front-end
                developer residing in the UK. I am excited to join a company
                that has an innovative and supportive spirit.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row mb-5">
            <div className="col-12 col-md-4 about-img text-center">
              <img
                className="img-fluid rounded"
                src={profile}
                alt="Leighton Grant - Front-End Web Developer"
              />
            </div>

            <div className="col-12 col-md-8 about-info mt-5 mt-md-0">
              <h3>Front-end Web Developer</h3>
              <p className="lead mt-4">
                Trained through the Harvard and MIT-created course provider,
                EdX, I have acquired a range of skills that will set the tone
                for my career in front-end development.
              </p>
              <p>
                Prior to acquiring my professional qualification, I had
                undertaken personal coding projects for over 5 years in my spare
                time. So, why coding? Making the decision to switch careers came
                because I relocated from London to Lincolnshire, having
                previously worked as an electronics technician for many years.
              </p>
              <p>
                Solving problems using code is a great passion of mine and armed
                with a cup of coffee, I am keen to delve into the realm of
                professional problem-solving. Supplied with the eagerness to
                pursue front-end development professionally, I am ready for the
                next chapter in my career.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col p-5 rounded key-skills text-light">
              <h2 className="title about-title text-center mb-5">Key Skills</h2>
              <div className="d-flex justify-content-around">
                <ul>
                  <li>
                    Proficient in HTML, CSS, JavaScript, TypeScript, React,
                    Nodejs
                  </li>
                  <li>
                    Strong understanding of responsive web design techniques
                  </li>
                  <li>
                    An understanding of version control systems such as
                    Git/GitHub
                  </li>
                  <li>
                    Knowledge of performance testing frameworks including Mocha
                    and Jest
                  </li>
                  <li>
                    Experience with browser-based debugging and performance
                    testing software
                  </li>
                  <li>Excellent problem-solving skills</li>
                  <li>Strong verbal and written communication skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
