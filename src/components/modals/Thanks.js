// Icons
import { BsArrowLeft } from 'react-icons/bs';

// Routes
import { LinkContainer } from 'react-router-bootstrap';

function Thanks(props) {
    return (
        <div
            className='thanks-page vh-100 d-flex align-items-center'
            style={{ backgroundColor: '#e8e7e6' }}
        >
            <div className='container d-flex align-items-center justify-content-around'>
                <div className='card shadow' style={{ width: '24rem' }}>
                    <div className='card-body'>
                        <h4 className='text-dark'>Thank You</h4>
                        <p>Your submission has been received!</p>
                        <LinkContainer to='/contact'>
                            <a href='/contact'>
                                <BsArrowLeft /> Back to our site
                            </a>
                        </LinkContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Thanks };
