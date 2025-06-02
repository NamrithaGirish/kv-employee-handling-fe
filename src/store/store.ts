import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { employeeReducer, employeeSlice } from "./employee/employeeReducer";
// import { createStore } from 'redux'
import logger from "redux-logger";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { baseApi } from "../api-service/api";
import { setupListeners } from "@reduxjs/toolkit/query";

// export type RootState = ReturnType<typeof employeeReducer>

// const store = createStore(employeeReducer,undefined,applyMiddleware(logger));
const store = configureStore({
    reducer:{
        employee :employeeSlice.reducer,
        [baseApi.reducerPath]:baseApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(baseApi.middleware)
    }
})
setupListeners(store.dispatch)
export default store;
	
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
 
export const useAppDispatch = useDispatch<AppDispatch>
export const useAppSelector = useSelector<RootState, any>