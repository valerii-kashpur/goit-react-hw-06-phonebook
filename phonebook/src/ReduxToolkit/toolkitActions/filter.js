import { EDIT_FILTER } from "../toolkitTypes";
import { createAction } from '@reduxjs/toolkit';

export const editFilter = createAction(EDIT_FILTER)

// export const editFilter = (text) => ({
//   type: EDIT_FILTER,
//   payload: text
// });
