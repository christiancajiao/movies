import { inicialState } from "./initialState";

export default (state = inicialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIELIST":
      return {
        movies: action.payload,
      };
    default:
      return state;
  }
};
