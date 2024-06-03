import { Layout } from 'react-admin'
function MyAppBar() {
  return <p>App Bar</p>
}
export const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />
