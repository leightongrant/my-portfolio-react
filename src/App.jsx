import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { useState, useEffect } from 'react'
import supabaseClient from './lib/supabase'
import { lazy } from 'react'

const Projects = lazy(() => import('./pages/projects/Projects'))
const Thanks = lazy(() => import('./pages/thanks/Thanks'))
const NotFound = lazy(() => import('./pages/notfound/NotFound'))
const ProjectDetails = lazy(() => import('./pages/projects/ProjectDetails'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const About = lazy(() => import('./pages/about/About'))
const AddProject = lazy(() => import('./components/modals/AddProject'))
const Login = lazy(() => import('./components/modals/Login'))

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
	}, [])

	async function fetchProjects() {
		const res = await supabaseClient.from('bootcamp').select()
		if (res.status > 199 && res.status < 300) {
			setBootcampProjects(obj => ({ ...obj, data: res.data }))
		}
		if (res.status > 299 && res.status < 600) {
			setBootcampProjects(obj => ({ ...obj, error: res.error }))
		}
		if (res.status === 0) {
			setBootcampProjects(obj => ({ ...obj, error: 0 }))
		}
	}

	return (
		<>
			<Header
				bootcampProjects={bootcampProjects}
				setBootcampProjects={setBootcampProjects}
			/>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: '1fr auto',
					minHeight: '100dvh',
				}}
			>
				<div>
					<Outlet context={[bootcampProjects, setBootcampProjects]} />
				</div>
				<Footer />
			</div>
			<AddProject
				bootcampProjects={bootcampProjects}
				setBootcampProjects={setBootcampProjects}
			/>

			<Login bootcampProjects={bootcampProjects} />
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
					<Route path='/' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='projects' element={<Projects />} />
					<Route path='projects/:id' element={<ProjectDetails />} />
					<Route path='contact' element={<Contact />} />
					<Route path='thanks' element={<Thanks />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
