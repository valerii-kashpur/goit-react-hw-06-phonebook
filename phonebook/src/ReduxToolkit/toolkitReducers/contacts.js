import { ADD_ITEM, DELETE_ITEM, SET_ITEMS } from "../toolkitTypes";
import { createReducer } from "@reduxjs/toolkit";
const initialState = [];

export default createReducer(initialState, {
  [ADD_ITEM]: (state, action) => [...state, action.payload],
  [DELETE_ITEM]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [SET_ITEMS]: (state, action) => action.payload,
});
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ITEM:
//       return [...state, action.payload];
//     case DELETE_ITEM:
//       return state.filter((contact) => contact.id !== action.payload);
//     case SET_ITEMS:
//       return action.payload;
//     default:
//       return state;
//   }
