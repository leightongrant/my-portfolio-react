import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import ProjectDetails from './pages/projects/ProjectDetails'
import NotFound from './pages/notfound/NotFound'

// Components
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import AddProject from './components/modals/AddProject'
import { Thanks } from './components/modals/Thanks'
import { useState, useEffect } from 'react'
import Login from './components/modals/Login'

// Supabase
import supabaseClient from './lib/supabase'

// Layout
function Layout() {
	const [bootcampProjects, setBootcampProjects] = useState({
		data: null,
		error: null,
		status: null,
		selected: '',
		mode: '',
		session: null,
	})

	useEffect(() => {
		supabaseClient.auth.getSession().then(({ data: { session } }) => {
			setBootcampProjects(obj => ({ ...obj, session: session }))
		})

		const {
			data: { subscription },
		} = supabaseClient.auth.onAuthStateChange((_event, session) => {
			setBootcampProjects(obj => ({ ...obj, session: session }))
		})

		return () => subscription.unsubscribe()
	}, [])

	useEffect(() => {
		fetchProjects()
	}, [bootcampProjects.status])

	async function fetchProjects() {
		const res = await supabaseClient.from('bootcamp').select()
		if (res.status === 200) {
			setBootcampProjects(obj => ({ ...obj, data: res.data }))
		}
		if (res.error) {
			setBootcampProjects(obj => ({ ...obj, error: res.error }))
		}
	}

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
	return (
		<BrowserRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			}}
		>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Hero />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/projects/:id' element={<ProjectDetails />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/thanks' element={<Thanks />} />
					<Route path='/*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
