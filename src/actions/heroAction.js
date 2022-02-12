import axios from "axios";
import { GETHEROES, GETHEROINFO } from "../Types";

let offsetUrl = -15

export function getHeroes() {  
  offsetUrl += 15

  return async (dispatch) => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=15&offset=${offsetUrl}&ts=1&apikey=c4aedd0b064821e9f566355f0415b871&hash=f4314842e631d4dfaa172f605c964ccb`;

    try {
      let response = await axios.get(url);

      dispatch({
        type: GETHEROES,
        payload: {
         results: response.data.data.results,
         offset: response.data.data.offset
        } 
      }); 

    } catch (error) {
      console.log(error);
    }
  };
}

export function getHeroInfo(info) {
  return (dispatch) => {
      dispatch({
        type: GETHEROINFO,
        payload: info,
      });
  }
}