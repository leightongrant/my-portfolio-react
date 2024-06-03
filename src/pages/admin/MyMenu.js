import { IconMenu } from '@react-admin/ra-navigation'

import DashboardIcon from '@mui/icons-material/Dashboard'
import MusicIcon from '@mui/icons-material/MusicNote'
import PeopleIcon from '@mui/icons-material/People'

const MyMenu = () => (
  <IconMenu variant="categories">
    <IconMenu.Item
      name="dashboard"
      to="/"
      label="Dashboard"
      icon={<DashboardIcon />}
    />
    <IconMenu.Item
      name="songs"
      to="/songs"
      label="Songs"
      icon={<MusicIcon />}
    />
    {/* The empty filter is required to avoid falling back to the previously set filter */}
    <IconMenu.Item
      name="artists"
      to="/artists"
      label="Artists"
      icon={<PeopleIcon />}
    />
  </IconMenu>
)
