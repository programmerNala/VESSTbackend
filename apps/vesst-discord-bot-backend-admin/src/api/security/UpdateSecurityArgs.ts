import { SecurityWhereUniqueInput } from "./SecurityWhereUniqueInput";
import { SecurityUpdateInput } from "./SecurityUpdateInput";

export type UpdateSecurityArgs = {
  where: SecurityWhereUniqueInput;
  data: SecurityUpdateInput;
};
