/* eslint-disable import/prefer-default-export */
import { combineReducers } from "redux";
import { filtersReducer } from "./filtersReducer";
import { sortingReducer } from "./sortingReducer";


export const rootReducer = combineReducers({
  filters: filtersReducer,
  sorting: sortingReducer,
})