import { ProjectCard } from './ProjectCard'
import { Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import supabaseClient from '../../lib/supabase'
import Container from 'react-bootstrap/Container'
import { Loading, ServerError } from '../../components/placeholders'
import { MdAdd } from 'react-icons/md'
import Button from 'react-bootstrap/Button'
import { useModalStore } from '../../lib/zustand'
import { useAuthStore } from '../../lib/zustand'

const BootcampProjects = () => {
	let [data, setData] = useState([])
	let [error, setError] = useState(null)
	let [loading, setLoading] = useState(false)

	const session = useAuthStore(state => state.session)
	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)

	const handleAddProject = () => {
		setMode('addProject')
		showModal()
	}

	useEffect(() => {
		fetchProjects()
	}, [])

	async function fetchProjects() {
		setLoading(true)
		const res = await supabaseClient.from('bootcamp').select()
		if (res.status > 199 && res.status < 300) {
			setData(res.data)
			setLoading(false)
		}
		if (res.status > 299 && res.status < 600) {
			setError(res.error)
		}
		if (res.status === 0) {
			setError(0)
		}
	}

	if (error) {
		return <ServerError />
	}

	if (loading) {
		return <Loading />
	}

	return (
		<main id='skills-bootcamp' className='section-padding px-3'>
			<Container>
				<Row>
					<h1 className='title-padding text-center display-5'>
						Skills Bootcamp Projects
					</h1>
				</Row>
				<Row className='justify-content-center'>
					{session && (
						<Button
							onClick={handleAddProject}
							className='add-project-btn mb-5 w-25'
						>
							Add a new project <MdAdd />
						</Button>
					)}
				</Row>
				<Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
					{data.map(project => (
						<ProjectCard
							title={project.title}
							img={project.img}
							about={project.about}
							description={project.description}
							app_url={project.app_url}
							repo_url={project.repo_url}
							key={project.id}
						/>
					))}
				</Row>
			</Container>
		</main>
	)
}

export default BootcampProjects
