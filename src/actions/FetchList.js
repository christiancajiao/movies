import { FETCH_LIST } from "./types";
import axios from "axios";

export const fetchList = () => (dispatch) => {
  axios
    .get(`https://yts.mx/api/v2/list_movies.json`)
    .then((response) =>
      dispatch({
        type: FETCH_LIST,
        payload: response.config.url,
      })
    )
    .catch((err) => console.log(err));
};
