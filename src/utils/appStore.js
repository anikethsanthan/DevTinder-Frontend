import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice"
import feedReducer from "./feedSlice"
import connnectionsReducer from "./connectionSlice"
import requestReducer from "./requestSlicce"


const appStore =configureStore({
    reducer:{
        user:useReducer,
        feed:feedReducer,
        connection:connnectionsReducer,
        requests:requestReducer
    }
})

export default appStore