import { JsonValue } from "type-fest";

export type Entertainment = {
  createdAt: Date;
  details: JsonValue;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
