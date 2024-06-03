import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Title } from 'react-admin'
const Dashboard = () => (
  <Card>
    <Title title="Welcome to the administration" />
    <CardContent>
      <h1 className="text-center">Welcome to the Dashboard</h1>
      <p className="text-center">Lorem ipsum sic dolor amet...</p>
    </CardContent>
  </Card>
)

export default Dashboard
