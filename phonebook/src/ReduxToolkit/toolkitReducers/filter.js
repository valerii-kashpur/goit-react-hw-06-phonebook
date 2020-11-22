import { EDIT_FILTER } from "../toolkitTypes";
import { createReducer } from "@reduxjs/toolkit";

const initialState = "";

export default createReducer(initialState, {
  [EDIT_FILTER]: (state, action) => action.payload,
});

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case EDIT_FILTER:
//       return action.payload;
//     default:
//       return state;
//   }
// };
