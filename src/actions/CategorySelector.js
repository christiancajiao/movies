import { UPDATE_MOVIES } from "./types";
import axios from "axios";

export const fetchCategory = (category) => (dispatch) => {
  axios
    .get(`https://yts.mx/api/v2/list_movies.json?genre=${category}`)
    .then((response) =>
      dispatch({
        type: UPDATE_MOVIES,
        payload: response.data.data.movies,
      })
    )
    .catch((err) => console.log(err));
};
