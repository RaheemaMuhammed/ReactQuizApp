import { createSlice } from "@reduxjs/toolkit";

const ScoreSlice = createSlice({
    name:'score',
    initialState:{
        total:0,
        scoreNow:0
    },
    reducers:{
        setScore:(state,action)=>{
            state.total=state.total+action.payload
        },
        setScoreNow:(state,action)=>{
            state.scoreNow=state.scoreNow+1

        },
        delScoreNow:(state,action)=>{
            state.scoreNow=0
        }
    }
})

export const {setScore,setScoreNow,delScoreNow} =ScoreSlice.actions
export default ScoreSlice.reducer