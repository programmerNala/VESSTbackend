import { EmbedWhereInput } from "./EmbedWhereInput";
import { EmbedOrderByInput } from "./EmbedOrderByInput";

export type EmbedFindManyArgs = {
  where?: EmbedWhereInput;
  orderBy?: Array<EmbedOrderByInput>;
  skip?: number;
  take?: number;
};
