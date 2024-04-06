//currently at 3:40:00

import { useEffect, useState } from 'react'
import SpotifyWebApi from "spotify-web-api-js"
import Login from './components/Login/Login'
import { getTokenFromUrl } from './components/Apis/spotify';
import Player from './components/Player/Player';
import { useDataLayerValue } from './components/datalayer/DataLayer';

//control interface
const spotify = new SpotifyWebApi();


function App() {

  //const [token,setToken]=useState(null)
  const [{user,token,playlists},dispatch]=useDataLayerValue();
  // usedatalayer is a usecontext component
  //similar to use state you have [value<object>,setter function]=use context elem ie usedatalayer



  useEffect(()=>{
    const _token=getTokenFromUrl();
    window.location.hash="";
    console.log(_token)
    if(_token){
      //setToken(_token.access_token);
      dispatch({
        type:'SET_TOKEN',
        token:_token.access_token})

      //set access token to interface
      spotify.setAccessToken(_token.access_token);
      spotify.getMe().then((user)=>{
        console.log(user)
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists
        })
      })
      spotify.getPlaylist('37i9dQZEVXcWf9hk2Z95mu').then((res)=>{
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly:res,
        })
      })
    }
  },[]);

  console.log(user);
  console.log(token);
  console.log(playlists);

  return (
    <>
    
      {token?
      <Player spotify={spotify}/>
      :
      <Login/>}
      
    </>
  )
}

export default App
