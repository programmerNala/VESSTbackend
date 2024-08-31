import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SecurityWhereInput = {
  action?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
