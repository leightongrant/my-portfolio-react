// Styles
import './About.css'

// Assets
import profile from '../../assets/leightongrant_profile.jpg'

// Components
import PageBanner from '../../components/pagebanner/PageBanner'

// Banner Background
import bg from '../../assets/about-bg.jpg'

function About() {
  return (
    <>
      <PageBanner pageTitle="About me" bannerBg={bg} />
      <main className="about-page padding-lg" id="about-me">
        <div className="container" data-aos="fade-in">
          <div className="row">
            <h1 className="text-center section-title">
              Frontend Web Developer
            </h1>
            <div className="col-12 col-md-4 mb-5" data-aos="fade-in">
              <img
                className="img-fluid rounded"
                src={profile}
                alt="Leighton Grant - Front-End Web Developer"
              />
            </div>

            <div className="col-12 col-md-8 about-info" data-aos="fade-in">
              <p className="lead">
                Hi, my name is Leighton Grant and I am a qualified front-end
                developer residing in the UK. I am excited to join a company
                that has an innovative and supportive spirit.
              </p>
              <p>
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
        </div>
      </main>

      <section id="key-skills" className="bg-light padding-lg">
        <div className="container" data-aos="fade-in">
          <h2 className="title about-title text-center section-title">
            Key Skills
          </h2>
          <div className="d-flex justify-content-around">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Proficient in HTML, CSS, JavaScript, TypeScript, React, Nodejs
              </li>
              <li className="list-group-item">
                Strong understanding of responsive web design techniques
              </li>
              <li className="list-group-item">
                An understanding of version control systems such as Git/GitHub
              </li>
              <li className="list-group-item">
                Knowledge of performance testing frameworks including Mocha and
                Jest
              </li>
              <li className="list-group-item">
                Experience with browser-based debugging and performance testing
                software
              </li>
              <li className="list-group-item">
                Excellent problem-solving skills
              </li>
              <li className="list-group-item">
                Strong verbal and written communication skills
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
