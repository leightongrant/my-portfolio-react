import Hero from '../../components/hero/Hero'
import Metadata from '../../metadata'
const Home = () => {
	return (
		<>
			<Metadata
				title='Home'
				description='A portfolio built using React to showcase some of the projects I have completed during my Frontend WebDeveloper Bootcamp.'
				keywords='Frontend Web Development, React, JavaScript, HTML, CSS, Responsive Design, User Experience (UX), Web Applications, Portfolio, Web Developer'
				canonical='https://leightongrant.me'
			/>
			<Hero />
		</>
	)
}

export default Home
