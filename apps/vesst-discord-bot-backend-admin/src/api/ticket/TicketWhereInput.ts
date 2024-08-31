import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketWhereInput = {
  dateClosed?: DateTimeNullableFilter;
  dateCreated?: DateTimeNullableFilter;
  id?: StringFilter;
  issue?: StringNullableFilter;
  priority?: "Option1";
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
