import { Entertainment as TEntertainment } from "../api/entertainment/Entertainment";

export const ENTERTAINMENT_TITLE_FIELD = "name";

export const EntertainmentTitle = (record: TEntertainment): string => {
  return record.name?.toString() || String(record.id);
};
