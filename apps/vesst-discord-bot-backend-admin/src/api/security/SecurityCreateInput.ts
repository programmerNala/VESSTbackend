import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SecurityCreateInput = {
  action?: string | null;
  date?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
