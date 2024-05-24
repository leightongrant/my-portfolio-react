// Routes
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// Pages
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import ProjectDetails from './pages/projects/ProjectDetails'

// Components
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import AddProject from './components/modals/AddProject'
import { Thanks } from './components/modals/Thanks'
import { useState, useEffect } from 'react'
import Login from './components/modals/Login'

// Supabase
import { supabase } from './utils/supabase'

// Router
const router = createBrowserRouter([
  {
    path: '*',
    element: <Layout />,
    children: [
      {
        path: '/*',
        element: <Hero />,
      },
      {
        path: 'about/*',
        element: <About />,
      },
      {
        path: 'contact/*',
        element: <Contact />,
      },
      {
        path: 'projects/*',
        element: <Projects />,
      },
      {
        path: 'projects/:id',
        element: <ProjectDetails />,
      },
      {
        path: 'thanks/*',
        element: <Thanks />,
      },
    ],
  },
])

// Layout
function Layout() {
  // const [session, setSession] = useState(null)
  const [bootcampProjects, setBootcampProjects] = useState({
    data: null,
    error: null,
    status: null,
    selected: '',
    mode: '',
    session: null,
  })

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // setSession(session)
      setBootcampProjects((obj) => ({ ...obj, session: session }))
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      // setSession(session)
      setBootcampProjects((obj) => ({ ...obj, session: session }))
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    try {
      async function fetchProjects() {
        const res = await supabase.from('bootcamp').select()
        if (res.status === 200) {
          setBootcampProjects((obj) => ({ ...obj, data: res.data }))
        }
        if (res.error) {
          setBootcampProjects((obj) => ({ ...obj, error: res.error }))
        }
      }
      fetchProjects()
    } catch (e) {
      console.log(e)
    } finally {
      setBootcampProjects((obj) => ({ ...obj, status: null }))
    }
  }, [bootcampProjects.status])
  return (
    <>
      <Header
        bootcampProjects={bootcampProjects}
        setBootcampProjects={setBootcampProjects}
      />
      <Outlet context={[bootcampProjects, setBootcampProjects]} />
      <AddProject
        bootcampProjects={bootcampProjects}
        setBootcampProjects={setBootcampProjects}
      />
      <Login bootcampProjects={bootcampProjects} />
      <Footer />
    </>
  )
}

export default function App() {
  return <RouterProvider router={router} />
}
