import { combineReducers } from "redux";
import filme from './filme/reducer';

export default combineReducers({
    filmeReducer: filme
})