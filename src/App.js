// Styles
import './App.css'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Routes
import { Route, Routes } from 'react-router-dom'

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

function App() {
  return (
    <>
      <Header />
      <div id="App-content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
