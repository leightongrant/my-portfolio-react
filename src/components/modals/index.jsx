import Modal from 'react-bootstrap/Modal'
import { useModalStore } from '../../lib/zustand'
import ProjectForm from '../forms/ProjectForm'
import SignInForm from '../forms/SignInForm'

function MainModal() {
	const show = useModalStore(state => state.show)
	const closeModal = useModalStore(state => state.closeModal)
	const mode = useModalStore(state => state.mode)

	return (
		<Modal show={show} onHide={closeModal} centered>
			<Modal.Header closeButton>
				<Modal.Title as={'h6'}>
					{mode === 'addProject' && 'Add Project'}
					{mode === 'editProject' && 'Edit Project'}
					{mode === 'login' && 'Login'}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className='bg-light'>
				{mode === 'addProject' && <ProjectForm />}
				{mode === 'editProject' && <ProjectForm />}
				{mode === 'login' && <SignInForm />}
			</Modal.Body>
		</Modal>
	)
}

export default MainModal
