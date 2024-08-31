import { User } from "../user/User";

export type Vouch = {
  badge: string | null;
  category: string | null;
  challenge: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
  vouchText: string | null;
};
