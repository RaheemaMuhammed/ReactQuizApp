import { createSlice } from "@reduxjs/toolkit";

const ScoreSlice = createSlice({
    name:'score',
    initialState:{
        highScore:0,
        score:0
    },
    reducers:{
        setHighScore:(state,action)=>{
            state.highScore=action.payload
        },
        setScore:(state,action)=>{
            state.score=state.score+1

        },
        delScore:(state,action)=>{
            state.score=0
        }
    }
})

export const {setHighScore,setScore,delScore} =ScoreSlice.actions
export default ScoreSlice.reducer