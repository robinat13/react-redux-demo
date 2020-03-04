import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer,
  isLoggedReducer
});

export default rootReducer;
