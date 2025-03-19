import profile from '../../assets/profile_thumb.webp'
import PageBanner from '../../components/pagebanner/PageBanner'
import bg from '../../assets/about-bg.webp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import keySkills from '../../../src/assets/key-skills.webp'
import ListGroup from 'react-bootstrap/ListGroup'
// import { Helmet } from 'react-helmet-async'

function About() {
	return (
		<>
			{/* <Helmet>
				<meta
					name='keywords'
					content='HTML, CSS, JavaScript, React, Portfolio'
				/>
				<link rel='canonical' href='https://leightongrant.me/about' />
				<title>Leighton Grant's Portfolio | About</title>
			</Helmet> */}
			<PageBanner pageTitle='About me' bannerBg={bg} />
			<main className='about-page section-padding' id='about-me'>
				<Container>
					<h2 className='text-center title-padding'>Frontend Web Developer</h2>
					<Row className='row-cols-1 row-cols-lg-2 g-5'>
						<Col>
							<Image
								className='img-fluid rounded'
								src={profile}
								alt='Leighton Grant Frontend Web Developer'
								width={800}
								height={800}
							/>
						</Col>

						<Col className=' about-info'>
							<p className='lead'>
								Hi, my name is Leighton Grant and I am a qualified front-end
								developer residing in the UK. I am excited to join a company
								that has an innovative and supportive spirit.
							</p>
							<p>
								Trained through the Harvard and MIT-created course provider,
								EdX, I have acquired a range of skills that will set the tone
								for my career in front-end development.
							</p>
							<p>
								Prior to acquiring my professional qualification, I had
								undertaken personal coding projects for over 5 years in my spare
								time. So, why coding? Making the decision to switch careers came
								because I relocated from London to Lincolnshire, having
								previously worked as an electronics technician for many years.
							</p>
							<p>
								Solving problems using code is a great passion of mine and armed
								with a cup of coffee, I am keen to delve into the realm of
								professional problem-solving. Supplied with the eagerness to
								pursue front-end development professionally, I am ready for the
								next chapter in my career.
							</p>
						</Col>
					</Row>
				</Container>
			</main>

			<section
				id='key-skills'
				className='section-padding'
				style={{ backgroundColor: 'var(--lg-light)' }}
			>
				<Container>
					<h2 className='text-center title-padding'>Key Skills</h2>
					<Row className='row-cols-1 row-cols-lg-2 g-5'>
						<Col>
							<ListGroup>
								<ListGroup.Item
									active
									style={{
										fontWeight: 'bold',
										backgroundColor: 'var(--lg-dark)',
										textAlign: 'center',
										border: 'none',
									}}
									as={'h3'}
									className='fs-4'
								>
									My Skills
								</ListGroup.Item>
								<ListGroup.Item>
									Proficient in HTML, CSS, JavaScript, TypeScript, React, Nodejs
								</ListGroup.Item>
								<ListGroup.Item>
									Strong understanding of responsive web design techniques
								</ListGroup.Item>
								<ListGroup.Item>
									An understanding of version control systems such as Git/GitHub
								</ListGroup.Item>
								<ListGroup.Item>
									Knowledge of performance testing frameworks including Vite and
									Jest
								</ListGroup.Item>
								<ListGroup.Item>
									Experience working with APIs, including integrating and
									utilising them effectively in projects.
								</ListGroup.Item>
								<ListGroup.Item>
									Experience with browser-based debugging and performance
									testing software
								</ListGroup.Item>
								<ListGroup.Item>
									Excellent problem-solving skills
								</ListGroup.Item>
								<ListGroup.Item>
									Strong verbal and written communication skills
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col>
							<Image
								src={keySkills}
								alt='Leighton Grant Frontend Web Developer'
								width={800}
								height={800}
								className='img-fluid rounded'
							/>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}

export default About
