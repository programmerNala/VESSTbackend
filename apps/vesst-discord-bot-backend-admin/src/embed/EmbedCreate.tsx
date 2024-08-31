import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmbedCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="footer" source="footer" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
