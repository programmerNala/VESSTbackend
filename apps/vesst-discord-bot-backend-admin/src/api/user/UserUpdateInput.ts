import { InputJsonValue } from "../../types";
import { SecurityUpdateManyWithoutUsersInput } from "./SecurityUpdateManyWithoutUsersInput";
import { SlotUpdateManyWithoutUsersInput } from "./SlotUpdateManyWithoutUsersInput";
import { TicketUpdateManyWithoutUsersInput } from "./TicketUpdateManyWithoutUsersInput";
import { VouchUpdateManyWithoutUsersInput } from "./VouchUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  discordId?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  reputation?: number | null;
  roles?: InputJsonValue;
  securities?: SecurityUpdateManyWithoutUsersInput;
  slots?: SlotUpdateManyWithoutUsersInput;
  tickets?: TicketUpdateManyWithoutUsersInput;
  username?: string;
  vouches?: VouchUpdateManyWithoutUsersInput;
};
