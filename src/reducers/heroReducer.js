import { GETHEROES, GETHEROINFO } from "../Types";

const initialState = {
  heroes: [],
  heroInfo: "",
  comics: [], 
  thumbnail: [],
  offset: 0,
  url: ""
};

export default function heroReducer(state = initialState, action) {
  switch (action.type) {
    case GETHEROES:
      return {
        ...state,
        heroes: [...state.heroes, ...action.payload.results],
        offset: action.payload.offset,
      };
    
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
