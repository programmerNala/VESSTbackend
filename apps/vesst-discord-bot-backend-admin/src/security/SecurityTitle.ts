import { Security as TSecurity } from "../api/security/Security";

export const SECURITY_TITLE_FIELD = "action";

export const SecurityTitle = (record: TSecurity): string => {
  return record.action?.toString() || String(record.id);
};
