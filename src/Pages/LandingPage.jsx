import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LandingPage.css'
import { useSelector } from 'react-redux'

const LandingPage = () => {
    const navigate=useNavigate()
    const highScore =useSelector(state=>state.ScoreReducer.highScore)
  return (
    <div >

        <h1 className='text-center mt-3' >Welcome to QuizReact</h1>
<div id='parent' className='container-fluid d-flex justify-content-center align-items-end '>
<p className='score'>High Score : {highScore}</p>
</div>

<div className='start' onClick={()=>navigate('/quiz')}>
    Start
</div>

    </div>
  )
}

export default LandingPage