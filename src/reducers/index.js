import { combineReducers } from "redux";
import authenReducer from "./authen"
 const allReducers = combineReducers({
    authenReducer,
})
export default allReducers;