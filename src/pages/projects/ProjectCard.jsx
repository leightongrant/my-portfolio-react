import { RiExternalLinkFill } from 'react-icons/ri'
import { HiArrowNarrowLeft, HiLink } from 'react-icons/hi'
import slugify from '../../utils/slugify'
import { useOutletContext } from 'react-router'
import supabaseClient from '../../lib/supabase'
import { useNavigate } from 'react-router'

function ProjectCard(props) {
	const [bootcampProjects, setBootcampProjects] = useOutletContext()
	const navigate = useNavigate()

	async function handleDelete(id) {
		try {
			const res = await supabaseClient.from('bootcamp').select()
			if (res.status === 200) {
				setBootcampProjects(obj => ({ ...obj, status: res.status }))
				await supabaseClient.from('bootcamp').delete().eq('id', id)
			}
		} catch (error) {
			console.log(error)
		}
	}

	async function handleEdit(e, id) {
		setBootcampProjects(obj => ({ ...obj, selected: id, mode: 'edit' }))
	}

	return (
		<div className='col mb-4'>
			<div className='card shadow bg-light'>
				<img
					src={props.img}
					className='card-img-top'
					alt={props.title}
					width={259}
					height={194}
					style={{ objectFit: 'cover', objectPosition: '0 0' }}
				/>
				<div className='card-body'>
					<h6 className='card-title'>{props.title}</h6>
					<p className='card-text fs-6'>{props.about}</p>
				</div>
				<div className='card-footer'>
					<div className='d-flex justify-content-center gap-2'>
						<a
							href={props.app_url}
							target='_blank'
							rel='noreferrer'
							className='btn btn-sm projectBtn'
						>
							App <RiExternalLinkFill />
						</a>
						<a
							href={props.repo_url}
							target='_blank'
							rel='noreferrer'
							className='btn btn-sm projectBtn'
						>
							Repo <RiExternalLinkFill />
						</a>
						<button
							type='button'
							className='btn btn-sm projectBtn'
							onClick={e => {
								e.preventDefault()
								navigate(`/projects/${slugify(props.title)}`)
							}}
						>
							Details <HiLink />
						</button>
					</div>
					{bootcampProjects.session && (
						<div className='d-flex justify-content-center gap-2 mt-2'>
							<button
								type='button'
								className='btn btn-danger btn-sm'
								onClick={() => handleDelete(props.id)}
							>
								Delete Project
							</button>
							<button
								type='button'
								className='btn btn-warning btn-sm'
								data-bs-toggle='modal'
								data-bs-target='#AddProject'
								data-bs-type='edit'
								onClick={e => handleEdit(e, props.id)}
							>
								Edit Project
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

function Details(props) {
	const navigate = useNavigate()
	return (
		<div className='' style={{ maxWidth: '800px', height: 'auto' }}>
			<div>
				<img
					src={props.img}
					className='border p-0 img-fluid shadow rounded'
					alt={props.title}
				/>
			</div>
			<div className=''>
				<h4 className='my-3'>Description</h4>
				<p className='card-text'>{props.description}</p>

				<h4 className='my-3'>Links</h4>
				<a
					href={props.app_url}
					target='_blank'
					rel='noreferrer'
					className='btn btn-sm projectBtn'
				>
					App <RiExternalLinkFill />
				</a>
				<a
					href={props.repo_url}
					target='_blank'
					rel='noreferrer'
					className='btn btn-sm projectBtn ms-2'
				>
					Repo <RiExternalLinkFill />
				</a>

				<button
					type='button'
					className='btn btn-sm projectBtn ms-2'
					onClick={() => navigate('/projects')}
				>
					<HiArrowNarrowLeft /> Back to Projects
				</button>
			</div>
		</div>
	)
}

export { ProjectCard, Details }
