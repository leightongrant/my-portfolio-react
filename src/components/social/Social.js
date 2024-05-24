// Styles
import './Social.css'

// Icons
import {
  BsLinkedin,
  BsGithub,
  BsPhoneFill,
  BsEnvelopeFill,
} from 'react-icons/bs'

import { supabase } from '../../utils/supabase'
import { useEffect } from 'react'

const linkedin = 'https://www.linkedin.com/in/leightongrant/'
const github = 'https://github.com/leightongrant'

function Social({ bootcampProjects, setBootcampProjects }) {
  useEffect(() => {
    const authBtn = document.querySelector('.supabase-auth-ui_ui-button')
    authBtn.setAttribute('data-bs-dismiss', 'modal')
  }, [])

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) console.log(error)
    } catch (error) {
      console.log(error)
    }
  }

  function handleClick() {
    const authBtn = document.querySelector('.supabase-auth-ui_ui-button')
    authBtn.setAttribute('data-bs-dismiss', 'modal')
  }

  return (
    <div className="">
      <div className="social-links  d-inline-flex gap-2">
        <a href={github} target="_blank" rel="noreferrer">
          <BsGithub className="fs-3" />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <BsLinkedin className="fs-3" />
        </a>
        <a href="mailto:dev@leightongrant.me">
          <BsEnvelopeFill className="fs-3" />
        </a>
        <a href="tel:+447886028826">
          <BsPhoneFill className="fs-3" />
        </a>
        {!bootcampProjects.session ? (
          <button
            type="button"
            className="btn btn-success btn-sm "
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
            onClick={handleClick}>
            Login
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={signOut}>
            Log Out
          </button>
        )}
      </div>
    </div>
  )
}

function LinkedIn() {
  return (
    <a
      href={linkedin}
      target="_blank"
      className="social-button"
      rel="noreferrer">
      <BsLinkedin />
    </a>
  )
}

function GitHub() {
  return (
    <a href={github} target="_blank" className="social-button" rel="noreferrer">
      <BsGithub />
    </a>
  )
}

export { Social, LinkedIn, GitHub }
