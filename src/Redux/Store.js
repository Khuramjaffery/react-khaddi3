import { createStore } from "redux";
import { RootReducer } from "./CombineReducer";

const Store=createStore(RootReducer);



export default Store