import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { useState, useEffect } from 'react'
import supabaseClient from '../lib/supabase'
import { lazy } from 'react'
import Header from '../components/header'
import MainModal from '../components/modals'
import MainToast from '../components/toasts'

const AddProject = lazy(() => import('../components/modals/AddProject'))
const Login = lazy(() => import('../components/modals/Login'))

function MainLayout() {
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
		setBootcampProjects(obj => ({ ...obj, status: 'loading' }))
		const res = await supabaseClient.from('bootcamp').select()
		if (res.status > 199 && res.status < 300) {
			setBootcampProjects(obj => ({
				...obj,
				data: res.data,
				status: res.status,
			}))
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
			<MainModal />
			<MainToast />
		</>
	)
}

export default MainLayout
