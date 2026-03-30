import { createSlice } from "@reduxjs/toolkit";

const dataslice = createSlice({
    name:'search',
    initialState:{
        query:'',
        currentTab:'Photo',
        result:[],
        loading:false,
        error:null,
    },
    reducers:{
        setQuery(state,action){
          state.query = action.payload
        },
        setCurrentTab(state,action){
            state.currentTab = action.payload
        },
        setResult(state,action){
          state.result = action.payload
        },
        setLoading(state,action){
            state.loading = action.payload
        },
        setError(state,action){
            state.error = action.payload
        }

    }
})

export const {setQuery,setCurrentTab,setResult,setLoading,setError} = dataslice.actions
export default dataslice.reducer