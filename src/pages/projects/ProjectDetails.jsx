import { useParams } from 'react-router'
import PageBanner from '../../components/pagebanner/PageBanner'
import Breadcrumbs from '../../components/breadcrumb'
import Details from './Details'

function ProjectDetails() {
	const { id } = useParams()
	return (
		<>
			<PageBanner pageTitle={id.replaceAll('-', ' ')} />
			<Breadcrumbs />
			<Details />
		</>
	)
}

export default ProjectDetails
