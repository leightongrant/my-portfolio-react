import { useNavigate } from 'react-router'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
const ContactForm = () => {
	const navigate = useNavigate()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

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

	const handleChange = e => {
		const { name, value } = e.target
		if (name === 'name') {
			setName(value)
		} else if (name === 'email') {
			setEmail(value)
		} else if (name === 'message') {
			setMessage(value)
		}
	}

	return (
		<Form name='contact' method='POST' onSubmit={handleSubmit}>
			<Stack gap={4}>
				<input type='hidden' name='form-name' value='contact' />
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter your name'
						name='name'
						pattern='[A-Za-z ]*'
						required
						className='form-control'
						value={name}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='email'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter your email'
						name='email'
						pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'
						required
						className='form-control'
						value={email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='message'>
					<Form.Label>Message</Form.Label>
					<Form.Control
						as='textarea'
						placeholder='Enter your message'
						name='message'
						rows={5}
						pattern='^(?!\s*$).+'
						required
						className='form-control'
						value={message}
						onChange={handleChange}
					/>
				</Form.Group>
				<Button
					className='btn rounded border-0'
					style={{ backgroundColor: 'var(--lg-dark)' }}
					type='submit'
				>
					Send Message
				</Button>
			</Stack>
		</Form>
	)
}
export default ContactForm
