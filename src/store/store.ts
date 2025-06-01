import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { employeeReducer } from "./employee/employeeReducer";
// import { createStore } from 'redux'
import logger from "redux-logger";

export type RootState = ReturnType<typeof employeeReducer>

const store = createStore(employeeReducer,undefined,applyMiddleware(logger));

export default store;