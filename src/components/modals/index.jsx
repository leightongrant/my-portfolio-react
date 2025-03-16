import Modal from 'react-bootstrap/Modal'
import { useModalStore } from '../../lib/zustand'
import ProjectForm from '../forms/ProjectForm'

function MainModal() {
	const { show, closeModal, mode } = useModalStore()

	return (
		<>
			<Modal show={show} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title as={'h6'}>
						{mode === 'addProject' && 'Add Project'}
						{mode === 'editProject' && 'Edit Project'}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='bg-light'>
					{mode === 'addProject' && <ProjectForm />}
					{mode === 'editProject' && <ProjectForm />}
				</Modal.Body>
			</Modal>
		</>
	)
}

export default MainModal
