import {LOGIN, LOGINERROR, LOGOUT, CLEANERROR, GETDEVICES, LOADMORE} from "../Types"; 


const initialState2 = {
  logged: false,
  userData: {},
  devices: []
};

const initialState = localStorage.getItem("user") ? JSON.parse(localStorage.getItem('user')) : initialState2


export default function deviceReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
        userData: action.payload,
      };
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
    case GETDEVICES:
      return {
        ...state,
        devices: action.payload
      }
    case LOADMORE: 
      return {
        ...state,
        devices: [...state.devices , ...action.payload]
      }
    default:
      return state;
  }
}
