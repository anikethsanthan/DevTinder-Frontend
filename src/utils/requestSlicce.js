import { createSlice } from "@reduxjs/toolkit";


const requestSlice= createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequests:(state,actions)=>actions.payload,
        removeRequests:(state,actions)=>actions.payload,
    }
})

export const {addRequests,removeRequests}= requestSlice.actions;
export default requestSlice.reducer;