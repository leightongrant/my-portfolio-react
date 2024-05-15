// Styles
import './ContactForm.css'

// Icons
import { MdSend } from 'react-icons/md'

// Hooks
import { useNavigate } from 'react-router-dom'

const ContactForm = () => {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    const myForm = e.target
    const formData = new FormData(myForm)
    const formDataString = new URLSearchParams(formData).toString()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formDataString,
    })
      .then(() => {
        navigate('/thanks')
      })
      .catch((error) => alert(error))
  }

  return (
    <section className="container contact-form padding-lg">
      <div data-aos="fade-up">
        <h2 className="section-title">Get in touch</h2>
        <div
          className="bg-white p-3 p-md-5 border rounded"
          style={{ maxWidth: 800, margin: 'auto' }}>
          <h3 className="mb-5 text-center fs-2">Contact Form</h3>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="w-100">
            <input type="hidden" name="form-name" value="contact" />
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control py-3"
                type="text"
                id="name"
                name="name"
                pattern="[A-Za-z]*"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control py-3"
                type="email"
                id="email"
                name="email"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={10}
                required
              />
            </div>
            <button
              className="btn form-btn rounded px-5 py-3 my-4 w-100 "
              type="submit">
              Send Message <MdSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default ContactForm
