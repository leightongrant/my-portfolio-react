import './Contact.css'
import {
	BsEnvelopeFill,
	BsPhoneFill,
	BsFilePdfFill,
	BsDownload,
} from 'react-icons/bs'
import ContactForm from '../../components/contactform/ContactForm'
import PageBanner from '../../components/pagebanner/PageBanner'
import Cv from '../../assets/LeightonGrant.pdf'
import bg from '../../assets/contact-bg.webp'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
	return (
		<>
			<Helmet>
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, React, Portfolio'
				/>
				<link rel='canonical' href='https://leightongrant.me/contact' />
				<title>Leighton Grant's Portfolio | Contact</title>
			</Helmet>
			<PageBanner pageTitle='Contact Me' bannerBg={bg} />
			<ContactForm />
			<section id='contact-details' className='padding-lg'>
				<div data-aos='fade-in'>
					<h2 className='section-title'>Other Contact Info</h2>
					<div className='container my-5 contact-info'>
						<div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3  d-flex justify-content-between'>
							<div className='col'>
								<div className='card py-3 shadow'>
									<div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
										<span className='fs-4'>
											<a
												href='mailto:oneal.grant@outlook.com'
												style={{ textDecoration: 'none' }}
											>
												<BsEnvelopeFill />
											</a>
										</span>
										<h6 className='card-title'>EMAIL</h6>
										<div className='border border-top-3 border-secondary w-50'></div>
										<p className='card-text'>
											<a
												href='mailto:dev@leightongrant.me'
												style={{ textDecoration: 'none' }}
											>
												dev@leightongrant.me
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className='card py-3 shadow'>
									<div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
										<span className='fs-4'>
											<a
												href='tel:07886028826'
												style={{ textDecoration: 'none' }}
											>
												<BsPhoneFill />
											</a>
										</span>
										<h6 className='card-title'>PHONE</h6>
										<div className='border border-top-3 border-secondary w-50'></div>
										<p className='card-text'>
											<a
												href='tel:07886028826'
												style={{ textDecoration: 'none' }}
											>
												+447886028826
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className='card py-3 shadow'>
									<div className='card-body d-flex justify-content-center flex-column align-items-center gap-4'>
										<span className='fs-4'>
											<a href={Cv} download style={{ textDecoration: 'none' }}>
												<BsFilePdfFill />
											</a>
										</span>
										<h6 className='card-title'>CV</h6>
										<div className='border border-top-3 border-secondary w-50'></div>
										<p className='card-text'>
											<a href={Cv} download style={{ textDecoration: 'none' }}>
												<BsDownload />
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-center gap-3">
                <span className="social-buttons">
                  <LinkedIn />
                </span>
                <span className="social-buttons">
                  <GitHub />
                </span>
              </div>
            </div>
          </div> */}
				</div>
			</section>
		</>
	)
}

export default Contact
