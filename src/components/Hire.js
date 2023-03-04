import React from 'react'
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { teal } from '@mui/material/colors';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const Hire = () => {
  return (
    <div className='container p-20'>
        <h1 className='mt-5 mb-5' style={{textAlign:"center", fontSize:"60px", color: "black"}}>Our process</h1>
        <div className='iconContainer'>
          <div className='iconItem'><FindInPageIcon sx={{ fontSize: 80, color:teal[500] }}/><h3 style={{margin:"10px 0px 10px 0px"}}>Discover</h3><em className='str'>Explore curated opportunities best suited for you using our AI-powered Assistant</em></div>
          <div className='iconItem'><LocationSearchingIcon sx={{ fontSize: 80, color:teal[500] }}/><h3 style={{margin:"10px 0px 10px 0px"}}>Track</h3><em className='str'>Stay updated about the progress of your applications and receive feedback</em></div>
          <div className='iconItem'><InterpreterModeIcon sx={{ fontSize: 80, color:teal[500] }}/><h3 style={{margin:"10px 0px 10px 0px"}}>Interview</h3><em className='str'>Expect a guided interview process to help you prepare</em></div>
          <div className='iconItem'><BusinessCenterIcon sx={{ fontSize: 80, color:teal[500] }}/><h3 style={{margin:"10px 0px 10px 0px"}}>Accept offer</h3><em className='str'>Choose the most suited offer to celebrate the next leap in your career</em></div>
        </div>
    </div>
  )
}

export default Hire