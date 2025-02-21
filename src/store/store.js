import productReducer from "./Reducer/productsReducers";

import { combineReducers,createStore } from "redux";
let store = createStore(productReducer)

export default store