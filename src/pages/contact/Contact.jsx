import PageBanner from '../../components/pagebanner/PageBanner'
import bg from '../../assets/contact-bg.webp'
import Container from 'react-bootstrap/Container'
import ContactForm from '../../components/forms/ContactForm'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Stack } from 'react-bootstrap'
import { GitHub, LinkedIn, Email, Phone } from '../../components/social'
import Breadcrumbs from '../../components/breadcrumb'
// import { Helmet } from 'react-helmet-async'

const Contact = () => {
	return (
		<>
			{/* <Helmet>
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, React, Portfolio'
				/>
				<link rel='canonical' href='https://leightongrant.me/contact' />
				<title>Leighton Grant's Portfolio | Contact</title>
			</Helmet> */}
			<PageBanner pageTitle='Contact Me' bannerBg={bg} />
			<Breadcrumbs />
			<main className='section-padding'>
				<Container>
					<Row className='row-cols-1 row-cols-lg-2 g-5'>
						<Col>
							<Container>
								<Stack gap={4}>
									<h3 className='fs-2'>Send a message</h3>
									<ContactForm />
								</Stack>
							</Container>
						</Col>
						<Col>
							<Container>
								<Stack gap={4} className='d-inline-flex'>
									<h3 className='fs-2'>Social & Professional Links</h3>
									<Stack gap={2}>
										<GitHub className='contact-icon fs-3 link-underline link-underline-opacity-0'>
											github.com/leightongrant
										</GitHub>
										<LinkedIn className='contact-icon fs-3 link-underline link-underline-opacity-0'>
											linkedin.com/in/leightongrant
										</LinkedIn>
										<Email className='contact-icon fs-3 link-underline link-underline-opacity-0'>
											dev@leightongrant.me
										</Email>
										<Phone className='contact-icon fs-3 link-underline link-underline-opacity-0'>
											+447886028826
										</Phone>
									</Stack>
								</Stack>
							</Container>
						</Col>
					</Row>
				</Container>
			</main>
		</>
	)
}

export default Contact
