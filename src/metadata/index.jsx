const Metadata = ({ title, description, keywords, canonical }) => (
	<>
		<title>{`Leighton Grant's Portfolio | ${title}`}</title>
		<link rel='canonical' href={canonical} />
		<meta name='description' content={description} />
		<meta name='keywords' content={keywords} />
	</>
)

export default Metadata
