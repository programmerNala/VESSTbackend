import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SecurityUpdateInput = {
  action?: string | null;
  date?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
