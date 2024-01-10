// Styles
import './Contact.css'

// Icons
import {
  BsEnvelopeFill,
  BsPhoneFill,
  BsFilePdfFill,
  BsDownload,
} from 'react-icons/bs'

// Libraries
import AOS from 'aos'
import 'aos/dist/aos.css'

// Hooks
import { useEffect } from 'react'

// Components
import ContactForm from '../../components/contactform/ContactForm'
import { GitHub, LinkedIn } from '../../components/social/Social'

// Assets
import Cv from '../../assets/LeightonGrant.pdf'

const Contact = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section
      className="contact-page pb-3 py-md-3 px-2"
      data-aos="fade-up"
      data-aos-delay="300">
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h2 className="title contact-title text-center my-5">Contact Me</h2>
            <p className="intro contacts-intro text-center fs-5">
              If you are interested in working with me or have any questions,
              please feel free to contact me using the form or any of the other
              options below. I look forward to hearing from you soon!
            </p>
            <hr className="bg bg-light" />
          </div>
        </div>

        <div className="container my-5">
          <div className="row row-cols-1">
            <div className="col">
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="container my-5 contact-info">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3  d-flex justify-content-between">
            <div className="col">
              <div className="card py-3 shadow">
                <div className="card-body d-flex justify-content-center flex-column align-items-center gap-4">
                  <span className="fs-4">
                    <a
                      href="mailto:oneal.grant@outlook.com"
                      style={{ textDecoration: 'none' }}>
                      <BsEnvelopeFill />
                    </a>
                  </span>
                  <h6 className="card-title">EMAIL</h6>
                  <div className="border border-top-3 border-secondary w-50"></div>
                  <p className="card-text">
                    <a
                      href="mailto:oneal.grant@outlook.com"
                      style={{ textDecoration: 'none' }}>
                      oneal.grant@outlook.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card py-3 shadow">
                <div className="card-body d-flex justify-content-center flex-column align-items-center gap-4">
                  <span className="fs-4">
                    <a
                      href="tel:07886028826"
                      style={{ textDecoration: 'none' }}>
                      <BsPhoneFill />
                    </a>
                  </span>
                  <h6 className="card-title">PHONE</h6>
                  <div className="border border-top-3 border-secondary w-50"></div>
                  <p className="card-text">
                    <a
                      href="tel:07886028826"
                      style={{ textDecoration: 'none' }}>
                      +447886028826
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card py-3 shadow">
                <div className="card-body d-flex justify-content-center flex-column align-items-center gap-4">
                  <span className="fs-4">
                    <a href={Cv} download style={{ textDecoration: 'none' }}>
                      <BsFilePdfFill />
                    </a>
                  </span>
                  <h6 className="card-title">MY CV</h6>
                  <div className="border border-top-3 border-secondary w-50"></div>
                  <p className="card-text">
                    <a href={Cv} download style={{ textDecoration: 'none' }}>
                      Leighton's CV <BsDownload />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col d-flex justify-content-center gap-3">
              <span className="social-buttons">
                <LinkedIn />
              </span>
              <span className="social-buttons">
                <GitHub />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
