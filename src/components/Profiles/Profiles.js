import { Typography } from '@material-ui/core'
import React from 'react'
import { CustomTimeline } from '../CustomTimeline/CustomTimeline'
import './Profiles.css'
const Profiles = () => {
  return (
    <div className='profile'>
      <div className='profile_name'>
        <Typography className="Name">Yuthapong Khobkoon </Typography>
        <Typography className="Title">Project Manager</Typography>
      </div>

      <figure className="profile_img">
        <img src={process.env.PUBLIC_URL+'profileimg.jpg'} alt='something went worng'/>
      </figure>

      <div className='profile_information'>
        <CustomTimeline title=''></CustomTimeline>
        <button>For Download CV</button>
      </div>
    </div>
  )
}

export default Profiles
