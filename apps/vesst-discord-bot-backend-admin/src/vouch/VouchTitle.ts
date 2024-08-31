import { Vouch as TVouch } from "../api/vouch/Vouch";

export const VOUCH_TITLE_FIELD = "badge";

export const VouchTitle = (record: TVouch): string => {
  return record.badge?.toString() || String(record.id);
};
