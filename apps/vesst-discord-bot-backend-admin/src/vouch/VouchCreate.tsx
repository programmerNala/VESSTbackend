import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const VouchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
