import { ADD_ITEM, DELETE_ITEM, SET_ITEMS } from "../types";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((contact) => contact.id !== action.payload);
      case SET_ITEMS:
        return action.payload;
    default:
      return state;
  }
};