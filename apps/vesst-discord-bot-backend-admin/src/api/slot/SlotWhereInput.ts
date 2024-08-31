import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SlotWhereInput = {
  bid?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  metrics?: JsonFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
