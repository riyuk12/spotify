import React from 'react'
import './Player.css'

import { SearchRounded } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from '../datalayer/DataLayer'

function Header({spotify}) {
    const[{user},dispatch]=useDataLayerValue();
    console.log(user)
  return (
    <div className="header">
        <div className="header_left">
            <SearchRounded />
            <input placeholder='Search for Artists, Songs' 
            type="text" />

        </div>
        <div className="header_right">
            <Avatar src={user?.images[0]?.url} alt='profile picture'/>
            <h4>{user?.display_name}</h4>

        </div>
    </div>
  )
}

export default Header