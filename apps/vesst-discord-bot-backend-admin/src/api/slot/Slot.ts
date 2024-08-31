import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Slot = {
  bid: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  metrics: JsonValue;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
