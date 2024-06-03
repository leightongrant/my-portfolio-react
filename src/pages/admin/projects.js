import {
  Datagrid,
  List,
  TextField,
  ImageField,
  Edit,
  SimpleForm,
  TextInput,
  useRecordContext,
  EditButton,
  ShowButton,
  DateField,
  Show,
  SimpleShowLayout,
  Create,
} from 'react-admin'

export const BootcampList = () => (
  <List title={'Bootcamp Projects'}>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <ImageField src="img" source="img" label="Image" />
      <TextField source="description" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
)

const EditTitle = () => {
  const record = useRecordContext()
  return <span>{record?.title}</span>
}

export const BootcampEdit = () => {
  return (
    <Edit title={<EditTitle />}>
      <SimpleForm>
        <TextInput source="title" fullWidth />
        <TextInput source="img" fullWidth />
        <TextInput source="about" fullWidth />
        <TextInput source="description" rows="10" multiline fullWidth />
        <TextInput source="app_url" fullWidth />
        <TextInput source="repo_url" fullWidth />
      </SimpleForm>
    </Edit>
  )
}

export const BootcampShow = () => (
  <Show>
    <SimpleShowLayout>
      <ImageField src="img" source="img" />
      <TextField source="title" />
      <TextField source="about" />
      <TextField source="description" />
      <TextField source="app_url" />
      <TextField source="repo_url" />
      <DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
)

export const BootcampCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" fullWidth />
      <TextInput source="img" fullWidth />
      <TextInput source="about" fullWidth />
      <TextInput source="description" rows="10" multiline fullWidth />
      <TextInput source="app_url" fullWidth />
      <TextInput source="repo_url" fullWidth />
    </SimpleForm>
  </Create>
)
