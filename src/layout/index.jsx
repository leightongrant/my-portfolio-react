import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { lazy } from 'react'
import Header from '../components/header'
// import { useToastStore } from '../lib/zustand'

const MainModal = lazy(() => import('../components/modals'))
const MainToast = lazy(() => import('../components/toasts'))

function MainLayout() {
	// const result = useToastStore(state => state.result)

	return (
		<>
			<Header />
			<div
				style={{
					display: 'grid',
					gridTemplateRows: '1fr auto',
					minHeight: '100dvh',
				}}
			>
				<div>
					<Outlet />
				</div>
				<Footer />
			</div>
			<MainModal />
			<MainToast />
		</>
	)
}

export default MainLayout
