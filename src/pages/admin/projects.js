import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin'

export const BootcampList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <TextField source="about" />
    </Datagrid>
  </List>
)
