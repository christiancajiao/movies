import { SEARCH_MOVIE } from "../actions/types";

export default function (state = "", action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return action.payload;
    default:
      return state;
  }
}
