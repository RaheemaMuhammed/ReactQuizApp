import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delScore,setHighScore } from '../Redux/ScoreSlice'
import { useNavigate } from 'react-router-dom'
import happy from '../assets/pictures/happy.jpeg'
import sad from '../assets/pictures/sad.jpeg'

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
    const myStyle={
        width: "18rem",

    }
  return (
    <div>
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className='container-fluid '>


            {score>=5? <img className="card-img-top" style={{height:150,width:"auto",paddingBottom:"10px"}} src={happy} alt="Card image cap"/>
            : <img className="rounded d-block" style={{height:150,width:"auto",paddingBottom:"10px"}} src={sad} alt="Card image cap"/>}
        <div className="card shadow text-center "  style={myStyle}>
    <h3 className="card-title mt-3 px-1">{score>=5?"Yayy...Congratulations!!":"Hmm...You need to practice more..!!"}</h3>
 
  <div className="card-body ">
    <h5 className="font-weight-bold">Your Score : {score}</h5>
<button  onClick={()=>{dispatch(delScore());navigate('/');}} role='button' className='btn mt-2'>Take another Quiz</button>

  </div>
</div>
            


    </div>
    <div style={{height:'50vh'}} className='container-fluid d-flex justify-content-center align-items-start mt-5'>
{/* <button  onClick={()=>{dispatch(delScore());navigate('/');}} role='button' className='btn'>Home</button> */}

    </div>
    </div>
  )
}

export default FinalPage