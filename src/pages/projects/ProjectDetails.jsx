import { useParams } from 'react-router'
import PageBanner from '../../components/pagebanner/PageBanner'
import Breadcrumbs from '../../components/breadcrumb'
import { lazy, Suspense } from 'react'
import { Loading } from '../../components/placeholders'

const Details = lazy(() => import('./Details'))

function ProjectDetails() {
	const { id } = useParams()
	return (
		<>
			<PageBanner pageTitle={id.replaceAll('-', ' ')} />
			<Breadcrumbs />

			<Suspense fallback={<Loading />}>
				<Details />
			</Suspense>
		</>
	)
}

export default ProjectDetails
