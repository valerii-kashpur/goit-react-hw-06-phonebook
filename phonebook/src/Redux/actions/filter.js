import { EDIT_FILTER } from "../types";

export const editFilter = (text) => ({
  type: EDIT_FILTER,
  payload: text
});
