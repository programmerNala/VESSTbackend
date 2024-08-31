import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmbedEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="footer" source="footer" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
