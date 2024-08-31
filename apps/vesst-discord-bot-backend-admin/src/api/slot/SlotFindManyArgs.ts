import { SlotWhereInput } from "./SlotWhereInput";
import { SlotOrderByInput } from "./SlotOrderByInput";

export type SlotFindManyArgs = {
  where?: SlotWhereInput;
  orderBy?: Array<SlotOrderByInput>;
  skip?: number;
  take?: number;
};
