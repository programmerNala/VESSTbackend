import { SecurityWhereInput } from "./SecurityWhereInput";
import { SecurityOrderByInput } from "./SecurityOrderByInput";

export type SecurityFindManyArgs = {
  where?: SecurityWhereInput;
  orderBy?: Array<SecurityOrderByInput>;
  skip?: number;
  take?: number;
};
