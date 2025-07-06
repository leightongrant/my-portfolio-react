import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap'
import { RiExternalLinkFill } from 'react-icons/ri'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Metadata from '../../metadata'
import { useNavigate, Link } from 'react-router'
import slugify from '../../utils/slugify'
import { useEffect, useState } from 'react'
import { useModalStore } from '../../lib/zustand'
import { Loading, ServerError } from '../../components/placeholders'
import { getProject } from '../../lib/firebase'

const Details = () => {
	const navigate = useNavigate()
	let [project, setProject] = useState([])
	let [error, setError] = useState(null)
	let [loading, setLoading] = useState(true)
	const projectId = useModalStore(state => state.projectId)

	useEffect(() => {
		getProject(projectId)
			.then(project => {
				if (!project) throw new Error('Project not found')
				setProject(project)
				setLoading(false)
			})
			.catch(error => {
				console.log(error)
				setError(error.message)
				setLoading(false)
			})
	}, [projectId])

	if (loading) {
		return <Loading />
	}

	if (error) {
		return <ServerError />
	}

	let { title, app_url, repo_url, img_url, description } = project

	return (
		<>
			<Metadata
				title={title}
				description={description}
				keywords='HTML, CSS, JavaScript, React, Portfolio'
				canonical={`https://leightongrant.me/projects/${slugify(
					title
				)}`}
				image='https://leightongrant.me/og-image.webp'
				imageAlt='Leighton Grant Portfolio'
			/>
			<main className='section-padding px-3'>
				<Container>
					<h1 className='title-padding text-center display-5'>{`Project Title: ${title}`}</h1>
					<Row className='row-cols-1 row-cols-lg-2 g-5'>
						<Col>
							<Stack>
								<Image
									src={img_url}
									className='border p-0 img-fluid shadow rounded'
									alt={title}
									title={title}
									loading='eager'
									width={640}
									height={480}
								/>
							</Stack>
						</Col>
						<Col>
							<Stack>
								<h4 className='mb-3'>Description</h4>
								<p
									className='card-text'
									style={{ textWrap: 'balance' }}
								>
									{description}
								</p>
							</Stack>
							<Stack>
								<h4 className='my-3'>Links</h4>
								<Stack direction='horizontal'>
									<Link
										to={app_url}
										target='_blank'
										rel='noreferrer'
										className='btn btn-sm projectBtn'
									>
										App <RiExternalLinkFill />
									</Link>
									<Link
										to={repo_url}
										target='_blank'
										rel='noreferrer'
										className='btn btn-sm projectBtn ms-2'
									>
										Repo <RiExternalLinkFill />
									</Link>

									<Button
										type='button'
										className='btn btn-sm projectBtn ms-2 border-0'
										onClick={() => navigate('/projects')}
									>
										<HiArrowNarrowLeft /> Back to Projects
									</Button>
								</Stack>
							</Stack>
						</Col>
					</Row>
				</Container>
			</main>
		</>
	)
}

export default Details
