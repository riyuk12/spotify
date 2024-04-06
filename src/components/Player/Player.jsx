import React from 'react'
import './Player.css'
import Sidebar from './Sidebar.jsx'
import PlayerBody from './PlayerBody.jsx'
import Footer from './Footer.jsx'


function Player({spotify}) {
  return (
    <>
    <div className="player">
      <div className="player_body">
        <Sidebar/>
        <PlayerBody spotify={spotify}/>
      </div>

      <Footer/>
    </div>
        
    </>
  )
}

export default Player