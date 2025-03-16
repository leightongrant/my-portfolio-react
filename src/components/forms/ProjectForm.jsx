import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useState, useEffect } from 'react'
import supabaseClient from '../../lib/supabase'
import { useModalStore } from '../../lib/zustand'
import { useToastStore } from '../../lib/zustand'

let formDataObj = {
	title: '',
	about: '',
	app_url: '',
	repo_url: '',
	img: '',
	description: '',
	updated_at: Date.now(),
}

const ProjectForm = () => {
	const [formData, setFormData] = useState(formDataObj)

	const closeModal = useModalStore(state => state.closeModal)
	const showToast = useToastStore(state => state.showToast)
	const setResult = useToastStore(state => state.setResult)
	const projectId = useModalStore(state => state.projectId)
	const mode = useModalStore(state => state.mode)

	useEffect(() => {
		if (mode === 'editProject') {
			getCurrentProject(projectId)
		}
	}, [mode])

	function handleChange(e) {
		const { value, id } = e.target
		if (id === 'title') {
			setFormData(stateObj => ({ ...stateObj, title: value }))
		}
		if (id === 'about') {
			setFormData(stateObj => ({ ...stateObj, about: value }))
		}
		if (id === 'app-url') {
			setFormData(stateObj => ({ ...stateObj, app_url: value }))
		}
		if (id === 'repo-url') {
			setFormData(stateObj => ({ ...stateObj, repo_url: value }))
		}
		if (id === 'screenshot-url') {
			setFormData(stateObj => ({ ...stateObj, img: value }))
		}
		if (id === 'description') {
			setFormData(stateObj => ({ ...stateObj, description: value }))
		}
	}

	async function getCurrentProject(id) {
		const res = await supabaseClient.from('bootcamp').select().eq('id', id)
		if (res.status === 200) {
			const { title, about, app_url, repo_url, img, description } = res.data[0]
			setFormData(obj => ({
				...obj,
				title: title,
				about: about,
				app_url: app_url,
				repo_url: repo_url,
				img: img,
				description: description,
			}))
		}
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const res = await supabaseClient.from('bootcamp').select()
		if (res.status === 200) {
			if (mode === 'addProject') {
				const result = await supabaseClient.from('bootcamp').insert(formData)
				if (result.status === 201) {
					setResult({
						message: `Project added successfully`,
						status: 'success',
					})
					showToast()
					closeModal()
				} else {
					setResult({ message: result.error.message, status: result.status })
					showToast()
				}
				return
			}

			const result = await supabaseClient
				.from('bootcamp')
				.update(formData)
				.eq('id', projectId)

			if (result.status === 204) {
				setResult({
					message: `Project updated successfully`,
					status: 'success',
				})
				showToast()
				closeModal()
			} else {
				setResult({ message: result.error.message, status: result.status })
				showToast()
			}
			return
		}

		setResult({ message: res.error.message, status: res.status })
		showToast()
	}

	return (
		<Form className='fs-6' onSubmit={handleSubmit}>
			<FloatingLabel className='mb-3' label='Title' controlId='title'>
				<Form.Control
					type='text'
					className='form-control'
					placeholder='Project title'
					required
					value={formData.title}
					onChange={handleChange}
				/>
			</FloatingLabel>

			<FloatingLabel className='mb-3' label='About' controlId='about'>
				<Form.Control
					type='text'
					className='form-control '
					placeholder='About project'
					required
					value={formData.about}
					onChange={handleChange}
				/>
			</FloatingLabel>
			<FloatingLabel className='mb-3' label='App URL' controlId='app-url'>
				<Form.Control
					type='url'
					className='form-control'
					placeholder='App URL'
					required
					value={formData.app_url}
					onChange={handleChange}
				/>
			</FloatingLabel>
			<FloatingLabel className='mb-3' label='Repo URL' controlId='repo-url'>
				<Form.Control
					type='url'
					className='form-control'
					placeholder='Repo URL'
					required
					value={formData.repo_url}
					onChange={handleChange}
				/>
			</FloatingLabel>
			<FloatingLabel
				className='mb-3'
				label='Screenshot URL'
				controlId='screenshot-url'
			>
				<Form.Control
					type='url'
					className='form-control'
					placeholder='Screenshot URL'
					required
					value={formData.img}
					onChange={handleChange}
				/>
			</FloatingLabel>
			<FloatingLabel
				className='mb-3'
				label='Description'
				controlId='description'
			>
				<Form.Control
					as='textarea'
					className='form-control'
					placeholder='Enter description'
					required
					style={{ minHeight: '150px' }}
					rows={10}
					value={formData.description}
					onChange={handleChange}
				/>
			</FloatingLabel>

			<Button
				type='submit'
				className='add-project-btn float-end'
				data-bs-dismiss='modal'
			>
				{mode === 'addProject' ? 'Add project' : 'Update Project'}
			</Button>
		</Form>
	)
}

export default ProjectForm
