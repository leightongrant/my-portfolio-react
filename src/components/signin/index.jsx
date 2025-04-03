import Stack from 'react-bootstrap/Stack'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import supabaseClient from '../../lib/supabase'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { useModalStore } from '../../lib/zustand'
import { useAuthStore } from '../../lib/zustand'
import { BiSolidUser } from 'react-icons/bi'

const SignIn = () => {
	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)
	const session = useAuthStore(state => state.session)

	if (session) {
		console.log(session)
	}

	async function signOut() {
		await supabaseClient.auth.signOut()
	}

	async function signIn() {
		setMode('login')
		showModal()
	}

	const renderTooltip = props => (
		<Tooltip id='tooltip' {...props}>
			{session ? 'Logout' : 'Login'}
		</Tooltip>
	)

	if (session) {
		return (
			<OverlayTrigger
				placement='bottom'
				delay={{ show: 250, hide: 400 }}
				overlay={renderTooltip}
			>
				<Stack className='align-items-right justify-content-center'>
					<IconContext.Provider value={{ className: 'logoutBtn fs-3 ' }}>
						{/* <FaSignOutAlt onClick={signOut} /> */}
						<BiSolidUser onClick={signOut} />
					</IconContext.Provider>
				</Stack>
			</OverlayTrigger>
		)
	}

	return (
		<OverlayTrigger
			placement='bottom'
			delay={{ show: 250, hide: 400 }}
			overlay={renderTooltip}
		>
			<Stack className='align-items-right justify-content-center'>
				<IconContext.Provider value={{ className: 'loginBtn fs-3' }}>
					<FaSignInAlt onClick={signIn} />
				</IconContext.Provider>
			</Stack>
		</OverlayTrigger>
	)
}

export default SignIn
