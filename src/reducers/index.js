import { combineReducers } from "redux";
import deviceReducer from "./deviceReducer";
import heroReducer from "./heroReducer";

export default combineReducers({
  device: deviceReducer,
  hero: heroReducer
});
