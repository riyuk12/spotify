import React from 'react'
import SidebarOptions from './SidebarOptions'
import {HomeRounded,SearchRounded,LibraryMusicRounded} from '@mui/icons-material'
import { useDataLayerValue } from '../datalayer/DataLayer'

function Sidebar() {
  const [{playlists},dispatch]=useDataLayerValue()
  return (
    <div className="Side_bar">
      <img className='Sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
      
      <div className="navigation">
        <SidebarOptions text="Home" Icon={HomeRounded}/>
        <SidebarOptions text="Search" Icon={SearchRounded}/>
        <SidebarOptions text="Your Library" Icon={LibraryMusicRounded}/>
      </div>
      <strong className='Sidebar_title'> PLAYLISTS</strong>
      <hr/>
      <div className="playlists">
        {
          playlists?.items?.map((elem)=>{
            return (<SidebarOptions text={elem.name} />)
          })
        }
      </div>
    </div>
  )
}

export default Sidebar