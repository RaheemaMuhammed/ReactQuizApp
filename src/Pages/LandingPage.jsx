import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LandingPage.css'
import { useSelector } from 'react-redux'

const LandingPage = () => {
    const navigate=useNavigate()
    const score =useSelector(state=>state.ScoreReducer.total)
    console.log(score);
  return (
    <div >
<div id='parent' className='container-fluid d-flex justify-content-center align-items-end '>
<p className='score'>Your Score : {score}</p>
</div>

<div className='start' onClick={()=>navigate('/quiz')}>
    Start
</div>

    </div>
  )
}

export default LandingPage