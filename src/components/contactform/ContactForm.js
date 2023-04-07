<<<<<<< HEAD
=======
// Hooks
import { useNavigate } from 'react-router-dom';

>>>>>>> main
// Styles
import './ContactForm.css';

// Icons
<<<<<<< HEAD
import { MdSend } from 'react-icons/md';

// Hooks
import { useNavigate } from 'react-router-dom';
=======
import { IoSend } from 'react-icons/io5';
>>>>>>> main

const ContactForm = () => {
    const navigate = useNavigate();

<<<<<<< HEAD
    function handleSubmit(e) {
=======
    const handleSubmit = (e) => {
>>>>>>> main
        e.preventDefault();

        const myForm = e.target;
        const formData = new FormData(myForm);
        const formDataString = new URLSearchParams(formData).toString();

<<<<<<< HEAD
        fetch('/', {
=======
        fetch('https://www.formbackend.com/f/75e66f7945b56004', {
>>>>>>> main
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formDataString,
        })
            .then(() => {
                navigate('/thanks');
            })
            .catch((error) => alert(error));
<<<<<<< HEAD
    }
=======
    };
>>>>>>> main

    return (
        <div className='container my-5 border p-5 rounded contact-form shadow gradient transparent'>
            <h5 className='mb-3'>Contact Form</h5>
<<<<<<< HEAD
            <form
                name='contact'
                method='POST'
                data-netlify='true'
                onSubmit={handleSubmit}
            >
                <input type='hidden' name='form-name' value='contact' />
=======
            <form onSubmit={handleSubmit}>
>>>>>>> main
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>
                        Name
                    </label>
                    <input
                        className='form-control'
                        type='text'
                        id='name'
                        name='name'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='form-control'
                        type='email'
                        id='email'
                        name='email'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='message'>
                        Message
                    </label>
                    <textarea
                        className='form-control'
                        id='message'
                        name='message'
                        required
                    />
                </div>
                <button
                    className='btn form-btn rounded-pill px-4 my-4'
                    type='submit'
                >
<<<<<<< HEAD
                    Send Message <MdSend />
=======
                    Send Message <IoSend />
>>>>>>> main
                </button>
            </form>
        </div>
    );
};
export default ContactForm;
