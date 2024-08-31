import { Embed as TEmbed } from "../api/embed/Embed";

export const EMBED_TITLE_FIELD = "title";

export const EmbedTitle = (record: TEmbed): string => {
  return record.title?.toString() || String(record.id);
};
