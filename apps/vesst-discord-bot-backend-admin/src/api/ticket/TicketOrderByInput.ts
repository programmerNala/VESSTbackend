import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  dateClosed?: SortOrder;
  dateCreated?: SortOrder;
  id?: SortOrder;
  issue?: SortOrder;
  priority?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
