import { InputJsonValue } from "../../types";

export type EntertainmentUpdateInput = {
  details?: InputJsonValue;
  name?: string | null;
  typeField?: "Option1" | null;
};
