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
    <div className="container my-5 border p-5 rounded contact-form shadow gradient transparent">
      <h2 className="mb-3 text-center">Get in touch</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
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
            className="form-control"
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
        <button className="btn form-btn rounded-pill px-4 my-4" type="submit">
          Send Message <MdSend />
        </button>
      </form>
    </div>
  )
}
export default ContactForm
