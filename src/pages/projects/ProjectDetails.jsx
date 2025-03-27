import { useParams } from 'react-router'
// import { Helmet } from 'react-helmet-async'
import PageBanner from '../../components/pagebanner/PageBanner'
import { RiExternalLinkFill } from 'react-icons/ri'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import slugify from '../../utils/slugify'
import { useOutletContext, useNavigate, Link } from 'react-router'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap'
import Breadcrumbs from '../../components/breadcrumb'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Details(props) {
	const navigate = useNavigate()

	return (
		<main className='section-padding'>
			<Container>
				<Row className='row-cols-1 row-cols-lg-2 g-5'>
					<Col>
						<Stack>
							<Image
								src={props.img}
								className='border p-0 img-fluid shadow rounded'
								alt={props.title}
								width={640}
								height={480}
							/>
						</Stack>
					</Col>
					<Col>
						<Stack>
							<h4 className='mb-3'>Description</h4>
							<p className='card-text' style={{ textWrap: 'balance' }}>
								{props.description}
							</p>
						</Stack>
						<Stack>
							<h4 className='my-3'>Links</h4>
							<Stack direction='horizontal'>
								<Link
									to={props.app_url}
									target='_blank'
									rel='noreferrer'
									className='btn btn-sm projectBtn'
								>
									App <RiExternalLinkFill />
								</Link>
								<Link
									to={props.repo_url}
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
	)
}

function ProjectDetails() {
	const [bootcampProjects] = useOutletContext()
	const { data, error } = bootcampProjects
	const { id } = useParams()

	if (!data) return <h2>Loading...</h2>
	if (error) return <h2>{error}</h2>

	const projectDetails = data
		.filter(project => slugify(project.title) === id)
		.map(project => (
			<Details
				title={project.title}
				img={project.img}
				about={project.about}
				description={project.description}
				app_url={project.app_url}
				repo_url={project.repo_url}
				key={project.id}
			/>
		))

	return (
		<>
			{/* <Helmet>
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, React, Portfolio'
				/>
				<title>Leighton Grant's Portfolio | {id.replaceAll('-', ' ')}</title>
			</Helmet> */}
			<PageBanner pageTitle={id.replaceAll('-', ' ')} />
			<Breadcrumbs />
			{projectDetails}
		</>
	)
}

export default ProjectDetails
