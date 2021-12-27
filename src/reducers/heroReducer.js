import { GETHEROES, GETHEROINFO } from "../Types";

const initialState = {
  heroes: [],
  heroInfo: "",
  comics: [], 
  thumbnail: [],
  url: ""
};

export default function heroReducer(state = initialState, action) {
  switch (action.type) {
    case GETHEROES:
      return {
        ...state,
        heroes: action.payload
      };
      break;
    
    case GETHEROINFO:
      return {
        ...state,
        heroInfo: action.payload.name,
        comics: action.payload.comics.items.map((item) => item.name),
        thumbnail: [
          action.payload.thumbnail.path,
          action.payload.thumbnail.extension,
        ],
        url: action.payload.urls[0].url,
      };  
    default:
      return state;
  }
}
