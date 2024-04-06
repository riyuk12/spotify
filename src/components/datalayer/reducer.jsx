export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:null
}

const reducer =(state,action)=>{
    //for debugging
    console.log(action)
    //main if else

    //action ->type,[payload]
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,
            }
        case 'TOGGLE_PLAY':
            return{
                ...state,
                playing:action.playing
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state;
    }

}

export default reducer;


//reducer changes the state as per action (basically if else for state data mgmt)

//return (...state<this puts older value>, <update value>)