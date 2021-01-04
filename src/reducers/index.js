
import { combineReducers } from "redux";

import userReducer from "./gameDataReducer";



export default combineReducers({
  user: userReducer
});