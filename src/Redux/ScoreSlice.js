import { createSlice } from "@reduxjs/toolkit";

const ScoreSlice = createSlice({
    name:'score',
    initialState:{
        total:0
    },
    reducers:{
        setScore:(state,action)=>{
            state.total=action.payload.total
        }
    }
})

export const {setScore} =ScoreSlice.actions
export default ScoreSlice.reducer