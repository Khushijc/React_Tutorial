import {createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice=createSlice({
    name:"fetchStatus",
    initialState:{
        fetchDone:false,
        CurrentlyFetching:false,
        
    },
    reducers:{
        markFetchDone:(state)=>{
            state.fetchDone=true;
        },
        markFetchingStarted:(state)=>{
            state.CurrentlyFetching=true;
        },
        markFetchingFinished:(state)=>{
            state.CurrentlyFetching=false;
        }
    }
})
export const fetchStatusActions=fetchStatusSlice.actions;

export default fetchStatusSlice;