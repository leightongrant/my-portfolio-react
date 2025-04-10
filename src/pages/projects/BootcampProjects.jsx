import { ProjectCard } from './ProjectCard'
import { Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import supabaseClient from '../../lib/supabase'
import Container from 'react-bootstrap/Container'
import { ServerError, ProjectsSkeleton } from '../../components/placeholders'
import { MdAdd } from 'react-icons/md'
import Button from 'react-bootstrap/Button'
import { useModalStore } from '../../lib/zustand'
import { useAuthStore } from '../../lib/zustand'
import { useToastStore } from '../../lib/zustand'

const BootcampProjects = () => {
	let [data, setData] = useState([])
	let [error, setError] = useState(null)
	let [loading, setLoading] = useState(false)

	const session = useAuthStore(state => state.session)
	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)
	const result = useToastStore(state => state.result)

	const handleAddProject = () => {
		setMode('addProject')
		showModal()
	}

	useEffect(() => {
		fetchProjects()
	}, [result.message])

	async function fetchProjects() {
		setLoading(true)
		const { status, data, error } = await supabaseClient
			.from('bootcamp')
			.select()
		if (status > 199 && status < 300) {
			setData(data)
			setLoading(false)
		} else {
			setError(error)
		}
	}

	if (error) {
		return <ServerError />
	}

	if (loading) {
		return <ProjectsSkeleton />
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
					{data.map(project => {
						const { title, img, about, app_url, repo_url, id } = project
						return (
							<ProjectCard
								title={title}
								img={img}
								about={about}
								app_url={app_url}
								repo_url={repo_url}
								key={id}
								id={id}
							/>
						)
					})}
				</Row>
			</Container>
		</main>
	)
}

export default BootcampProjects
