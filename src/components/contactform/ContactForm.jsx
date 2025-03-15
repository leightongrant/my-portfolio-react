import { useNavigate } from 'react-router'

const ContactForm = () => {
	const navigate = useNavigate()

	function handleSubmit(e) {
		e.preventDefault()

		const myForm = e.target
		const formData = new FormData(myForm)
		const formDataString = new URLSearchParams(formData).toString()

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: formDataString,
		})
			.then(() => {
				navigate('/thanks')
			})
			.catch(error => alert(error))
	}

	return (
		<main className='container contact-form padding-lg'>
			<div>
				<h2 className='section-title'>Get in touch</h2>
				<div
					className='bg-light p-3 p-md-5 border rounded'
					style={{ maxWidth: 800, margin: 'auto' }}
				>
					<h3 className='mb-5  fs-2'>Send a message</h3>
					<form
						name='contact'
						method='POST'
						onSubmit={handleSubmit}
						className='w-100'
					>
						<input type='hidden' name='form-name' value='contact' />
						<div className='mb-3'>
							<label className='form-label' htmlFor='name'>
								Name
							</label>
							<input
								className='form-control py-3'
								type='text'
								name='name'
								pattern='[A-Za-z ]*'
								required
							/>
						</div>
						<div className='mb-3'>
							<label className='form-label' htmlFor='email'>
								Email
							</label>
							<input
								className='form-control py-3'
								type='email'
								name='email'
								pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
								required
							/>
						</div>
						<div className='mb-3'>
							<label className='form-label' htmlFor='message'>
								Message
							</label>
							<textarea
								className='form-control'
								name='message'
								rows={10}
								required
							></textarea>
						</div>
						<button
							className='btn form-btn rounded px-5 py-3 my-4 w-100 '
							type='submit'
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</main>
	)
}
export default ContactForm
