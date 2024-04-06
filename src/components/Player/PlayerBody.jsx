import React from 'react'
import Header from './Header'
import './Player.css'
import { useDataLayerValue } from '../datalayer/DataLayer'
import { PlayCircleFilledRounded,FavoriteRounded,MoreHorizRounded } from '@mui/icons-material'
import SongRow from './SongRow'


function PlayerBody({spotify}) {
  const [{user,discover_weekly},dispatch]=useDataLayerValue();
  console.log(discover_weekly)
  return (
    <div className="Body">
      <Header spotify={spotify}/>
      <div className="body_info">
        <img src={user?.images[1]?.url} alt="" />
        <div className="body_infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledRounded className='body_shuffle'/>
          <FavoriteRounded  fontSize='large'/>
          <MoreHorizRounded />
        </div>
        <div className="tracks_list">
          {discover_weekly?.tracks.items.map((item) =>(
            <SongRow track={item.track} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default PlayerBody