import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIELIST } from "../actions/types";
import { inicialState } from "./initialState";

export default function (state = inicialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case FETCH_MOVIELIST:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
}
