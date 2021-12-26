import {LOGIN, LOGOUT} from "../Types"; 


const initialState2 = {
    logged: false,
    userData: {}
}

const initialState = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : initialState2


export default function deviceReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
        userData: action.payload,
      };
      break;
    case LOGOUT:
      return {
          ...state,
          logged: false,
          userData: {}
      }
    default:
      return state;
  }
}
