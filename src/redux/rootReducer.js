import { combineReducers } from "redux";
import filtersReducer from "./filtersReducer";
import sortingReducer from "./sortingReducer";


export default combineReducers({
  filters: filtersReducer,
  sorting: sortingReducer,
})