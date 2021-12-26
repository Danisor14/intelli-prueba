import { GETHEROES } from "../Types";

const initialState = {
  heroes: []
};

export default function heroReducer(state = initialState, action) {
  switch (action.type) {
    case GETHEROES:
      return {
        ...state,
        heroes: action.payload
      };
      break;
    default:
      return state;
  }
}
