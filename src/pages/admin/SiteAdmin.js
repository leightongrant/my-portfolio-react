// React-admin
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  defaultTheme,
  radiantLightTheme,
  radiantDarkTheme,
  houseLightTheme,
  houseDarkTheme,
  LoadingPage,
} from 'react-admin'

import {
  BootcampList,
  BootcampEdit,
  BootcampShow,
  BootcampCreate,
} from './projects'
import { dataProvider } from '../../utils/dataProvider'
import { authProvider } from '../../utils/authProvider'
import Dashboard from './Dashboard'
import { LoginPage } from 'ra-supabase-ui-materialui'
import LabelIcon from '@mui/icons-material/Label'
import EngineeringIcon from '@mui/icons-material/Engineering'

export default function SiteAdmin() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
      basename="/admin"
      dashboard={Dashboard}
      loading={LoadingPage}
      theme={houseLightTheme}
      darkTheme={houseDarkTheme}>
      <Resource
        name="bootcamp"
        list={BootcampList}
        edit={BootcampEdit}
        show={BootcampShow}
        icon={EngineeringIcon}
        create={BootcampCreate}
      />
    </Admin>
  )
}
