import { createSlice } from "@reduxjs/toolkit";


const requestSlice= createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addRequests:(state,action)=>action.payload ,
        removeRequest:(state,action)=>{
            const newFeed= state.filter((user)=>user._id!==action.payload);
            return newFeed;
        },
    }
})

export const {addRequests,removeRequest}= requestSlice.actions;
export default requestSlice.reducer;