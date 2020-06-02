import { UPDATE_MOVIES } from "../actions/types";
import { PAGE_NEXT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_MOVIES:
      return action.payload;
    case PAGE_NEXT:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
