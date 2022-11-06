import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initialState = {};

const middleware = [thunk];

export const store = configureStore({
	reducer: {},
});
