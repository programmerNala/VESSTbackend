import { User } from "../user/User";

export type Ticket = {
  createdAt: Date;
  dateClosed: Date | null;
  dateCreated: Date | null;
  id: string;
  issue: string | null;
  priority?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
