import { useState } from 'react'
import { supabase } from '../../utils/supabase'
import { useEffect } from 'react'

let formDataObj = {
  title: '',
  about: '',
  app_url: '',
  repo_url: '',
  img: '',
  description: '',
  updated_at: Date.now(),
}

export default function AddProject({ bootcampProjects, setBootcampProjects }) {
  const [formData, setFormData] = useState(formDataObj)

  useEffect(() => {
    if (bootcampProjects.mode === 'edit') {
      handleSelect()
    }
  }, [bootcampProjects.mode])

  async function handleSelect(id) {
    try {
      const res = await supabase
        .from('bootcamp')
        .select()
        .eq('id', bootcampProjects.selected)
      if (res.status === 200) {
        const { title, about, app_url, repo_url, img, description } =
          res.data[0]
        setFormData((obj) => ({
          ...obj,
          title: title,
          about: about,
          app_url: app_url,
          repo_url: repo_url,
          img: img,
          description: description,
        }))
      }
    } catch (error) {
      console.log(error)
    } finally {
      setBootcampProjects((obj) => ({ ...obj, mode: '' }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const res = await supabase.from('bootcamp').select()
      if (res.status === 200) {
        if (!bootcampProjects.mode) {
          setBootcampProjects((obj) => ({ ...obj, status: 'saving' }))
          await supabase
            .from('bootcamp')
            .update(formData)
            .eq('id', bootcampProjects.selected)
        }
        if (bootcampProjects.mode === 'add') {
          setBootcampProjects((obj) => ({ ...obj, status: 'saving' }))
          await supabase.from('bootcamp').insert(formData)
        }
      }
      if (res.error) {
        console.log('Response Error:', res.error)
      }
    } catch (error) {
      console.log('Error Caught: ', error)
    } finally {
      setFormData((obj) => ({
        ...obj,
        title: '',
        about: '',
        app_url: '',
        repo_url: '',
        img: '',
        description: '',
      }))
    }
  }

  function handleChange(e) {
    const { value, id } = e.target
    if (id === 'Title') {
      setFormData((stateObj) => ({ ...stateObj, title: value }))
    }
    if (id === 'About') {
      setFormData((stateObj) => ({ ...stateObj, about: value }))
    }
    if (id === 'AppUrl') {
      setFormData((stateObj) => ({ ...stateObj, app_url: value }))
    }
    if (id === 'RepoUrl') {
      setFormData((stateObj) => ({ ...stateObj, repo_url: value }))
    }
    if (id === 'ScreenshotUrl') {
      setFormData((stateObj) => ({ ...stateObj, img: value }))
    }
    if (id === 'Description') {
      setFormData((stateObj) => ({ ...stateObj, description: value }))
    }
  }

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      id="AddProject"
      aria-labelledby="Add new project"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {bootcampProjects.mode === 'add'
                ? 'Add new project'
                : 'Edit project'}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="fs-6" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Title"
                  placeholder="Project title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                />
                <label htmlFor="Title" className="form-label">
                  Title
                </label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="text"
                  className="form-control "
                  id="About"
                  placeholder="About project"
                  required
                  value={formData.about}
                  onChange={handleChange}
                />
                <label htmlFor="About" className="form-label">
                  About
                </label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="url"
                  className="form-control"
                  id="AppUrl"
                  placeholder="App Url"
                  required
                  value={formData.app_url}
                  onChange={handleChange}
                />
                <label htmlFor="AppUrl" className="form-label">
                  App Url
                </label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="url"
                  className="form-control"
                  id="RepoUrl"
                  placeholder="Repository Url"
                  required
                  value={formData.repo_url}
                  onChange={handleChange}
                />
                <label htmlFor="RepoUrl" className="form-label">
                  Repository Url
                </label>
              </div>
              <div className="mb-3 form-floating">
                <input
                  type="url"
                  className="form-control"
                  id="ScreenshotUrl"
                  placeholder="Screenshot Url"
                  required
                  value={formData.img}
                  onChange={handleChange}
                />
                <label htmlFor="ScreenshotUrl" className="form-label">
                  Screenshot Url
                </label>
              </div>
              <div className="mb-3 form-floating">
                <textarea
                  className="form-control"
                  id="Description"
                  placeholder="Enter description"
                  required
                  style={{ minHeight: '150px' }}
                  rows={10}
                  value={formData.description}
                  onChange={handleChange}
                />
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal">
                {bootcampProjects.mode === 'add'
                  ? 'Add project'
                  : 'Update Project'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
