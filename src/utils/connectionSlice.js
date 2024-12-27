import {  createSlice } from "@reduxjs/toolkit";



const connectionSlice=createSlice({
    name:"connection",
    initialState:[],
    reducers:{
        addConnections:(state,actions)=>{
            return actions.payload
        },
        removeConnections:()=>null
    }
})

export const {addConnections,removeConnections}= connectionSlice.actions
export default connectionSlice.reducer;