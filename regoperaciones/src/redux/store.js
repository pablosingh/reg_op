// import { configureStore } from "reduxjs/toolkit";
import { createStore } from "redux";
import reducers from "./reducers";
import opReducer from "./opReducer";

const store = createStore(
    // reducers,
    opReducer,
);

export default store;