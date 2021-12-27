import {LOGIN, LOGINERROR, LOGOUT, CLEANERROR} from "../Types"; 


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
    case LOGINERROR:
      return {
        ...state,
        error: action.payload
      }
    case CLEANERROR: 
      return {
        ...state,
        error: null
      }
    default:
      return state;
  }
}
