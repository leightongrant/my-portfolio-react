import Stack from 'react-bootstrap/Stack'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useEffect } from 'react'
import { IconContext } from 'react-icons'
import supabaseClient from '../../lib/supabase'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const SignIn = ({ bootcampProjects }) => {
	useEffect(() => {
		const authBtn = document.querySelector('.supabase-auth-ui_ui-button')
		authBtn.setAttribute('data-bs-dismiss', 'modal')
	}, [])

	async function signOut() {
		try {
			const { error } = await supabaseClient.auth.signOut()
			if (error) console.log(error)
		} catch (error) {
			console.log(error)
		}
	}

	function handleClick() {
		const authBtn = document.querySelector('.supabase-auth-ui_ui-button')
		authBtn.setAttribute('data-bs-dismiss', 'modal')
	}

	const renderTooltip = props => (
		<Tooltip id='tooltip' {...props}>
			{bootcampProjects.session ? 'Logout' : 'Login'}
		</Tooltip>
	)

	if (bootcampProjects.session) {
		return (
			<OverlayTrigger
				placement='bottom'
				delay={{ show: 250, hide: 400 }}
				overlay={renderTooltip}
			>
				<Stack className='align-items-right justify-content-center'>
					<IconContext.Provider value={{ className: 'logoutBtn fs-3 ' }}>
						<FaSignOutAlt onClick={signOut} />
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
					<FaSignInAlt
						data-bs-toggle='modal'
						data-bs-target='#loginModal'
						onClick={handleClick}
					/>
				</IconContext.Provider>
			</Stack>
		</OverlayTrigger>
	)
}

export default SignIn
