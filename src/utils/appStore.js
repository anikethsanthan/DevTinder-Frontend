import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice"
import feedReducer from "./feedSlice"
import connnectionsReducer from "./connectionSlice"


const appStore =configureStore({
    reducer:{
        user:useReducer,
        feed:feedReducer,
        connection:connnectionsReducer
    }
})

export default appStore