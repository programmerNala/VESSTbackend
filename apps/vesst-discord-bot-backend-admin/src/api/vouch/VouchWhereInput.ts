import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VouchWhereInput = {
  badge?: StringNullableFilter;
  category?: StringNullableFilter;
  challenge?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  vouchText?: StringNullableFilter;
};
