import React from 'react'
import {
  PlayArrowRounded,
  ShuffleRounded,
  SkipPreviousRounded,
  SkipNextRounded,
  RepeatOnOutlined,
  PauseRounded,
  PlaylistPlayRounded  ,
  VolumeDownRounded
} from '@mui/icons-material'

import { Grid,Slider } from '@mui/material'

function Footer() {

  

  return (
    <div className="Footer">
        <div className="footer_container">

          <div className="footer_left" >
              <img src="#" alt="" className='footer_albumLogo'/>
              <div className="footer_songInfo">
                <h4>yeah!</h4>
                <p>Usher</p>
              </div>
          </div>


          <div className="footer_center">
              <ShuffleRounded className='control_icons'/>
              <SkipPreviousRounded  className='control_icons'/>
              
              <PlayArrowRounded className='control_icons' />

              <SkipNextRounded  className='control_icons'/>
              <RepeatOnOutlined  className='control_icons'/>
          </div>

          <div className="footer_right">
            <Grid container spacing={2}>
              <Grid item>
                <PlaylistPlayRounded className='control_icons'/>
              </Grid>
              <Grid item>
                <VolumeDownRounded className='control_icons'/>
              </Grid>
              <Grid item xs>
                <Slider aria-labelledby="continuous-slider" className='control_icons'/>
              </Grid>
            </Grid>
          </div>
        
        </div>
      
    </div>
  )
}

export default Footer