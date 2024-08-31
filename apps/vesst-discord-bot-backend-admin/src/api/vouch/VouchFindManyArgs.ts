import { VouchWhereInput } from "./VouchWhereInput";
import { VouchOrderByInput } from "./VouchOrderByInput";

export type VouchFindManyArgs = {
  where?: VouchWhereInput;
  orderBy?: Array<VouchOrderByInput>;
  skip?: number;
  take?: number;
};
