// Styles
import './App.css'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

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
import { Thanks } from './components/modals/Thanks'

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
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default function App() {
  return <RouterProvider router={router} />
}
