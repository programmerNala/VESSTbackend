import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmbedWhereInput = {
  color?: StringNullableFilter;
  dateCreated?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  footer?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
