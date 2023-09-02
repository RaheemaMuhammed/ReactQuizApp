import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delScore,setHighScore } from '../Redux/ScoreSlice'
import { useNavigate } from 'react-router-dom'

const FinalPage = () => {
    const navigate=useNavigate()
    const score=useSelector(state=>state.ScoreReducer.score)
    const highScore = useSelector(state=>state.ScoreReducer.highScore)
    const dispatch = useDispatch()
    useEffect(() => {
        if(score> highScore){

            dispatch(setHighScore(score))
        }
      
    }, [score])
    
  return (
    <div>

    <div style={{height:'50vh'}} className='container-fluid d-flex justify-content-center align-items-end'>
        <div><h1>
            
            FinalScore :  {score}
            
            </h1>
            </div>


    </div>
    <div style={{height:'50vh'}} className='container-fluid d-flex justify-content-center align-items-start mt-5'>

<button  onClick={()=>{dispatch(delScore());navigate('/');}} role='button'>Home</button>
    </div>
    </div>
  )
}

export default FinalPage