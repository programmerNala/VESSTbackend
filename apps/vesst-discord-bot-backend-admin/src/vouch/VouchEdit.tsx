import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const VouchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="badge" source="badge" />
        <TextInput label="category" source="category" />
        <TextInput label="challenge" source="challenge" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="vouchText" multiline source="vouchText" />
      </SimpleForm>
    </Edit>
  );
};
