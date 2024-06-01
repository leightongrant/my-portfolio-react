// React-admin
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from 'react-admin'

import { BootcampList } from './projects'

import { dataProvider } from '../../utils/dataProvider'
import Dashboard from './Dashboard'

export default function SiteAdmin() {
  return (
    <Admin dataProvider={dataProvider} basename="/admin" dashboard={Dashboard}>
      <Resource name="bootcamp" list={BootcampList} />
    </Admin>
  )
}
