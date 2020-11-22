import { combineReducers } from "redux";
import contacts from "./contacts";
import filter from "./filter";

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;