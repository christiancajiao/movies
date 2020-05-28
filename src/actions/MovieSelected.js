import { MOVIE_SELECTED } from "./types";
import axios from "axios";

export const movieSelected = (id) => (dispatch) => {
  axios
    .get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    )
    .then((response) =>
      dispatch({
        type: MOVIE_SELECTED,
        payload: response.data.data.movie,
      })
    )
    .catch((err) => console.log(err));
};
