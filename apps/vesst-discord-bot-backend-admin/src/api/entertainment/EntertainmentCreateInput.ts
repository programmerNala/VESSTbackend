import { InputJsonValue } from "../../types";

export type EntertainmentCreateInput = {
  details?: InputJsonValue;
  name?: string | null;
  typeField?: "Option1" | null;
};
