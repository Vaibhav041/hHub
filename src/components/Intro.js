import React from 'react'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate('/explore');
  }
  return (
    <div className='intro' style={{width:"100%", height:"720px"}}>
        <div className='text'>
            <h1>Find your dream job with Hiring Hub</h1>
            <button onClick={handleClick} className='btn btn-lg mt-5'>Explore Jobs</button>
        </div>
    </div>
  )
}

export default Intro