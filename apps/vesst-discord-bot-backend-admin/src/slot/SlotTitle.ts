import { Slot as TSlot } from "../api/slot/Slot";

export const SLOT_TITLE_FIELD = "name";

export const SlotTitle = (record: TSlot): string => {
  return record.name?.toString() || String(record.id);
};
