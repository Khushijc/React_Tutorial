import {configureStore, createSlice} from "@reduxjs/toolkit";

// const INITIAL_VALUE = {
//     counter: 5
// };

const counterSlice=createSlice({
    name:"counter",
    initialState:{counterVal:10},
    reducers:{
        increment:(state)=>{
            state.counterVal++;
        },
        decrement:(state)=>{
            state.counterVal--;
        },
        add:(state,action)=>{
            state.counterVal+=Number(action.payload);
        },
        sub:(state,action)=>{
            state.counterVal-=Number(action.payload);
        }   

    }
})

// const counterReducer=(store=INITIAL_VALUE,action)=>{
//     if(action.type==="INCREMENT"){
//         return {counter:store.counter+1};
//     }else if(action.type==="DECREMENT"){
//         return {counter:store.counter-1};
//     }else if(action.type==="ADD"){
//         return {counter:store.counter+Number(action.payload.num)};
//     }
//     else if(action.type==="SUB"){
//         return {counter:store.counter-Number(action.payload.num)};
//     }
//     return store
// }

const counterStore= configureStore({reducer:{
    counter:counterSlice.reducer,
}});

export const counterAction=counterSlice.actions;
export default counterStore;