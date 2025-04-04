import Stack from 'react-bootstrap/Stack'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import supabaseClient from '../../lib/supabase'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { useModalStore } from '../../lib/zustand'
import { useAuthStore } from '../../lib/zustand'
import { BiSolidUser } from 'react-icons/bi'
import Dropdown from 'react-bootstrap/Dropdown'

function UserMenu({ children, session }) {
	let {
		user: { email },
	} = session
	return (
		<Dropdown align={{ md: 'end' }}>
			<Dropdown.Toggle variant='transparent'>{children}</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item>User: {email}</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item onClick={() => supabaseClient.auth.signOut()}>
					<IconContext.Provider value={{ className: 'logoutBtn fs-3 ' }}>
						<FaSignOutAlt /> Sign Out
					</IconContext.Provider>
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}

const SignIn = () => {
	const showModal = useModalStore(state => state.showModal)
	const setMode = useModalStore(state => state.setMode)
	const session = useAuthStore(state => state.session)
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
			<Stack className='align-items-right justify-content-center'>
				<UserMenu session={session}>
					<IconContext.Provider value={{ className: 'logoutBtn fs-3 ' }}>
						<BiSolidUser />
					</IconContext.Provider>
				</UserMenu>
			</Stack>
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
