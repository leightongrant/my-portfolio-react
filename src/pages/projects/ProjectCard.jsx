import { RiExternalLinkFill } from 'react-icons/ri'
import { HiLink } from 'react-icons/hi'
import slugify from '../../utils/slugify'
import { useOutletContext } from 'react-router'
import supabaseClient from '../../lib/supabase'
import { useNavigate } from 'react-router'
import { useModalStore } from '../../lib/zustand'
import { useToastStore } from '../../lib/zustand'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router'
import { RiDeleteBinFill, RiEdit2Fill } from 'react-icons/ri'

function ProjectCard(props) {
	const [bootcampProjects] = useOutletContext()
	const navigate = useNavigate()

	const showToast = useToastStore(state => state.showToast)
	const setResult = useToastStore(state => state.setResult)
	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)
	const setProjectId = useModalStore(state => state.setProjectId)

	async function handleDelete(id) {
		const res = await supabaseClient.from('bootcamp').select()
		if (res.status === 200) {
			await supabaseClient.from('bootcamp').delete().eq('id', id)
			setResult({
				message: `Project deleted successfully`,
				status: 'success',
			})
			showToast()
			return
		}
		setResult({ message: res.error.message, status: res.status })
		showToast()
	}

	async function handleEdit(_, id) {
		setMode('editProject')
		setProjectId(id)
		showModal()
	}

	return (
		<Col className='mb-4'>
			<Card className='shadow bg-light'>
				<Card.Img
					src={props.img}
					className='card-img-top'
					alt={props.title}
					width={259}
					height={194}
					style={{ objectFit: 'cover', objectPosition: '0 0' }}
				/>
				<Card.Body>
					<Card.Title as={'h6'}>{props.title}</Card.Title>
					<Card.Text className='card-text fs-6'>{props.about}</Card.Text>
				</Card.Body>
				<Card.Footer className='card-footer py-3'>
					<Stack
						direction='horizontal'
						gap={2}
						className='justify-content-center'
					>
						<Link
							to={props.app_url}
							target='_blank'
							rel='noreferrer'
							className='btn btn-sm projectBtn flex-grow-1'
						>
							App <RiExternalLinkFill />
						</Link>
						<Link
							to={props.repo_url}
							target='_blank'
							rel='noreferrer'
							className='btn btn-sm projectBtn flex-grow-1'
						>
							Repo <RiExternalLinkFill />
						</Link>
						<Button
							type='button'
							className='btn btn-sm projectBtn flex-grow-1'
							onClick={e => {
								e.preventDefault()
								navigate(`/projects/${slugify(props.title)}`)
							}}
						>
							Details <HiLink />
						</Button>
					</Stack>
					{bootcampProjects.session && (
						<Stack className='justify-content-center mt-2' gap={2}>
							<Button
								type='button'
								className='btn btn-danger btn-sm'
								onClick={() => handleDelete(props.id)}
							>
								Delete Project <RiDeleteBinFill />
							</Button>
							<Button
								type='button'
								className='btn btn-warning btn-sm'
								onClick={e => handleEdit(e, props.id)}
							>
								Edit Project <RiEdit2Fill />
							</Button>
						</Stack>
					)}
				</Card.Footer>
			</Card>
		</Col>
	)
}

export { ProjectCard }
