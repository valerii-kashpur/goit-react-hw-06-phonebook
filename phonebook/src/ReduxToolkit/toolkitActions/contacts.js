import { ADD_ITEM, DELETE_ITEM, SET_ITEMS } from "../toolkitTypes";
import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction(ADD_ITEM)
export const deleteItem = createAction(DELETE_ITEM)
export const setItems = createAction(SET_ITEMS)

// export const addItem = (todoItem) => ({
//   type: ADD_ITEM,
//   payload: todoItem,
// });

// export const deleteItem = (id) => ({
//   type: DELETE_ITEM,
//   payload: id,
// });

// export const setItems = (array) => ({
//     type: SET_ITEMS,
//     payload: array,
//   });