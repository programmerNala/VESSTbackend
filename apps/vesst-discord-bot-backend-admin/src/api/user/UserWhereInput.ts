import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SecurityListRelationFilter } from "../security/SecurityListRelationFilter";
import { SlotListRelationFilter } from "../slot/SlotListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";
import { VouchListRelationFilter } from "../vouch/VouchListRelationFilter";

export type UserWhereInput = {
  discordId?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  reputation?: IntNullableFilter;
  securities?: SecurityListRelationFilter;
  slots?: SlotListRelationFilter;
  tickets?: TicketListRelationFilter;
  username?: StringFilter;
  vouches?: VouchListRelationFilter;
};
