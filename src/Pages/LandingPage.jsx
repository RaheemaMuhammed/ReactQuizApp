import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <div >
<div id='parent' className='container-fluid d-flex justify-content-center align-items-end '>
<p className='score'>Your Score : 0</p>
</div>
<Link to='/quiz'>
<div className='start'>
    Start
</div>
</Link>
    </div>
  )
}

export default LandingPage