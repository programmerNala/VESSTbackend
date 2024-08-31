import { User } from "../user/User";

export type Security = {
  action: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
