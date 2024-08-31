import { JsonValue } from "type-fest";
import { Security } from "../security/Security";
import { Slot } from "../slot/Slot";
import { Ticket } from "../ticket/Ticket";
import { Vouch } from "../vouch/Vouch";

export type User = {
  createdAt: Date;
  discordId: string | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  reputation: number | null;
  roles: JsonValue;
  securities?: Array<Security>;
  slots?: Array<Slot>;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  username: string;
  vouches?: Array<Vouch>;
};
