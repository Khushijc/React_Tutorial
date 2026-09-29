import {configureStore , createSlice} from "@reduxjs/toolkit"
import itemsSlice from "./ItemsSlice"
import fetchStatusSlice from "./FetchStatusSlice"
import bagSlice from "./bagSlice"

const myntraStore = configureStore({
    reducer:{
        items:itemsSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer
    }
})

export default myntraStore