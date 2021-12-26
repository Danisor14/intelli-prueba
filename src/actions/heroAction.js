import axios from "axios";
import { GETHEROES } from "../Types";

export function getHeroes() {
  return async (dispatch) => {
    const url = "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=15&ts=1&apikey=c4aedd0b064821e9f566355f0415b871&hash=f4314842e631d4dfaa172f605c964ccb";

    try {
      let response = await axios.get(url);

      dispatch({
        type: GETHEROES,
        payload: response.data.data.results,
      }); 

    } catch (error) {
      console.log(error);
    }
  };
}