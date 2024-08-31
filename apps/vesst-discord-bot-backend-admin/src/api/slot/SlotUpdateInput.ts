import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SlotUpdateInput = {
  bid?: number | null;
  description?: string | null;
  metrics?: InputJsonValue;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
