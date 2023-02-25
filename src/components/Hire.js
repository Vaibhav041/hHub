import React from 'react'
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { teal } from '@mui/material/colors';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const Hire = () => {
  return (
    <div className='container p-20'>
        <h1 className='mt-70' style={{textAlign:"center"}}>Our process</h1>
        <div className='iconContainer'>
          <div className='iconItem'><FindInPageIcon sx={{ fontSize: 80, color:teal[500] }}/><h3>Discover</h3><strong>Explore curated opportunities best suited for you using our AI-powered Assistant</strong></div>
          <div className='iconItem'><LocationSearchingIcon sx={{ fontSize: 80, color:teal[500] }}/><h3>Track</h3><strong>Explore curated opportunities best suited for you using our AI-powered Assistant</strong></div>
          <div className='iconItem'><InterpreterModeIcon sx={{ fontSize: 80, color:teal[500] }}/><h3>Interview</h3><strong>Explore curated opportunities best suited for you using our AI-powered Assistant</strong></div>
          <div className='iconItem'><BusinessCenterIcon sx={{ fontSize: 80, color:teal[500] }}/><h3>Accept offer</h3><strong>Explore curated opportunities best suited for you using our AI-powered Assistant</strong></div>
        </div>

    </div>
  )
}

export default Hire