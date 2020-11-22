import { ADD_ITEM, DELETE_ITEM, SET_ITEMS } from "../types";

export const addItem = (todoItem) => ({
  type: ADD_ITEM,
  payload: todoItem,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const setItems = (arra) => ({
    type: SET_ITEMS,
    payload: arra,
  });