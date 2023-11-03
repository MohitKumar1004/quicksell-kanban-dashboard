import reducer from "./optionReducer";
import { combineReducers } from "redux";

const combinedReducer= combineReducers({
    data: reducer
})

export default combinedReducer