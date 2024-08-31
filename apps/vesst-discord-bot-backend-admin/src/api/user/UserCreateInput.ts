import { InputJsonValue } from "../../types";
import { SecurityCreateNestedManyWithoutUsersInput } from "./SecurityCreateNestedManyWithoutUsersInput";
import { SlotCreateNestedManyWithoutUsersInput } from "./SlotCreateNestedManyWithoutUsersInput";
import { TicketCreateNestedManyWithoutUsersInput } from "./TicketCreateNestedManyWithoutUsersInput";
import { VouchCreateNestedManyWithoutUsersInput } from "./VouchCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  discordId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  reputation?: number | null;
  roles: InputJsonValue;
  securities?: SecurityCreateNestedManyWithoutUsersInput;
  slots?: SlotCreateNestedManyWithoutUsersInput;
  tickets?: TicketCreateNestedManyWithoutUsersInput;
  username: string;
  vouches?: VouchCreateNestedManyWithoutUsersInput;
};
