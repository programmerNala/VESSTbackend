import { SortOrder } from "../../util/SortOrder";

export type VouchOrderByInput = {
  badge?: SortOrder;
  category?: SortOrder;
  challenge?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  vouchText?: SortOrder;
};
