import { EntertainmentWhereInput } from "./EntertainmentWhereInput";
import { EntertainmentOrderByInput } from "./EntertainmentOrderByInput";

export type EntertainmentFindManyArgs = {
  where?: EntertainmentWhereInput;
  orderBy?: Array<EntertainmentOrderByInput>;
  skip?: number;
  take?: number;
};
