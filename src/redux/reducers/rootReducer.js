import { combineReducers, createStore } from "redux";
import { testReducer } from "./testReducer";

const rootReducer = combineReducers({
    testReducer
})

export const store = createStore(rootReducer)