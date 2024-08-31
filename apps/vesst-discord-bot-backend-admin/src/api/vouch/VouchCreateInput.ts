import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VouchCreateInput = {
  badge?: string | null;
  category?: string | null;
  challenge?: string | null;
  date?: Date | null;
  user?: UserWhereUniqueInput | null;
  vouchText?: string | null;
};
