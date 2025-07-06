import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import { lazy } from 'react'
import MainLayout from './layout'
import { useFirebaseStore } from './lib/zustand'
import { getUser } from './lib/firebase.js'

const Projects = lazy(() => import('./pages/projects/Projects'))
const Thanks = lazy(() => import('./pages/thanks/Thanks'))
const NotFound = lazy(() => import('./pages/notfound/NotFound'))
const ProjectDetails = lazy(() => import('./pages/projects/ProjectDetails'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const About = lazy(() => import('./pages/about/About'))

export default function App() {
	const setUser = useFirebaseStore(state => state.setUser)
	getUser(setUser)

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='about'
						element={<About />}
					/>
					<Route
						path='projects'
						element={<Projects />}
					/>
					<Route
						path='projects/:slug'
						element={<ProjectDetails />}
					/>
					<Route
						path='contact'
						element={<Contact />}
					/>
					<Route
						path='thanks'
						element={<Thanks />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
