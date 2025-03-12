import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useEffect, useRef } from 'react'
import supabaseClient from '../../lib/supabase'

export default function Login({ bootcampProjects }) {
	const modalRef = useRef()

	useEffect(() => {
		// console.log(bootcampProjects.session)
	}, [bootcampProjects.session])
	return (
		<div
			ref={modalRef}
			className='modal fade'
			id='loginModal'
			tabIndex='-1'
			aria-labelledby='loginModalLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h2 className='modal-title fs-5' id='loginModalLabel'>
							Login
						</h2>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>
						<Auth
							supabaseClient={supabaseClient}
							showLinks={false}
							localization={{
								variables: {
									sign_in: {
										email_label: '',
										password_label: '',
										email_input_placeholder: 'EMAIL',
										password_input_placeholder: 'PASSWORD',
									},
								},
							}}
							appearance={{
								theme: ThemeSupa,
								variables: {
									default: {
										colors: {
											brand: '#292b3a',
											brandAccent: '#363336',
										},
									},
								},
							}}
							providers={[]}
							theme='light'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
