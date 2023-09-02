import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delScoreNow, setScore } from '../Redux/ScoreSlice'
import { useNavigate } from 'react-router-dom'

const FinalPage = () => {
    const navigate=useNavigate()
    const thisScore=useSelector(state=>state.ScoreReducer.scoreNow)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setScore(thisScore))
      
    }, [thisScore])
    
  return (
    <div>
        <div>FinalPage  {thisScore}</div>
<button onClick={()=>{dispatch(delScoreNow());navigate('/');}}>Home</button>

    </div>
  )
}

export default FinalPage