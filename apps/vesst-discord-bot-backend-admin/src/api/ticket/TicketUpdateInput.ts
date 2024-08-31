import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketUpdateInput = {
  dateClosed?: Date | null;
  dateCreated?: Date | null;
  issue?: string | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
